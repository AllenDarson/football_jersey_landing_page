import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShoppingBag } from 'react-icons/fa';
import "../assets/Css/Banner.css";


import 'aos/dist/aos.css';
const RunningBanner = () => {
   
  return (
    // The main div uses the custom class 'running-banner' for the image and height
    <div className="running-banner">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          {/* Centered text and button content */}
          {/* The column is right-aligned on medium screens and up (text-md-end) */}
          <Col md={{ span: 8, offset: 4 }} className="text-md-end text-center">
            
            {/* Main Headline */}
            <h1 className="display-4 fw-bolder text-white text-uppercase banner-headline">
              PLAY WITH PASSION. WEAR THE EDGE.
            </h1>
            
            {/* Sub-Headline - Added mb-3 for space below it */}
            <p className="fs-3 fw-normal text-white mb-3 banner-subline">
              KICKEDGE
            </p>
            
            {/* Call to Action Button */}
            {/* d-inline-flex is needed for the custom styling. ms-auto (margin-start: auto) 
                pushes the button to the right within the right-aligned column. 
                mt-4 adds vertical space from the sub-headline. */}
           <button className="custom-animated-btn d-inline-flex ms-auto mt-2">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  {/* Using FaShoppingBag from React Icons */}
                  <FaShoppingBag /> 
                </div>
              </div>
              <span>SHOP NOW</span>
            </button>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RunningBanner;