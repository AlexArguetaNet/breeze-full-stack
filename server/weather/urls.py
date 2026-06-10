from django.urls import path
from . import views

urlpatterns = [
    path("current", views.CurrForecastView.as_view())
]