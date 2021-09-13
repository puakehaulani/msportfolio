import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { collection, getDocs, doc, where, deleteDoc, query, onSnapshot } from 'firebase/firestore';

import { db } from '../base';

function Projects() {
    const [projects, setProjects] = useState([])

    async function getProjects(db) {
        const projectsCol = collection(db, 'projects')
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        // const q = query(projectsCol);
        // const querySnapshot = await getDocs(q);
        // const projectsList = querySnapshot.forEach(doc => doc.data())
        return setProjects(projectsList);
    }


    useEffect(() => {
        getProjects(db)
    }, [])

    const onEditClick = (docID) => {
        alert("heyyyyy", docID)
    }

    async function onDeleteClick(docID) {
        await deleteDoc(doc(db, "projects", docID))
            .then(
                alert("byeeeee", docID)
            );
    }

    const projThumbs = projects.map((item) =>
        <Card key={item.title} className="col-3 mx-2 py-1" bg="light" as={Col}>
            <Card.Img src={item.thumbnail} style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: 5 }} />
            <Card.Header as="h5" style={{
                backgroundColor: "transparent", borderColor: "transparent", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline"
            }}>
                <Button style={{ backgroundColor: "transparent", borderWidth: 0 }}
                    onClick={() => {
                        onEditClick(item.title);
                    }}
                >
                    <FaEdit color="rosyBrown" size="1.5rem" />
                </Button>
                {item.title}
                <button
                    style={{ backgroundColor: "transparent", borderWidth: 0 }}
                    onClick={() => {
                        onDeleteClick(item.title);
                    }}
                >
                    < FaTrashAlt color="crimson" size="1.5rem" />
                </button>
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