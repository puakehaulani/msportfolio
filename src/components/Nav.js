import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar bg="transparent" expand="lg" fixed="top">
            <ul className="flex-column">
                <Navbar.Brand href="#">
                    <img src="../images/logo.png" width="120" height="80" alt="michael scales logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </ul>
        </Navbar>
    )
}

export default Navigation;