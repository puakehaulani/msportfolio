import React from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Resume() {
    return (
        <Container fluid="true" id="resume" className="jumbotron bg-dark adjustRight mt-5">

            <h1 className="d-flex justify-content-end neonText rightHeader">Resume</h1>

            <Button className="btn btn-danger align-self-start mt-5 mr-5 resumeButton" role="button" href="./resume.pdf"
                download="resume.pdf">
                Download
            </Button>

            <Image src="./images/resumeimg.png" alt="resume" className="mx-auto py-auto d-flex flex-wrap resumeImg" />

        </Container >
    )
}