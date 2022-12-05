from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.gis.db.models import MultiLineStringField, PointField
from django.contrib.postgres.fields import ArrayField

import jwt
import datetime



class User(AbstractUser):

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    username = models.CharField(db_index = True, max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    date_joined = models.DateTimeField(auto_now_add=True, null=True)

    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    @property
    def token(self):
        return self._generate_jwt_token()


    def _generate_jwt_token(self):
        exp = datetime.datetime.now() + datetime.timedelta(days=60)
        iat = datetime.datetime.now()

        payload = {
            'id': self.id,
            'exp': exp,
            'iat': iat
        }

        token = jwt.encode(payload, "SECRET_KEY", algorithm='HS256')

        return token


class FavRoute(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    opis = models.CharField(max_length=255)
    polyline = MultiLineStringField()
    start_point = PointField()
    end_point = PointField()
    altitude = ArrayField(models.IntegerField(), default=list)
    xaxis = ArrayField(models.FloatField(), default=list)
    surface = ArrayField(ArrayField(models.IntegerField()), default=list)
    rows = ArrayField(models.IntegerField(), default=list)
    cols = ArrayField(models.IntegerField(), default=list)

    def __str__(self):
        return self.name
