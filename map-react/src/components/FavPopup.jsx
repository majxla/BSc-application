import { useState, useEffect } from "react";
import Axios from 'axios';


const FavPopup = (props) => {

    const [capture, setCapture] = useState('');
    const [description, setDescription] = useState('');

    const [userID, setUserID] = useState(null);


    useEffect(() => {
        const id = localStorage.getItem('user');

        if (!!id) {
            setUserID(JSON.parse(id)['id']);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(userID);
        // console.log(capture);
        // console.log(description);
        // console.log(props.polyline);
        // console.log(props.startPoint);
        // console.log(props.endPoint);
        // console.log(props.altitude);
        // console.log(props.xaxis);
        // console.log(props.surface);

        try {
            
            const response = await Axios.post(`api/routes`,
            JSON.stringify({
                'user': userID, 
                'name': capture, 
                'opis': description, 
                'polyline': props.polyline, 
                'start_point': props.startPoint,
                'end_point': props.endPoint,
                'altitude': props.altitude,
                'xaxis': props.xaxis,
                'surface': props.surface,
                'rows': props.rows,
                'cols': props.cols
            }),

                {
                    headers: {'Content-Type': 'application/json'},
                }
            );

            console.log(JSON.stringify(response));

            props.close()
            props.setErrorFalse();


        } catch (err) {
            
            console.log(err);
            props.close()
            props.setErrorTrue("Nie udało się zapisać trasy");
            
        }

    }
    

    return (
        <div className="fav-popup">

            <div className="fav-form">
                <div>
                    <button className="fav-close" onClick={props.close}>x</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="fav-name">
                    <label>Nazwa trasy</label>
                    <input
                        type='text'
                        id='capture'
                        autoComplete='off'
                        onChange={(e) => setCapture(e.target.value)}
                        value={capture}
                        required
                    ></input>
                    </div>

                    <div className="fav-desc">
                        <label>Opis trasy</label>
                        <textarea
                            id='description'
                            placeholder="Wpisz opis..."
                            autoComplete='off'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                            rows='5'
                            cols='160'
                        ></textarea>
                    </div>

                    <button className="fav-add">Dodaj</button>


                </form>

            </div>

        </div>
    )


}

export default FavPopup;