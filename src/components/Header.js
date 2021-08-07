import React from 'react'
import Nav from './Nav';

function Header(props) {

    const {
        navStates,
        currentNavState,
        setNavState
    } = props;

    return (
        <header className="flex-row px-1 navbar navbar-light bg-light px-3">
            <h2>
                <a className="navbar-brand" href="/">Molly Wilson</a>
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
