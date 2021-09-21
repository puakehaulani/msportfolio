import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
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
            <Link to="/"><img src="../images/logo.png" width="120" height="80" alt="michael scales logo" /></Link> <Button onClick={handleSignOut} variant="dark" size="lg">
                <span className="buttonText"><FcGoogle /> Logout</span>
            </Button>

            <h1>Dashboard</h1>

            <Card className="m-4 p-2 col-6" bg="dark">
                <Card.Header as="h2">Update About Me Section</Card.Header>
                <Card.Body>
                    <AboutForm />
                </Card.Body>
            </Card>

            <Card className="m-4 p-2 col-6" bg="dark">
                <Card.Header as="h2">Add a Project</Card.Header>
                <Card.Body>
                    <ProjectForm />
                </Card.Body>
            </Card>
            <ProjectThumbnail />
        </>
    )
}

export default Dashboard