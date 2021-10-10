import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

import { db } from '../base';
import API from '../utils/API';

const AboutForm = () => {
    const [aboutBody, setAboutBody] = useState("")
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState();

    async function getAbout(db) {
        const aboutCol = collection(db, 'about')
        const aboutSnapshot = await getDocs(aboutCol);
        const aboutList = aboutSnapshot.docs.map(doc => doc.data());
        setAboutBody(aboutList[0].content);
        setCounter(aboutList[0].counter)
    }

    useEffect(() => {
        getAbout(db)

    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onButtonClick = () => {
        handleShow()
    }

    const handlePullData = async (event) => {
        event.preventDefault();
        const tempAboutContent = await API.scrapeLinkedIn()
            .then(res => {
                console.log(res)
                const save = res.data.summary
                return save
            }
            )
            .catch(err => {
                console.log(err)
            })
        const tempCounter = counter - 1
        handleClose()
        setDoc(doc(db, "about", "summary"), {
            content: tempAboutContent,
            counter: tempCounter
        }).then(() => {
            alert('About updated on Google Cloud Firestore 🔥')
            getAbout(db)
        })

    }


    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Current content:</Card.Title>
                    <Card.Text style={{ whiteSpace: 'pre-line' }}>
                        {aboutBody}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {counter > 0 ?
                        <><Button variant="primary" onClick={onButtonClick}> Pull New Content</Button>
                            <Row><div><Badge bg="warning" text="dark">Warning:</Badge> {counter} data pulls available</div></Row></>
                        :
                        <div>You are out of pulls. Contact developer for next steps.</div>
                    }
                </Card.Footer>
            </Card>

            <Modal show={show} onHide={handleClose} centered contentClassName="bg-dark">
                <Modal.Header closeButton>
                    <h1>Are you SURE you want to pull?</h1>
                </Modal.Header>
                <Modal.Body>
                    <h4>You only have {counter} pulls left.</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handlePullData}>
                        LesGitItDoOoD
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AboutForm