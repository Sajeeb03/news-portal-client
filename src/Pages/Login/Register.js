import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [checkedIt, setCheckedIt] = useState(false);
    const { registerUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        registerUser(email, password)
            .then(res => {
                console.log(res.user);
                setError('')
                form.reset();
                handleUpdateProfile(name, photoURL)
                handleVerification();
                toast.success("Verify Your Email")
            })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })

    }
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });

    }

    const handleVerification = () => {
        verifyEmail()
            .then(result => { })
            .catch(err => console.error(err))
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter photoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={<>Accept <Link to='/terms'>terms and conditions</Link></>} onClick={(e) => setCheckedIt(e.target.checked)} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!checkedIt}>
                Register
            </Button>
            <br />
            <Form.Text className="text-warning mt-1">
                {error}
            </Form.Text>
        </Form >
    );
};

export default Register;