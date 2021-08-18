import React from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Resume() {
    return (
        <Container fluid="true" id="resume" className="jumbotron bg-dark adjustRight mt-5">
            <h1 className="d-flex justify-content-end neonText rightHeader">
                Resume
            </h1>

            <Button variant="danger" className="align-self-start mt-5 mr-5 resumeButton" role="button" href="./resume.pdf"
                download="resume.pdf">
                Download
            </Button>

            <div className="d-flex flex-wrap resumeImg">
                <img src="./images/resumeimg.png" alt="resume" className="mx-auto py-auto" />
            </div>

        </Container >
    )
}