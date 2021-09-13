import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import ProjectForm from '../components/ProjectForm';
import ProjectThumbnail from '../components/ProjectThumbnail';

const Dashboard = () => {
    return (
        <>
            <Link to="/"><img src="../images/logo.png" width="120" height="80" alt="michael scales logo" /></Link>
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