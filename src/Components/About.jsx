import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import "../assets/Css/About.css";
import { IoIosFootball } from "react-icons/io";

import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutSection = () => {
      useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
    return (
        // The background color is set via CSS class 'about-section'
        <section className="about-section py-5"id="About">
            <Container className="p-0">
                <Row className="about-row g-0">

                    {/* Left Side: Image and 'Since 2010' Text */}
                    <Col md={6} className="image-col"data-aos="fade-right">
                        <div className="image-container">
                            {/* Use the placeholder variable for the image source */}
                            <Image src="public\about.jpg" alt="Football coach training players" fluid className="rounded-4" />
                            {/* The "Since 2010" vertical text overlay - uses cyan accent color */}
                            <div className="since-text">
                                <span className="small">Since</span>
                                <span className="big-year">2024</span>
                            </div>
                        </div>
                    </Col>

                    {/* Right Side: Text Content, CTA, and Cards */}
                    <Col md={6} className="content-col p-5">
                        <div className="about-header mb-4"data-aos="fade-down">
                            {/* Text color is bright cyan */}
                            <span className="small-icon-text text-cyan">
                                <i className="bi bi-info-circle"></i><IoIosFootball /> About Us
                            </span>
                            <h1 className="main-title mt-2">
                                Crafting Champions, One Jersey at a Time.
                            </h1>
                            <p className="mt-3 text-secondary">
                                At KickEdge, we believe a jersey is more than fabric — it’s identity, pride, and passion.
                                Our designs are crafted to elevate every fan and player, blending modern performance materials with timeless football culture. Every jersey we create is engineered to inspire confidence, celebrate your team, and bring the spirit of the beautiful game closer to you.
                            </p>
                        </div>

                        {/* CTA and Head Coach Info */}
                        <Row className="align-items-center mb-4 g-3">
                            <Col xs={12} md={6} className="d-grid">
                                {/* Button uses the custom cyan class */}
                                <button type="button" className="neo-space-btn">
                                    <strong>
                                        <span className="me-2">Learn More</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </strong>

                                    <div className="neo-stars-container">
                                        <div className="neo-stars"></div>
                                    </div>

                                    <div className="neo-glow">
                                        <div className="neo-circle"></div>
                                        <div className="neo-circle"></div>
                                    </div>
                                </button>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="head-coach-info">
                                    <i className="bi bi-person-circle me-2"></i>
                                    <div>
                                        <p className="mb-0 fw-bold">Head Coach</p>
                                        <p className="mb-0 small text-secondary">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        {/* Vision and Mission Cards */}
                        <Row className="g-3">
                            <Col xs={12} sm={6}>
                                <Card className="vision-mission-card p-3">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-eye card-icon text-cyan me-3"></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Our Vision</h5>
                                            <p className="mb-0 small text-secondary">To set the standard for authentic, high-quality football jerseys for fans everywhere.</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Card className="vision-mission-card p-3">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-bullseye card-icon text-cyan me-3"></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Our Mission</h5>
                                            <p className="mb-0 small text-secondary">To make buying football jerseys simple, reliable, and enjoyable for every customer.</p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;