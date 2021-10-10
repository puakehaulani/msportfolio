import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RiImageAddFill, RiImageLine } from 'react-icons/ri';

import { db } from '../base';

const storage = getStorage();

const ProjectForm = () => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [repoURL, setRepoURL] = useState("")
    const [deployURL, setDeployURL] = useState("")
    const [file, setFile] = useState(null)
    const [validated, setValidated] = useState(false)
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
        setValidated(false)
    }

    const onButtonClick = async (event) => {
        const form = document.getElementById("projectForm");
        if (!form.checkValidity() || file === null) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else {
            setValidated(true);
            const fileRef = ref(storage, 'proj-thumbnail/' + file.name)
            await uploadBytes(fileRef, file).then((snapshot) => {
                console.log('Image added to Google Cloud Storage')
            })
            await getDownloadURL(fileRef)
                .then((url) => {
                    // addDoc(collection(db, "projects"), {
                    setDoc(doc(db, "projects", title), {
                        thumbnail: url,
                        title: title,
                        summary: summary,
                        repoURL: repoURL,
                        deployURL: deployURL
                    })
                    alert('Project added to Google Cloud Firestore 🔥')
                    onReset()
                })
        }
    }


    return (
        <Form noValidate validated={validated} id="projectForm">
            <Form.Group className="mb-3" controlId="formSummary">
                <Form.Label>* Unique Project Title</Form.Label>
                <Form.Control
                    required
                    as="input"
                    value={title}
                    onChange={e =>
                        setTitle(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a title
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSummary">
                <Form.Label>* Project Summary</Form.Label>
                <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    value={summary}
                    onChange={e =>
                        setSummary(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Please enter a summary
                </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formRepo">
                    <Form.Label>* Repository URL</Form.Label>
                    <Form.Control
                        required
                        type="url"
                        value={repoURL}
                        onChange={e =>
                            setRepoURL(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please add a http:// prefixed link to your repo
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formDeploy">
                    <Form.Label>Deployment URL</Form.Label>
                    <Form.Control
                        type="url"
                        value={deployURL}
                        onChange={e =>
                            setDeployURL(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                        Prefix your link with http://
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>


            <Form.Group controlId="formFile" className="mb-3">

                <Form.Control
                    required
                    ref={selectFileRef}
                    className="d-none"
                    type="file"
                    accept="image/*"
                    onChange={onFileChange} />
                {file ? <><Form.Label as={Button} onClick={handleSelectFile} variant="outline-success">
                    Choose an image</Form.Label>
                    <span className="align-middle" > <RiImageLine color="seagreen" fontSize="2rem" />{file.name}</span> </>
                    : <><Form.Label as={Button} onClick={handleSelectFile} variant="outline-light">
                        * Choose an image</Form.Label>
                        <span className="align-middle" > <RiImageAddFill color="slategray" fontSize="2rem" /></span> </>
                }
                <Form.Control.Feedback type="invalid">
                    Please choose an image
                </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
                <Button as={Col} className="mx-2 col-3" onClick={onButtonClick}>
                    Upload
                </Button>
                <Button as={Col} className="mx-2 col-3" variant="secondary" onClick={onReset}>
                    Reset
                </Button>
            </Row>
            <span style={{ color: "crimson", fontStyle: "italic" }}>* Required fields</span>
        </Form>

    )
}

export default ProjectForm