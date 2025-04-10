import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import dining from "../Images/verhnda1.jpeg";
import air from "../Images/ver2.jpeg";
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";

const Verandah = () => {
  return (
    <div className="verandah-page">
  <MainNav/>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animate-text">Welcome to Verandah</h1>
          <p className="animate-text">Where elegance meets open-air dining.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row>
            <Col md={6} className="mb-3">
              <div className="feature-box">
                <img src={air} alt="Scenic Seating" />
                <div className="hover-content">
                  <h4>Scenic Seating</h4>
                  <p>Enjoy breathtaking views while dining in a cozy ambiance.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="feature-box">
                <img src={dining} alt="Fresh Air Dining" />
                <div className="hover-content">
                  <h4>Fresh Air Dining</h4>
                  <p>Dine in the open air with a relaxing atmosphere.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <Container>
          <h2>Why Choose Our Verandah?</h2>
          <p>Discover an unparalleled dining experience.</p>
          <Row>
            <Col md={4} className="why-box">
              <div className="icon">🌿</div>
              <h4>Serene Atmosphere</h4>
              <p>Relax in a tranquil and beautiful setting.</p>
            </Col>
            <Col md={4} className="why-box">
              <div className="icon">🍽️</div>
              <h4>Exquisite Cuisine</h4>
              <p>Our menu is crafted for an unforgettable experience.</p>
            </Col>
            <Col md={4} className="why-box">
              <div className="icon">🎶</div>
              <h4>Live Entertainment</h4>
              <p>Enjoy soulful live performances as you dine.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Exclusive Offers */}
      <section className="offers-section">
        <Container>
          <h2 className="section-title">Exclusive Offers</h2>
          <Row>
            <Col md={6} className="mb-3">
              <Card className="offer-card">
                <Card.Body>
                  <h4>Weekend Special Discount</h4>
                  <p className="text-white">Get 20% off on all verandah dining this weekend.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="offer-card">
                <Card.Body>
                  <h4>VIP Seating</h4>
                  <p className="text-white">Enjoy an exclusive dining experience with our VIP seating.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Verandah;
