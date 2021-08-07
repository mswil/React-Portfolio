import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';

function App() {

  const navStates = [
    "About",
    "Portfolio",
    "Contact",
    "Resume"
  ];

  const [currentNavState, setNavState] = useState(navStates[0]);


  return (
    <div>
      <Header
        navStates={navStates}
        currentNavState={currentNavState}
        setNavState={setNavState}
      ></Header>
    </div>
  );
}

export default App;
