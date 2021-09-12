import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RiImageAddFill, RiImageLine } from 'react-icons/ri';

import { db } from '../base';

const storage = getStorage();

const Dashboard = () => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [repoURL, setRepoURL] = useState("")
    const [deployURL, setDeployURL] = useState("")
    const [file, setFile] = useState(null)
    const selectFileRef = useRef();

    const handleSelectFile = () => {
        selectFileRef.current?.click();
    };

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const onReset = () => {
        setTitle("")
        setSummary("")
        setRepoURL("")
        setDeployURL("")
        setFile(null)
    }

    const onButtonClick = async () => {
        const fileRef = ref(storage, 'proj-thumbnail/' + file.name)
        await uploadBytes(fileRef, file).then((snapshot) => {
            alert('Project added to Google Cloud Firestore 🔥');
        });
        await getDownloadURL(fileRef)
            .then((url) => {
                addDoc(collection(db, "projects"), {
                    thumbnail: url,
                    title: title,
                    summary: summary,
                    repoURL: repoURL,
                    deployURL: deployURL
                })
                onReset()
            })

    }

    return (
        <>
            <h1>Dashboard</h1>
            <Card className="mx-4 p-2 col-6" bg="dark">
                <Card.Header as="h2">Add a Project</Card.Header>
                <Card.Body>
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
                            <Form.Label as={Button} onClick={handleSelectFile} variant="outline-light">
                                Choose an image</Form.Label>
                            <Form.Control ref={selectFileRef} className="d-none" type="file" onChange={onFileChange} />
                            {file ?
                                <> <RiImageLine color="seagreen" fontSize="2rem" />{file.name}</>
                                :
                                <> <RiImageAddFill color="slategray" fontSize="2rem" /></>}

                        </Form.Group>

                        <Row>
                            <Button as={Col} className="mx-2 col-3" onClick={onButtonClick}>
                                Upload
                            </Button>
                            <Button as={Col} className="mx-2 col-3" variant="secondary" onClick={onReset}>
                                Reset
                            </Button>
                        </Row>

                    </Form>
                </Card.Body>
            </Card>

        </>
    )
}

export default Dashboard