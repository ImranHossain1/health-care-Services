import React from 'react';
import './Navigation.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import icon from '../../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import NavServices from './NavServices/NavServices';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    const {services} = useAuth();
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img 
                        src={icon}
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/home'>HOME</Nav.Link>
                    <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={HashLink} to="/aboutus#mission" className='service border-bottom'>MISSON & VISSION</NavDropdown.Item>
                        <NavDropdown.Item href="/aboutus#group" className='service border-bottom'>HEALTH CARE GROUP</NavDropdown.Item>
                        <NavDropdown.Item href="/aboutus#facilities" className='service'>HOSPITAL FACILITIES</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="SERVICES" id="collasible-nav-dropdown" >
                        {
                            services.map(service=> <NavServices
                                key={service.key}
                                service={service}
                            ></NavServices>)
                        }
                    </NavDropdown>
                    <Nav.Link href="#pricing">DOCTORS</Nav.Link>
                    <Nav.Link href="/faq">FaQ</Nav.Link>
                    <Nav.Link href="#pricing">MAKE AN APPOINTMENT</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Button as={Link} to="/login" className='ms-2'>Login</Button>
                    <Button as={Link} to="/login" variant="success" className='ms-2' >Sign up</Button>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );
};

export default Navigation;