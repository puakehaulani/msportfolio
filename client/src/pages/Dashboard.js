import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAuth, signOut } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { Redirect } from 'react-router';

import { UserContext } from '../providers/UserProvider';
import AboutForm from '../components/AboutForm';
import ProjectForm from '../components/ProjectForm';
import ProjectThumbnail from '../components/ProjectThumbnail';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);

    const auth = getAuth();
    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // To Do: LOL FIX THIS
            window.location.reload()
        }).catch((error) => {
            console.log(error.message)
        });
    }

    if (redirect) {
        return (<Redirect to={redirect} />)
    }
    return (
        <>
            <Navbar className="mx-4 d-flex justify-content-between">
                <div>
                    <Navbar.Brand href="/"><img src="../images/logo.png" width="120" height="80" alt="michael scales logo" className="mt-2" /></Navbar.Brand>
                    <h1>Dashboard</h1>
                </div>
                <Button onClick={handleSignOut} variant="dark" size="lg">
                    <span className="buttonText"><FcGoogle /> Logout</span>
                </Button>
            </Navbar>
            {/* <Link to="/"><</Link> */}
            {/* <Row className="mx-2">
                <Col><h1>Dashboard</h1></Col> */}
            {/* <Col></Col> */}
            {/* </Row> */}



            <Card className="m-4 p-2" bg="dark">
                <Card.Header as="h2">Update About Me Section</Card.Header>
                <Card.Body>
                    <AboutForm />
                </Card.Body>
            </Card>

            <Row className="mx-2 p-2">

                <Card as={Col} className="mx-2 p-1" bg="dark">
                    <Card.Header as="h2">Add a Project</Card.Header>
                    <Card.Body className="m-4">
                        <ProjectForm />
                    </Card.Body>
                </Card>

                <Card as={Col} className="mx-2 p-1" bg="dark">
                    <Card.Header as="h2">Existing Projects</Card.Header>
                    <Card.Body className="m-4">
                        <Row>
                            <ProjectThumbnail />
                        </Row>
                    </Card.Body>

                </Card>


            </Row>

        </>
    )
}

export default Dashboard