import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RiFileAddLine } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc'

import { db } from '../base';

const storage = getStorage();

const ResumeForm = () => {
    const [resumePDF, setResumePDF] = useState("")
    // const [PDFImage, setPDFImage] = useState("")
    const [PDFfile, setPDFfile] = useState(null)
    const selectFileRef = useRef();

    async function getResume(db) {
        const docRef = doc(db, "resume", "1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setResumePDF(docSnap.data().pdf)
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        getResume(db)
        console.log(resumePDF)
    }, [])

    const handleSelectFile = () => {
        selectFileRef.current?.click();
    };

    const onFileChange = (e) => {
        setPDFfile(e.target.files[0])
    }

    const resetPDFfile = () => {
        setPDFfile(null)
    }

    const onUploadClick = async (e) => {
        e.preventDefault()
        if (PDFfile) {
            const PDFfileRef = ref(storage, 'resume/resume.pdf')
            await uploadBytes(PDFfileRef, PDFfile).then((snapshot) => {
                console.log('PDF added to Google Cloud Storage')
            })
            await getDownloadURL(PDFfileRef)
                .then((url) => {
                    updateDoc(doc(db, "resume", "1"), {
                        pdf: url,
                    })
                })

        }
        alert('Updated in Google Cloud Firestore 🔥')
        // getHeader(db)
        resetPDFfile()
    }


    return (
        <Row className="row-cols-md-2 row-cols-sm-12">
            <Col bg="dark">
                <h2>Update PDF</h2>
                <div className="m-4">
                    <Form id="ResumeForm">

                        <Form.Group controlId="formImage" className="mb-3">
                            <Form.Control
                                required
                                ref={selectFileRef}
                                className="d-none"
                                type="file"
                                accept=".pdf"
                                onChange={onFileChange} />
                            {PDFfile ? <><Form.Label as={Button} onClick={handleSelectFile} variant="outline-success">
                                Choose a file</Form.Label>
                                <span className="align-middle" > <VscFilePdf color="seagreen" fontSize="2rem" />{PDFfile.name}</span> </>
                                : <><Form.Label as={Button} onClick={handleSelectFile} variant="outline-light">
                                    Choose a file</Form.Label>
                                    <span className="align-middle" > <RiFileAddLine color="slategray" fontSize="2rem" /></span> </>
                            }
                            <Form.Control.Feedback type="invalid">
                                Please choose an image
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Row className="mb-3">
                            {PDFfile ? <Button as={Col} className="mx-2 col-3" onClick={onUploadClick}>
                                Upload
                            </Button>
                                :
                                <Button as={Col} className="mx-2 col-3" variant="outline-secondary" disabled>
                                    Upload
                                </Button>}
                        </Row>
                    </Form >
                </div>
            </Col>

            <Col bg="dark">
                <h2>Current Content</h2>
                <div className="m-4">
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            alt="resume content"
                            src={resumePDF}
                        />
                        <Figure.Caption>
                            {resumePDF}
                        </Figure.Caption>
                    </Figure>
                </div>
            </Col>

        </Row>
    )
}

export default ResumeForm