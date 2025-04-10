import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaUtensils, FaTruck, FaUserTie } from 'react-icons/fa';
import img1 from '../Images/saltant-galry1.jpeg';
import img2 from '../Images/nightview-open.jpeg';
import img3 from '../Images/night-dinner.jpeg';
import img4 from '../Images/khlsa4.jpeg';
import MainNav from '../Components/MainNav';
import Footer from '../Components/Footer';

const galleryImages = [img1, img2, img3, img4];

const OffPremisesCatering = () => {
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleShow = (img) => {
    setSelectedImg(img);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedImg(null);
  };

  return (
    <>
  <MainNav/>
    <Container fluid className="off-premises-container">
        
      {/* Intro */}
      <Row className="intro-section">
        <Col md={12} className="mt-5">
          <h2 className='mt-5'>Off-Premises Catering</h2>
          <p>We bring gourmet experiences to your home, office, or venue of choice.</p>
        </Col>
      </Row>

      {/* What We Offer */}
      <Row className="offer-section text-center">
        <Col md={4}>
          <Card className="offer-card">
            <Card.Body>
              <FaUtensils size={40} color="#c12d2a" />
              <h5>Full-Service Catering</h5>
              <p>From menu to setup, everything is handled professionally.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="offer-card">
            <Card.Body>
              <FaTruck size={40} color="#c12d2a" />
              <h5>Delivery & Setup</h5>
              <p>Hot meals, delivered and arranged beautifully.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="offer-card">
            <Card.Body>
              <FaUserTie size={40} color="#c12d2a" />
              <h5>On-site Chef</h5>
              <p>Live cooking or support staff available at your venue.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      {/* Gallery */}
      <Row className="gallery-section">
        {galleryImages.map((img, idx) => (
          <Col md={3} key={idx}>
            <Card className="gallery-card" onClick={() => handleShow(img)}>
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered className="image-modal">
        <Modal.Body>
          <img src={selectedImg} alt="Preview" className="modal-image" />
        </Modal.Body>
      </Modal>

      {/* Contact CTA */}
      <Row className="contact-section">
        <Col>
          <h4>Ready to Catering Your Event?</h4>
          <p>Contact us today to get a custom quote for your off-premises catering needs.</p>
          <a href="/catering">
          <Button variant="light" className="cta-btn">Get a Custom Quote</Button>
          </a>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default OffPremisesCatering;
