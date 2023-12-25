// ReviewList.js

import React, { useState, useEffect } from 'react';
import ReviewImage from './Review.jsx';
import photo from '../../assets/about/aboutus.jpg';
import './reviews.css'

const reviews = [
    photo,
    photo,
    photo,
    // Add more review images as needed
  ];
  
  const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Function to update the currentIndex in a loop
      const updateIndex = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
      };
  
      // Set interval to update the index every 3 seconds (adjust as needed)
      const intervalId = setInterval(updateIndex, 3000);
  
      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Run the effect once on mount
  
    return (
      <div className="review-carousel">
        {reviews.map((review, index) => (
          <ReviewImage key={index} image={review} isVisible={index === currentIndex} />
        ))}
      </div>
    );
  };
  
  export default ReviewCarousel;