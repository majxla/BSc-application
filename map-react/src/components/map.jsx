import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline, useMap} from 'react-leaflet';
import * as L from 'leaflet';
import Axios from 'axios';
import "./style.css";
import MyPopup from './myPopup';
import Panel from './panel'
import ChartsPanel from './chartsPanel';
import FavPopup from './FavPopup';




const Map = (props) => {

    function minToHAndMin(totalMin) {
        const h = Math.floor(totalMin/60);
        const min = Math.round(totalMin % 60);

        return {h, min}
    }

    const LeafIcon = L.Icon.extend({
        options: {}
    });

    

    const greenIcon = new LeafIcon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]

    });

    const [getGreenIcon, setGreenIcon] = React.useState(greenIcon);

    
    const redIcon = new LeafIcon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const [getRedIcon, setBlueIcon] = React.useState(redIcon);


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

        console.log(x);
        console.log(y);

        setCoords((prevState) => ({
            ...prevState,
            x: x, 
            y: y
        }))

    }

    const error = {
        show: false,
        changeShow: false,
        text: "",
    }

    const [getError, setError] = React.useState(error);

    const setErrorTrue = (message) => {

        setError((prevState) => ({
            ...prevState,
            text: message,
            changeShow: true,
        }))

        setTimeout(() => {
            setError((prevState) => ({
                ...prevState,
                show: false, 
                text: "",
                changeShow: false,
            }))
        }, 3000)
    }

    const setErrorFalse = () => {

        setError((prevState) => ({
            ...prevState,
            show: false, 
            text: "",
            changeShow: false,
        }))
    }

    React.useEffect(() => {
        if (getError.changeShow) {

            setError((prevState) => ({
                ...prevState,
                show: true,
            }))
        }

    }, [getError.text])



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

    const pathColor = {color: 'black'}
    const path = {
        display: false,
        showPath: false,
        polyline: null,
    }

    const [btnDisabled, setBtnDisabled] = React.useState(true);

    const mapStyle = {
        gridTemplateRows: '2fr',
    };

    const [getMapStyle, setMapStyle] = React.useState(mapStyle);

    const plotPanelStyle = {
        gridRow: '2',
        gridColumn: '1 / 5',
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        margin: "auto auto",
        marginTop: "20px",
        marginBottom: "20px",
        gap: "10vw",

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
            setBtnDisabled(false);
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

            // setError((prevState) => ({
            //     ...prevState,
            //     show: false, 
            //     text: "",
            //     changeShow: false,
            // }))
            setErrorFalse();
        })
        .catch((error) => {
            console.log(error);

            setErrorTrue("Nie można wygenerować wykresów.");
        })
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

    const inputChangeToCoordsStart = (coords) => {
        inputStartChangeHandler(coords);
    }

    const inputEndChangeHandler = (value) => {
        setInput((prevState) => ({
            ...prevState,
            end: value,
        }))
    }

    const inputChangeToCoordsEnd = (coords) => {
        inputEndChangeHandler(coords);
    }

    const pathDetails = {
        durationMin: "---",
        durationH: "---",
        distance: "---",
    }

    const [getPathDetails, setPathDetails] = React.useState(pathDetails);
    

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
            // console.log(res.data.path)



            setPath((prevState) => ({
                ...prevState,
                polyline: res.data.path,
                display: true,
            }))

            const duration = res.data.duration;
            const h = minToHAndMin(duration).h;
            const m = minToHAndMin(duration).min;

            setPathDetails((prevState) => ({
                ...prevState,
                durationMin: m,
                durationH: h,
                distance: res.data.distance

            }))

            // setError((prevState) => ({
            //     ...prevState,
            //     show: false, 
            //     text: "",
            //     changeShow: false,
            // }))

            setErrorFalse();

            // setBtnDisabled(false);

        })
        .catch((error) => {
            console.log(error);

            setErrorTrue("Nie można wyznaczyć trasy.");


        })
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

    const startMarkerRef = React.useRef(null);
    const endMarkerRef = React.useRef(null);

    const markerStartDrag = React.useMemo(
        () => ({
            dragend() {

                const marker = startMarkerRef.current;
                console.log(marker.getLatLng());
                setMarker((prevState) => ({
                    ...prevState,
                    start: true,
                    marker_start: marker.getLatLng(),
                    marker_start_string: true,
                }))
        
                if (getMarker.marker_end !== null){
                    togglePost();
                }

            }
        })
    )

    const markerEndDrag = React.useMemo(
        () => ({
            dragend() {

                const marker = endMarkerRef.current;
                console.log(marker.getLatLng());
                setMarker((prevState) => ({
                    ...prevState,
                    end: true,
                    marker_end: marker.getLatLng(),
                    marker_end_string: true,
                }))
        
                if (getMarker.marker_start !== null){
                    togglePost();
                }

            }
        })
    )


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

    // const ResetMarkerStartPanel = () => {
    //     setMarker((prevState) => ({
    //         ...prevState,
    //         start: false, 
    //         marker_start: null,
    //         marker_start_string: false,
    //     }))
    // }

    const centerMap = {
        center: [50.775656, 15.758092]
    }

    const [getCenterMap, setCenterMap] = React.useState(centerMap);

    const SetMapCenter = (coords) => {

        console.log(coords);
        setCenterMap((prevState) => ({
            ...prevState,
            center: coords,
        }))
        console.log(getCenterMap);

    }

    const ChangeMapCenter = () => {

        const map = useMap();
        map.setView(getCenterMap.center);

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

                setCoords((prevState) => ({
                    ...prevState,
                    coords: coords,
                }))
                

                togglePopup();

            },
            contextmenu: (e) => {
                lat = e.latlng.lat;
                lng = e.latlng.lng;
                coords = e.latlng;

                setCoords((prevState) => ({
                    ...prevState,
                    coords: coords,
                }))
                

                togglePopup();
            }
        })
    }

    // const [favPopup, setFavPopup] = React.useState(false);
    const [favPopup, setFavPopup] = React.useState(false);


    const favBtnOpen = () => {
        setFavPopup(true);
    }

    const favBtnClose = () => {
        setFavPopup(false);
    }



    return (
        <div className="map-view" style={getMapStyle} onClick={onMouseClick.bind(this)} onContextMenu={onMouseClick.bind(this)}>

        <MapContainer className='map-only'
        center={getCenterMap.center} 
        zoom={13} 
        scrollWheelZoom={true}
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            <ClickHandler />
            <ChangeMapCenter/>

        {getMarker.start ?
        <Marker 
            position={getMarker.marker_start}
            draggable={true}
            eventHandlers={markerStartDrag}
            ref={startMarkerRef}
            icon={getGreenIcon}
                >
            <Popup>
                <h4>Punkt początkowy</h4>
                <p>Lat: {getMarker.marker_start.lat}, Lng: {getMarker.marker_start.lng}</p>
            </Popup>
        </Marker>
        : null}

        {getMarker.end ?
        <Marker 
            position={getMarker.marker_end}
            draggable={true}
            eventHandlers={markerEndDrag}
            ref={endMarkerRef}
            icon={getRedIcon}
            >
            <Popup>
                <h4>Punkt końcowy</h4>
                <p>Lat: {getMarker.marker_end.lat}, Lng: {getMarker.marker_end.lng}</p>
            </Popup>
        </Marker>
        : null}

        {getPath.showPath ? 
            <Polyline pathOptions={pathColor} positions={getPath.polyline}/>
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
                user={props.user}
                btnDisabled={btnDisabled}
                btnHandler={favBtnOpen.bind(this)}
                durationMin={getPathDetails.durationMin}
                durationH={getPathDetails.durationH}
                distance={getPathDetails.distance}
                error={getError}
                setErrorTrue={setErrorTrue.bind(this)}
                setErrorFalse={setErrorFalse.bind(this)}
                changeCenter={SetMapCenter.bind(this)}
                startToCoords={inputChangeToCoordsStart.bind(this)}
                endToCoords={inputChangeToCoordsEnd.bind(this)}
        /> 

        {getPlot.show ? 
        <ChartsPanel setStyle={getPanelStyle} plotData={getPlot}></ChartsPanel>
        : null}

        {favPopup ? 
        <FavPopup 
            close={favBtnClose.bind(this)} 
            polyline={getPath.polyline} 
            startPoint={getMarker.marker_start}
            endPoint={getMarker.marker_end}
            altitude={getPlot.altitude}
            xaxis={getPlot.xaxis}
            surface={getPlot.surface}
            rows={getPlot.rows}
            cols={getPlot.cols}
            setErrorTrue={setErrorTrue.bind(this)}
            setErrorFalse={setErrorFalse.bind(this)}/>
        : null}

        </div>



    )
}

export default Map;
