import React from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import MainNav from '../Components/MainNav';
import Footer from '../Components/Footer';

function Contact() {
  return (
    <div className='contact-warrper'>
        <MainNav/>
        <Container fluid className="restaurant-contact">
      <h2 className="contact-heading">Contact Us</h2>
      <Row>
        <Col md={8}>
          <Row className='mb-3'>
            <Col md={6}>
              <Card className="info-card reservations">
                <Card.Body>
                  <Card.Title>Reservations</Card.Title>
                  <Card.Text className="contact-number">+92 321 465 1051</Card.Text>
                  <small>(Please call after 1:00 pm)</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="info-card timing">
                <Card.Body>
                  <Card.Title>Restaurant Timing</Card.Title>
                  <p>Monday-Friday</p>
                  <p className="time">1:00 pm to 1:00 am</p>
                  <p>Saturday-Sunday</p>
                  <p className="time">9:00 am to 1:00 am</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="address-card mb-2">
            <Card.Body>
            <h3>Address</h3>
              <p> 2170-A, Food Street, Fort Road, Lahore, Pakistan.</p>
            </Card.Body>
          </Card>
          <Row className="contacts">
            <Col md={4} className="contact-item">
              <FaMobileAlt className="icon" />
              <p>Admin Officer</p>
              <p className="contact-number">+92 321 465 1051</p>
            </Col>
            <Col md={4} className="contact-item">
              <FaMobileAlt className="icon" />
              <p>General Manager</p>
              <p className="contact-number">+92 300 841 4899</p>
            </Col>
            <Col md={4} className="contact-item">
              <FaEnvelope className="icon" />
              <p>Inquiries</p>
              <p className="email">info@haveli.com.pk</p>
            </Col>
          </Row>
          <div className="map-container">
          <Container fluid className="p-0" style={{ position: 'relative', height: '100vh' }}>
      <iframe
        aria-hidden="true"
        frameBorder="0"
        tabIndex="-1"
        style={{
          // zIndex: -1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          // opacity: 0,
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.253938998218!2d-77.0368702!3d38.9071923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjIuMjIgMzgnMzcuNSJ9!5e0!3m2!1sen!2sus!4v1614534450235!5m2!1sen!2sus"
      ></iframe>
    </Container>
          </div>
        </Col>
        <Col md={4}>
          <Card className="feedback-form">
            <Card.Body>
              <Card.Title className='title'>Instant Inquiry/Feedback</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" className="custom-input" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control type="text" className="custom-input" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" className="custom-input" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Subject:</Form.Label>
                  <Form.Control type="text" className="custom-input" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message/Inquiry:</Form.Label>
                  <Form.Control as="textarea" rows={3} className="custom-input" />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Verification: Please enter any two digits</Form.Label>
                  <Form.Control type="text" className="custom-input" />
                </Form.Group>
                <Button className="submit-btn " type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  )
}

export default Contact