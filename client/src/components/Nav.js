import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

function Navigation() {
    return (
        <Navbar bg="transparent" variant="dark" expand="lg" fixed="top">
            <ul className="flex-column">
                <li>
                    <Navbar.Brand href="#">
                        <img src="../images/logo.png" width="120" height="80" alt="michael scales logo" />
                    </Navbar.Brand>
                </li>

                <li>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav >
                            <Link to="projects" className="Link">Projects</Link>
                            <Link to="about" className="Link">About</Link>
                            <Link to="resume" className="Link">Resume</Link>
                            <Link to="contact" className="Link">Contact</Link>
                        </Nav>

                    </Navbar.Collapse>
                </li>
            </ul>
        </Navbar>
    )
}

export default Navigation;