import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../base';

export default function Header() {
    const [headerText, setHeaderText] = useState(``)
    const [headerImage, setHeaderImage] = useState()

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
        getHeader(db)

    }, [])

    return (
        <Container>
            <div id="header" className="d-flex justify-content-around">
                <div className="entrance neonText">
                    {headerText}
                </div>
                <img src={headerImage} alt="self portrait" height="300rem" width="300rem" />
            </div>

        </Container>
    )
}