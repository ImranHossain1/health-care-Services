import React from 'react';
import './ContactBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
  const ContactBar = () => {
    return (
        <Navbar className='border py-0 bg-light'>
            <Container >
                <Navbar.Text>
                    Opening Hours : <a className='text-decoration-none'>Monday to Saturday - 8am to 5pm</a> 
                </Navbar.Text>
                <Navbar.Collapse className="justify-content-end ">
                    <Nav.Link href="#home" className='border-start ms-2'><FontAwesomeIcon icon={faFacebook} className='icons'/></Nav.Link>
                    <Nav.Link href="#features" className='border-start'><FontAwesomeIcon icon={faTwitterSquare}  className='icons'/></Nav.Link>
                    <Nav.Link href="#pricing" className='border-start border-end'><FontAwesomeIcon icon={faLinkedin} className='icons'/></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ContactBar;