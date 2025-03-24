import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";


const Museum = () => {
  return (
    <div className="museum-page">
 <MainNav/>
      {/* Hero Section */}
      <section className="hero-section mb-5">
        <div className="hero-overlay mt-5">
          <h1 className="hero-title">Haveli Museum</h1>
          <p className="hero-subtitle">Experience History & Culture</p>
        </div>
      </section>

      {/* Exhibit Highlights */}
      <section className="exhibit-highlights mb-5">
        <Container>
          <h2 className="section-title">Exhibit Highlights</h2>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="highlight-card">
                <Card.Body>
                  <h3>Ancient Artifacts</h3>
                  <p>Discover rare artifacts with historical significance.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="highlight-card">
                <Card.Body>
                  <h3>Cultural Stories</h3>
                  <p>Immerse yourself in the stories of our rich heritage.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="highlight-card">
                <Card.Body>
                  <h3>Historical Significance</h3>
                  <p>Learn about the past through carefully preserved exhibits.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Photo Gallery */}
      <section className="photo-gallery mb-5">
        <Container>
          <h2 className="section-title">Museum Gallery</h2>
          <Row>
            <Col md={4}><div className="gallery-img img1"></div></Col>
            <Col md={4}><div className="gallery-img img2"></div></Col>
            <Col md={4}><div className="gallery-img img3"></div></Col>
          </Row>
        </Container>
      </section>

      {/* Special Features */}
      <section className="special-features mb-4">
        <Container>
          <h2 className="section-title">Special Features</h2>
          <Row>
            <Col md={6}>
              <h3>Guided Tours</h3>
              <p>Join expert-guided tours to understand historical insights.</p>
            </Col>
            <Col md={6}>
              <h3>Educational Programs</h3>
              <p>Workshops and seminars for history enthusiasts.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
};

export default Museum;
