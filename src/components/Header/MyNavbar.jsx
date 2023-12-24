import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoIcon from  '../../assets/logo-2.png'
import { Navbar, Nav, Container, FormControl, Button, Form } from 'react-bootstrap';
import { FaHome, FaInfo, FaServicestack, FaEnvelope, FaSearch, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className='pt-3 pd-3'>
      <Container>
      <Navbar.Brand href="/">
          <img
            src={logoIcon}
            alt="Company Logo"
            width="100"
            height="40"
            className="d-inline-block align-top mr-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="ml-3"> {/* Added margin between links */}
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="#about" className="ml-3"> {/* Added margin between links */}
              <FaInfo /> About
            </Nav.Link>
            <Nav.Link href="#services" className="ml-3"> {/* Added margin between links */}
              <FaServicestack /> Services
            </Nav.Link>
            <Nav.Link href="/contact" className="ml-3"> {/* Added margin between links */}
              <FaEnvelope /> Contact
            </Nav.Link>
          </Nav>
          
          <Nav className="ml-auto">

          <Form inline className="mr-2 ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
          <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ borderRadius: '20px 0 0 20px', width: '200px' }}
            />
            <Button variant="outline-light" style={{ borderRadius: '0 20px 20px 0' }}>
              <FaSearch />
            </Button>

          </Form>
            <Nav.Link href="https://www.facebook.com" className="ml-2">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com" className="ml-2">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com" className="ml-2">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com" className="ml-2">
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
