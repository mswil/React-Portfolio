import React from 'react'
import Nav from './Nav';

function Header(props) {

    const {
        navStates,
        currentNavState,
        setNavState
    } = props;

    return (
        <header className="flex-row px-1 navbar navbar-light px-3 fw-light">
            <h2>
                <span className="navbar-brand nav-link fw-light" onClick={()=> setNavState('About')}>Molly Wilson</span>
            </h2>
            <Nav
                navStates={navStates}
                currentNavState={currentNavState}
                setNavState={setNavState}
            ></Nav>
        </header>
    );
}

export default Header;
