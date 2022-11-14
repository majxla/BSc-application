import React from "react";
import NavButton from "./navButton";

function NavItems(props) {

    return (
        <div className="navWrapper">
            <NavButton name='Strona główna' value='map' handleClick={props.handleClick}></NavButton>
            <NavButton name='Użytkownik' value='user' handleClick={props.handleClick}></NavButton>
        </div>
    )
}

export default NavItems;