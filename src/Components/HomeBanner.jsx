import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for navigation
import slide1 from "../Images/slide-1.jpg";
import slide2 from "../Images/slide-2.jpg";
import slide3 from "../Images/slide-3.jpg";
import slide4 from "../Images/slide-4.jpg";

const HomeBanner = () => {
  return (
    <div className="home-page-banner">
      <Carousel
        className="custom-carousel"
        interval={5000}
        pause="hover"
        prevIcon={<FaArrowLeft className="custom-arrow custom-prev" size={40} />}
        nextIcon={<FaArrowRight className="custom-arrow custom-next" size={40} />}
        slide
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-text">
            <div className="carousel-text-inner">
              <h1 className="slide-title">Welcome to Haveli Restaurant, Lahore!</h1>
              {/* <p className="slide-description">The BEST Pakistani cuisine in the town.</p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-text">
            <div className="carousel-text-inner">
              <h1 className="slide-title">Welcome to Haveli Restaurant, Lahore!</h1>
              {/* <p className="slide-description">The BEST Pakistani cuisine in the town.</p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-text">
            <div className="carousel-text-inner">
              <h1 className="slide-title">Welcome to Haveli Restaurant, Lahore!</h1>
              {/* <p className="slide-description">The BEST Pakistani cuisine in the town. </p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide4}
            alt="Fourth slide"
          />
          <Carousel.Caption className="carousel-text">
            <div className="carousel-text-inner">
              <h1 className="slide-title">Welcome to Haveli Restaurant, Lahore!</h1>
              {/* <p className="slide-description">The BEST Pakistani cuisine in the town. </p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
