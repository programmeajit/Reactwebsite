import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../../components/Contact/ContactForm';
import './contactpage.css';

const ContactPage = () => {
  return (
    <div>
      <div className="contact-bg-image"></div>
      <div className="container mt-5 mb-5">
        <Row>
          <Col md={6} className='mt-3'>
            <div className="contact-info contact-page-sidebar">
              <h2>Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione
                <br /> tempora nostrum omnis dolor? Nostrum eos labore eligendi
                <br />modi, quasi officia esse ullam, voluptas ex odio provident
                <br />voluptatibus vitae adipisci assumenda?
              </p>

              <h4>(901)-555-656</h4>
              <h4>ajitkrsingh841@gmail.com</h4>
              
              <div className="social-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className='mt-3'>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactPage;
