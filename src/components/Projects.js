import React from 'react';
import Container from "react-bootstrap/Container";
import ProjectCard from '../components/ProjectCard';

function Projects() {
    return (
        <Container fluid="true" id="projects" className="jumbotron bg-dark adjustLeft mt-5">
            <h1 className="d-flex justify-content-start neonText leftHeader">
                Projects
            </h1>

            <div className="sectionContent">
                <ProjectCard />
            </div>
        </Container>
    )
}

export default Projects;