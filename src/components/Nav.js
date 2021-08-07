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
        <ul className="flex-row">

            {navStates.map((navlink) => (
                <li
                    className={`mx-1 
                            ${currentNavState === navlink && 'navActive'}`}
                    key={navlink}
                >
                    <span onClick={() => {
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