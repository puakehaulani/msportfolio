import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectForm from '../components/ProjectForm';

const Dashboard = () => {
    return (
        <>
            <Link to="/"><img src="../images/logo.png" width="120" height="80" alt="michael scales logo" /></Link>
            <h1>Dashboard</h1>
            <ProjectForm />
        </>
    )
}

export default Dashboard