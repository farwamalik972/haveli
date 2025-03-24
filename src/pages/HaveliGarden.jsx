import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
 import garden from "../Images/haveli-garden.jpeg";
 import bbq from "../Images/bbq.jpeg"
 import music from "../Images/live-music.jpg"
 import event from "../Images/event (3).jpeg"
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";

const HaveliGarden = () => {
  return (
    <div className="haveli-garden">
    <MainNav/>
      {/* Immersive Entry Section */}
      <section className="immersive-entry">
        <div className="overlay">
          <Container className="text-center text-white">
            <h1>Welcome to Haveli Garden</h1>
            <p>A blend of luxury, greenery, and unforgettable experiences</p>
          </Container>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="experience-section">
        <Container>
          <Row className="experience-row">
            <Col md={6} className="experience-box reverse">
              <img src={bbq} alt="Live BBQ" />
              <div className="text-content">
                <h4>Live BBQ</h4>
                <p>Enjoy sizzling flavors prepared in an open-air setting.</p>
              </div>
            </Col>
            <Col md={6} className="experience-box">
              <div className="text-content">
                <h4>Serene Greenery</h4>
                <p>Surround yourself with nature’s beauty.</p>
              </div>
              <img src={garden} alt="Serene Greenery" />
            </Col>
            <Col md={6} className="experience-box reverse">
              <img src={music} alt="Live Music Nights" />
              <div className="text-content">
                <h4>Live Music Nights</h4>
                <p>Soothing tunes in a magical ambiance.</p>
              </div>
            </Col>
            <Col md={6} className="experience-box">
              <div className="text-content">
                <h4>Event Celebrations</h4>
                <p>Host unforgettable birthdays and gatherings.</p>
              </div>
              <img src={event} alt="Event Celebrations" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Smooth Scrolling Photo Gallery */}
      <section className="scroll-gallery">
        <h2 className="section-title">Mesmerizing Garden Views</h2>
        <div className="gallery-container">
          <div className="gallery-track">
            <div className="gallery-column">
              <img src={garden} alt="Garden 1" />
              <img src={garden} alt="Garden 2" />
            </div>
            <div className="gallery-column">
              <img src={garden} alt="Garden 3" />
              <img src={garden} alt="Garden 4" />
            </div>
            <div className="gallery-column">
              <img src={garden} alt="Garden 5" />
              <img src={garden} alt="Garden 6" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HaveliGarden;