import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import liveMusic from "../Images/live-music.jpg";
import romanticAmbiance from "../Images/roof-open.jpeg";
import menuImage from "../Images/open-menu.jpeg";
import coupleDinner from "../Images/night-dinner.jpeg";
import birthdayPackage from "../Images/birthday-pkg.jpeg";
import MainNav from "../Components/MainNav";

const OpnSky = () => {
  return (
    <div className="open-to-sky">
 <MainNav/>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Open to Sky</h1>
          <p>Experience elegance under the stars</p>
        </div>
      </section>

      {/* Experience Highlights */}
      <Container className="experience-section">
        <h2 className="section-title">Experience the Best</h2>
        <Row>
          <Col md={4} className="experience-box mb-3">
            <img src={liveMusic} alt="Live Music" />
            <div className="overlay-text">
              <h3>Live Music</h3>
              <p>Soulful melodies under the stars</p>
            </div>
          </Col>
          <Col md={4} className="experience-box mb-3">
            <img src={menuImage} alt="Exclusive Menu" />
            <div className="overlay-text">
              <h3>Exclusive Menu</h3>
              <p>Delight in curated rooftop dining</p>
            </div>
          </Col>
          <Col md={4} className="experience-box mb-3">
            <img src={romanticAmbiance} alt="Romantic Ambiance" />
            <div className="overlay-text">
              <h3>Romantic Ambiance</h3>
              <p>Perfect setting for an unforgettable evening</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Special Offers */}
      <Container className="special-offers">
        <h2 className="section-title">Special Offers</h2>
        <Row>
          <Col md={6} className="offer-box mb-3">
            <img src={birthdayPackage} alt="Birthday Packages" />
            <div className="offer-text">
              <h3>Birthday Packages</h3>
              <p>Celebrate your special day in style</p>
            </div>
          </Col>
          <Col md={6} className="offer-box mb-3">
            <img src={coupleDinner} alt="Couple Dinners" />
            <div className="offer-text">
              <h3>Dinners</h3>
              <p>Romantic evening under the sky</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default OpnSky;
