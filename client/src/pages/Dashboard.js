import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { db } from '../base';

const storage = getStorage();

const Dashboard = () => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [repoURL, setRepoURL] = useState("")
    const [deployURL, setDeployURL] = useState("")
    const [file, setFile] = useState(null)

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const onButtonClick = async () => {
        const fileRef = ref(storage, 'proj-thumbnail/' + file.name)
        await uploadBytes(fileRef, file).then((snapshot) => {
            alert('Project added to Google Cloud Firestore 🔥');
        });
        await getDownloadURL(fileRef)
            .then((url) => {
                console.log(url)
                addDoc(collection(db, "projects"), {
                    thumbnail: url,
                    title: title,
                    summary: summary,
                    repoURL: repoURL,
                    deployURL: deployURL
                })
            })

    }

    return (
        <>
            <h1>Dashboard</h1>
            <Card className="mx-4 p-2 col-6" bg="success">
                <Form>
                    <Form.Group className="mb-3" controlId="formSummary">
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control
                            as="input"
                            value={title}
                            onChange={e =>
                                setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSummary">
                        <Form.Label>Project Summary</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={summary}
                            onChange={e =>
                                setSummary(e.target.value)} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formRepo">
                            <Form.Label>Repository URL</Form.Label>
                            <Form.Control
                                value={repoURL}
                                onChange={e =>
                                    setRepoURL(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formDeploy">
                            <Form.Label>Deployment URL</Form.Label>
                            <Form.Control
                                value={deployURL}
                                onChange={e =>
                                    setDeployURL(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose an image</Form.Label>
                        <Form.Control type="file" onChange={onFileChange} />
                    </Form.Group>
                    <Button className="mt-2" onClick={onButtonClick}>Upload</Button>

                </Form>
            </Card>

            {/* {images.map(image => (
                <Image key={image.image} src={image.image} thumbnail className="mx-2" />
            ))}

            {projects.map(project => (
                <Card key={project.title}>
                    <Card.Img variant="top" src={project.thumbnail} className="p-3" />
                    <Card.Body >
                        <Card.Title as="h1">{project.title}</Card.Title>
                        <Card.Text>
                            {project.summary}
                        </Card.Text>
                        <Card.Link href={project.repoURL} variant="primary">Repository</Card.Link>
                        <Card.Link href={project.deployURL} variant="primary">Deployment</Card.Link>
                    </Card.Body>
                </Card>
            ))} */}

        </>
    )
}

export default Dashboard