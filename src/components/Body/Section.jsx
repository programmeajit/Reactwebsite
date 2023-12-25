import Carousel from 'react-bootstrap/Carousel'
import sun from '../../assets/home/sunsine.webp';
import tree from '../../assets/home/tree.jpg';
import './Section.css'

function Section() {
  return (
    <div className="container  mb-5">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="section-image d-block w-100 "
          src={sun}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="section-image d-block w-100"
          src={tree}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="section-image d-block w-100"
          src={sun}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Section;
