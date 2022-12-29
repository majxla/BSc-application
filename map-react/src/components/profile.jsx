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
    const [empty, setEmpty] = useState(true);
    // const [loading, setLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


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

                if (res.data.routes.length === 0) {
                    setEmpty(true);
                } else {
                    setEmpty(false);
                }
                
                console.log(res.data.routes.length);
                console.log(empty);

            },
            error => {
                console.error("Error fetching data: ", error);
                setError(error);
            });
        }
    }, [toFetch]);

    // UNCOMMENT
    if (loading) return (
        <div className='profile-loading'>
            <p>Ładowanie danych...</p>

            <div className='logout-button-div'>
                <button className='logout-button' onClick={props.logout}>Wyloguj</button>
            </div>

        </div>
    )

    if (empty) return (
        <div>
            <div className='profile-routes'>
                <h1>Twoje zapisane trasy</h1>  
                <p> Brak tras</p>

            </div>

        </div>
    )


    if (error) return (        
        <div className='profile-loading'>
            <p>Wystąpił błąd.</p>

            <div className='logout-button-div'>
                <button className='logout-button' onClick={props.logout}>Wyloguj</button>
            </div>

        </div>
    )


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
                <button className='logout-button' onClick={props.logout}>Wyloguj</button>
            </div>

        </div>
    )
}

export default Profile;