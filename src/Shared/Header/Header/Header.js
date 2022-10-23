import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSideNav from '../../LeftSideNav/LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(logOut)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log('clicked')
            }).catch((error) => {
                console.error(error)
            });

    }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-dark' to="/">News-Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav>
                            {
                                (user?.uid) ?
                                    <>
                                        <span className='me-2'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="outline-dark">LogOut</Button>
                                    </> :
                                    <>
                                        <Link className='text-decoration-none' to='/login'>Login</Link>
                                        <Link className='text-decoration-none ms-2' to='/Register'>Register</Link>
                                    </>
                            }
                        </Nav>
                    </Nav>
                    <Nav>
                        <Link to="/profile">
                            {
                                user?.photoURL ? <Image
                                    src={user.photoURL}
                                    roundedCircle
                                    style={{ height: '30px' }}
                                ></Image> : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-block d-lg-none'>
                        <LeftSideNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;