import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../base';

const Dashboard = () => {
    const [images, setImages] = useState([])

    async function getImages(db) {
        const imagesCol = collection(db, 'image');
        const imageSnapshot = await getDocs(imagesCol);
        const imagesList = imageSnapshot.docs.map(doc => doc.data());
        return setImages(imagesList);
    }

    useEffect(() => {
        getImages(db)
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose an image
                </Form.Label>
                <Form.Control type="file" style={{ width: "20%" }} />
                <Button className="mt-2">Upload</Button>
            </Form.Group>

            {images.map(image => (
                <Image key={image.image} src={image.image} thumbnail className="mx-2" />
            ))}

        </>
    )
}

export default Dashboard