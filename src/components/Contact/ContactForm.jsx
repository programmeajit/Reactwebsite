import { Form, Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contactForm.css'; // Import your custom CSS file

const ContactForm = () => {

  const form = useRef();
  const service_id = process.env.REACT_APP_YOUR_SERVICE_ID;
  const template_id =process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const public_id = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(service_id, template_id, form.current, public_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="to_name" />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" name="to_phone" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="from_email" />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
