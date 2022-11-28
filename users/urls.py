from django.urls import path, include
from .views import RegisterView, LoginView, LogoutView

urlpatterns = [
    path('api/register', RegisterView.as_view()),
    path('api/login', LoginView.as_view()),
    path('api/logout', LogoutView.as_view()),
    
]