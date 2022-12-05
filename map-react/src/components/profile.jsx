import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RouteItem from './RouteItem';
import FavRoutePopup from "./FavRoutePopup";






const Profile = (props) => {


    const [selectedElement, setSelectedElement] = useState(null);

    const [favPopup, setFavPopup] = useState(false);

    const favPopupOpen = (e) => {
        setFavPopup(true);
        setSelectedElement(e);
    }

    const favPopupClose = () => {
        setFavPopup(false);
        setSelectedElement(null);
    }
    

    const [toFetch, setToFetch] = useState(false);
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [userID, setUserID] = useState(null);

    useEffect(() => {
        const id = localStorage.getItem('user');

        if (!!id){
            setUserID(JSON.parse(id)['id']);
            setToFetch(true);
        }
    }, [])


    useEffect(() => {

        if (toFetch) {
            axios(`api/routes/${userID}/`).then(
            (res) => {
                console.log(res.data);
                setData(res.data);
                setLoading(false);
            },
            error => {
                console.error("Error fetching data: ", error);
                setError(error);
            });
        }
    }, [toFetch]);

    // UNCOMMENT
    if (loading) return "Loading...";
    if (error) return "Error";


    const elements = data['routes'].map(route => {
        return <RouteItem 
                element={route} 
                popupOpen={favPopupOpen.bind(this)}
                ></RouteItem>
    })




    return (

        <div className='profile'>

            {/* UNCOMMENT */}
            <div className='profile-routes'>
                <h1>Twoje zapisane trasy</h1>
                {elements}

            </div>

            {/* UNCOMMENT */}
            {favPopup ? 
            <FavRoutePopup
                popupClose={favPopupClose.bind(this)}
                polyline={selectedElement.polyline}
                start_point={selectedElement.start_point}
                end_point={selectedElement.end_point}
                data={selectedElement}
            />
            : null}

            <div className='logout-button-div'>
                <button className='logout-button'>Wyloguj</button>
            </div>

        </div>
    )
}

export default Profile;