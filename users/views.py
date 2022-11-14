from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import User
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from django.conf import settings

#########
from django.contrib.auth import authenticate, login, logout



class RegisterView(APIView):

    serializer_class = UserSerializer
    
    

    def post(self, request):
        
        serializer = self.serializer_class(data=request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

class LoginView(APIView):

    serializer_class = UserSerializer

    def post(self, request):
        
        # email = request.data['email']
        # password = request.data['password']

        # user = User.objects.filter(email=email).first()

        # if user is None:
        #     raise AuthenticationFailed('User not found!')

        # if not user.check_password(password):
        #     raise AuthenticationFailed('Incorrect password!')
        
        # a =  datetime.datetime.utcnow() + datetime.timedelta(minutes=60)
        # print(a)

        # payload = {
        #     'id': user.id,
        #     'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        #     'lat': datetime.datetime.utcnow()
        # }

        # token = jwt.encode(payload, settings.SECRET_KEY, algorithm=['HS256'])

        # return Response({
        #     'success': "success"

        # })

        # AUTHENTICATION PART

        email = request.data['email']
        password = request.data['password']

        user = authenticate(username = email, password = password)
        # user = authenticate(username = email)

        if user is None:
            raise AuthenticationFailed("User not found")

        if not user.check_password(password):
            raise AuthenticationFailed("Wrong password")
        
        login(request, user)

        return Response({
            'message': "success",
            'username': user.username,
            'email': user.email,
            'password': user.password
        })

        
class LogoutView(APIView):

    def get(self, request):

        logout(request)
        return Response({
            'message': 'success'
        })