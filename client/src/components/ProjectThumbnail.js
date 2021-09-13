import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
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
        <Card key={item.title} className="col-3 mx-2 py-1" bg="light" as={Col}>
            <Card.Img src={item.thumbnail} style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: 5 }} />
            <Card.Header as="h5" className="text-center" style={{
                backgroundColor: "transparent", borderColor: "transparent", color: "black", display: "flex", justifyContent: "space - between"
            }}>
                <FaEdit color="rosyBrown" />
                {item.title}
                < FaTrashAlt color="crimson" />
            </Card.Header>
        </Card>
    )


    return (
        <Card className="m-4 px-4 py-2 col-6" bg="dark">
            <h3>Existing projects</h3>
            <Row>
                {projThumbs}
            </Row>
        </Card >


    )
}

export default Projects;