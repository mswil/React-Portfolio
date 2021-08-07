function Project({ project }) {

    return (
        <div className="card mx-3 my-2">
            <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
            />
            <div className="card-body">
                    <div className="card-text text-center w-100">
                        <p className="w-100 text-prime border-bottom h4 website-name">
                            {project.title}
                        </p>
                        <p className="w-100 text-light-second technology">
                            {project.tech}
                        </p>
                        {project.gitHubLink? <a className="btn btn-lg btn-block my-1" href={project.gitHubLink} target='_blank' role="button">View GitHub</a> : <br></br>}
                        {project.demoLink? <a className="btn btn-lg btn-block my-1" href={project.demoLink} target='_blank' role="button">Live Demo</a> : <br></br>}
                    </div>

            </div>

            {/* <h2>{project.title}</h2>
            <h3>{project.demoLink}</h3>
            <h3>{project.gitHubLink}</h3> */}


        </div>


    );
}
export default Project;
