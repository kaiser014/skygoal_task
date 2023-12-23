import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './headernavbar.css';

const HeaderNavbar = () => {
  return (
    <div>
        <Navbar expand="lg" className='header-navbar-bg'>
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'#about'}>About</Nav.Link>
                        <Nav.Link as={Link} to={'#schedules'}>Schedules</Nav.Link>
                        <Nav.Link as={Link} to={'#membership'}>Membership</Nav.Link>
                        <Nav.Link as={Link} to={'#pricing'}>Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to={'#offer'} className='header-offer-btn'>Offer</Nav.Link>
                </Nav>
                <Button className='btn primary-bgcolor primary-btn'>Courses</Button>
            </Container>
        </Navbar>
    </div>
  )
}

export default HeaderNavbar