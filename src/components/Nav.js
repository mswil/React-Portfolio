import { useEffect } from 'react'

function Nav(props) {

    const {
        navStates,
        currentNavState,
        setNavState
    } = props;

    useEffect(() => {
        document.title = currentNavState
    }, [currentNavState]);

    return (
        <ul className="flex-row navbar-nav">

            {navStates.map((navlink) => (
                <li
                    className={`mx-1 nav-item
                            ${currentNavState === navlink && 'navActive'}`}
                    key={navlink}
                >
                    <span className="nav-link" onClick={() => {
                        console.log(navlink)
                        setNavState(navlink)}}>
                        {navlink}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Nav;