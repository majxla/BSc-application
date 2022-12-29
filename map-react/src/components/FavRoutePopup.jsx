import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline} from 'react-leaflet';
import ChartsScatter from './chartsScatter';
import ChartsSurface from './chartsSurface';
import * as L from 'leaflet';


const FavRoutePopup = (props) => {

    const LeafIcon = L.Icon.extend({
        options: {}
    });

    const greenIcon = new LeafIcon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]

    });

    const [getGreenIcon, setGreenIcon] = useState(greenIcon);

    
    const redIcon = new LeafIcon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const [getRedIcon, setBlueIcon] = useState(redIcon);

    const pathColor = {color: 'black'}

    return (
        <div className="fav-route-popup">

            <div className="map-popup-close"><button onClick={props.popupClose}>x</button></div>

            <div className="map-popup">

                <div className="fav-popup-map">

                    <MapContainer className="fav-map-container"
                    // center={[50.775656, 15.758092]} 
                    // center={props.start_point}
                    center={[(props.start_point[0] + props.end_point[0]) / 2, (props.start_point[1] + props.end_point[1]) / 2]}
                    zoom={13} 
                    scrollWheelZoom={true}>


                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                        <Polyline pathOptions={pathColor} positions={props.polyline}/>

                        <Marker position={props.start_point} icon={getGreenIcon}></Marker>
                        <Marker position={props.end_point} icon={getRedIcon}></Marker>


                    </MapContainer>

                </div>
                <div className="fav-popup-plot1">
                    
                    <ChartsScatter data={props.data} style={{height: "340"}}/>

                </div>

                <div className="fav-popup-plot2">
                    <ChartsSurface data={props.data} style={{height: "340"}}/>
                </div>



            </div>
        </div>
    )
}


export default FavRoutePopup;