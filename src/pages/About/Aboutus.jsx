import React from 'react';
import { Row, Col } from 'react-bootstrap';
import photo from '../../assets/about/aboutus.jpg';
import './aboutus.css';
import ReviewList from '../../components/LoopImage/loopreviews';
import Review from '../../components/Reviews/Review';

export default function Aboutus() {
  const containers = [
    {
      title: 'About Us',
      description: 'Description 1 goes here.',
      imageSrc: photo,
    },
    {
      title: 'About Us',
      description: 'Description 2 goes here.',
      imageSrc: photo,
    },
    {
      title: 'About Us',
      description: 'Description 3 goes here.',
      imageSrc: photo,
    },
  ];

  return (
    <div>
      <div className="about-bg-image"></div>
      <div className="container mt-5 mb-5">
        {containers.map((container, index) => (
          <Row key={index} className={`about-container mt-5 ${index % 2 === 1 ? 'even' : 'odd'}`}>
            {/* Left side with description */}
            <Col md={6} className="about-description">
              <h2>{container.title} {index + 1}</h2>
              <p>{container.description}</p>
            </Col>

            {/* Right side with image */}
            <Col md={6} className="about-image">
              <img src={container.imageSrc} alt={`Image ${index + 1}`} />
            </Col>
          </Row>
        ))}
      </div>
      <Review/>
    </div>
  );
}
