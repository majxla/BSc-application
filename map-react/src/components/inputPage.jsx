import React from "react";
import Map from "./map";
import "./style.css";
import User from "./user";

function InputPage(props) {

    // const RenderTitle = () => {
    //     switch (props.code) {
    //         case "map":
    //             return <h1>MAP</h1>;
    //         case "user":
    //             return <h1>USER</h1>;
    //     }
    // }

    const RenderContent = () => {

        const mouseCoords = {
            x: 0,
            y: 0,
        };

        const [getMouse, setMouse] = React.useState(mouseCoords);

        const onMouseMove = (e) => {
            
            const bounds = e.currentTarget.getBoundingClientRect();
            //console.log(e.currentTarget);
            const x = e.clientX - bounds.left;
            const y = e.clientY;
            setMouse({x: x, y: y})
        }


        switch (props.code) {
            case "map":
                return (
                    <div className="container">
                        
                        <div className="map-container" onMouseMove={onMouseMove.bind(this)}>
                        <Map />
                        <p>Mouse coordinates: { getMouse.x } { getMouse.y }</p>
                        </div>
                    </div>
                )
            case "user":
                // return <h1>USER</h1>;
                return (
                    <div className="user-container">
                        <User/>
                    </div>
                )
        }
    }

    return (
        <div>

            <div className="map">
                <RenderContent />
            </div>

            {/* <div>
                <RenderTitle />
            </div> */}
        </div>
    )
}

export default InputPage;