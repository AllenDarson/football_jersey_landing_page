import '../assets/Css/Scroll.css';
import React, { useState, useEffect } from 'react';

// Mock data including the image file paths (assuming images are in the public folder)
const mockProducts = [
  { id: 1, name: 'Germany 26 Home Authentic Jersey', price: '9 599.00', details: "Men • Football", imageSrc: '/public/jersey 1.avif' },
  { id: 2, name: 'Spain 26 Home Authentic Jersey', price: '9 599.00', details: "Men • Football", imageSrc: '/public/jerset 2.avif' },
  { id: 3, name: 'Germany 26 Home Jersey', price: '6 599.00', details: "Women • Football", imageSrc: '/public/jerseey 3.avif' },
  { id: 4, name: 'Italy 26 Home Kids Jersey', price: '4 299.00', details: "Kids Unisex • Football", imageSrc: '/public/jersey 4.avif' },
  { id: 5, name: 'Manchester United 24/25 Away Jersey', price: '3 599.50', details: "Men • Football", imageSrc: '/public/jersey 5.avif' },
  { id: 6, name: 'Brazil 2024 Stadium Home', price: '4 695.00', details: "Men's Nike Dri-FIT Football Replica Shirt", imageSrc: '/public/jersey.avif' },
  { id: 7, name: 'Paris Saint-Germain 2024/25 Stadium Home', price: '4 695.00', details: "Men's Nike Dri-FIT Football Replica Shirt", imageSrc: '/public/jersey 7.avif' },
  { id: 8, name: 'F.C. Barcelona 2025/26 Stadium Home', price: '3 995.00', details: "Older Kids' Nike Dri-FIT Football Replica Shirt", imageSrc: '/public/jersey 8.avif' },
  { id: 9, name: 'Paris Saint-Germain 2025/26 Stadium Third', price: '4 695.00', details: "Women's Nike Dri-FIT Total 90 Football Replica Shirt", imageSrc: '/public/jersey 9.avif' },
  { id: 10, name: 'Chelsea F.C. 2025/26 Stadium Home', price: '4 695.00', details: "Women's Nike Dri-FIT Football Replica Shirt", imageSrc: '/public/jersey 10.avif' },
];

const ShopCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  // Default to desktop view (3 items), will be updated by useEffect
  const [itemsPerPage, setItemsPerPage] = useState(3); 

  // Function to determine how many items should be visible based on screen width
  const calculateItemsPerPage = () => {
    if (window.innerWidth <= 768) {
      return 1; // Mobile view
    } else if (window.innerWidth <= 1024) {
      return 2; // Tablet view
    } else {
      return 3; // Desktop view
    }
  };

  useEffect(() => {
    // Set initial value
    setItemsPerPage(calculateItemsPerPage());
    
    // Add event listener to recalculate on resize
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
      // Reset startIndex to 0 on resize to avoid being stuck in a large offset
      setStartIndex(0); 
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  // The last possible starting index to show the items cleanly
  const maxStartIndex = mockProducts.length - itemsPerPage; 

  const handleNext = () => {
    // Jump forward by the dynamic itemsPerPage value
    setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, maxStartIndex));
  };

  const handlePrev = () => {
    // Jump backward by the dynamic itemsPerPage value
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  // The transform style now correctly calculates the percentage offset.
  // Example: If 1 item is visible (mobile), the total wrapper is 10x screen width. 
  // An offset of 1 item is (1/10) * 100% = 10%
  const transformStyle = {
    transform: `translateX(-${(100 / mockProducts.length) * startIndex}%)`,
  };

  const isNextDisabled = startIndex >= maxStartIndex;
  const isPrevDisabled = startIndex === 0;

  return (
    <div className="carousel-page-container"id="products">
      <header className="carousel-header">
        <h1>Products For You</h1>
        <div className="header-controls">
          <p>Shop Products</p>
          <button onClick={handlePrev} disabled={isPrevDisabled}>{'<'}</button>
          <button onClick={handleNext} disabled={isNextDisabled}>{'>'}</button>
        </div>
      </header>

      <div className="carousel-window">
        {/* The entire list of products that slides smoothly */}
        <div className="carousel-content-wrapper" style={transformStyle}>
          {mockProducts.map((product) => (
            <div key={product.id} className="product-card">
              
              {/* Image element using the path from the mock data */}
              <img 
                src={product.imageSrc} 
                alt={product.name} 
                className="product-image"
              />
              
              <div className="product-info">
                <p className="product-name">**{product.name}**</p>
                <p className="product-details">{product.details}</p>
                <p className="product-price">MRP : ₹ **{product.price}**</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCarousel;