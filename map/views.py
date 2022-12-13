from django.shortcuts import render
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from urllib import response
import requests
from django.conf import settings
import json
import ast
import haversine as hs
from haversine import Unit
from osgeo import gdal
import numpy
import os


# Create your views here.


class IndexView(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'index.html'

    def get(self, request):
        return render(request, 'index.html')


class Coordinates(APIView):


    def coordsformatting(self, coords_string):
        coords = coords_string.lstrip("{").rstrip("}").split(",")
        coords = map(lambda x : x.split(":")[1], coords)

        return list(coords)
    
    def list_of_coords(self, data):
        list_of_coords_ = []
        coords_reverse = lambda x: (i.reverse() for i in x)

        for el in data:
            coords = el['geometry']['coordinates']
            list(coords_reverse(coords))
            list_of_coords_.append(coords)

        return list_of_coords_


    def get(self, request):

        result_start = request.GET.get('startCoords', None)
        result_end = request.GET.get('endCoords', None)

        print(result_start, result_end)
        #'{"lat":50.77422170102437,"lng":15.754909515380861}' '{"lat":50.74674062590121,"lng":15.73122024536133}'

        if (result_start != None and result_end != None):
            start_coords = self.coordsformatting(result_start)
            end_coords = self.coordsformatting(result_end)

            print(start_coords, end_coords)
            url = "https://routing.openstreetmap.de/routed-foot/route/v1/driving/" + start_coords[1] + "," + start_coords[0] + ";" + end_coords[1] + "," + end_coords[0] +"?overview=false&geometries=geojson&steps=true"

            #print(url)
        
        
            # response = requests.get('''https://routing.openstreetmap.de/routed-foot/route/v1/driving/15.7557,50.7748;15.7273,50.7476?overview=false&geometries=polyline&steps=true''')
            # https://routing.openstreetmap.de/routed-foot/route/v1/driving/15.7557,50.7748;15.7273,50.7476?overview=false&geometries=geojson&steps=true
            # response = requests.get('''https://routing.openstreetmap.de/routed-foot/route/v1/driving/15.7557,50.7748;15.7273,50.7476?overview=false&geometries=geojson&steps=true''')
            response = requests.get(url)
            response = response.json()

            print(url)

            print(response)
            

            route = response['routes'][0]['legs'][0]['steps']

            duration = response['routes'][0]['duration']/60
            duration = "%.2f" % duration
            distance = response['routes'][0]['distance']/1000
            distance = "%.2f" % distance

            # print("---------------",duration)
            # print("---------------",distance)

            path = self.list_of_coords(route)
            

            # simp_polyline = self.simplify_polyline(path)
            # bounds = self.get_bounds(simp_polyline)
            # self.get_raster(bounds)

            #print(path)


            #data = {"success": "success python part"}
            #print(path)

            data = {
                "path": path,
                "duration": duration,
                "distance": distance
            }


            # return Response(path)
            return Response(data=data)

        return Response('None')


class Raster(APIView):

    file_name = ''

    def formatting_polyline(self, polyline):

        coords = polyline.lstrip('{"polyline":').rstrip("}")
        coords = ast.literal_eval(coords)



        simp_poly = []
        for x in range(len(coords)):
            for y in range(len(coords[x])):
                if coords[x][y] not in simp_poly:
                    simp_poly.append(coords[x][y])
        
        return simp_poly

    def get_bounds(self, polyline):
        s = polyline[0][0]
        n = polyline[0][0]
        w = polyline[0][1]
        e = polyline[0][1]

        for x in polyline:
            s = min(s, x[0])
            n = max(n, x[0])
            w = min(w, x[1])
            e = max(e, x[1])

        bounds = {'s': s-0.001, 'n': n+0.001, 'w': w-0.001, 'e': e+0.001}

        return bounds

    def get_raster(self, bounds):
        self.file_name = settings.MEDIA_ROOT + "/rasters/{}_{}_{}_{}.tif".format(bounds['s'], bounds['n'], bounds['w'], bounds['e'])
        url = 'https://portal.opentopography.org/API/globaldem?demtype=SRTMGL1&south={}&north={}&west={}&east={}&outputFormat=GTiff&API_Key=c8908fcbf8f0e2af719e973afdd16ece'.format(bounds['s'], bounds['n'], bounds['w'], bounds['e'])
        response = requests.get(url)

        open(self.file_name, 'wb').write(response.content)
    
    def calculate_xaxis(self, polyline):

        distance_list = [0]
        sum = 0

        for x in range(len(polyline) - 1):
            # print(polyline[x], polyline[x+1])
            dis = hs.haversine(polyline[x], polyline[x+1], unit=Unit.KILOMETERS)
            sum += dis
            distance_list.append(sum)

        return distance_list


    def get(self, request):

        path = request.GET.get('array', None)
        
        #print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", path)
        # {"polyline":[[[50.774704,15.75591],[50.774733,15.755997],[50.77482,15.756255]],[[50.77482,15.756255],[50.774785,15.756276]],[[50.774785,15.756276],[50.774894,15.756673]],[[50.774894,15.756673],[50.774894,15.756673]]]}

        coords = self.formatting_polyline(path)
        bounds = self.get_bounds(coords)

        self.get_raster(bounds)

        # Get altitude
        ds = gdal.Open(self.file_name, gdal.GA_ReadOnly)

        gt = ds.GetGeoTransform()
        inv_gt = gdal.InvGeoTransform(gt)

        band = ds.GetRasterBand(1)
        band_data = band.ReadAsArray()

        altitude = []
        row_list = []
        col_list = []

        for x in range(len(coords)):
            lat = coords[x][0]
            lon = coords[x][1]
            col, row = gdal.ApplyGeoTransform(inv_gt, lon, lat)

            col = int(col)
            row = int(row)

            row_list.append(row)
            col_list.append(col)

            altitude.append(band_data[row][col])

        ds = None

        os.remove(self.file_name)

        # Calculate xaxis
        xs = self.calculate_xaxis(coords)

        data = {
            'altitude': altitude,
            'xaxis': xs,
            'bandData': band_data,
            'col' : col_list,
            'row': row_list
        }

        return Response(data)

