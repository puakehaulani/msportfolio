import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button>Upload</Button>
        </>
    )
}

export default Dashboard