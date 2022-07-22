from unicodedata import name
from django.urls import path

from bus import api

from . import views

app_name='customadminapi'  

urlpatterns = [
    path('addbusapi/',views.Addbusapi.as_view(),name='addbusapi'),
    path('busupdatedeleteapi/<int:pk>/',views.Busupdatedeleteapi.as_view(),name='busupdatedeleteapi'),
    path('pessengerlistapi/',views.Pessengerlistapi.as_view(),name='pessengerlistapi'),
    path('categorylistapi/',views.Categorylistapi.as_view(),name='categorylistapi'),
    path('deletecategoryapi/<int:pk>/',views.Deletecategoryapi.as_view(),name='deletecategoryapi'),
    path('Journeylistapi/',views.Journeylistapi.as_view(),name='Journeylistapi'),
    path('Journeyupdatedeleteapi/<int:pk>/',views.Journeyupdatedeletapi.as_view(),name='Journeyupdatedeleteapi'),
    path('bussearchfilter/',views.Bussearchfilterapi.as_view(),name='bussearchfilter'),
    path('Listjourneybus/',views.JourneytransportApi.as_view(),name='Listjourneybus'),
    path('Addbusbyjourney/',views.Addbusbyroot.as_view(),name='Addbusbyjourney'),
 
]