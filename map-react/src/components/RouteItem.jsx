import { useState, useEffect } from "react";
import Axios from 'axios';

const RouteItem = (props) => {

    const route = {
        polyline: props.element.polyline,
        startPoint: props.element.start_point,
        endPoint: props.element.end_point
    }

    const clickHandle = () => {

        props.popupOpen(props.element);
    }

    const deleteHandler = async () => {
        
        try {
            
            const response = await Axios.delete(`api/routes/${props.element.id}/`);

            console.log(JSON.stringify(response));
            window.location.reload(false);



        } catch (err) {

            console.log(err);
        
            
        }
    }


    return (
        <div className="profile-fav-route" key={props.element.id}>

            <button key={props.element.id} value={props.element.id} onClick={clickHandle}>
                <p className="fav-route-title">{props.element.name}</p>
                <hr className="fav-title-line" align='left'></hr>
                <p className="fav-route-desc"><span className="fav-route-desc-span">Twój opis:</span> {props.element.opis}</p>
                
            </button>

            <button className="fav-route-delete" onClick={deleteHandler}
            style={{backgroundColor: "white", border: "1px solid black", textAlign: "right"}}>
                Usuń</button>

        </div>
    )
}


export default RouteItem;