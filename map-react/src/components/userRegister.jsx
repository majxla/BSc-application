import {useEffect, useState} from 'react';
import Axios from 'axios';
import "./style.css";

const UserRegister = (props) => {

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);


        try {
            
            const response = await Axios.post(`api/register`,
            JSON.stringify({email, username, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response));

            if (response.data['message']) {
                
                setSuccess(true);

                setEmail("");
                setPassword("");

            }

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

            {success ? 
            <div className='register-success'>
                Rejestracja przebiegła pomyślnie.
                <br></br>
                Zaloguj się.
            
            </div>
        :
            <form onSubmit={handleSubmit}>
                
                <label>Email:</label>
                <input 
                    type="email"
                    id='email'
                    autoComplete='off'    
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required>
                </input>

                <label>Nazwa użytkownika:</label>
                <input 
                    type="text"
                    id="username"
                    autoComplete='off'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
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

                <div className='button-register'><button>Zarejestruj się</button></div>
            </form>

            }

        </div>
        
    )
}

export default UserRegister;
