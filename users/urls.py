from django.urls import path, include
from .views import RegisterView, LoginView, LogoutView, FavRouteView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    # path('routes/<id>/', FavRouteView.as_view()),
    path('routes', FavRouteView.as_view()),
    path('routes/<id>/', FavRouteView.as_view()),
    
]