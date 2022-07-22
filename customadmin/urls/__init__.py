# -*- coding: utf-8 -*-
from django.urls import include, path

from .. import views
from django.views.generic import TemplateView
from . import urls_core, urls_auth,urls_api
urlpatterns = [
    path("", views.IndexView.as_view(), name="dashboard"),
    path("", include(urls_auth)),
    path("", include(urls_core)),
    path("",include(urls_api)),
 
]