import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectForm from '../components/ProjectForm';
import ProjectThumbnail from '../components/ProjectThumbnail';

const Dashboard = () => {
    return (
        <>
            <Link to="/"><img src="../images/logo.png" width="120" height="80" alt="michael scales logo" /></Link>
            <h1>Dashboard</h1>
            <ProjectForm />
            <ProjectThumbnail />
        </>
    )
}

export default Dashboard