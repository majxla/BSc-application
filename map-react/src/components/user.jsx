
import React, {useEffect} from 'react';
import "./style.css";
import UserLogin from './userLogin';
import UserRegister from './userRegister';
import Profile from './profile';



const User = (props) => {


    const [authenticated, setAuthenticated] = React.useState(true);

    useEffect(() => {
        const loggedUser = localStorage.getItem('accessToken');
        if (!!loggedUser) {
            setAuthenticated(true);
        } 
    }, []);

    const logIn = () => {
        setAuthenticated(true)
        props.login();
    }

    const logOut = () => {
        setAuthenticated(false)
    }

    if (authenticated) {
        return <Profile/>
    }

    return (


        <div className='user-container'>
            <div className='user-panel'>

                <div className='user-credentials'>
                    <div className='user-login'>
                        <p>Logowanie</p>
                        <UserLogin login={logIn.bind(this)}></UserLogin>
                    </div>

                    <div className='spliter'></div>
                    
                    <div className='user-register'>
                        <p>Rejestracja</p>
                        <UserRegister></UserRegister>
                    </div>
                    
                </div>
            </div>
        </div>


    )
}

export default User;