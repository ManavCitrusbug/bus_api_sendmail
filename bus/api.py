from multiprocessing import context
from bus.serializers import Bookedbusserializer, Registerserializer,Loginserializer

from rest_framework.generics import ListCreateAPIView,DestroyAPIView,ListAPIView
from .models import *
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User, auth
from django.contrib.auth.hashers import check_password


class LoginApi(APIView):
    permission_classes=[AllowAny]
    def post(self,request,format=None):
        username=request.data['username']
        password=request.data['password']
     
        if User.objects.filter(username=username).exists():
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
                token=Token.objects.get_or_create(user=request.user)
                token[0].save()
                return Response({"username":user.username,"token":token[0].key})
            else:
                return Response('Invalid input')
        else:
            return Response('User not found')
    
class Logoutapi(APIView):
    permission_classes=[AllowAny]
    
    def get(self, request):
        username=request.data['username']
        user=User.objects.get(username=username)
        try:
            Token.objects.get(user=user).delete()
        except:
            return Response('user already logged out')
        auth.logout(request)
        return Response('logout done')

class Registerapi(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class=Registerserializer
    permission_classes=[AllowAny]

class Bookbusapi(ListCreateAPIView):
    queryset = Booked_bus.objects.all()
    serializer_class=Bookedbusserializer
 

class Cancleticketapi(DestroyAPIView):
    queryset = Booked_bus.objects.all()
    serializer_class=Bookedbusserializer
   