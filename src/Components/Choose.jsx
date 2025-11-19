import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Ensure you have installed 'react-icons': npm install react-icons
import { BsBriefcaseFill, BsHeadset, BsRocketTakeoff } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
// Assuming your CSS file is correctly located at '../assets/Css/Choose.css'
import "../assets/Css/Choose.css"; 


// Feature Data Array (Content is tailored for 'KickEdge')
const Choose = [
  {
    icon: BsBriefcaseFill,
    color: '#28A745', // Green color
    title: '500+ DESIGNS',
    text: 'Explore our vast collection of unique, league-specific, and custom number designs.',
    alignment: 'left',
  },
  {
    icon: BsHeadset,
    color: '#1A4D6F', // Dark Blue color
    title: '24/7 SUPPORT',
    text: 'Our dedicated team is ready to assist you with design queries and order tracking.',
    alignment: 'right',
  },
  {
    icon: FaTshirt,
    color: '#1A4D6F', // Dark Blue color (Using the opposite corner's color, like the image)
    title: 'CUSTOMIZE',
    text: 'Personalize your jersey with custom names, numbers, and patches.',
    alignment: 'left',
  },
  {
    icon: BsRocketTakeoff,
    color: '#FF6347', // Red-Orange color
    title: 'FAST DELIVERY',
    text: 'Quick and reliable worldwide shipping to get your jersey on the pitch sooner.',
    alignment: 'right',
  },
];

// Reusable component for each feature block
const FeatureBlock = ({ icon: Icon, color, title, text, alignment }) => (
  // The alignment class controls where the text/icon float is positioned
  <div className={`feature-block text-${alignment}`}data-aos="fade-up">
    <div className={`icon-circle align-${alignment}`} style={{ backgroundColor: color }}>
      <Icon size={30} color="white" />
    </div>
    <div className={`content-box text-${alignment}`}data-aos="fade-up">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  </div>
);

const KickEdgeFeatures = () => {
  return (
    <div className="kickedge-features-section">
      <Container className="">
        <center><h2 className="display-5 fw-bold ">Why Choose us</h2></center>
        <Row className="justify-content-center">
             
          {/* Mapped the array 'Choose' instead of the undefined 'features' */}
          {Choose.map((feature, index) => (
            // xs={12} ensures full width on mobile. md={6} creates the 2x2 grid on medium/desktop screens.
            <Col xs={12} md={6} lg={6} key={index} className="feature-col">
              <FeatureBlock {...feature} />
            </Col>
          ))}
        </Row>
        
        {/* The central element/image is positioned absolutely by the CSS */}
        <div className="center-image-container">
          <div className="center-icon-circle">
            <p className="m-0" style={{ fontWeight: 'bold' }}>KICK EDGE</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

// Export the main component
export default KickEdgeFeatures;