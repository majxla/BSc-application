import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RouteItem from './RouteItem';
import FavRoutePopup from "./FavRoutePopup";





const Profile = (props) => {

    const testRoutes = {
        "routes": [
            {
                "id": 1,
                "name": "trasa 1", 
                "opis": "trasa 1 desc",
                "polyline": "SRID=4326;MULTILINESTRING ((15.755809 50.77467, 15.755997 50.774733, 15.756255 50.77482), (15.756255 50.77482, 15.756241 50.774842, 15.755937 50.775332))",
                "start_point": "SRID=4326;POINT (15.755809 50.77467)",
                "end_point": "SRID=4326;POINT (15.755937 50.775332)",
                "user": 8
            },
            {            
                "id": 2,
                "name": "tr1", 
                "opis": "opis",
                "polyline": "SRID=4326;MULTILINESTRING ((15.753215 50.773597, 15.75334 50.773642, 15.753511 50.77373, 15.753671 50.773864, 15.753805 50.773958, 15.753918 50.774026, 15.754064 50.774092, 15.754289 50.774173), (15.754289 50.774173, 15.754259 50.774204, 15.754658 50.77433, 15.755684 50.774628, 15.755997 50.774733, 15.756255 50.77482, 15.756803 50.77497, 15.756991 50.775024, 15.757006 50.775029, 15.757102 50.775057, 15.757171 50.775082, 15.757266 50.775116, 15.757329 50.775137, 15.757426 50.775153, 15.757564 50.775171, 15.757752 50.775188, 15.757956 50.775199, 15.758041 50.775209, 15.758133 50.775217, 15.75819 50.775232, 15.758251 50.775253, 15.758337 50.775286, 15.758419 50.775314, 15.758547 50.775383, 15.758742 50.775518, 15.758861 50.775588, 15.758967 50.77565, 15.759114 50.775715, 15.759237 50.775769, 15.759486 50.775873, 15.759648 50.775941, 15.759779 50.776005, 15.759893 50.776085, 15.759954 50.776058, 15.760052 50.776128), (15.760052 50.776128, 15.760052 50.776128))",
                "start_point": "SRID=4326;POINT (15.753214359283449 50.77359877986242)",
                "end_point": "SRID=4326;POINT (15.760059356689455 50.77612367499384)",
                "user": 8
            },
        ]
    }

    const [favPopup, setFavPopup] = useState(true);

    const favPopupOpen = () => {
        setFavPopup(true);
    }

    const favPopupClose = () => {
        setFavPopup(false);
    }
    
    const [routes, setRoutes] = useState(testRoutes);

    const [toFetch, setToFetch] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
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


    if (loading) return "Loading...";
    if (error) return "Error";

    const elements = routes['routes'].map(route => {
        return <RouteItem 
                element={route} 
                popupOpen={favPopupOpen.bind(this)}
                ></RouteItem>
    })


    return (
        // <div>
        //     <h1>Zalogowano</h1>
        //     <pre>{JSON.stringify(data, null, 2)}</pre>
        // </div>
        <div className='profile'>
            {/* <pre>{JSON.stringify(testRoutes, null, 2)}</pre> */}
            {/* <ul>{routes['routes'].map(route => <li key={route.name}>{route.name}</li>)}</ul> */}
            <div className='profile-routes'>
                <h1>Twoje zapisane trasy</h1>
                {elements}

            </div>

            {favPopup ? 
            <FavRoutePopup
                popupClose={favPopupClose.bind(this)}
            />
            : null}

        </div>
    )
}

export default Profile;