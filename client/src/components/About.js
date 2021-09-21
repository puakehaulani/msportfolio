import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../base';

function About() {
    const [aboutBody, setAboutBody] = useState()

    async function getAbout(db) {
        const aboutCol = collection(db, 'about')
        const aboutSnapshot = await getDocs(aboutCol);
        const aboutList = aboutSnapshot.docs.map(doc => doc.data());
        // console.log(aboutList[0].content)

        setAboutBody(aboutList[0].content);

    }

    useEffect(() => {
        getAbout(db)

    }, [])

    return (
        <Container fluid="true" id="about" className="jumbotron bg-dark adjustRight mt-5">
            <h1 className="d-flex justify-content-end rightHeader neonText">
                About me
            </h1>

            <div className="sectionContent">
                <p>
                    {aboutBody}
                </p>
            </div>
        </Container>
    );
}

export default About;
