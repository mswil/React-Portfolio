import React from 'react'
import Nav from './Nav';

function Header(props) {

    const {
        navStates,
        currentNavState,
        setNavState
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">Molly Wilson</a>
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
