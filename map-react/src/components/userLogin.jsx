import React, {useEffect} from 'react';
import "./style.css";

const UserLogin = (props) => {

    return (

        <div>
            <form>
                
                <label>Nazwa użytkownika:</label>
                <input type="text"></input>

                <label>Hasło:</label>
                <input type="password"></input>

            </form>
        </div>
    )
}

export default UserLogin;
