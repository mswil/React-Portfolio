
function About({ setNavState }) {
    return (
        <div>
            <div className="jumbotron bg-light px-4 py-5">
                <h1 className="display-4">Full Stack Developer</h1>
                <p className="lead">Welcome!</p>
                <hr className="my-4"></hr>
                <p>I am Molly Wilson, a full stack developer based in Prosper, TX</p>
                <div className="text-end">
                    <span className="btn btn-lg" onClick={() => setNavState('Portfolio')} >Learn more</span>
                </div>
            </div>

            <div className="about container-fluid bg-prime py-4">

                <div className="media row mx-3">
                    <div className="profile-pic col-12 col-sm-4 col-md-3 order-sm-last mb-3 text-center">
                        <img src="./assets/images/Profile-Picture.png" alt="Molly Wilson" className="img-thumbnail col-9 col-sm-12"></img>
                    </div>

                    <div className="media-body col">
                        <h1 className="mt-0 mb-1 display-4">About</h1>
                        <blockquote className="h4 ms-2 ps-2">
                            Purpose-driven full stack developer with a passion to grow technically and produce quality products.
                        </blockquote>
                        <p>I’ve continuously sought out opportunities and challenges that are meaningful to me. Although my
                            professional path has taken a few twists — from studying electrical and computer engineering, to
                            being a volunteer at a non-profit, to pursuing and obtaining a real estate license — I've never
                            stopped engaging my passion to solve problems and serve others.</p>

                        <p>As a web developer, I enjoy using my attention to detail, my love for making
                            things, and my mission-driven work ethic to assist people in achieving their goals. I’m excited to
                            make a meaningful impact at a high growth company.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default About;
