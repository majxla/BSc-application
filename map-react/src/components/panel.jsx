import { LatLng } from 'leaflet';
import React, {useEffect} from 'react';
import ChartsScatter from './chartsScatter';
import ChartsSurface from './chartsSurface';


function Panel(props) {
    // let fakeCity = "Kowary"
    // let coords = new Object({
    //     lat: 50.794082325385354,
    //     lng: 15.831538915219527})

    
    const coords1 = {
        start: null,
        end: null,
        start_effect: false,
        end_effect: false,
    }

    const [getCoords, setCoords] = React.useState(coords1);


    const startChangeHandler = (e) => {
        props.startChangeHandler(e.target.value);
    }

    const endChangeHandler = (e) => {
        props.endChangeHandler(e.target.value);
    }

    useEffect(() => {
      if (getCoords.start_effect){
        // console.log(`start effect: ${getCoords.start}`)
        props.startSetMarker(getCoords.start);
      }

    }, [getCoords.start])

    useEffect(() => {
        // console.log(`end effect: ${getCoords.start}`)
        if (getCoords.end_effect){
          props.endSetMarker(getCoords.end);
        }
  
    }, [getCoords.end])
    

    const findAPlace = (val) => {

        let value;

        if (val === 0){
            value = props.values.start;
        } else {
            value = props.values.end;
        }
        
        let xhr = new XMLHttpRequest();
        let url = `https://nominatim.openstreetmap.org/search.php?q=${value}&limit=1&format=json&polygon_geojson=1`;

        xhr.open("GET", url);
        xhr.send();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function(){

            if (xhr.response[0] === undefined){
                console.log("Nie znaleziono.")
            }else {
                let lat = xhr.response[0].lat;
                let lng = xhr.response[0].lon;

                if (val === 0){
                    // console.log(`Start: ${xhr.response[0].lat}, ${xhr.response[0].lon}`)
                    //console.log(`Start: ${value} ${lat}, ${lng}`)
                    setCoords((...prevState) => ({
                        ...prevState,
                        start: new LatLng(lat, lng),
                        start_effect: true,
                    }))
                } else {
                    // console.log(`End: ${value} ${lat}, ${lng}`)
                    // console.log(`End: ${xhr.response[0].lat}, ${xhr.response[0].lon}`)
                    setCoords((...prevState) => ({
                        ...prevState,
                        end: new LatLng(lat, lng),
                        end_effect: true,
                    }))
                }

            }
        })
    }


    const findButtonHandler = (val) => {

        findAPlace(val);
        // props.startSetMarker(getCoords.start);
    } 


    return (
        <div className='panel'>
            <div className='panel-start'>
                <label>Punkt początkowy: </label>
                <input type="text" value={props.values.start} onChange={startChangeHandler}></input>
                <button onClick={event => findButtonHandler(0)}>Znajdź</button>
            </div>

            <div className='panel-end'>
                <label>Punkt końcowy: </label>
                <input type="text" value={props.values.end} onChange={endChangeHandler}></input>
                <button onClick={event => findButtonHandler(1)}>Znajdź</button>
            </div>
{/* 
            {props.plotData.show ? 
            <ChartsScatter altitude={props.plotData.altitude}
                        xaxis={props.plotData.xaxis}/>
            : null}

            {props.plotData.show ? 
                <ChartsSurface data={props.plotData}></ChartsSurface>
            : null} */}

            {/* <ChartsScatter altitude={props.plotData.altitude}
                        xaxis={props.plotData.xaxis}/>
            
            <ChartsSurface data={props.plotData}></ChartsSurface> */}

            {/* <ChartsScatter></ChartsScatter> */}


            


        </div>
    )
}

export default Panel;