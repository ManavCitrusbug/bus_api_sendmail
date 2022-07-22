# -*- coding: utf-8 -*-
from django.urls import include, path

from .. import views
from django.views.generic import TemplateView
from . import urls_api
urlpatterns = [
  
    path("",include(urls_api)),
 
]