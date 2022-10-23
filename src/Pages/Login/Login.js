import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { logInWithEmail, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmail(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setError('')
                form.reset();
                setError('');


                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error("Verify Your Email First")
                }

            })
            .catch(err => {
                console.error(err);
                setError(err.message)
            })

            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-warning">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;