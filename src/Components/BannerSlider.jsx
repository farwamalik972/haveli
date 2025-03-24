import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../Images/dining-1.jpeg";
import banner1 from "../Images/dining-2.jpeg";
import banner2 from "../Images/dining-main.jpeg";

const images = [
  { id: 1, src: banner },
  { id: 2, src: banner1 },
  { id: 3, src: banner2 },
];

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZooming(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsZooming(false);
      }, 500); // Syncs with transition time
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      <Container>
        <Row className="align-items-center mt-5">
          {/* Left Side - Text */}
          <Col md={4} className="text-section">
            <h2>OUR BEST SPECIALTIES</h2>
            <button className="view-more-btn">VIEW MORE</button>
          </Col>

          {/* Right Side - Images */}
          <Col md={8} className="image-section">
            {/* Main Image */}
            <div className="main-image-wrapper">
              <img
                src={images[activeIndex].src}
                alt="Dish"
                className={`main-image ${isZooming ? "zoom-out" : "zoom-in"}`}
              />
            </div>

            {/* Thumbnails */}
            <div className="thumbnails">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`thumbnail ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={image.src} alt="Thumb" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSlider;








