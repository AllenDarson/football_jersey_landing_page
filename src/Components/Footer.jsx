import React from "react";
import "../assets/Css/Footer.css";
// Import necessary React Icons
import { FaFacebookF, FaTwitter, FaPinterestP, FaTelegramPlane } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { IoIosCall, IoIosMail, IoIosGlobe, IoIosPin } from 'react-icons/io';


const Footer = () => {
  return (
    <footer className="lux-footer">
      <div className="footer-overlay"></div>

      <div className="container footer-container">
        
        {/* Brand/Info Section - Matches the left-hand side of the image */}
        <div className="footer-section footer-brand-section">
          {/* Logo - As requested */}
          <a className="footer-logo-link" href="#">
            <img
              src="public\soccer-player (1).png"
              alt="KickEdge Logo"
              className="footer-logo-img"
            />
            <span className="footer-logo-text">KickEdge</span>
          </a>
          <p className="footer-text">
            Delivering high-quality football jerseys designed for comfort, performance, and pride.
          </p>
          
          {/* Social Icons - Grouped below text like the image */}
          <div className="footer-social-image-style">
            <a href="#" className="social-icon facebook-bg"><FaFacebookF /></a>
            <a href="#" className="social-icon twitter-bg"><FaTwitter /></a>
            <a href="#" className="social-icon pinterest-bg"><FaPinterestP /></a>
            <a href="#" className="social-icon telegram-bg"><FaTelegramPlane /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section footer-quick-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#"><GoArrowUpRight className="link-icon" /> Home</a></li>
            <li><a href="#About"><GoArrowUpRight className="link-icon" /> About Us</a></li>
            <li><a href="#products"><GoArrowUpRight className="link-icon" /> Our Products</a></li>
            <li><a href="#news"><GoArrowUpRight className="link-icon" /> News</a></li>
            <li><a href="#contact-section"><GoArrowUpRight className="link-icon" /> Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section footer-contact-info">
          <h4 className="footer-title">Contact Information</h4>
          <ul className="footer-contact-list">
            <li><IoIosCall className="contact-icon" /> +1 (310) 555-1234</li>
            <li><IoIosCall className="contact-icon" /> +91-8760961525</li>
            <li><IoIosMail className="contact-icon" /> info@kickedge.com</li>
            <li><IoIosGlobe className="contact-icon" /> www.kickedge.com</li>
            <li><IoIosPin className="contact-icon" /> Coimbatore, Tamil Nadu, India.</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KickEdge — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;