import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "react-bootstrap/Carousel";

function Base() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <>
      {/* ✅ Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top py-3 shadow-sm">
        <div className="container-fluid px-5">
          {/* Toggle for mobile */}
         
<button
  className="navbar-toggler setting-btn"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <input type="checkbox" id="checkbox"/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
</button>



          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            {/* Left Section */}
            <ul className="navbar-nav left-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ fontSize: "20px" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: "20px" }}>
                  About <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: "20px" }}>
                  Programs <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </li>
            </ul>

            {/* Center Logo */}
            <a className="navbar-brand fw-bold fs-3 d-flex align-items-center logo-center" href="#">
              <img
                src="public/soccer-player (1).png"
                alt="KickEdge Logo"
                style={{ width: "40px", height: "40px" }}
              />
              <span className="ms-2">KickEdge</span>
            </a>

            {/* Right Section */}
            <ul className="navbar-nav right-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: "20px" }}>
                  Pages <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ fontSize: "20px" }}>
                  Contact Us
                </a>
              </li>

              {/* Book Now Button */}
              <li className="nav-item ms-2">
                <button className="button" style={{ "--clr": "rgb(13, 202, 240)" }}>
                  <span className="button__icon-wrapper">
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
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Hero Section with Carousel */}
      <section className="hero-section">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={true}
          controls={false}
          fade
        >
          {/* First Slide */}
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="public\carosel 2.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="hero-caption text-start">
              <h1>Your Team. Your Colors.</h1>
              <p>Customize your jersey and show the world who you play for.</p>
              <div className="d-flex gap-3 mt-3">
                <HeroButton text="Order Now" />
                <HeroButton text="About Me" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="public\carosel 3.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="hero-caption text-start">
              <h1>Where Style Meets the Game.</h1>
              <p>Elevate your play with jerseys that define attitude and comfort.</p>
              <div className="d-flex gap-3 mt-3">
                <HeroButton text="Order Now" />
                <HeroButton text="About Me" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

/* ✅ Small Reusable Component for Buttons */
function HeroButton({ text }) {
  return (
    <button className="animated-button">
      <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">{text}</span>
      <span className="circle"></span>
      <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
}

export default Base;
