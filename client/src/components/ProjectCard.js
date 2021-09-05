import React from 'react';
import project from "../projects.json";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function ProjectCard() {
    const projectDisplay = project.project.map((item) =>
        <Card bg="secondary" key={item.title}>
            <Card.Img variant="top" src="http://placekitten.com/500" className="p-3" />
            <Card.Body >
                <Card.Title as="h1">{item.title}</Card.Title>
                <Card.Text>
                    {item.summary}
                </Card.Text>
                <Card.Link href={item.repoURL} variant="primary">Repository</Card.Link>
                <Card.Link href={item.deployURL} variant="primary">Deployment</Card.Link>
            </Card.Body>
        </Card>
    )
    return (
        <div className="row d-flex justify-content-center">
            {projectDisplay}
        </div >
    )
}

export default ProjectCard