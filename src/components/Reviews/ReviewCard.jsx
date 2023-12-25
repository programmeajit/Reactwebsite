import React from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonial = ({ imgSrc, name, role, description, rating }) => {
  return (
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={imgSrc} className="rounded-circle shadow-1-strong" width="150" height="150" alt={name} />
      </div>
      <h5 className="mb-3">{name}</h5>
      <h6 className="text-primary mb-3">{role}</h6>
      <p className="px-xl-3">
        <FaQuoteLeft className="pe-2" />
        {description}
      </p>
      <ul className="list-unstyled d-flex justify-content-center">
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index}>
            {index + 1 <= rating ? <FaStar className="fa-sm text-warning" /> : <FaStarHalfAlt className="fa-sm text-warning" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonial;