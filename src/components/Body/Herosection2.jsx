import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Herosection2.css'
import { Card, Button, Row, Col } from 'react-bootstrap';

const HeroSection2 = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col md={3} className="mb-4">
          <Card className="text-center hover-card card-1">
            <Card.Body>
              <Card.Title>Title 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt eum, a optio maiores accusamus, assumenda odit rem cupiditate necessitatibus aperiam amet quis voluptatibus est iste sequi sint. Odio, quas.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4">
          <Card className="text-center hover-card card-2">
            <Card.Body>
              <Card.Title>Title 2</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam vitae error culpa minima adipisci optio labore reprehenderit! Facere, ut qui eum possimus ullam adipisci minima odio officia praesentium expedita!
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4">
          <Card className="text-center hover-card card-3">
            <Card.Body>
              <Card.Title>Title 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident itaque ipsum? Impedit sapiente dolore illo minus nostrum est placeat ad quidem reprehenderit qui, earum, porro eius fuga, similique et?
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-4">
          <Card className="text-center hover-card card-4">
            <Card.Body>
              <Card.Title>Title 4</Card.Title>
              <Card.Text>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus recusandae in fugit animi veniam neque maxime optio a cumque deleniti nihil, omnis mollitia natus ab consequatur saepe accusantium, aperiam soluta..
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection2;
