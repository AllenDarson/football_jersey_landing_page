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

          {/* === Mobile/Tablet Specific Header Row Start (Toggle & Logo) === */}
          <div className="d-flex w-100 justify-content-between d-lg-none align-items-center">

            {/* 1. Mobile Toggle (Left) - Added me-3 for gap */}
            <button
              className="navbar-toggler setting-btn me-3 p-0 border-0" // p-0 border-0 to let the custom toggle size handle it
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* Your NEW Custom Toggle structure */}
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="toggle">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
              </label>
            </button>

            {/* 2. Mobile Logo (Center) - Pushed to the center using mx-auto */}
            <a className="navbar-brand fw-bold fs-3 d-flex align-items-center logo-center mx-auto" href="#">
              <img
                src="public/soccer-player (1).png"
                alt="KickEdge Logo"
                style={{ width: "40px", height: "40px" }}
              />
              <span className="ms-2">KickEdge</span>
            </a>

            {/* 3. Empty placeholder to balance the centered logo against the toggle size */}
            <div style={{ width: '40px' }}></div>

          </div>
          {/* === Mobile/Tablet Specific Header Row End === */}

          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

            {/* Left Section (Always visible on Desktop, Collapsible on Mobile) */}
            <ul className="navbar-nav left-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ fontSize: "20px" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About" style={{ fontSize: "20px" }}>
                  About Us <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products" style={{ fontSize: "20px" }}>
                  Our Products <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </li>
            </ul>

            {/* Center Logo (Desktop Only) - Hidden on mobile/tablet */}
            <a className="navbar-brand fw-bold fs-3 d-none d-lg-flex align-items-center logo-center" href="#">
              <img
                src="public/soccer-player (1).png"
                alt="KickEdge Logo"
                style={{ width: "40px", height: "40px" }}
              />
              <span className="ms-2">KickEdge</span>
            </a>

            {/* Right Section (Always visible on Desktop, Collapsible on Mobile) */}
            <ul className="navbar-nav right-nav align-items-center">

              {/* Book Now Button (Mobile/Tablet Only) - Inside the collapsed menu */}
              <li className="nav-item ms-2 d-lg-none mt-3 mb-2">
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
                  Order Now
                </button>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#news" style={{ fontSize: "20px" }}>
                  News <i className="bi bi-chevron-down ms-1"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section" style={{ fontSize: "20px" }}>
                  Contact Us
                </a>
              </li>

              {/* Book Now Button (Desktop Only) */}
              <li className="nav-item ms-2 d-none d-lg-block">
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
              src="/carosel 2.jpg"
            />

            <div className="hero-caption">
              <h1>Your Team. Your Colors.</h1>
              <p>Customize your jersey and show the world who you play for.</p>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <HeroButton text="Order Now" />
                <HeroButton text="About Me" />
              </div>
            </div>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <img
              className="d-block w-100 hero-img"
              src="/carosel 3.jpg"
            />

            <div className="hero-caption">
              <h1>Where Style Meets the Game.</h1>
              <p>Elevate your play with jerseys that define attitude and comfort</p>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <HeroButton text="Order Now" />
                <HeroButton text="About Me" />
              </div>
            </div>
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
