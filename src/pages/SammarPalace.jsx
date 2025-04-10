import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";

const SammarPalace = () => {
  return (
    <div className="sammar-palace">
      <MainNav/>
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row className="align-items-center mt-5">
            <Col md={6} className="hero-content mt-5">
              <h1>Welcome to Sammar Palace</h1>
              <p>Experience luxury like never before</p>
            </Col>
            {/* <Col md={6}>
              <div className="hero-image"></div>
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about">
        <Container>
          <Row>
            <Col md={6} className="about-image"></Col>
            <Col md={6} className="smar-text">
              <h2>About Sammar Palace</h2>
              <p>A place where luxury meets comfort.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services">
        <Container>
          <h2>Our Services</h2>
          <Row>
            {["Luxury Rooms", "Fine Dining", "Event Hosting"].map((service, idx) => (
              <Col md={4} key={idx} className="mb-3">
                <Card className="service-card">
                  <Card.Body>
                    <h3>{service}</h3>
                    <p>Experience the best {service.toLowerCase()} with premium service and ambiance.</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <Container>
          <h2>Book Your Stay Today!</h2>
         <a href="/contact">
         <Button variant="light">Get Started</Button>
         </a>
        </Container>
      </section>
      <Footer/>
    </div>
  );
};

export default SammarPalace;
