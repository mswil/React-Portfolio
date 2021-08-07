import './App.css';
import React, { useState } from 'react';

import Header from './components/Header';
// import About from './components/About'
import Gallery from './components/Gallery';
// import Contact from './components/Contact';
// import Resume from './components/Resume'
import Footer from './components/Footer';


function App() {

  const navStates = [
    "About",
    "Portfolio",
    "Contact",
    "Resume"
  ];

  const [currentNavState, setNavState] = useState(navStates[0]);

  const renderPage = () => {
    switch (currentNavState) {
      // case 'About':
      //   return <About></About>
      case 'Portfolio':
        return <Gallery></Gallery>
      // case 'Contact':
      //   return <Contact></Contact>
      // case 'Resume':
      //   return <Resume></Resume>
      default:
        // return <About></About>
    }
  }

  return (
      <div>
        <Header
          navStates={navStates}
          currentNavState={currentNavState}
          setNavState={setNavState}
        ></Header>
        <main>
          {renderPage()}
        </main>
        <Footer></Footer>
      </div>
  );
}

export default App;
