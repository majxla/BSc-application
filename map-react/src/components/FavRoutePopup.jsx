import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline} from 'react-leaflet';
import ChartsScatter from './chartsScatter';
import ChartsSurface from './chartsSurface';


const FavRoutePopup = (props) => {

    return (
        <div className="fav-route-popup">

            <div className="map-popup-close"><button onClick={props.popupClose}>x</button></div>

            <div className="map-popup">

                <div className="fav-popup-map">

                    <MapContainer className="fav-map-container"
                    center={[50.775656, 15.758092]} 
                    zoom={13} 
                    scrollWheelZoom={true}>


                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                        <Polyline positions={props.polyline}/>

                        <Marker position={props.start_point}></Marker>
                        <Marker position={props.end_point}></Marker>


                    </MapContainer>

                </div>
                <div className="fav-popup-plot1">
                    
                    <ChartsScatter data={props.data}/>

                </div>

                <div className="fav-popup-plot2">
                    <ChartsSurface data={props.data}/>
                </div>



            </div>
        </div>
    )
}


export default FavRoutePopup;