
import "../assets/Css/Contact.css";


import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
// Ensure you have installed 'react-icons' and 'react-bootstrap'

// Define the custom button color
const buttonColor = 'rgb(13, 202, 240)'; 

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (In a real app, you'd handle API submission here.)");
  };

  return (
    // 'contact-section' will be styled with the background image and overlay in styles.css
    <section id="contact-section" className="py-5">
      <Container>
        {/* Header Section */}
        <div className="text-center text-md-start mb-5">
          {/* text-info is styled in CSS to be the blue color */}
          <p className="text-info mb-1">⚫ Contact us</p> 
          <h2 className="display-4 fw-bold">Connect With KickEdge</h2>
          <p className="w-75 lead" style={{ fontSize: '0.9rem', color: '#ccc' }}>
           Have a question about our jerseys, sizes, or custom orders? Our team is here to help you with anything you need.
          </p>
        </div>

        {/* Contact Content: Form on left, Info on right */}
        <Row className="justify-content-center">
          
          {/* 1. Contact Form (Left Side) */}
          <Col lg={6} className="mb-4 mb-lg-0">
            {/* The contact-form-box class can be added here if you want a subtle background, but the form background is handled by input styles. */}
            <div className="p-4 contact-form-box">
              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* First Name */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Control 
                        type="text" 
                        placeholder="First Name" 
                        // contact-input class is crucial for the custom styling
                        className="text-white border-0 contact-input" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Last Name */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Control 
                        type="text" 
                        placeholder="Last Name" 
                        className="text-white border-0 contact-input" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  {/* Email Address */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control 
                        type="email" 
                        placeholder="Email Address" 
                        className="text-white border-0 contact-input" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  
                  {/* Telephone */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formTelephone">
                      <Form.Control 
                        type="tel" 
                        placeholder="Telephone" 
                        className="text-white border-0 contact-input" 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                {/* Comments / Questions */}
                <Form.Group className="mb-4" controlId="formComments">
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Comments / Questions" 
                    className="text-white border-0 contact-input" 
                  />
                </Form.Group>

                {/* Send Message Button */}
                <Button 
                  type="submit" 
                  // Use the custom color for the button
                  style={{ backgroundColor: buttonColor, borderColor: buttonColor, padding: '10px 30px', borderRadius: '5px', fontWeight: 'bold' }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* 2. Contact Details & Social Media (Right Side) */}
          <Col lg={4}>
            {/* contact-info-box class is styled in CSS for the dark blue background */}
            <div className="p-4 contact-info-box"> 
              
              {/* Phone */}
              <div className="d-flex align-items-start mb-4">
                <FaPhone size={24} className="text-info me-3 mt-1" />
                <div>
                  <h6 className="mb-0 fw-bold">Phone</h6>
                  <p className="mb-0 text-white-50">+91-8760961525</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-start mb-4">
                <FaEnvelope size={24} className="text-info me-3 mt-1" />
                <div>
                  <h6 className="mb-0 fw-bold">Email</h6>
                  <p className="mb-0 text-white-50">info@kickedge.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt size={24} className="text-info me-3 mt-1" />
                <div>
                  <h6 className="mb-0 fw-bold">Address</h6>
                  <p className="mb-0 text-white-50">Coimbatore, Tamil Nadu, India, Asia, World</p>
                </div>
              </div>

              <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

              {/* Follow us */}
              <h6 className="mb-3 fw-bold">Follow us</h6>
              <div className="d-flex social-icons">
                <a href="#facebook" className="social-icon">
                  <FaFacebookF size={18} />
                </a>
                <a href="#twitter" className="social-icon">
                  <FaTwitter size={18} />
                </a>
                <a href="#linkedin" className="social-icon">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#pinterest" className="social-icon">
                  <FaPinterestP size={18} />
                </a>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;