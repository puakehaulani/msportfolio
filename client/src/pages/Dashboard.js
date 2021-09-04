import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
// import Alert from 'react-bootstrap/Alert';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { db } from '../base';

const storage = getStorage();

const Dashboard = () => {
    const [images, setImages] = useState([])
    // const [newImage, setNewImage] = useState(null)
    const [file, setFile] = useState(null)

    async function getImages(db) {
        const imagesCol = collection(db, 'image');
        const imageSnapshot = await getDocs(imagesCol);
        const imagesList = imageSnapshot.docs.map(doc => doc.data());
        return setImages(imagesList);
    }

    useEffect(() => {
        getImages(db)
    }, [])

    // useEffect(() => {
    //     console.log(file)
    // }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const onButtonClick = async () => {
        const fileRef = ref(storage, 'proj-thumbnail/' + file.name)
        await uploadBytes(fileRef, file).then((snapshot) => {
            alert('Uploaded a blob or file!');
        });
        await getDownloadURL(fileRef)
            .then((url) => {
                console.log(url)
                addDoc(collection(db, "image"), {
                    image: url
                })
            })

    }

    return (
        <>
            <h1>Dashboard</h1>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose an image
                </Form.Label>
                <Form.Control type="file" style={{ width: 300 }} onChange={onFileChange} />
                <Button className="mt-2" onClick={onButtonClick}>Upload</Button>
            </Form.Group>

            {images.map(image => (
                <Image key={image.image} src={image.image} thumbnail className="mx-2" />
            ))}

        </>
    )
}

export default Dashboard