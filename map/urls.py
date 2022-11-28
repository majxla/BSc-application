from django.urls import path
from .views import IndexView, Coordinates, Raster
from django.views.generic import TemplateView
from django.conf import settings


react_routes = getattr(settings, 'REACT_ROUTES', [])

urlpatterns = [
    path('', IndexView.as_view()),
    #path('', TemplateView.as_view(template_name="index.html")),
    path('coords/', Coordinates.as_view()),
    path('raster/', Raster.as_view()),

]


for route in react_routes:
    urlpatterns += [
        path('{}'.format(route), IndexView.as_view())
    ]