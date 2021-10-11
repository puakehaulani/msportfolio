import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

    return (
        <Container fluid="sm" id="about" className="jumbotron bg-dark adjustRight mt-5">
            <Row>
                <Col xs>
                    <h1 className="d-flex justify-content-end rightHeader neonText">
                        About me
                    </h1>

                    <div className="sectionContent" style={{ whiteSpace: 'pre-line' }}>
                        <p>
                            {aboutBody}
                        </p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default About;
