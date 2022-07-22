from asyncio import transports
from xml.sax.saxutils import prepare_input_source
from django.urls import reverse
from numpy import datetime_data
from requests import request
from bus.models import Transport
from customadmin.forms.addbus_form import AddbusCreationForm
from customadmin.forms.addbus_form import AddbusUpdateForm
from customadmin.mixins import HasPermissionsMixin
from customadmin.views.generic import (
    MyCreateView,
    MyDeleteView,
    MyListView,
    MyDetailView,
    MyLoginRequiredView,
    MyUpdateView,
)
from django.contrib.auth.forms import AdminPasswordChangeForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q
from django.http import HttpResponse
from django.template.loader import get_template
from django.views.generic import TemplateView, DetailView
from django_datatables_too.mixins import DataTableMixin
from django.contrib.auth.models import User
from ..forms import UserChangeForm, UserCreationForm
from django.shortcuts import redirect, reverse, render

from django.contrib.auth.models import User
from datetime import datetime
class IndexView(LoginRequiredMixin,TemplateView):

    template_name = "customadmin/index.html"
    context = {}

    def get(self, request):
        self.context['user_count']=User.objects.all().exclude(is_staff=True).count()
        return render(request, self.template_name, self.context)
    
class Monthgraph(LoginRequiredMixin,TemplateView):
    template_name = "customadmin/monthlygraph.html"
    context = {} 
    def get(self, request):
        self.context['user_count']=User.objects.all().exclude(is_staff=True).count()
        print("``````````````",self.context['user_count'])
        return render(request, self.template_name, self.context)
    def post(self,request):
        month=request.POST['month']
        m=int(month)
        year=request.POST['year']
        list=[]
        
        q=Transport.objects.filter(date_time_dpt__year=year) 
        for i in q:
            data=i.date_time_dpt.month
            if data is m:
                list.append(i)
        total_list=len(list)

        return render(request,'customadmin/monthlygraph.html',{'year':year,'listtotal':total_list,'month':month})
class Dategraph(LoginRequiredMixin,TemplateView):
    template_name = "customadmin/date_to_date_graph.html"
    context = {} 
    def get(self, request):
        self.context['user_count']=User.objects.all().exclude(is_staff=True).count()

        return render(request, self.template_name, self.context)
    def post(self,request):
        date=request.POST['date']

        month=request.POST['month']

        year=request.POST['year']
        print(type(date),type(year),type(month),"###############")
   
        list=[]
        full_date = year + "-" + month + "-" + date
        q=Transport.objects.filter(date_time_dpt__range=[full_date, full_date])
        for i in q:
            list.append(i)
        total_list=len(list)

        return render(request,'customadmin/date_to_date_graph.html',{'year':year,'date':date,'listtotal':total_list,'month':month})

class Yeargraph(LoginRequiredMixin,TemplateView):
    template_name = "customadmin/year_graph.html"
    context = {} 
    def get(self, request):
        self.context['user_count']=User.objects.all().exclude(is_staff=True).count()

        return render(request, self.template_name, self.context)
    def post(self,request):
        year=request.POST['year']
        y=int(year)
        transport=Transport.objects.filter(date_time_dpt__year=year)
        list=[]
        for i in transport:
            list.append(i)
        total_list=len(list)
        return render(request,'customadmin/year_graph.html',{'year':y,'listtotal':total_list})



        


class UserListView(MyListView):
    model = User
    template_name = 'customadmin/adminuser/user_list.html'
    ordering = ["id"]

    def get_queryset(self):
        return self.model.objects.filter(is_staff=False)
    

    # def get_queryset(self):
    #     return render(request,self.template_name)


class UserCreateView(MyCreateView):
    model = User
    form_class = UserCreationForm
    template_name = 'customadmin/adminuser/user_form.html'

    def get_form_kwargs(self) :
        print("**********************")
        print(super().get_form_kwargs)
        return super().get_form_kwargs()
    
    def get_success_url(self):
        return reverse("customadmin:user-list")


class UserDetailView(MyDetailView):
    template_name = "customadmin/adminuser/user_detail.html"
    context = {}

    def get(self, request, pk):
        self.context['user_detail'] = User.objects.filter(pk=pk).first()
        return render(request, self.template_name, self.context)


class UserUpdateView(MyUpdateView):
    model = User
    form_class = UserChangeForm
    template_name = 'customadmin/adminuser/user_form_update.html'

    def get_success_url(self):
        return reverse("customadmin:user-list")


class UserDeleteView(MyDeleteView):
    model = User
    template_name = 'customadmin/confirm_delete.html'

    def get_success_url(self):
        return reverse("customadmin:user-list")


class UserAjaxPagination(DataTableMixin, HasPermissionsMixin, MyLoginRequiredView):
    """Built this before realizing there is
    https://bitbucket.org/pigletto/django-datatables-view."""

    model = User
    queryset = User.objects.all().order_by("last_name")

    def _get_is_superuser(self, obj):
        """Get boolean column markup."""
        t = get_template("customadmin/partials/list_boolean.html")
        return t.render({"bool_val": obj.is_superuser})

    def _get_actions(self, obj, **kwargs):
        """Get actions column markup."""
        # ctx = super().get_context_data(**kwargs)
        t = get_template("customadmin/partials/list_basic_actions.html")
        # ctx.update({"obj": obj})
        # print(ctx)
        return t.render({"o": obj})

    def filter_queryset(self, qs):
        """Return the list of items for this view."""
        # If a search term, filter the query
        if self.search:
            return qs.filter(
                Q(username__icontains=self.search)
                | Q(first_name__icontains=self.search)
                | Q(last_name__icontains=self.search)
                # | Q(state__icontains=self.search)
                # | Q(year__icontains=self.search)
            )
        return qs

    def prepare_results(self, qs):
        # Create row data for datatables
        data = []
        for o in qs:
            data.append(
                {
                    "username": o.username,
                    "first_name": o.first_name,
                    "last_name": o.last_name,
                    "is_superuser": self._get_is_superuser(o),
                    # "modified": o.modified.strftime("%b. %d, %Y, %I:%M %p"),
                    "actions": self._get_actions(o),
                }
            )
        return data

    """Built this before realizing there is
    https://bitbucket.org/pigletto/django-datatables-view."""


    def _get_is_superuser(self, obj):
        """Get boolean column markup."""
        t = get_template("customadmin/partials/list_boolean.html")
        return t.render({"bool_val": obj.is_superuser})

    def _get_actions(self, obj, **kwargs):
        """Get actions column markup."""
        # ctx = super().get_context_data(**kwargs)
        t = get_template("customadmin/partials/list_basic_actions.html")
        # ctx.update({"obj": obj})
        # print(ctx)
        return t.render({"o": obj})

    def filter_queryset(self, qs):
        """Return the list of items for this view."""
        # If a search term, filter the query
        if self.search:
            return qs.filter(
                Q(username__icontains=self.search)
                | Q(first_name__icontains=self.search)
                | Q(last_name__icontains=self.search)
                # | Q(state__icontains=self.search)
                # | Q(year__icontains=self.search)
            )
        return qs

    def prepare_results(self, qs):
        # Create row data for datatables
        data = []
        for o in qs:
            data.append(
                {
                    "username": o.username,
                    "first_name": o.first_name,
                    "last_name": o.last_name,
                    "is_superuser": self._get_is_superuser(o),
                    # "modified": o.modified.strftime("%b. %d, %Y, %I:%M %p"),
                    "actions": self._get_actions(o),
                }
            )
        return data