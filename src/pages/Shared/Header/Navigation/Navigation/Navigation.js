import React from 'react';
import './Navigation.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import icon from '../../../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavServices from '../NavServices/NavServices';
import useAuth from '../../../../../hooks/useAuth';
import useDoctors from '../../../../../hooks/useDoctors';

const Navigation = () => {
    const [{services}, {user, logOut}] = useAuth();
 
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Nav.Link as={Link} to='/home'>
                    <img 
                            src={icon}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                    />
                </Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/home'>HOME</Nav.Link>
                    <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={HashLink} to="/aboutus#mission" className='service border-bottom'>MISSON & VISSION</NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/aboutus#group" className='service border-bottom'>HEALTH CARE GROUP</NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/aboutus#facilities" className='service'>HOSPITAL FACILITIES</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="SERVICES" id="collasible-nav-dropdown" >
                        {
                            services.map(service=> <NavServices
                                key={service.key}
                                service={service}
                            ></NavServices>)
                        }
                    </NavDropdown>
                    <Nav.Link as={Link} to="/doctors">DOCTORS</Nav.Link>
                    <Nav.Link as={Link} to="/faq">FaQ</Nav.Link>
                    <Nav.Link as={Link} to="/doctors">MAKE AN APPOINTMENT</Nav.Link>
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
                    <Nav className="ms-lg-2 mt-lg-0 mt-2">
                        {
                            user?.email? 
                                <Button as={Link} to="/login" className='' onClick={logOut}>SignOut</Button>
                            :
                                <div className=''>
                                    <Button as={Link} to="/login" className='me-2'>Login</Button>
                                    <Button as={Link} to="/registration" className=''>Registration</Button>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );
};

export default Navigation;