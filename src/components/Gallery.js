import Project from "./Project";
const projects = require('../projects.json');


function Gallery() {

    return (
        <div className='row d-flex justify-content-center my-2'>
            {projects.map(project => {
                return <Project project={project} key={project.title}></Project>
            })}
        </div>
    )
}

export default Gallery;
