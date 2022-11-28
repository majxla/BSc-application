import React, { useEffect, useState } from "react";
import NavButton from "./navButton";
import { Link } from 'react-router-dom';


//FIRST VERION - DELAY

function NavItems(props) {


    const user = localStorage.getItem('user');

    if (!!user){
        return (
            <div className="navWrapper">
                <NavButton name='Strona główna' value='map' handleClick={props.handleClick}></NavButton>
                <NavButton name={JSON.parse(user)['username']} value='user' handleClick={props.handleClick}></NavButton>
            </div>
        )
    }

    return (
        <div className="navWrapper">
            <NavButton name='Strona główna' value='map' handleClick={props.handleClick}></NavButton>
            <NavButton name='Użytkownik' value='user' handleClick={props.handleClick}></NavButton>
        </div>
    )
}


//SECOND VERSION - ACCEPTED

const NavBar = (props) => {

    if (props.isLoggedIn) {
        const user = localStorage.getItem('user');
        return (

            <nav className="navWrapper">
                <Link to="/" className="navButton"> Mapa </Link>
                <Link to="/user" className="navButton"> {JSON.parse(user)['username']} </Link>
            </nav>

        )   
    } else {

        return (

            <nav className="navWrapper">
                <Link to="/" className="navButton"> Mapa </Link>
                <Link to="/user" className="navButton"> Moje konto </Link>
            </nav>

        )

    }

}

// export default NavItems;
export default NavBar;