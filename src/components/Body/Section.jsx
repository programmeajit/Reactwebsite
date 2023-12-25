// import Carousel from 'react-bootstrap/Carousel'
 import photo from '../../assets/about/aboutus.jpg';
// function Section() {
//   return (
//     <div className="container">
//     <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={photo}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={photo}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={photo}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </div>
//   );
// }

// export default Section;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Section() {
  
  const testimonialsData = [
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
      name: 'Maria Smantha',
      role: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
      rating: 4.5,
    },
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
      name: 'Lisa Cudrow',
      role: 'Graphic Designer',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.',
      rating: 5,
    },
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp',
      name: 'John Smith',
      role: 'Marketing Specialist',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
      rating: 4,
    },
    
  ];
  return (

    <div className="container bg-dark justify-content-center">
      <Carousel>
      
        {testimonialsData.map((testimonial, index) => (

        <Carousel.Item interval={1000}>
                <div className="col-md-4 mb-5 mb-md-0 text-light">
                  <div className="d-flex justify-content-center mb-4">
                    <img src={testimonial.imgSrc} className="rounded-circle shadow-1-strong" width="150" height="150" alt={testimonialsData.name} />
                  </div>
                  <h5 className="mb-3">{testimonial.name}</h5>
                  <h6 className="text-primary mb-3">{testimonial.role}</h6>
                  <p className="px-xl-3">
                    <FaQuoteLeft className="pe-2" />
                    {testimonial.description}
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index}>
                        {index + 1 <= testimonial.rating ? <FaStar className="fa-sm text-warning" /> : <FaStarHalfAlt className="fa-sm text-warning" />}
                      </li>
                    ))}
                  </ul>
                </div>


                
        </Carousel.Item>

        ))}  
      </Carousel>
    </div>
  );
}

export default Section;