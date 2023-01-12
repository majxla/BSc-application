
import React, {useEffect} from 'react';
import "./style.css";
import UserLogin from './userLogin';
import UserRegister from './userRegister';
import Profile from './profile';
import axios from 'axios';



const User = (props) => {


    const [authenticated, setAuthenticated] = React.useState(false);

    useEffect(() => {
        const loggedUser = localStorage.getItem('accessToken');
        if (!!loggedUser) {
            setAuthenticated(true);
        } 
    }, []);

    const uError = {
        changeShow: false,
        text: "",
    }

    const [userError, setUserError] = React.useState(uError);

    const setUErrorTrue = (message) => {

        setUserError((prevState) => ({
            ...prevState,
            text: message,
            changeShow: true,
        }))
    }


    const logIn = () => {
        setAuthenticated(true)
        props.login();
    }

    const logOut = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');

        window.location.reload(false);

    }

    if (authenticated) {
        return <Profile logout={logOut.bind(this)}/>
    }


    return (


        <div className='user-container'>
            <div className='user-panel'>

                {userError.changeShow ? 
                <div className='user-error'>{userError.text}</div>
                :
                null
                }

                <div className='user-credentials'>
                    <div className='user-login'>
                        <p>Logowanie</p>
                        <UserLogin login={logIn.bind(this)} setUErrorTrue={setUErrorTrue.bind(this)}></UserLogin>
                    </div>

                    <div className='spliter'></div>
                    
                    <div className='user-register'>
                        <p>Rejestracja</p>
                        <UserRegister setUErrorTrue={setUErrorTrue.bind(this)}></UserRegister>
                    </div>
                    
                </div>
            </div>
        </div>


    )
}

export default User;