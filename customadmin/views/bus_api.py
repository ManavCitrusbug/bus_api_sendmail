from django.http import JsonResponse
from rest_framework.generics import RetrieveUpdateDestroyAPIView,ListCreateAPIView,ListAPIView,DestroyAPIView
from bus.serializers import Bookedbusserializer, Categoryserializer, Journeyserializer, Transportserializer,CustomJourneySerializer,Addbusbyrootserialiazer
from bus.models import Booked_bus, Category, Journey, Transport
from rest_framework.authentication import TokenAuthentication
from rest_framework.filters import SearchFilter
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 10000

class Bussearchfilterapi(ListAPIView):
    queryset=Transport.objects.all()
    serializer_class=Transportserializer
    filter_backends=[SearchFilter]
    search_fields=['date_time_dpt']
    pagination_class=PageNumberPagination
    permission_classes=[AllowAny]

class JourneytransportApi(ListAPIView):
    # queryset = Transport.objects.all()
    permission_classes=[AllowAny]
    pagination_class=PageNumberPagination


    
    def get(self,request,format=None):
        # date=request.POST["date"]
        allbus=Transport.objects.all()
        
        list_dates = []
        list_data=[]
        for i in allbus:
            if i.date_time_dpt in list_dates:
                continue
            list_dates.append(i.date_time_dpt)
            journey=Journey.objects.filter(transport__date_time_dpt=i.date_time_dpt)
            data = {"date":i.date_time_dpt, "journey":journey}
            
            serializer=CustomJourneySerializer(data)
            list_data.append(serializer.data)

        return Response(list_data)
                       
class Addbusbyroot(ListCreateAPIView):  
    queryset=Transport.objects.all()
    
    serializer_class=Addbusbyrootserialiazer   
    permission_classes=[AllowAny]

        

class Addbusapi(ListCreateAPIView):
    queryset=Transport.objects.all()
    serializer_class=Transportserializer

    

class Busupdatedeleteapi(RetrieveUpdateDestroyAPIView):
    queryset=Transport.objects.all()
    serializer_class=Transportserializer
    

    
class Pessengerlistapi(ListAPIView):
    queryset=Booked_bus.objects.all()
    serializer_class=Bookedbusserializer
    


class Deletecategoryapi(DestroyAPIView):
    queryset=Category.objects.all()
    serializer_class=Categoryserializer
    


class Categorylistapi(ListAPIView):
    queryset=Category.objects.all()
    serializer_class=Categoryserializer
    


class Journeylistapi(ListCreateAPIView):
    queryset=Journey.objects.all()
    serializer_class=Journeyserializer
    permission_classes=[AllowAny]
    

    
class Journeyupdatedeletapi(RetrieveUpdateDestroyAPIView):
    queryset=Journey.objects.all()
    serializer_class=Journeyserializer
    
