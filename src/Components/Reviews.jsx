import React from 'react';
import "../assets/Css/Reviews.css";
import { FaStar } from 'react-icons/fa'; // Ensure you have react-icons installed

// --- Mock Data ---
const mockReviews = [
  {
    id: 1,
    name: "Monica",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1", // Placeholder image
    text: "The jersey quality is exceptional and the delivery was fast. My new go-to site for football shirts! Easy to navigate and fantastic customer support."
  },
  {
    id: 2,
    name: "Aravind",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=7", // Placeholder image
    text: "Really nicely designed website and quite fast loading. The jersey fits perfectly—true to size. I'm already looking to purchase another one."
  },
  {
    id: 3,
    name: "Shiny",
    rating: 3,
    avatar: "https://i.pravatar.cc/150?img=5", // Placeholder image
    text: "The kit arrived exactly as ordered. The printing quality is excellent. Just wish the shipping options were a bit cheaper, but the product is great."
  }
];

// Calculate summary data (matching the percentages in the image)
const totalReviews = 500;
const summary = {
    '5': 63,
    '4': 10,
    '3': 6,
    '2': 12,
    '1': 9,
};

// --- Helper Components ---

// Component for rendering a single star rating
const StarRating = ({ rating, totalStars = 5 }) => (
    <div>
        {[...Array(totalStars)].map((_, index) => {
            const starValue = index + 1;
            return (
                <FaStar
                    key={index}
                    size={20}
                    // Use Bootstrap's text-warning for the yellow color
                    className={starValue <= rating ? 'text-warning' : 'text-secondary'}
                />
            );
        })}
    </div>
);

// Component for the rating summary bar
const RatingBar = ({ rating, percentage }) => (
    <div className="row align-items-center my-1">
        <div className="col-1 text-end p-0">
            {rating}
            {/* The star icon uses a small star entity to look like the image */}
            <span className="ms-1">&#9733;</span> 
        </div>
        <div className="col-9 px-2">
            {/* Bootstrap Progress Bar for the visual representation */}
            <div className="progress" style={{ height: '8px', backgroundColor: '#333' }}>
                <div 
                    className="progress-bar bg-warning" 
                    role="progressbar" 
                    style={{ width: `${percentage}%` }} 
                    aria-valuenow={percentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
        <div className="col-2 text-start p-0">
            {percentage}%
        </div>
    </div>
);

// --- Main Component ---
const Reviews = () => {
    return (
        // Apply custom class to set background/text colors
        <div className="jersey-reviews-section container-fluid py-5">
            {/* Bootstrap Row to hold the two main columns */}
            <div className="row justify-content-center">
                
                {/* LEFT COLUMN: Review Summary & Form */}
                {/* col-lg-5 (Desktop), col-md-6 (Tablet), col-12 (Mobile) */}
                <div className="col-lg-5 col-md-6 col-12 px-4 mb-5 mb-md-0"data-aos="zoom-in">
                    
                    {/* Customer Reviews Header */}
                    <h2 className="text-white mb-3">
                        <span className="me-2">⭐️</span>
                        Customer Reviews
                    </h2>
                    
                    {/* Overall Rating (5 Gold Stars) */}
                    <div className="mb-2">
                        <StarRating rating={5} />
                    </div>
                    <p className="text-secondary small">
                        Based on **{totalReviews}** reviews
                    </p>
                    
                    {/* Rating Summary Bars */}
                    <div className="mb-5">
                        {/* Note: Summary is mapped in reverse order (5 to 1) for visual appearance */}
                        {Object.entries(summary).sort(([a], [b]) => b - a).map(([rating, percentage]) => (
                            <RatingBar key={rating} rating={rating} percentage={percentage} />
                        ))}
                    </div>
                    
                    {/* Share Your Thoughts / Write a Review Button */}
                    <div className="pt-3 border-top border-secondary"data-aos="flip-right">
                        <h3 className="text-white h5">Share your thoughts</h3>
                        <p className="text-secondary small mb-3">
                            Got your new kit? Tell us what you think! Your feedback helps us score big.
                        </p>
                        {/* The bright yellow button */}
                        <button className="btn btn-warning w-100 fw-bold py-3 button_style">
                            <span className="me-2">📝</span>
                            Write a Review
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN: Individual Reviews */}
                {/* col-lg-5 (Desktop), col-md-6 (Tablet), col-12 (Mobile) */}
                <div className="col-lg-5 col-md-6 col-12 px-4">
                    {mockReviews.map((review) => (
                        <div key={review.id} className="mb-4 pb-4 border-bottom border-secondary">
                            
                            {/* Reviewer Name and Avatar */}
                            <div className="d-flex align-items-center mb-2">
                                {/* Avatar */}
                                <img 
                                    src={review.avatar} 
                                    alt={review.name} 
                                    className="rounded-circle me-3" 
                                    style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
                                />
                                
                                <div>
                                    {/* Name */}
                                    <h4 className="text-white h6 mb-0">{review.name}</h4>
                                    
                                    {/* Rating */}
                                    <StarRating rating={review.rating} />
                                </div>
                            </div>
                            
                            {/* Review Text */}
                            <p className="text-white small m-0 mt-2">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;