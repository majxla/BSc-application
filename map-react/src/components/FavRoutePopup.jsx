import { useState, useEffect } from "react";


const FavRoutePopup = (props) => {

    return (
        <div className="fav-route-popup">

            <div className="map-popup">
                
                <div><button onClick={props.popupClose}>x</button></div>


            </div>
        </div>
    )
}


export default FavRoutePopup;