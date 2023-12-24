import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './contactForm.css'; // Import your custom CSS file

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
