import { useState, useEffect } from "react";


const RouteItem = (props) => {

    const route = {
        polyline: props.element.polyline,
        startPoint: props.element.start_point,
        endPoint: props.element.end_point
    }

    const clickHandle = () => {

        props.popupOpen(props.element);
    }


    return (
        <div className="profile-fav-route" key={props.element.id}>

            <button key={props.element.id} value={props.element.id} onClick={clickHandle}>
                <p className="fav-route-title">{props.element.name}</p>
                <hr className="fav-title-line" align='left'></hr>
                <p className="fav-route-desc"><span className="fav-route-desc-span">Twój opis:</span> {props.element.opis}</p>
            </button>

        </div>
    )
}


export default RouteItem;