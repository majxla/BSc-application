import {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import "./style.css";


const UserLogin = (props) => {


    const userRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    // const [isLoggedIn, setIsLoggedIn] = useState(null);

    // useEffect(() => {
    //     const token = localStorage.getItem('accessToken');
    //     if (!!token) {
    //       setIsLoggedIn(true)
    //     } else {
    //       setIsLoggedIn(false)
    //     }
    //   }, []);

    useEffect(() => {
        if (success) {
            props.login()
        }
      }, [success])

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
                console.log('Brak odpowiedzi.');
            } else if (err.response?.status === 400) {
                console.log('Brak username albo password.');
            } else if (err.response?.status === 401) {
                console.log('Brak autoryzacji.');
            } else {
                console.log('Dupa.');
            }

        }

    }

    return (

        <div>
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

        </div>
    )
}

export default UserLogin;
