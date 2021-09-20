import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { RiImageAddFill, RiImageLine } from 'react-icons/ri';
import { collection, getDocs, setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


import { db } from '../base';
const storage = getStorage();

function Projects() {
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [repoURL, setRepoURL] = useState("")
    const [deployURL, setDeployURL] = useState("")
    const [file, setFile] = useState(null)
    const [validated, setValidated] = useState(false)
    const selectFileRef = useRef();

    const handleClose = () => setShowModal(false);
    const handleShow = (i) => {
        console.log(i)
        setShowModal(true);
    }
    async function getProjects(db) {
        const projectsCol = collection(db, 'projects')
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        return setProjects(projectsList);
    }

    useEffect(() => {
        getProjects(db)
    }, [])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'projects'),
            (querySnapshot) => {
                const newProjectsList = querySnapshot.docs.map(doc => doc.data())
                return setProjects(newProjectsList)
            })
        return () => {
            unsubscribe()
        }
    }, [])

    const onEditClick = (docID) => {
        // await setDoc(doc(db, "projects", docID), {
        //     thumbnail: url,
        //                 title: title,
        //                 summary: summary,
        //                 repoURL: repoURL,
        //                 deployURL: deployURL
        // })
        alert("heyyyyy")
    }

    async function onDeleteClick(docID) {
        await deleteDoc(doc(db, "projects", docID))

    }

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

    const projThumbs = projects.map((item) =>
        <Card key={item.title} className="col-2 m-2 p-1" bg="light" as={Col}>
            <Card.Img src={item.thumbnail} style={{ height: "90%", objectFit: "cover", borderRadius: 5 }} />
            <Card.Header as="h5" style={{
                backgroundColor: "transparent", borderColor: "transparent", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline"
            }}>
                <Button disabled={true} style={{ backgroundColor: "transparent", borderWidth: 0 }}
                    onClick={() => handleShow(item)}
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
        <>
            <Card className="m-4 px-4 py-2" bg="dark">
                <h3>Existing projects</h3>
                <Row>
                    {projThumbs}
                </Row>
            </Card >

            <Modal show={showModal} onHide={handleClose} contentClassName="editModal">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form noValidate validated={validated} id="projectForm">
                        <Form.Group className="mb-3" controlId="formSummary">
                            <Form.Label>Unique Project Title</Form.Label>
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
                                    type="url"
                                    value={repoURL}
                                    onChange={e =>
                                        setRepoURL(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Prefix your link with http://
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { alert("okayyy") }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Projects;