import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import haveli1 from "../Images/havil1.jpg";
import haveli2 from "../Images/haveli2.jpg";
import haveli3 from "../Images/haveli3.jpg";
import haveli4 from "../Images/haveli4.jpg";
import haveli5 from "../Images/haveli5.jpg"
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import CustomNavbar from "../Components/CustomNavbar";


const images = [
  haveli1,
  haveli2,
  haveli3,
  haveli4,
  haveli5,
  haveli1,
  haveli2,
  haveli3,
  haveli4,
  haveli5,
  haveli1,
  haveli3,
  haveli4,
  haveli2,
  haveli5,
  
];

const PhotoGellary = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="photo-galry-wrapper">
      <MainNav/>
    <Container fluid className="parallax-container mt-5">
      <Row className="parallax-section">
        <h2 className="gallery-title">Image Gallery</h2>
        <Col className="parallax-images">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-item ${idx % 3 === 1 ? "parallax-effect" : ""}`}
              style={{ height: idx % 2 === 0 ? "250px" : "300px", transform: idx % 3 === 1 ? `translateY(${scroll * -0.1}px)` : "none" }}
            >
              <img src={img} alt={`Gallery ${idx}`} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
};

export default PhotoGellary;