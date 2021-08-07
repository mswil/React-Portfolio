function Project({project}) {

    return (
        <div className="flex-row">
            {/* <img
                src={require(project.image).default}
                alt={project.title}
                className="img-thumbnail mx-1"
                key={project.title}
            /> */}
            <h2>{project.title}</h2>
            <h3>{project.demoLink}</h3>
            <h3>{project.gitHubLink}</h3>

        </div>
    );
}
export default Project;
