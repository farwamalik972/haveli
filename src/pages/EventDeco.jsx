import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import birthday from "../Images/brdy-de.jpeg"; // Correct image import
import MainNav from '../Components/MainNav';
import decore from "../Images/brdyde1.jpeg"
import event3 from "../Images/event (2).jpeg"
import coraporate from "../Images/khlsa4.jpeg"
import Footer from '../Components/Footer';

const EventDecor = () => {
  const [show, setShow] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    { id: 1, src: coraporate, alt: 'Corporate Decor' },
    { id: 2, src: decore, alt: 'Birthday Decor' },
    { id: 3, src: event3, alt: 'Wedding Decor' },
  ];

  return (
    <>
      <MainNav />
      <Container fluid className="event-decor-container">
        <Row className="hero-section mt-5 mb-5">
          <Col className="text-center">
            <h1 className='mt-5'>Elegant Event Decor Ideas</h1>
            <p>Celebrate in Style with Our Unique Decor Setups</p>
          </Col>
        </Row>
         <h2 className='events-wraper'>Events</h2>
        <Row className="gallery-section">
          {images.map((image) => (
            <Col xs={12} sm={6} md={4} key={image.id} className="image-col">
              <Card className="decor-card" onClick={() => handleShow(image.src)}>
                <Card.Img variant="top" src={image.src} alt={image.alt} />
                <Card.Body>
                  <Card.Title>{image.alt}</Card.Title>
                  {/* <Button variant="outline-light" className="view-details-btn">View Details</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default EventDecor;
