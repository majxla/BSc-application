from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, FavRouteSerializer
from .models import User, FavRoute
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from django.conf import settings
from django.contrib.gis.geos import GEOSGeometry, Point, MultiLineString, LineString

import json
from django.http import HttpResponse


#########
from django.contrib.auth import authenticate, login, logout



class RegisterView(APIView):

    serializer_class = UserSerializer

    def post(self, request):
        
        serializer = self.serializer_class(data=request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            'message': True,
            'user_data': serializer.data
            })

class LoginView(APIView):

    serializer_class = UserSerializer

    def post(self, request):
        
        # AUTHENTICATION PART

        print(request.data)

        email = request.data['email']
        password = request.data['password']

        user = authenticate(username = email, password = password)

        if user is None:
            raise AuthenticationFailed("User not found")

        if not user.check_password(password):
            raise AuthenticationFailed("Wrong password")
        
        login(request, user)

        return Response({
            'message': 'success',
            'user': {
                'id': user.id, 
                'username': user.username, 
                'email': user.email
                },
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'jwt': user.token
        })

        
class LogoutView(APIView):

    def get(self, request):

        logout(request)
        return Response({
            'message': 'success'
        })


class FavRouteView(APIView):

    serializer_class = FavRouteSerializer
    

    def get(self, request, id):

        routes = self.serializer_class(FavRoute.objects.filter(user=id), many=True).data
        response_data = {"routes":routes}

        return HttpResponse(json.dumps(response_data),
                            content_type="application/json")


    def multilinestring_formatting(self, polyline):


        list_of_linestrings = []

        for el in polyline:
            
            list_of_points = []
            
            for x in el:
                list_of_points.append(Point(x[1], x[0]))

            ls = LineString(list_of_points)
            list_of_linestrings.append(ls)
        
        mls = MultiLineString(list_of_linestrings)

        return mls


    def points_formatting(self, point):

        # p = Point(point['lng'], point['lat'])
        return Point(point['lng'], point['lat'])




    def post(self, request):

        # print(request.data)

        user = request.data['user']
        name = request.data['name']
        opis = request.data['opis']
        polyline = request.data['polyline']
        start_point = request.data['start_point']
        end_point = request.data['end_point']

        mls = self.multilinestring_formatting(polyline)
        # print(mls)

        sp = self.points_formatting(start_point)
        ep = self.points_formatting(end_point)

        # print(sp)
        # print(ep)

        data = {
            'user': user,
            'name': name,
            'opis': opis,
            'polyline': mls,
            'start_point': sp,
            'end_point': ep,
        }

        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()


        return Response({
            'success': 'success'
        })


# polyline = [
#         [
#             [50.77467, 15.755809], 
#             [50.774733, 15.755997], 
#             [50.77482, 15.756255]
#         ], 
#         [
#             [50.77482, 15.756255], 
#             [50.774842, 15.756241], 
#             [50.775332, 15.755937]
#         ]
# ]

# [[[50.77467, 15.755809], [50.774733, 15.755997], [50.77482, 15.756255]], [[50.77482, 15.756255], [[50.774842, 15.756241], [50.775332, 15.755937]]]


