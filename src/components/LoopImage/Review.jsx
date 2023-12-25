// ReviewImage.js
import React from 'react';

const ReviewImage = ({ image, isVisible }) => {
  const classes = `review-image ${isVisible ? 'visible' : ''}`;

  return <img src={image} alt="Review" className={classes} />;
};

export default ReviewImage;
