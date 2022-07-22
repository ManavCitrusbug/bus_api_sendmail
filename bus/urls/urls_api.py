from django.contrib import admin
from django.urls import path,include
from bus import views
from bus import api
# from bus.views import Logout
app_name='bus'  
urlpatterns = [
    path('loginapi/',api.LoginApi.as_view(),name="loginapi"),
    path('cancleticketapi/<int:pk>/',api.Cancleticketapi.as_view(),name='cancleticketapi'),
    path('registerapi/',api.Registerapi.as_view(),name='registerapi'),
    path('bookbusapi/',api.Bookbusapi.as_view(),name='bookbusapi'),
    path('logoutapi/',api.Logoutapi.as_view(),name='logoutapi'),
    

]