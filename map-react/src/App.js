import React from 'react'
import NavItems from './components/navItems';
import InputPage from './components/inputPage';
import "./App.css";

function App() {

  const token = localStorage.getItem('accessToken');



  const nav = {
    target: 'map'
  }

  const [getNav, setNav] = React.useState(nav);

  const handleClick = (val) => {
    setNav({target: val});
  }

  return (
    <div className='App'>

      <div className='navigation'>
        <NavItems handleClick={handleClick}/>
      </div>

      <div>
      <InputPage code={getNav.target}/>
      </div>

    </div>
  );
}

export default App;
