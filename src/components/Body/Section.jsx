import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSpring, animated } from "react-spring";
import "./Section.css"; // Import your custom CSS file

const Section = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "About us 1",
      subtitle: "Your Source for Mobile Entertainment",
      description:
        "Section Description goes here. This is a long paragraph that will be centered both horizontally and vertically within the container. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio deserunt ex veritatis cumque cum esse sunt, voluptatum alias, optio quaerat maiores provident laudantium voluptas omnis aperiam!.",
    },
    {
      title: "About us 2",
      subtitle: "Your Source for Mobile Entertainment",
      description:
        "Section Description goes here. This is a long paragraph that will be centered both horizontally and vertically within the container. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio deserunt ex veritatis cumque cum esse sunt, voluptatum alias, optio quaerat maiores provident laudantium voluptas omnis aperiam!.",
    },
    {
      title: "About us 3",
      subtitle: "Your Source for Mobile Entertainment",
      description:
        "Section Description goes here. This is a long paragraph that will be centered both horizontally and vertically within the container. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio deserunt ex veritatis cumque cum esse sunt, voluptatum alias, optio quaerat maiores provident laudantium voluptas omnis aperiam!.",
    },
  ];

  const props = useSpring({
    opacity: 1,
    transform: `translateX(-${activeSection * 100}%)`,
  });

  const nextSection = () => {
    setActiveSection((prevSection) =>
      prevSection === sections.length - 1 ? 0 : prevSection + 1
    );
  };

  const prevSection = () => {
    setActiveSection((prevSection) =>
      prevSection === 0 ? sections.length - 1 : prevSection - 1
    );
  };

  return (
    <div className="container my-5 d-flex align-items-center justify-content-center bg-primary">
      <div className="carousel-container">
        <animated.div className="text-center mx-3 text-light animated-section" style={props}>
          <h4 className="my-5">{sections[activeSection].title}</h4>
          <h2 className="display-4">{sections[activeSection].subtitle}</h2>
          <p className="mx-auto">{sections[activeSection].description}</p>
        </animated.div>
        <button className="btn btn-primary prev" onClick={prevSection}>
          &lt;
        </button>
        <button className="btn btn-primary next" onClick={nextSection}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Section;
