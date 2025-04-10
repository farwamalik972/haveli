import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import gallery from "../Images/board-culture.jpeg";
import gallery1 from "../Images/barod1.jpeg";
import gallery2 from "../Images/barood1.png";
import gallery3 from "../Images/barod2.jpeg";
import offer1 from "../Images/barood3.png";
import MainNav from "../Components/MainNav";

const BaroodKhana = () => {
  return (
    <div className="barood-khana-page">
  <MainNav/>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="animate-text">Barood Khana</h1>
          <p className="animate-text">Experience the grandeur of history</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section ">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="feature-image">
              <img src={gallery} alt="Royal Dining" className="img-fluid" />
            </Col>
            <Col md={6} className="feature-text">
              <h2>Royal Dining Experience</h2>
              <p>Indulge in exquisite flavors inspired by Mughal traditions.</p>
              <h2>Live Cultural Performances</h2>
              <p>Enjoy live music and traditional performances every night.</p>
              <h2>Authentic Heritage Ambiance</h2>
              <p>Step into a space where history meets elegance.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Interactive Gallery */}
      <section className="gallery-section">
        <Container>
          <h2 className="section-title mb-4">A Glimpse Into History</h2>
          <Row className="gallery">
            <Col md={4} className="mb-3">
              <img src={gallery1} alt="Gallery" className="img-fluid" />
            </Col>
            <Col md={4} className="mb-3">
              <img src={gallery2} alt="Gallery" className="img-fluid" />
            </Col>
            <Col md={4} className="mb-3">
              <img src={gallery3} alt="Gallery" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section mb-5">
        <Container>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="testimonial-box">
            <p>“An unforgettable experience with a truly majestic ambiance!”</p>
            <h5>- A Happy Guest</h5>
          </div>
        </Container>
      </section>
      

      <Footer />
    </div>
  );
};

export default BaroodKhana;
