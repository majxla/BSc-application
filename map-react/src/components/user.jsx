import React, {useEffect} from 'react';
import Axios from 'axios';
import "./style.css";
import UserLogin from './userLogin';
import UserRegister from './userRegister';



const User = (props) => {

    return (

        <div className='user-panel'>

        <div className='user-credentials'>
            <div className='user-login'>
                <p>Logowanie</p>
                <UserLogin></UserLogin>
                <div className='button-login'><button>Zaloguj się</button></div>
            </div>

            <div className='spliter'></div>
            
            <div className='user-register'>
                <p>Rejestracja</p>
                <UserRegister></UserRegister>
                <div className='button-register'><button>Zarejestruj się</button></div>
            </div>
            
        </div>
        </div>

    )
}

export default User;