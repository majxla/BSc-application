import React, {useEffect} from 'react';
import "./style.css";

const UserRegister = (props) => {

    return (

        <div>
            <form>
                
                <label>Email:</label>
                <input type="email"></input>

                <label>Nazwa użytkownika:</label>
                <input type="text"></input>

                <label>Hasło:</label>
                <input type="password"></input>

                <div className='button-register'><button>Zarejestruj się</button></div>
            </form>
            {/* <div className='button-register'><button>Zarejestruj się</button></div> */}
        </div>
    )
}

export default UserRegister;
