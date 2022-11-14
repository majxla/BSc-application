# #https://routing.openstreetmap.de/routed-foot/route/v1/driving/15.7557,50.7748;15.7273,50.7476?overview=false&geometries=geojson&steps=true


# import requests

# # url = '''https://routing.openstreetmap.de/routed-foot/route/v1/driving/15.7557,50.7748;15.7273,50.7476?overview=false&geometries=geojson&steps=true'''

# # response = requests.get(url)
# # response = response.json()

# # #print(response)
# # response = response['routes'][0]['legs'][0]['steps']
# # print(response)


data2 = [
{'geometry': {'coordinates': [[15.755809, 50.77467], [15.755997, 50.774733], [15.756255, 50.77482]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 62, 'bearing_before': 0, 'location': [15.755809, 50.77467], 'modifier': 'left', 'type': 'depart'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 0, 'entry': [True], 'bearings': [62], 'location': [15.755809, 50.77467]}, {'out': 0, 'in': 2, 'entry': [True, True, False], 'bearings': [60, 150, 240], 'location': [15.755997, 50.774733]}], 'weight': 2.96, 'duration': 28.5, 'distance': 35.5}, 
{'geometry': {'coordinates': [[15.756255, 50.77482], [15.756241, 50.774842], [15.755937, 50.775332]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 337, 'bearing_before': 61, 'location': [15.756255, 50.77482], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 3, 'in': 2, 'entry': [True, True, False, True], 'bearings': [60, 165, 240, 345], 'location': [15.756255, 50.77482]}], 'weight': 5.54, 'duration': 48.9, 'distance': 61.2}, 
{'geometry': {'coordinates': [[15.755937, 50.775332], [15.755661, 50.775264], [15.755356, 50.775186], [15.755201, 50.775143], [15.754434, 50.774922], [15.754307, 50.774888], [15.753985, 50.774801], [15.753719, 50.774752], [15.753416, 50.774723], [15.75332, 50.774713], [15.753034, 50.774682], 
[15.7529, 50.774665], [15.752613, 50.774619], [15.752354, 50.774582], [15.752226, 50.774567], [15.75214, 50.774558], [15.751857, 50.774538], [15.75168, 50.774532], [15.751462, 50.774516], [15.751288, 50.774489], [15.751177, 50.774457], [15.751097, 50.774435], [15.750993, 50.774389], [15.7509, 50.77435], [15.750821, 50.774303], [15.75078, 50.774253]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 247, 'bearing_before': 338, 'location': [15.755937, 50.775332], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Konstytucji 3 Maja', 'intersections': [{'out': 2, 'in': 1, 'entry': [True, False, True], 'bearings': [75, 165, 255], 'location': [15.755937, 50.775332]}, {'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [75, 240, 330], 'location': [15.755356, 50.775186]}, {'out': 2, 'in': 1, 'entry': [True, False, True], 'bearings': [0, 75, 270], 'location': [15.75214, 50.774558]}], 'weight': 35.26, 'duration': 310.4, 'distance': 388.1}, 
{'geometry': {'coordinates': [[15.75078, 50.774253], [15.750662, 50.774217], [15.750499, 50.774164], [15.750167, 50.774123]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 243, 
'bearing_before': 206, 'location': [15.75078, 50.774253], 'modifier': 'slight right', 'type': 'fork'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Adama Mickiewicza', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [30, 180, 240], 'location': [15.75078, 50.774253]}], 'weight': 4.17, 'duration': 36.7, 'distance': 45.9}, 
{'geometry': {'coordinates': [[15.750167, 50.774123], [15.749738, 50.774216], [15.749662, 50.774233], [15.749557, 50.77426], [15.74945, 50.774284], [15.749285, 50.774287], [15.748971, 50.774224], [15.748706, 50.774207], [15.748359, 50.774217], [15.748064, 50.774276], [15.74804, 50.77428], [15.74762, 50.774391], [15.747497, 50.774423], [15.747389, 50.774396]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 288, 'bearing_before': 258, 'location': [15.750167, 50.774123], 'modifier': 'slight right', 'type': 'continue'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Adama Mickiewicza', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [75, 210, 285], 'location': [15.750167, 50.774123]}], 'weight': 18.6, 'duration': 163.5, 'distance': 204.5}, 
{'geometry': {'coordinates': [[15.747389, 50.774396], [15.746966, 50.77452], [15.746811, 50.774577], [15.746703, 50.774641]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 293, 'bearing_before': 247, 'location': [15.747389, 50.774396], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Konstytucji 3 Maja', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [75, 120, 300], 'location': [15.747389, 50.774396]}], 'weight': 6.2, 'duration': 44.6, 'distance': 55.8}, 
{'geometry': {'coordinates': [[15.746703, 50.774641], [15.746446, 50.774511], [15.746386, 50.774423]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 230, 'bearing_before': 312, 'location': [15.746703, 50.774641], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Juliusza Słowackiego', 'intersections': [{'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [135, 225, 315], 'location': [15.746703, 50.774641]}], 'weight': 3.38, 'duration': 27, 'distance': 33.8}, 
{'geometry': {'coordinates': [[15.746386, 50.774423], [15.746235, 50.774376], [15.745351, 50.773741], [15.744966, 50.773505], [15.744444, 50.773241], [15.744166, 50.773119], [15.743873, 50.772949], [15.743616, 50.772901], [15.743187, 50.773026], [15.742618, 50.773173], [15.742293, 50.773159], [15.741705, 50.773031]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 243, 'bearing_before': 202, 'location': [15.746386, 50.774423], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Juliusza Słowackiego', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [30, 210, 240], 'location': [15.746386, 50.774423]}, {'out': 3, 'in': 1, 'entry': [True, False, True, True], 'bearings': [0, 75, 165, 300], 'location': [15.743616, 50.772901]}], 'weight': 33.7, 'duration': 323.6, 'distance': 404.4}, 
{'geometry': {'coordinates': [[15.741705, 50.773031], [15.741504, 50.77312], 
[15.740854, 50.773382]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 303, 'bearing_before': 250, 'location': [15.741705, 50.773031], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Gimnazjalna', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [75, 120, 300], 'location': [15.741705, 50.773031]}], 'weight': 7.15, 'duration': 57.2, 'distance': 71.5}, 
{'geometry': {'coordinates': [[15.740854, 50.773382], [15.740928, 50.773274], [15.740907, 50.773116], [15.740828, 50.77302], [15.74073, 50.772952]], 'type': 
'LineString'}, 'maneuver': {'bearing_after': 156, 'bearing_before': 302, 'location': [15.740854, 50.773382], 'modifier': 'sharp left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Olimpijska', 'intersections': [{'out': 2, 'in': 1, 'entry': [True, False, True, True], 'bearings': [30, 120, 150, 300], 'location': [15.740854, 50.773382]}], 'weight': 5.29, 'duration': 42.4, 'distance': 53}, 
{'geometry': {'coordinates': [[15.74073, 50.772952], [15.740548, 50.772653], [15.74051, 50.772332], [15.740456, 50.772168], [15.740325, 50.772045], [15.739661, 50.771734], [15.739274, 50.77158], [15.739146, 50.77145], [15.739104, 50.771409], [15.738779, 50.771079], [15.738464, 50.770766], [15.738321, 50.770391], [15.738314, 50.770178], [15.737819, 50.769969], [15.737571, 50.769637], [15.737535, 50.769523], [15.737342, 50.769371]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 201, 'bearing_before': 222, 'location': [15.74073, 50.772952], 'modifier': 'slight left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True, True], 'bearings': [45, 120, 195, 240], 'location': [15.74073, 50.772952]}, {'out': 2, 'in': 0, 'entry': [False, True, True, True], 'bearings': [30, 150, 210, 330], 'location': [15.739146, 50.77145]}, {'out': 2, 'in': 0, 'entry': [False, True, True, True], 'bearings': [30, 150, 210, 330], 'location': [15.739104, 50.771409]}], 'weight': 40.63, 'duration': 390, 'distance': 487.7}, 
{'geometry': {'coordinates': [[15.737342, 50.769371], [15.737236, 50.769364], [15.737057, 50.769336], [15.736943, 50.769299], [15.736837, 50.769237], [15.736638, 50.769112], [15.736464, 50.768978], [15.736316, 50.76887], [15.736278, 50.768844], [15.736025, 50.768676], [15.735892, 50.768593]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 262, 'bearing_before': 217, 'location': [15.737342, 50.769371], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Olimpijska', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [45, 105, 270], 'location': [15.737342, 50.769371]}], 'weight': 13.74, 'duration': 109.9, 'distance': 137.4}, 
{'geometry': {'coordinates': [[15.735892, 50.768593], [15.735847, 50.768626], [15.735775, 50.768596], [15.735678, 50.768572], [15.735587, 50.768565], [15.735467, 50.768581], [15.735098, 50.768639], [15.734602, 50.768719], [15.734487, 50.768737]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 275, 'bearing_before': 223, 'location': [15.735892, 50.768593], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 3, 'in': 0, 'entry': [False, True, True, True], 'bearings': [45, 90, 225, 270], 'location': [15.735892, 50.768593]}], 'weight': 8.7, 'duration': 83.7, 'distance': 104.4}, 
{'geometry': {'coordinates': [[15.734487, 50.768737], [15.734468, 50.768692]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 194, 'bearing_before': 284, 'location': [15.734487, 50.768737], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 2, 'in': 1, 'entry': [True, False, True, True], 'bearings': [15, 105, 195, 285], 'location': [15.734487, 50.768737]}], 'weight': 0.52, 'duration': 4.1, 'distance': 5.2}, 
{'geometry': {'coordinates': [[15.734468, 50.768692], [15.734266, 50.768726], [15.733655, 50.768807], [15.733306, 50.768819]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 281, 'bearing_before': 194, 'location': [15.734468, 50.768692], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Olimpijska', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [15, 105, 285], 'location': [15.734468, 50.768692]}], 'weight': 8.32, 'duration': 66.6, 'distance': 83.2}, 
{'geometry': {'coordinates': [[15.733306, 50.768819], [15.733295, 50.76876]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 185, 'bearing_before': 272, 'location': [15.733306, 50.768819], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [90, 180, 270], 'location': [15.733306, 50.768819]}], 'weight': 0.55, 'duration': 5.3, 'distance': 6.6}, 
{'geometry': {'coordinates': [[15.733295, 50.76876], [15.732441, 50.768619], [15.730138, 50.767662]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 254, 'bearing_before': 185, 'location': [15.733295, 50.76876], 'modifier': 'slight right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True, True], 'bearings': [0, 90, 255, 270], 'location': [15.733295, 50.76876]}], 'weight': 21.32, 'duration': 204.8, 'distance': 255.9}, 
{'geometry': {'coordinates': [[15.730138, 50.767662], [15.730054, 50.767673], [15.729796, 50.767687], [15.729369, 50.767705], [15.729023, 50.767717], [15.728926, 50.767715], [15.72885, 50.767704], [15.728733, 50.767679], [15.728655, 50.767665], [15.728586, 50.767666], [15.72853, 50.767676]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 275, 'bearing_before': 236, 'location': [15.730138, 50.767662], 'modifier': 'slight right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Turystyczna', 'intersections': [{'out': 2, 'in': 0, 'entry': [False, True, True], 'bearings': [60, 105, 270], 'location': [15.730138, 50.767662]}], 'weight': 11.44, 'duration': 91.7, 'distance': 114.4}, 
{'geometry': {'coordinates': [[15.72853, 50.767676], [15.728272, 50.767431]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 212, 'bearing_before': 275, 'location': [15.72853, 50.767676], 'modifier': 'left', 'type': 'continue'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Turystyczna', 'intersections': [{'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [90, 210, 345], 'location': [15.72853, 50.767676]}], 'weight': 3.27, 'duration': 26.2, 'distance': 32.7}, 
{'geometry': {'coordinates': [[15.728272, 50.767431], [15.728287, 50.76749], [15.728207, 50.76757]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 354, 'bearing_before': 212, 'location': [15.728272, 50.767431], 'modifier': 'sharp right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 0, 'in': 1, 'entry': [True, False, True], 'bearings': [0, 30, 195], 'location': [15.728272, 50.767431]}], 'weight': 1.43, 'duration': 13.7, 'distance': 17.2}, 
{'geometry': {'coordinates': [[15.728207, 50.76757], [15.727983, 50.767518], [15.727711, 50.767477], [15.727648, 50.767428]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 248, 'bearing_before': 327, 'location': [15.728207, 50.76757], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [150, 255, 345], 'location': [15.728207, 50.76757]}, {'out': 2, 'in': 1, 'entry': [True, False, True], 'bearings': [30, 75, 225], 'location': [15.727711, 50.767477]}], 'weight': 4.04, 'duration': 36.3, 'distance': 43.5}, 
{'geometry': {'coordinates': [[15.727648, 50.767428], [15.727678, 50.767263], [15.727738, 50.767109], [15.727778, 50.767053], [15.72783, 50.766954], [15.727872, 50.766916], [15.727927, 50.766893]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 172, 'bearing_before': 217, 'location': [15.727648, 50.767428], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [45, 180, 225], 'location': [15.727648, 50.767428]}], 'weight': 8.04, 'duration': 51.5, 'distance': 64.3}, 
{'geometry': {'coordinates': [[15.727927, 50.766893], [15.727872, 50.766842], [15.727591, 50.766651], [15.727245, 50.766486], [15.727019, 50.76639], [15.726775, 50.766217], [15.726619, 50.766128], [15.726488, 50.766006], [15.726349, 50.765821], [15.726257, 50.765668], [15.726117, 50.765281], [15.726072, 50.765096], [15.72604, 50.764893], [15.726014, 50.764648], [15.725986, 50.764514], [15.725915, 50.764299], [15.725839, 50.764145], [15.72569, 50.76385], [15.725585, 50.763688], [15.725511, 50.763498], [15.725489, 50.763297], [15.725468, 50.763109], [15.725433, 50.762849], [15.725421, 50.762661], [15.725478, 50.76244], [15.725494, 50.762206], [15.725555, 50.76182], [15.725582, 50.761578], [15.725594, 50.761475], [15.725577, 50.761341], [15.725554, 50.761217], [15.725484, 50.761071], [15.725413, 50.760937], [15.725215, 50.760687], [15.725079, 50.760518], [15.724938, 50.76036], [15.724692, 50.76012], [15.724522, 50.759979], [15.724348, 50.759825], [15.724153, 50.759682], [15.72398, 50.759545], [15.723913, 50.759453], [15.723846, 50.759336], [15.723796, 50.759268], [15.723714, 50.759153], [15.723602, 50.758991], [15.723511, 50.758855], [15.723477, 50.758771], [15.72341, 50.758669], [15.723236, 50.758381], [15.723062, 50.758145], [15.722781, 50.757918], [15.722637, 50.757729], [15.722494, 50.7575], [15.722349, 50.757245], [15.722221, 50.756945], [15.722082, 50.756618], [15.721885, 50.756311], [15.721694, 50.755995], [15.721509, 50.755688], [15.721154, 50.755044], [15.720949, 50.754726], [15.720858, 50.754561], [15.720733, 50.754409], [15.72048, 50.754184], [15.720243, 50.75395], [15.72002, 50.753748], [15.719815, 50.753565], [15.719278, 50.753184], [15.718942, 50.752986], [15.718467, 50.752724], [15.718224, 50.75259], [15.717966, 50.752472], [15.717738, 50.75234], [15.717631, 50.75226], [15.717543, 50.752166], 
[15.717416, 50.752095], [15.717287, 50.75204], [15.717014, 50.751935], [15.716743, 50.751802], [15.716628, 50.751734], [15.716516, 50.751671], [15.716209, 50.751474], [15.716033, 50.751365], [15.715881, 50.75126], [15.715634, 50.751078], [15.715522, 50.750976], [15.715431, 50.750878], [15.715361, 50.750796], [15.71531, 50.750715], [15.715249, 50.750626], [15.715206, 50.750544], [15.71503, 50.749871], [15.714938, 50.749713], [15.714873, 50.749551], [15.71481, 50.749396], [15.714743, 50.749233], [15.714728, 50.749181], [15.714721, 50.749142]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 216, 'bearing_before': 135, 'location': [15.727927, 50.766893], 'modifier': 'right', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Śląska Droga', 'intersections': 
[{'out': 1, 'in': 2, 'entry': [True, True, False], 'bearings': [30, 210, 315], 'location': [15.727927, 50.766893]}, {'out': 3, 'in': 0, 'entry': [False, True, True, True, True], 'bearings': [30, 75, 165, 195, 255], 'location': [15.723913, 50.759453]}], 'weight': 212.48, 'duration': 1971.7, 'distance': 2268.6}, 
{'geometry': {'coordinates': [[15.714721, 50.749142], [15.714866, 50.749183], [15.715055, 50.749249], [15.715468, 50.749398], [15.71562, 50.749434], [15.715799, 50.749468], [15.716031, 50.749518], [15.716273, 50.749557], [15.71662, 50.749617], [15.716952, 50.749677], [15.717185, 50.749694], [15.717434, 50.749713], [15.717811, 50.749713], [15.718201, 50.749725], [15.718703, 50.749716], [15.719225, 50.749751], [15.7195, 50.749756], [15.720263, 50.749736], [15.720558, 50.749756], [15.720912, 50.749775], [15.721264, 50.749771], [15.721643, 50.749756], [15.722014, 50.749722], [15.722509, 50.749651], [15.722763, 50.749617], [15.72301, 50.749563], [15.723527, 50.749404], 
[15.724021, 50.749232], [15.724432, 50.749076], [15.724791, 50.74892], [15.725135, 50.748732], [15.725486, 50.748541], [15.725685, 50.748436], [15.725854, 50.748342], [15.726032, 50.748231], [15.726192, 50.748092], [15.726344, 50.747949], [15.726513, 50.74778], [15.726663, 50.747638], [15.726718, 50.747569]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 66, 'bearing_before': 188, 'location': [15.714721, 50.749142], 'modifier': 'sharp left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [15, 60, 240], 'location': [15.714721, 50.749142]}], 'weight': 86.15, 'duration': 758.1, 'distance': 947.4}, 
{'geometry': {'coordinates': [[15.726718, 50.747569], [15.726859, 50.747565], [15.72691, 50.747555], [15.727068, 50.747528], [15.727111, 50.747531], [15.727177, 50.747556]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 92, 'bearing_before': 150, 'location': [15.726718, 50.747569], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 0, 'in': 2, 'entry': [True, True, False], 'bearings': [90, 165, 330], 'location': [15.726718, 50.747569]}], 'weight': 2.8, 'duration': 26.8, 'distance': 33.7}, 
{'geometry': {'coordinates': [[15.727177, 50.747556], [15.727175, 50.747598]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 357, 'bearing_before': 73, 'location': [15.727177, 50.747556], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 0, 'in': 2, 'entry': [True, True, False], 'bearings': [0, 135, 255], 'location': [15.727177, 50.747556]}], 'weight': 0.38, 'duration': 3.6, 'distance': 4.7}, 
{'geometry': {'coordinates': [[15.727175, 50.747598], [15.727175, 50.747598]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 0, 'bearing_before': 358, 'location': [15.727175, 50.747598], 'modifier': 'right', 'type': 'arrive'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'in': 0, 'entry': [True], 'bearings': [178], 'location': [15.727175, 50.747598]}], 'weight': 0, 'duration': 0, 'distance': 0}]


import haversine as hs
from haversine import Unit


data = [
{'geometry': {'coordinates': [[15.755809, 50.77467], [15.755997, 50.774733], [15.756255, 50.77482]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 62, 'bearing_before': 0, 'location': [15.755809, 50.77467], 'modifier': 'left', 'type': 'depart'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 0, 'entry': [True], 'bearings': [62], 'location': [15.755809, 50.77467]}, {'out': 0, 'in': 2, 'entry': [True, True, False], 'bearings': [60, 150, 240], 'location': [15.755997, 50.774733]}], 'weight': 2.96, 'duration': 28.5, 'distance': 35.5}, 
{'geometry': {'coordinates': [[15.756255, 50.77482], [15.756241, 50.774842], [15.755937, 50.775332]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 337, 'bearing_before': 61, 'location': [15.756255, 50.77482], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': '', 'intersections': [{'out': 3, 'in': 2, 'entry': [True, True, False, True], 'bearings': [60, 165, 240, 345], 'location': [15.756255, 50.77482]}], 'weight': 5.54, 'duration': 48.9, 'distance': 61.2}, 
{'geometry': {'coordinates': [[15.755937, 50.775332], [15.755661, 50.775264], [15.755356, 50.775186], [15.755201, 50.775143], [15.754434, 50.774922], [15.754307, 50.774888], [15.753985, 50.774801], [15.753719, 50.774752], [15.753416, 50.774723], [15.75332, 50.774713], [15.753034, 50.774682], 
[15.7529, 50.774665], [15.752613, 50.774619], [15.752354, 50.774582], [15.752226, 50.774567], [15.75214, 50.774558], [15.751857, 50.774538], [15.75168, 50.774532], [15.751462, 50.774516], [15.751288, 50.774489], [15.751177, 50.774457], [15.751097, 50.774435], [15.750993, 50.774389], [15.7509, 50.77435], [15.750821, 50.774303], [15.75078, 50.774253]], 'type': 'LineString'}, 'maneuver': {'bearing_after': 247, 'bearing_before': 338, 'location': [15.755937, 50.775332], 'modifier': 'left', 'type': 'turn'}, 'mode': 'walking', 'driving_side': 'right', 'name': 'Konstytucji 3 Maja', 'intersections': [{'out': 2, 'in': 1, 'entry': [True, False, True], 'bearings': [75, 165, 255], 'location': [15.755937, 50.775332]}, {'out': 1, 'in': 0, 'entry': [False, True, True], 'bearings': [75, 240, 330], 'location': [15.755356, 50.775186]}, {'out': 2, 'in': 1, 'entry': [True, False, True], 'bearings': [0, 75, 270], 'location': [15.75214, 50.774558]}], 'weight': 35.26, 'duration': 310.4, 'distance': 388.1}]

duration = 0
distance_list = [0]

list_of_coords = []
coords_reverse = lambda x: (i.reverse() for i in x)

# geom = [
#     [
#     [50.77467, 15.755809], 
#     [50.774733, 15.755997], 
#     [50.77482, 15.756255]
#     ],
#     ]
# sum = 0
# for x in range(len(geom)):
#     for y in range(len(geom[x])-1):
#         print(geom[x][y], ', ', geom[x][y+1])
#         dis = hs.haversine(geom[x][y], geom[x][y+1], unit=Unit.METERS)
#         sum += dis
#         print(dis)

# print(sum)

# l1 = hs.haversine(geom[0], geom[1], unit=Unit.METERS)
# print(l1)
# l2 = hs.haversine(geom[1], geom[2], unit=Unit.METERS)
# print(l2)

# print('suma', l1+l2)

# for el in data2:

#     dur = el['duration']
#     dis = el['distance']
#     print('-------------------------')
#     print('duration:', dur)
#     print('distance:', dis)

for el in data:

    #print(el['geometry']['coordinates'])
    coords = el['geometry']['coordinates']
    list(coords_reverse(coords))
    list_of_coords.append(coords)


print(len(list_of_coords))
print(list_of_coords)

sum = 0

for x in range(len(list_of_coords)):
    for y in range(len(list_of_coords[x])-1):
        dis = hs.haversine(list_of_coords[x][y], list_of_coords[x][y+1], unit=Unit.METERS)
        sum += dis
        distance_list.append(dis)

print(distance_list)
print(sum)

cos = [
    [
        [15.755809, 50.77467], 
        [15.755997, 50.774733], 
        [15.756255, 50.77482]
    ], 
    [
        [15.756255, 50.77482], 
        [15.756241, 50.774842], 
        [15.755937, 50.775332]
    ], 
    [
        [15.755937, 50.775332], 
        [15.755661, 50.775264], 
        [15.755356, 50.775186], 
        [15.755201, 50.775143], 
        [15.754434, 50.774922], 
        [15.754307, 50.774888], 
        [15.753985, 50.774801], 
        [15.753719, 50.774752], 
        [15.753416, 50.774723], 
        [15.75332, 50.774713], 
        [15.753034, 50.774682], 
        [15.7529, 50.774665], 
        [15.752613, 50.774619], 
        [15.752354, 50.774582], 
        [15.752226, 50.774567], 
        [15.75214, 50.774558], 
        [15.751857, 50.774538], 
        [15.75168, 50.774532], 
        [15.751462, 50.774516], 
        [15.751288, 50.774489], 
        [15.751177, 50.774457], 
        [15.751097, 50.774435], 
        [15.750993, 50.774389], 
        [15.7509, 50.77435], 
        [15.750821, 50.774303], 
        [15.75078, 50.774253]
        ]
]


cos2 = [
    [
        [50.77467, 15.755809], 
        [50.774733, 15.755997], 
        [50.77482, 15.756255]
    ], 
    [
        [50.77482, 15.756255], 
        [50.774842, 15.756241], 
        [50.775332, 15.755937]
    ], 
    [
        [50.775332, 15.755937], 
        [50.775264, 15.755661], 
        [50.775186, 15.755356], 
        [50.775143, 15.755201], 
        [50.774922, 15.754434], 
        [50.774888, 15.754307], 
        [50.774801, 15.753985], 
        [50.774752, 15.753719], 
        [50.774723, 15.753416], 
        [50.774713, 15.75332], 
        [50.774682, 15.753034], 
        [50.774665, 15.7529], 
        [50.774619, 15.752613], 
        [50.774582, 15.752354], 
        [50.774567, 15.752226], 
        [50.774558, 15.75214], 
        [50.774538, 15.751857], 
        [50.774532, 15.75168], 
        [50.774516, 15.751462], 
        [50.774489, 15.751288], 
        [50.774457, 15.751177], 
        [50.774435, 15.751097], 
        [50.774389, 15.750993], 
        [50.77435, 15.7509], 
        [50.774303, 15.750821],
        [50.774253, 15.75078]
    ]
    ]