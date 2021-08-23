import React from 'react';
import project from "../projects.json";

function ProjectCard() {
    const projectDisplay = project.project.map((item) =>
        <div className="card col-md-3 mb-4 mx-2 bg-dark text-white" key={item.title}>
            <img src={item.thumbnail} className="card-img mt-3" alt={item.title} />
            <div className="card-img-overlay h-75">
                <h5 className="card-title d-flex justify-content-center mt-5">{item.title}</h5>
                <p className="card-text text-center">{item.about}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <a href={item.deployment} className="mx-2">deployment</a> |
                <a href={item.repo} className="mx-2">repository</a>
            </div>
        </div>
    )
    return (
        <div className="row d-flex justify-content-center">
            {projectDisplay}
        </div>
    )
}

export default ProjectCard