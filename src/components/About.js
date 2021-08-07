
function About({setNavState}) {
    return (
        <div className="jumbotron bg-light px-4 py-5">
            <h1 className="display-4">Full Stack Developer</h1>
            <p className="lead">Welcome!</p>
            <hr className="my-4"></hr>
            <p>I am Molly Wilson, a full stack developer based in Prosper, TX</p>
            <div className="text-end">
                <span className="btn btn-lg" onClick={()=> setNavState('Portfolio')} >Learn more</span>
            </div>
        </div>
    );
}


export default About;
