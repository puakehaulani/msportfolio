import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../base';

function Projects() {
    const [projects, setProjects] = useState([])

    async function getProjects(db) {
        const projectsCol = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        return setProjects(projectsList);
    }

    useEffect(() => {
        getProjects(db)
    }, [])

    const projectDisplay = projects.map((item) =>

        <Tab key={item.title} eventKey={item.title} title={item.title} tabClassName="Link">
            <Card>
                <Card.Img variant="top" src={item.thumbnail} className="p-3" />
                <Card.Body >
                    <Card.Title as="h1">{item.title}</Card.Title>
                    <Card.Text>
                        {item.summary}
                    </Card.Text>
                    <Card.Link href={item.repoURL} variant="primary" target="_blank">Repository</Card.Link>
                    {item.deployURL ? <Card.Link href={item.deployURL} variant="primary" target="_blank">Deployment</Card.Link> : <></>
                    }
                </Card.Body>
            </Card>
        </Tab>
    )

    return (
        <Container fluid="true" id="projects" className="jumbotron bg-dark adjustLeft mt-5">
            <h1 className="d-flex justify-content-start neonText leftHeader">
                Projects
            </h1>

            <div className="sectionContent">
                <Tabs className="mb-3 mt-3" variant="tabs">
                    {projectDisplay}
                </Tabs>
            </div>
        </Container>
    )
}

export default Projects;