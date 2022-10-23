import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
    }
    return (
        <>
            <ButtonGroup className="w-100" vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Sign in with gitHub</Button>
            </ButtonGroup>
            <div className="mt-4">
                <h5>Find Us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGithub /> Github</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="mt-4">
                <BrandCarousel />
            </div>
        </>
    );
};

export default RightSideNav;