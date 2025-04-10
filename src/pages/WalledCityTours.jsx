import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import MainNav from '../Components/MainNav';
import img1 from "../Images/garden9.jpeg"
import img2 from "../Images/fort.jpg"
import img3 from "../Images/shahi.jpeg"
import tour from "../Images/tour.jpeg"
import Footer from '../Components/Footer';

const WalledCityTours = () => {
  return (
    <div className="walled-city">
        <MainNav/>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore the Historic Walled City of Lahore</h1>
        </div>
      </section>

      {/* History & Culture Section */}
      <Container className="history-section">
        <Row>
          <Col md={6}>
            <h2>History & Culture</h2>
            <p>The Walled City of Lahore, an ancient city, is home to some of Pakistan’s most historic landmarks.</p>
          </Col>
          <Col md={6}>
            <ul className="landmark-list">
              <li><img src={img1} alt="Badshahi Mosque" /> Badshahi Mosque</li>
              <li><img src={img2} alt="Lahore Fort" /> Lahore Fort</li>
              <li><img src={img3} alt="Shahi Hammam" /> Shahi Hammam</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* // Tour Packages Section Updated */}
{/* <Container className="tour-packages">
  <Row className="d-flex justify-content-center">
    <Col md={4} sm={6} className="tour-package-card">
      <Card className="tour-card">
        <Card.Body>
          <div className="tour-card-header">
            <Card.Title className="tour-card-title">Half-Day Tour</Card.Title>
            <div className="tour-card-icon">
              <i className="fa fa-clock" /> 4 Hours
            </div>
          </div>
          <Card.Text className="tour-card-desc">
            A short yet enriching tour through Lahore's best spots. Discover iconic landmarks and hidden gems in a few hours.
          </Card.Text>
          <ul className="tour-card-features">
            <li><i className="fa fa-map-marker" /> Visit Lahore Fort</li>
            <li><i className="fa fa-map-marker" /> Explore Badshahi Mosque</li>
            <li><i className="fa fa-clock" /> Flexible Schedule</li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} sm={6} className="tour-package-card">
      <Card className="tour-card">
        <Card.Body>
          <div className="tour-card-header">
            <Card.Title className="tour-card-title">Full-Day Tour</Card.Title>
            <div className="tour-card-icon">
              <i className="fa fa-clock" /> 8 Hours
            </div>
          </div>
          <Card.Text className="tour-card-desc">
            An immersive experience, exploring the Walled City. Visit Lahore’s most famous monuments and landmarks.
          </Card.Text>
          <ul className="tour-card-features">
            <li><i className="fa fa-map-marker" /> Badshahi Mosque</li>
            <li><i className="fa fa-map-marker" /> Lahore Fort</li>
            <li><i className="fa fa-map-marker" /> Shahi Hammam</li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} sm={6} className="tour-package-card">
      <Card className="tour-card">
        <Card.Body>
          <div className="tour-card-header">
            <Card.Title className="tour-card-title">Night Tour</Card.Title>
            <div className="tour-card-icon">
              <i className="fa fa-clock" /> 3 Hours
            </div>
          </div>
          <Card.Text className="tour-card-desc">
            Discover the beauty of Lahore at night. Experience a magical view of the city under the stars.
          </Card.Text>
          <ul className="tour-card-features">
            <li><i className="fa fa-map-marker" /> Visit the Walled City</li>
            <li><i className="fa fa-map-marker" /> Explore Nightlife Spots</li>
            <li><i className="fa fa-clock" /> Night Photography Opportunity</li>
          </ul>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container> */}


      {/* Contact & Booking Section */}
      <Container className="book-tour-form">
  <Row className="justify-content-center">
    {/* Form Column */}
    <Col md={6} sm={12}>
      <Card className="booking-card">
        <Card.Body>
          <Card.Title className="form-title">Book Your Tour</Card.Title>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="no-focus"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="no-focus"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  className="no-focus"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formTourDate">
              <Form.Label>Preferred Tour Date</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="date"
                  required
                  className="no-focus"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Special Requests</Form.Label>
              <div className="input-group">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Any special requests or questions?"
                  className="no-focus"
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="book-btn">
              Book Now
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>

    {/* Image Column */}
    <Col md={6} sm={12} className="image-column">
      <img
        src={tour} // Replace with your image URL
        alt="Tour image"
        className="tour-image"
      />
    </Col>
  </Row>
</Container>




      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default WalledCityTours;
