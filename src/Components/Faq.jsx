import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa'; // Assuming you use react-icons
import "../assets/Css/Faq.css";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Define the custom button color for consistency
const buttonColor = 'rgb(13, 202, 240)'; 

function Faq() {
   useEffect(() => {
      AOS.init({ duration: 1200 });
    }, []);
  return (
    // Set background color to black and text color to white
    <section className="py-5" style={{ backgroundColor: '#101418', color: 'white' }}>
      <Container>
        {/* Row 1: Main Header */}
        <Row className="justify-content-center text-center mb-5"data-aos="fade-down">
          <Col lg={8} xl={7}>
            {/* The 'text-muted' class can be styled to a specific color if needed, but we keep it default Bootstrap for simplicity */}
            
            <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
            <p className="lead" style={{ color: '#ccc' }}>
              Our FAQ section is designed to guide you with smooth, simple answers for a better KickEdge shopping experience.
            </p>
          </Col>
        </Row>
        
        {/* Row 2: Content (Left Column: Contact CTA, Right Column: Accordion) */}
        <Row className="justify-content-center">
          
          {/* Left Column: CTA */}
          <Col md={5} className="mb-5 mb-md-0"data-aos="fade-right">
            <span className="text-light">Lorem ipsum dolor</span>
            <h2 className="pb-4 fw-bold">Have Any Questions?</h2>
            <p style={{ color: '#ccc' }}>
             Explore our most frequently asked questions to learn about product details, shipping, returns, and custom orders.
            </p>
           <button className="button mt-3" style={{ "--clr": "rgb(13, 202, 240)" }} href="#">
  <span className="button__icon-wrapper">
    {/* Primary SVG Icon */}
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
    {/* Copy SVG Icon for the transition effect */}
    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
  Contact us
</button>
          </Col>

          {/* Right Column: Accordion */}
          <Col md={7}data-aos="fade-left">
            {/* Using the official React Bootstrap Accordion Component */}
            <Accordion defaultActiveKey="0">
              
              {/* Accordion Item 1 */}
              <Accordion.Item eventKey="0" className="bg-dark text-white accordion-item-custom">
                <Accordion.Header >
                  <div className="text-info me-3">
                    {/* Using React Icons for the question mark */}
                    <FaQuestionCircle size={24} />
                  </div>
                  What sizes are available for KickEdge football jerseys?
                </Accordion.Header>
                <Accordion.Body className="bg-dark text-white-50">
                  We offer jerseys in all major sizes—XS, S, M, L, XL, XXL, and custom-fit options depending on the design. Each product page includes a detailed size chart to help you choose the perfect fit.
                </Accordion.Body>
              </Accordion.Item>
              
              {/* Accordion Item 2 */}
              <Accordion.Item eventKey="1" className="bg-dark text-white accordion-item-custom">
                <Accordion.Header>
                  <div className="text-info me-3">
                    <FaQuestionCircle size={24} />
                  </div>
                  Are the jerseys original, and what material are they made of?
                </Accordion.Header>
                <Accordion.Body className="bg-black text-white-50">
                  Yes! Every KickEdge jersey is made from premium, breathable, quick-dry polyester designed for durability and comfort during play. All jerseys follow match-grade quality standards, ensuring excellent color, stitching, and long-lasting print.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion Item 3 */}
              <Accordion.Item eventKey="2" className="bg-dark text-white accordion-item-custom">
                <Accordion.Header>
                  <div className="text-info me-3">
                    <FaQuestionCircle size={24} />
                  </div>
                 Do you offer name and number customization on jerseys?
                </Accordion.Header>
                <Accordion.Body className="bg-black text-white-50">
                 Absolutely! We provide name, number, and patch customization on selected jerseys. You can personalize them during checkout. Customized products may take an additional 1–2 days for processing.
                </Accordion.Body>
              </Accordion.Item>

              {/* Accordion Item 4 */}
              <Accordion.Item eventKey="3" className="bg-dark text-white accordion-item-custom">
                <Accordion.Header>
                  <div className="text-info me-3">
                    <FaQuestionCircle size={24} />
                  </div>
                  How long does delivery take after placing an order?
                </Accordion.Header>
                <Accordion.Body className="bg-black text-white-50">
                 Standard delivery usually takes 4–7 business days, depending on your location. Express shipping options are also available at checkout for faster delivery.
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Faq;