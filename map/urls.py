from django.urls import path
from .views import IndexView, Coordinates, Raster
from django.views.generic import TemplateView

urlpatterns = [
    path('', IndexView.as_view()),
    #path('', TemplateView.as_view(template_name="index.html")),
    path('coords/', Coordinates.as_view()),
    path('raster/', Raster.as_view()),
]