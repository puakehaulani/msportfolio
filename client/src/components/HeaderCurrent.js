import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import { collection, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RiImageAddFill, RiImageLine } from 'react-icons/ri';

import { db } from '../base';

const storage = getStorage();

const HeaderContent = () => {
    const [headerText, setHeaderText] = useState("")
    const [headerImage, setHeaderImage] = useState("")

    async function getHeader(db) {
        // const headerCol = collection(db, 'header')
        // const headerSnapshot = await getDocs(headerCol);
        // const aboutList = aboutSnapshot.docs.map(doc => doc.data());
        // setAboutBody(aboutList[0].content);
        // setCounter(aboutList[0].counter)
        const docRef = doc(db, "header", "1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            // console.log(docSnap.data().image)
            // console.log(docSnap.data().text)
            setHeaderText(docSnap.data().text)
            setHeaderImage(docSnap.data().image)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }

    useEffect(() => {
        getHeader(db)

    }, [])




    return (
        <>
            <Figure>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="header content"
                    src={headerImage}
                />
                <Figure.Caption>
                    {headerText}
                </Figure.Caption>
            </Figure>
        </>
    )
}

export default HeaderContent