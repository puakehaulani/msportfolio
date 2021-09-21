import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { getAuth, signOut } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { Redirect } from 'react-router';

import { UserContext } from '../providers/UserProvider';
import ProjectForm from '../components/ProjectForm';
import ProjectThumbnail from '../components/ProjectThumbnail';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    const auth = getAuth();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("logged out. byeeeeee!")
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }

    // useEffect(() => {
    //     if (!user) {
    //         setredirect("/");
    //     }
    // }, [user]);

    // if (redirect) {
    //     return (<Redirect to={redirect} />)

    // }
    return (
        <>
            <Link to="/"><img src="../images/logo.png" width="120" height="80" alt="michael scales logo" /></Link> <Button onClick={handleSignOut} variant="dark" size="lg">
                <span className="buttonText"><FcGoogle /> Logout</span>
            </Button>

            <h1>Dashboard</h1>
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