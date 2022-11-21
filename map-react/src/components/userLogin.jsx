import React, {useEffect} from 'react';
import Axios from 'axios';
import "./style.css";
import Profile from './profile';


const UserLogin = (props) => {


    const userRef = React.useRef();
    const errRef = React.useRef();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errMsg, setErrMsg] = React.useState("");
    const [success, setSuccess] = React.useState(true);

    // React.useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // React.useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);

        try {
            
            const response = await Axios.post(`api/login`,
            JSON.stringify({email, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response));


            localStorage.setItem('accessToken', response.data['jwt']);
            localStorage.setItem('user', JSON.stringify(response.data['user']));

            setEmail("");
            setPassword("");
            setSuccess(true);

        } catch (err) {
            
            if (!err.response) {
                setErrMsg('Brak odpowiedzi.');
            } else if (err.response?.status === 400) {
                setErrMsg('Brak username albo password.');
            } else if (err.response?.status === 401) {
                setErrMsg('Brak autoryzacji.');
            } else {
                setErrMsg('Dupa.');
            }

        }

    }

    return (

        <div>

            {
            !!localStorage.getItem('accessToken') 
            // success
            ? (
                <section>
                    <h1>Zalogowano</h1>
                </section>
            ) : (

                <section>
                    <form onSubmit={handleSubmit}>

                        <label>Nazwa użytkownika:</label>
                        <input 
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required>
                        </input>

                        <label>Hasło:</label>
                        <input 
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required>
                        </input>

                        <div className='button-login'><button>Zaloguj się</button></div>
                    </form>
                </section>
                )}
        </div>
    )
}

export default UserLogin;
