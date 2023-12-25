import React, { useState, useEffect } from 'react';
import photo from '../../assets/about/aboutus.jpg';
import './loopimage.css'; // Import the CSS file for styling'


const Looping = () => {
  

  return (
    <div className="horizontal-image-loop-container">
      <div className="horizontal-image-loop" >
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Looping;

