import React from 'react';
import Container from "../components/Container";
import ProjectCard from '../components/ProjectCard';

function Projects() {

    return (
        <Container>
            <div id="projects" className="row mt-5">
                <div className="jumbotron col-md-10 bg-dark adjustLeft">
                    <div className="d-flex justify-content-start neonText leftHeader"><h1>Projects</h1></div>
                    <Container className="sectionContent">
                        <ProjectCard
                        />
                    </Container>
                </div>
            </div>
        </Container>
    )
}

export default Projects;