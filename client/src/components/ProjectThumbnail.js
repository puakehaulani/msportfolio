import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

    const projThumbs = projects.map((item) =>
        <Card key={item.title} style={{ width: '18rem', height: '18rem' }} className="text-center col-3 mx-2 py-1" bg="warning" as={Col}>
            <Card.Img src={item.thumbnail} style={{ height: "90%", width: "100%", objectFit: "cover" }} />
            <Card.Title as="h5">{item.title}</Card.Title>
        </Card>
    )


    return (
        <Container >
            <Row>
                {projThumbs}
            </Row>
        </Container >


    )
}

export default Projects;