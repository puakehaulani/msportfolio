import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal';
import { collection, addDoc, doc, setDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RiImageAddFill, RiImageLine } from 'react-icons/ri';

import { db } from '../base';

const storage = getStorage();

const AboutForm = () => {
    const [aboutBody, setAboutBody] = useState("")
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(6);


    async function getAbout(db) {
        const aboutCol = collection(db, 'about')
        const aboutSnapshot = await getDocs(aboutCol);
        const aboutList = aboutSnapshot.docs.map(doc => doc.data());
        // console.log(aboutList[0].content)
        return setAboutBody(aboutList[0].content);
    }

    useEffect(() => {
        // pull about content from db
        getAbout(db)
        // store in aboutBody state
        // return rendered content
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onButtonClick = () => {
        handleShow()
    }

    const handlePullData = async (event) => {
        alert("okay i guess youre sureeeee")
        // make API call to pull data
        // assign to aboutBody state
        // send to DB:
        //            await setDoc(doc(db, "about", "summary"), {
        //                content: aboutBody
        //             })
        //             alert('About updated on Google Cloud Firestore 🔥')
        // make sure new data rerenders
        // decrease counter
        setCounter(counter - 1)
        // close modal
        handleClose()
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Current content:</Card.Title>
                    <Card.Text>
                        {aboutBody}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={onButtonClick}> Pull New Content</Button>
                    <Row><div><Badge bg="warning" text="dark">Warning:</Badge> {counter} data pulls available</div></Row>
                </Card.Footer>
            </Card>

            <Modal show={show} onHide={handleClose} centered contentClassName="bg-dark">
                <Modal.Header closeButton>
                    Are you SURE you want to pull?
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handlePullData}>
                        LesGitItDoOoD
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AboutForm