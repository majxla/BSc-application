# Generated by Django 4.0.5 on 2022-12-05 19:14

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_favroute_altitude_favroute_surface_favroute_xaxis'),
    ]

    operations = [
        migrations.AddField(
            model_name='favroute',
            name='cols',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=list, size=None),
        ),
        migrations.AddField(
            model_name='favroute',
            name='rows',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='favroute',
            name='altitude',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='favroute',
            name='surface',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=None), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='favroute',
            name='xaxis',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), default=list, size=None),
        ),
    ]
