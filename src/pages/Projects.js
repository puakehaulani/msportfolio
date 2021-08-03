import React from 'react';
import Container from "../components/Container";
import ProjectCard from '../components/ProjectCard';

function Projects() {

    return (
        <div id="projects" className="row mt-5">
            <div className="jumbotron col-md-10 bg-dark adjustLeft">
                <Container>
                    <ProjectCard
                    />
                </Container>
            </div>
        </div>
    )
}

export default Projects;