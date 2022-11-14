import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline} from 'react-leaflet';
import Axios from 'axios';
import "./style.css";
import MyPopup from './myPopup';
import Panel from './panel'
import ChartsPanel from './chartsPanel';




const Map = (props) => {


    // popup positioning
    const popupCoords = {
        x: 0,
        y: 0,
        coords: 0,
    };

    const [getCoords, setCoords] = React.useState(popupCoords);

    const onMouseClick = (e) => {

        const x = e.clientX;
        const y = e.clientY;

        setCoords((prevState) => ({
            ...prevState,
            x: x, 
            y: y
        }))

    }


    // Showing Popup
    const popupState = {
        showPopup: false
    }

    const [getState, setState] = React.useState(popupState);

    const togglePopup = () => {
        setState({showPopup: !getState.showPopup});
    }


    // Setting markers' coordinates and posting to backend
    const markers = {
        start: false,
        end: false,
        marker_start: null,
        marker_end: null,
        marker_start_string: false,
        marker_end_string: false,
        post: false,
    }

    const [getMarker, setMarker] = React.useState(markers);

    const purple = {color: 'purple'}
    const path = {
        display: false,
        showPath: false,
        polyline: null,
    }

    const mapStyle = {
        gridTemplateRows: '2fr',
    };

    const [getMapStyle, setMapStyle] = React.useState(mapStyle);

    const plotPanelStyle = {
        gridRow: '2',
        gridColumn: '1 / 5',
    }

    const [getPanelStyle, setPanelStyle] = React.useState(plotPanelStyle);
    
    const plot = {
        altitude: null,
        altitudeLoad: null,
        xaxis: null,
        surface: null,
        rows: null,
        cols: null,
        show: false,
        display:false
    }

    const [getPlot, setPlot] = React.useState(plot);


    useEffect(() => {
        if (getPlot.display){
            setPlot((prevState) => ({
                ...prevState,
                show: true
            }));
            setMapStyle((prevState) => ({
                ...prevState,
                gridTemplateRows: '2fr 1.5fr',
            }))
        }
    }, [getPlot.altitude, getPlot.xaxis])

    



    const getPlotData = (params) => {
        Axios.get(`raster/`, {
            params: {
                'array': {'polyline': getPath.polyline}
            }
        }, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(res => {
            // console.log(res.data)
            // console.log(res.data.altitude)
            // console.log(res.data.xaxis)

            console.log(res.data.bandData)

            setPlot((prevState) => ({
                ...prevState,
                altitude: res.data.altitude,
                xaxis: res.data.xaxis,
                surface: res.data.bandData,
                rows: res.data.row,
                cols: res.data.col,
                display: true
            }))
        })
        .catch(error => console.log(error))
    }

    const [getPath, setPath] = React.useState(path);

    const togglePath = () => {
        setPath((prevState) => ({
            ...prevState,
            showPath: true,
        }))
    }


    useEffect(() => {
        if (getPath.display){
            console.log(getPath.polyline)
            togglePath();
            getPlotData();
        }
    }, [getPath.polyline])


    // Inputs settings
    const inputValues = {
        start: "",
        end: "",
    }
    const [getInput, setInput] = React.useState(inputValues);

    const inputStartChangeHandler = (value) => {
        setInput((prevState) => ({
            ...prevState,
            start: value,
        }))
    }

    const inputEndChangeHandler = (value) => {
        setInput((prevState) => ({
            ...prevState,
            end: value,
        }))
    }
    

    const postCoords = (params) => {
        Axios.get(`coords/`, {
            params: {
                'startCoords': getMarker.marker_start,
                'endCoords': getMarker.marker_end,
            }    
        }, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(res => {
            // togglePath();
            // console.log(res);
            // console.log(res.data)
            // console.log(typeof(res.data))

            setPath((prevState) => ({
                ...prevState,
                polyline: res.data,
                display: true,
            }))

        })
        .catch(error => console.log(error))
    }


    useEffect(() => {
        if (getMarker.post) {
            //console.log("japierdole");
            console.log(`coordinates start: ${getMarker.marker_start}`);
            console.log(`coordinates end: ${getMarker.marker_end}`);
            
            postCoords();
        }

        if (getMarker.start && getMarker.marker_start_string){
            let inputStart = `${getMarker.marker_start.lat}, ${getMarker.marker_start.lng}`
            setInput((prevState) => ({
                ...prevState,
                start: inputStart,
            }))    
        }

        if (getMarker.end && getMarker.marker_end_string) {
            let inputEnd = `${getMarker.marker_end.lat}, ${getMarker.marker_end.lng}`
            setInput((prevState) => ({
                ...prevState,
                end: inputEnd,
            }))
        }
    }, [getMarker.marker_start, getMarker.marker_end]);


    const togglePost = ()  => {
        setMarker((prevState) => ({
            ...prevState,
            post: true,
        }))
    }


    // Setting markers on start and end 
    const SetMarkerStart = () => {

        setMarker((prevState) => ({
            ...prevState,
            start: true,
            marker_start: getCoords.coords,
            marker_start_string: true,
        }))

        if (getMarker.marker_end !== null){
            togglePost();
        }

        togglePopup();
    }

    const SetMarkerEnd = () => {

        setMarker((prevState) => ({
            ...prevState,
            end: true,
            marker_end: getCoords.coords,
            marker_end_string: true,
        }))

        if (getMarker.marker_start !== null){
            togglePost();
        }

        togglePopup();
    }

    const SetMarkerStartPanel = (coords) => {

        setMarker((prevState) => ({
            ...prevState,
            start: true,
            marker_start: coords,
            marker_start_string: false,
        }))

        if (getMarker.marker_end !== null){
            togglePost();
        }
    }

    const SetMarkerEndPanel = (coords) => {

        setMarker((prevState) => ({
            ...prevState,
            end: true,
            marker_end: coords,
            marker_end_string: false,
        }))

        if (getMarker.marker_start !== null){
            togglePost();
        }

    }

    

    // Clicking map => Popup
    const ClickHandler = () => {

        let lat;
        let lng;
        let coords;


        const clickMap = useMapEvents({
            click: (e) => {
                lat = e.latlng.lat;
                lng = e.latlng.lng;
                coords = e.latlng;

                console.log(lat)
                console.log(lng)

                setCoords((prevState) => ({
                    ...prevState,
                    coords: coords
                }))
                

                togglePopup();

            }
        })
    }

    return (
        <div className="map-view" style={getMapStyle} onClick={onMouseClick.bind(this)}>

        <MapContainer className='map-only'
        center={[50.775656, 15.758092]} 
        zoom={13} 
        scrollWheelZoom={true}
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <ClickHandler />

        {getMarker.start ?
        <Marker position={getMarker.marker_start}>
            <Popup>
                <h4>Punkt początkowy</h4>
                <p>Lat: {getMarker.marker_start.lat}, Lng: {getMarker.marker_start.lng}</p>
            </Popup>
        </Marker>
        : null}

        {getMarker.end ?
        <Marker position={getMarker.marker_end}>
            <Popup>
                <h4>Punkt końcowy</h4>
                <p>Lat: {getMarker.marker_end.lat}, Lng: {getMarker.marker_end.lng}</p>
            </Popup>
        </Marker>
        : null}

        {getPath.showPath ? 
            <Polyline pathOptions={purple} positions={getPath.polyline}/>
        : null}
        {/* <Polyline pathOptions={purple} positions={polyline}/> */}

        </MapContainer>


        {getState.showPopup ? 
        <MyPopup closePopup={togglePopup.bind(this)} position={getCoords} start={SetMarkerStart.bind(this)} end={SetMarkerEnd.bind(this)}/>
        : null}

        <Panel  values={getInput} 
                startChangeHandler={inputStartChangeHandler.bind(this)} 
                endChangeHandler={inputEndChangeHandler.bind(this)}
                startSetMarker={SetMarkerStartPanel.bind(this)}
                endSetMarker={SetMarkerEndPanel.bind(this)}
                plotData={getPlot}
                /> 

        {getPlot.show ? 
        <ChartsPanel style={getPanelStyle} plotData={getPlot}></ChartsPanel>
        : null}

        </div>


    )
}

export default Map;
