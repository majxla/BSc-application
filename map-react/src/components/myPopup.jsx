import React from 'react';

const MyPopup = (props) => {
    

    const style = {
        left: props.position.x,
        top: props.position.y
    };

    return (
        <div className='popup' style={style}>
            <div className='popup-inner'>
                <div className='coordinates'>
                    <p className='lat'>Szerokość geograficzna: {props.position.coords.lat}</p>
                    <p className='lng'>Dlługość geograficzna: {props.position.coords.lng}</p>
                </div>
                <div className='actions'>
                    {/* <div><a href={props.start}>Ustaw punkt początkowy</a></div>
                    <div><a href=''>Ustaw punkt końowy</a></div> */}
                    <button onClick={props.start} className="map-popup-button">Ustaw punkt początkowy</button>
                    <button onClick={props.end} className="map-popup-button">Ustaw punkt końcowy</button>
                </div>
                <button className='close-popup' onClick={props.closePopup}>Zamknij</button>
            </div>
        </div>
    )
}


export default MyPopup;