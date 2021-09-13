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


    return (
        projects.map((item) =>
            <Card key={item.title} style={{ width: '18rem' }} className="text-center" bg="warning">
                <Card.Img src={item.thumbnail} />
                <Card.Title as="h5">{item.title}</Card.Title>
            </Card>
        )
    )
}

export default Projects;