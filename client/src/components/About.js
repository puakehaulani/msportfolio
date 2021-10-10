import React, { useState, useEffect } from "react";
import { collection, docs, getDocs } from 'firebase/firestore';
import Container from "react-bootstrap/Container";

import { db } from '../base';

function About() {

    const [aboutBody, setAboutBody] = useState("")

    async function getAbout(db) {
        const aboutCol = collection(db, 'about')
        const aboutSnapshot = await getDocs(aboutCol);
        const aboutList = aboutSnapshot.docs.map(doc => doc.data());
        setAboutBody(aboutList[0].content);

    }

    useEffect(() => {
        getAbout(db)

    }, [])

    // useEffect(() => {
    //     console.log(aboutBody)
    //     const newAboutBody = aboutBody.replace("\n\n", "xxxxxxxxxxxxxxxx")
    //     console.log(newAboutBody)
    // }, [aboutBody])

    return (
        <Container fluid="true" id="about" className="jumbotron bg-dark adjustRight mt-5">
            <h1 className="d-flex justify-content-end rightHeader neonText">
                About me
            </h1>

            <div className="sectionContent" style={{ whiteSpace: 'pre-line' }}>
                <p>
                    {aboutBody}
                </p>
            </div>
        </Container>
    );
}

export default About;
