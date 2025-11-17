import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

// Define the custom button color based on your request
const buttonColor = 'rgb(13, 202, 240)'; 

const Contact = () => {
  return (
    // The background image/video and overlay are complex to replicate perfectly with pure React Bootstrap.
    // We'll focus on the content and structure within a styled section.
    <section id="contact-section" className="py-5" style={{ backgroundColor: 'black', color: 'white' }}>
      <Container>
        {/* Header Section */}
        <div className="text-center text-md-start mb-5">
          <p className="text-info mb-1">⚫ Contact us</p>
          <h2 className="display-4 fw-bold">Get in Touch with Our Team</h2>
          <p className="w-75 lead" style={{ fontSize: '0.9rem', color: '#ccc' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Contact Content: Form on left, Info on right */}
        <Row className="justify-content-center">
          
          {/* 1. Contact Form (Left Side) */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '10px' }}>
              <Form>
                <Row>
                  {/* First Name */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      {/* Note: The design uses placeholders without separate labels, which is common. */}
                      {/* For accessibility, a label is good, but we hide it here to match the look */}
                      <Form.Control 
                        type="text" 
                        placeholder="First Name" 
                        className="bg-dark text-white border-0 contact-input" 
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
                        className="bg-dark text-white border-0 contact-input" 
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
                        className="bg-dark text-white border-0 contact-input" 
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
                        className="bg-dark text-white border-0 contact-input" 
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
                    className="bg-dark text-white border-0 contact-input" 
                  />
                </Form.Group>

                {/* Send Message Button */}
                <Button 
                  type="submit" 
                  style={{ backgroundColor: buttonColor, borderColor: buttonColor, padding: '10px 30px', borderRadius: '5px', fontWeight: 'bold' }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* 2. Contact Details & Social Media (Right Side) */}
          <Col lg={4}>
            <div className="p-4 contact-info-box" style={{ backgroundColor: 'rgb(1, 46, 73)', borderRadius: '10px' }}>
              
              {/* Phone */}
              <div className="d-flex align-items-start mb-4">
                <FaPhone size={24} className="text-info me-3 mt-1" />
                <div>
                  <h6 className="mb-0 fw-bold">Phone</h6>
                  <p className="mb-0">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-start mb-4">
                <FaEnvelope size={24} className="text-info me-3 mt-1" />
                <div>
                  <h6 className="mb-0 fw-bold">Email</h6>
                  <p className="mb-0">info@yourdomain.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="d-flex align-items-start mb-4">
                <FaMapMarkerAlt size={24} className="text-info me-3 mt-1" />
                <div>
                  <h6 className="mb-0 fw-bold">Address</h6>
                  <p className="mb-0">1234 Victory Lane Springfield, CA 90210 United States</p>
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
