import jwt
from rest_framework import exceptions, authentication
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from django.conf import settings





class JWTAuthentication(authentication.BaseAuthentication):
    authentication_header_prefix = "token"

    def authenticate(self, request):
        request.user = None

        auth_header = authentication.get_authorization_header(request).split()
        # print(auth_header)
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            return None
        
        if len(auth_header) == 1:
            raise exceptions.AuthenticationFailed("Invalid token header.")
        elif len(auth_header) > 2:
            raise exceptions.AuthenticationFailed("Invalid token header.")
        
        prefix = auth_header[0].decode('utf-8')
        token = auth_header[1].decode('utf-8')

        if prefix.lower() != auth_header_prefix:
            return None
        
        return self.authenticate_credentials(request, token)
    
    def authenticate_credentials(self, request, token):

        payload = {}

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        
        except Exception as e:
            print(str(e))
        
        user = None
        
        try:
            user = User.objects.get(pk=payload['id'])
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('not found')
        

        if not user.is_active:
            raise exceptions.AuthenticationFailed('inactive')

        return user, token
