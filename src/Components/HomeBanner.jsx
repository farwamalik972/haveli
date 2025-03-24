import React, { useState, useEffect } from "react";
import slide1 from "../../src/Images/slide-1.jpg"
import slide2 from "../../src/Images/slide-2.jpg"
import slide3 from "../../src/Images/slide-3.jpg"
import slide4 from "../../src/Images/slide-4.jpg"
import slide5 from "../../src/Images/slide-5.jpg"
import slide6 from "../../src/Images/slide-6.jpg"
import { Container } from "react-bootstrap";

const slidesData = [
  {
    heading: "Welcom to Haveli resturant",
    image: slide1,
  },
  {
    heading: "Welcom to Haveli resturant",
    image: slide2,
  },
  {
    heading: "Welcom to Haveli resturant",
    image: slide3,
  },
  {
    heading: "Welcom to Haveli resturant",
    image: slide4,
  },
  {
    heading: "Welcom to Haveli resturant",
    image: slide1,
  },
  {
    heading: "Welcom to Haveli resturant",
    image: slide5,
  },
  {
    heading: "Welcom to Haveli resturant",
    image: slide6,
  },
];


const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numOfSlides = slidesData.length;

  const goToSlide = (index) => {
    if (index < 0) index = numOfSlides - 1;
    if (index >= numOfSlides) index = 0;
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider">
      <div className="slider__slides">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "s--active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide__inner">
              <div className="slide__content">
                {/* <h2 className="slide__heading">{slide.heading}</h2> */}
                <Container fluid className="main d-flex justify-content-center align-items-center">
      <h2 className="first">Welcom to Haveli resturant</h2>
      <h2 className="second">Welcom to Haveli resturant</h2>
    </Container>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
