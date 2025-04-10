import React from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import decor1 from '../Images/khlsa1.jpeg';
import decor2 from '../Images/khlsa2.jpeg';
import decor3 from '../Images/khlsa3.jpeg';
import decor4 from '../Images/khlsa4.jpeg';
import decor5 from '../Images/khlsa5.jpeg';
import MainNav from '../Components/MainNav';
import Footer from '../Components/Footer';

const CorporateEventDecor = () => {
  const [show, setShow] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const images = [
    { id: 1, src: decor1, alt: 'Conference Setup' },
    { id: 2, src: decor2, alt: 'Networking Lounge' },
    { id: 3, src: decor3, alt: 'Product Launch Stage' },
    { id: 4, src: decor4, alt: 'Award Ceremony Decor' },
    { id: 5, src: decor5, alt: 'Corporate Dinner Table' },
  ];

  return (
    <div className="corporate-decor">
        <MainNav/>
      <section className="hero-section">
        <div className="overlay">
          <h1>Corporate Event Decor</h1>
          <p>Elegance, Class & Professional Touch</p>
        </div>
      </section>

      <Container fluid className="gallery-section">
        <Row>
          {images.map((img) => (
            <Col xs={12} sm={6} md={4} key={img.id} className="decor-col">
              <Card className="decor-card" onClick={() => handleShow(img.src)}>
                <Card.Img variant="top" src={img.src} alt={img.alt} />
                <div className="overlay-text">{img.alt}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* <Modal show={show} onHide={handleClose} centered className="corporate-modal">
        <Modal.Body>
          <img src={selectedImage} alt="Decor Preview" className="modal-image" />
        </Modal.Body>
      </Modal> */}
      <Footer/>
    </div>
  );
};

export default CorporateEventDecor;
