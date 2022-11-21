
import React, {useEffect} from 'react';
import Axios from 'axios';
import "./style.css";
import UserLogin from './userLogin';
import UserRegister from './userRegister';
import Profile from './profile';



const User = (props) => {


    const [authenticated, setAuthenticated] = React.useState(null);

    useEffect(() => {
        const loggedUser = localStorage.getItem('accessToken');
        if (!!loggedUser) {
            setAuthenticated(true);
        }
    }, []);

    if (authenticated) {
        
        return (
            <Profile></Profile>
        )
    }

    return (



            <div className='user-panel'>

                <div className='user-credentials'>
                    <div className='user-login'>
                        <p>Logowanie</p>
                        <UserLogin></UserLogin>
                    </div>

                    <div className='spliter'></div>
                    
                    <div className='user-register'>
                        <p>Rejestracja</p>
                        <UserRegister></UserRegister>
                    </div>
                    
                </div>
            </div>


    )
}

export default User;