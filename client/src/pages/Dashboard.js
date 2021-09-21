import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { getAuth, signOut } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { Redirect } from 'react-router';

import { UserContext, logOut } from '../providers/UserProvider';
import ProjectForm from '../components/ProjectForm';
import ProjectThumbnail from '../components/ProjectThumbnail';

const Dashboard = () => {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);
    // const [loggedOut, setLoggedOut] = useState(false)

    const auth = getAuth();
    useEffect(() => {
        console.log("2")
        if (!user) {
            console.log("2+", user)
            setredirect("/");
        }

    }, [user])

    // useEffect(() => {
    //     if (loggedOut) {
    //         return (< Redirect to="/" />
    //         )
    //     }
    // }, [loggedOut])



    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // return (<Redirect to={redirect} />)
            // setLoggedOut(true)
            // if (user) {
            //     console.log("hit user")
            // }
            // if (redirect) {

            // console.log("5")
            // return (< Redirect to={redirect} />)
            // }
            window.location.reload()
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }

    if (redirect) {
        console.log("4")
        return (<Redirect to={redirect} />)
    }
    console.log("5")
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