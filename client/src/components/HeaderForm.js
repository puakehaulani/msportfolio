import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure'
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RiImageAddFill, RiImageLine } from 'react-icons/ri';

import { db } from '../base';

const storage = getStorage();

const HeaderForm = () => {
    const [headerText, setHeaderText] = useState("")
    const [headerImage, setHeaderImage] = useState("")
    const [text, setText] = useState(null)
    const [tempText, setTempText] = useState("")
    const [file, setFile] = useState(null)
    const selectFileRef = useRef();

    async function getHeader(db) {
        const docRef = doc(db, "header", "1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setHeaderText(docSnap.data().text.replaceAll("//n", `\n\r`))
            setHeaderImage(docSnap.data().image)
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        if (tempText !== null) {
            const newText = tempText.replaceAll(/[\n\r]/g, "//n")
            setText(newText)
        }

    }, [tempText])

    useEffect(() => {
        getHeader(db)

    }, [])

    const handleSelectFile = () => {
        selectFileRef.current?.click();
    };

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const onResetText = () => {
        setTempText("")
    }
    const resetFile = () => {
        setFile(null)
    }


    const onUpdateClick = async (e) => {
        e.preventDefault()
        if (text) {
            updateDoc(doc(db, "header", "1"), {
                text: text,
            })
        }
        alert('Updated in Google Cloud Firestore 🔥')
        getHeader(db)
        onResetText()

    }

    const onUploadClick = async (e) => {
        e.preventDefault()
        if (file) {
            const fileRef = ref(storage, 'header/' + file.name)
            await uploadBytes(fileRef, file).then((snapshot) => {
                console.log('Image added to Google Cloud Storage')
            })
            await getDownloadURL(fileRef)
                .then((url) => {
                    updateDoc(doc(db, "header", "1"), {
                        image: url,
                    })
                })

        }
        alert('Updated in Google Cloud Firestore 🔥')
        getHeader(db)
        resetFile()
    }


    return (
        <Row className="row-cols-md-2 row-cols-sm-12">
            <Col bg="dark">
                <h2>Update Content</h2>
                <div className="m-4">
                    <Form id="HeaderForm">
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>New header text</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={2}
                                value={tempText}
                                onChange={e =>
                                    setTempText(e.target.value)}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            {text ? <Button as={Col} className="mx-2 col-3" onClick={onUpdateClick}>
                                Update
                            </Button>
                                :
                                <Button as={Col} className="mx-2 col-3" variant="outline-secondary" disabled>
                                    Update
                                </Button>
                            }
                            <Button as={Col} className="mx-2 col-3" variant="secondary" onClick={onResetText}>
                                Clear
                            </Button>
                        </Row>
                        <Form.Group controlId="formImage" className="mb-3">
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
                                    Choose an image</Form.Label>
                                    <span className="align-middle" > <RiImageAddFill color="slategray" fontSize="2rem" /></span> </>
                            }
                            <Form.Control.Feedback type="invalid">
                                Please choose an image
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Row className="mb-3">
                            {file ? <Button as={Col} className="mx-2 col-3" onClick={onUploadClick}>
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
                            alt="header content"
                            src={headerImage}
                        />
                        <Figure.Caption style={{ whiteSpace: 'pre-line' }}>
                            {headerText}
                        </Figure.Caption>
                    </Figure>
                </div>
            </Col>
        </Row>
    )
}

export default HeaderForm