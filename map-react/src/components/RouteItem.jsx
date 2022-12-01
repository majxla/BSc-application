import { useState, useEffect } from "react";


const RouteItem = (props) => {



    return (
        <div className="profile-fav-route" key={props.element.id}>

            <button key={props.element.id} onClick={props.popupOpen}>
                <p className="fav-route-title">{props.element.name}</p>
                <hr className="fav-title-line" align='left'></hr>
                <p className="fav-route-desc"><span className="fav-route-desc-span">Twój opis:</span> {props.element.opis}</p>
            </button>

        </div>
    )
}


export default RouteItem;