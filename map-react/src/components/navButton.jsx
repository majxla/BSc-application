import React from "react";

function NavButton(props) {

    const clickHandler = (e) => {
        props.handleClick(props.value);
    }

    return (
        <button className="navButton" onClick={clickHandler.bind(this)}>{props.name}</button>
    )
}

export default NavButton;