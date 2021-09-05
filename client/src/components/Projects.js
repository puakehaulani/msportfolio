import React from 'react';
import Container from "react-bootstrap/Container";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

import project from "../projects.json";

function Projects() {
    return (
        <Container fluid="true" id="projects" className="jumbotron bg-dark adjustLeft mt-5">
            <h1 className="d-flex justify-content-start neonText leftHeader">
                Projects
            </h1>

            <div className="sectionContent">
                <Tabs className="mb-3 mt-3">
                    {project.project.map((item) =>
                        <Tab eventKey={item.title} title={item.title}>
                            <Card key={item.title}>
                                <Card.Img variant="top" src="http://placekitten.com/500" className="p-3" />
                                <Card.Body >
                                    <Card.Title as="h1">{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.about}
                                    </Card.Text>
                                    <Card.Link href={item.repo} variant="primary">Repository</Card.Link>
                                    <Card.Link href={item.deployment} variant="primary">Deployment</Card.Link>
                                </Card.Body>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </Container>
    )
}

export default Projects;