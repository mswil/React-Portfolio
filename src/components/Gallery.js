import Project from "./Project";
const projects = require('../projects.json');


function Gallery() {
    return (
        projects.map(project => {
            return <Project project={project} key={project.title}></Project>
        })
    )
}

export default Gallery;
