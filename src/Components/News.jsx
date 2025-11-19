import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you import Bootstrap CSS
import "../assets/Css/News.css";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assuming this component is rendered inside a parent with a black background
const KickEdgeLatestNews = () => {
     useEffect(() => {
            AOS.init({ duration: 1200 });
          }, []);
    
    const newsArticles = [
        {
            title: 'MESSI’S LEGACY: THE INTER MIAMI HOME JERSEY',
            date: 'Nov 7, 2025',
            summary: 'The latest Home kit draws its inspiration from the historic 2020 debut jersey, quickly becoming a symbol. Reintroduced in 2024, the design returned as a defining...',
            imageSrc: '/public/Messi news.jpg' 
        },
        {
            title: 'KickEdge Opens First Exclusive Store in Coimbatore',
            date: 'Nov 6, 2025',
            summary: 'We are excited to welcome fans to our newest boutique in Coimbatore, Tamil Nadu. Drop by to discover special merchandise and fresh arrivals from the KickEdge lineup.',
            imageSrc: 'public/news 2.jpg' // Placeholder for your store image
        },
        {
            title: 'KickEdge Unveils Eco-Friendly Liga Retro Jersey Upgrade',
            date: 'Nov 4, 2025',
            summary: 'Our classic Liga collection gets a sustainable makeover with recycled polyester and bold new 38mm fabric details. A timeless design reimagined with modern materials.',
            imageSrc: 'public/News 3.png' // Placeholder for your close-up jersey texture
        }
    ];

    return (
        // **Set the background and text color for the entire section**
        <section className="py-5 bg-black text-white"id="news">
            <div className="container"data-aos="zoom-in-up">
                {/* Title Section */}
                <div className="text-center mb-5">
                    <h2 className="display-6 fw-bold">Latest KickEdge News</h2>
                    <p className="lead text-secondary">Discover what's happening in the world of jerseys</p>
                </div>

                {/* News Grid (3 Columns) */}
                <div className="row g-4">
                    {newsArticles.map((article, index) => (
                        // Bootstrap column for three-across layout on medium/large screens
                        <div key={index} className="col-md-4">
                            <div className="card h-100 border-0 bg-transparent">
                                {/* *** IMAGE RENDERING FIX START *** */}
                                <div className="image-container rounded mb-3" style={{ height: '250px', overflow: 'hidden' }}>
                                    {article.imageSrc ? (
                                        <img 
                                            src={article.imageSrc} 
                                            className="img-fluid" // Bootstrap class for responsive images
                                            alt={article.title} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div className="bg-secondary bg-opacity-10" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            Image Placeholder
                                        </div>
                                    )}
                                </div>
                                {/* *** IMAGE RENDERING FIX END *** */}

                                <div className="card-body p-0">
                                    {/* Title */}
                                    <h5 className="card-title fw-bold text-uppercase  text-light" style={{ fontSize: '1.1rem' }}>
                                        {article.title}
                                    </h5>
                                    {/* Date */}
                                    <p className="card-text text-secondary mb-2" style={{ fontSize: '0.9rem' }}>
                                        {article.date}
                                    </p>
                                    {/* Summary/Description */}
                                    <p className="card-text text-light" style={{ fontSize: '0.95rem' }}>
                                        {article.summary}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Discover Button */}
                <div className="text-center mt-5">
                    {/* *** UPDATED BUTTON COMPONENT *** */}
                    <button className='buttonss'>
                        <span>Discover</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 74 74"
                            height="34"
                            width="34"
                        >
                            {/* SVG FIX: Set stroke/fill to 'currentColor' so CSS can control it */}
                            <circle strokeWidth="3" stroke="currentColor" r="35.5" cy="37" cx="37"></circle>
                            <path
                                fill="currentColor"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default KickEdgeLatestNews;