import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const photoURLRef = useRef(user.photoURL)
    const handleSubmit = e => {
        e.preventDefault();
        console.log(photoURLRef.current.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control defaultValue={user?.email} readOnly type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" defaultValue={user.displayName} placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswor">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} type="text" defaultValue={user?.photoURL} placeholder="photoUrl" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;