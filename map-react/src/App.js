import { useState, useEffect } from 'react'
import NavItems from './components/navItems';
import InputPage from './components/inputPage';

import "./App.css";

import Map from './components/map';
import User from './components/user';
import NavBar from './components/navItems';
import Protected from './components/protected';
import Profile from './components/profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  // FIRST VERSION - DELAY

  // const nav = {
  //   target: 'map'
  // }

  // const [getNav, setNav] = useState(nav);

  // const handleClick = (val) => {
  //   setNav({target: val});
  // }

  // return (
  //   <div className='App'>

  //     <div className='navigation'>
  //       <NavItems handleClick={handleClick}/>
  //     </div>

  //     <div>
  //     <InputPage code={getNav.target}/>
  //     </div>

  //   </div>
  // );


  // SECOND VERSION - ACCEPTED
  
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!!token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  const logIn = () => {
    setIsLoggedIn(true)
  }



  return (
    <BrowserRouter>
    
      <NavBar isLoggedIn={isLoggedIn}/>

      <Routes>

          <Route exact path="/" element={<Map user={isLoggedIn}/>}></Route>
          <Route exact path="/user" element={<User login={logIn.bind(this)}/>}></Route>
          <Route exact path="/profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }></Route>

      </Routes>

    </BrowserRouter>
    
  )
}

export default App;
