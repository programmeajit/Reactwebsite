import React from 'react';
import Testimonial from './ReviewCard';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = () => {
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
    <section className="container mb-5 mt-5 border border-1 pt-4">

      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam <br /> iure provident
            voluptate
            esse quasi, veritatis totam voluptas nostrum <br /> quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>

          <div className="row text-center">
          <Carousel>
            {testimonialsData.map((testimonial, index) => (
              <Carousel.Item interval={500}>
                <Testimonial key={index} {...testimonial} />
              </Carousel.Item>
              
      
            ))}
          </Carousel>
          
          </div>
          
     
    </section>
  );
};

export default Testimonials;
