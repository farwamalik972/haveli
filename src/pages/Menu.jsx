import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MainNav from '../Components/MainNav';
import pdf from '../Images/haveli.pdf';
import slid5 from '../Images/slide-5.jpg';
import slid1 from '../Images/slide-1.jpg';
import slid3 from '../Images/slide-3.jpg';
import Footer from '../Components/Footer';
import menuLogo from "../Images/menu-logo.jpg";

function Menu() {
  return (
    <div className='menu-wrapper'>
      <MainNav />
      <Container className='menu-page'>
        <h2>Our Menu</h2>
        <Row>
          {/* PDF Section */}
          <Col md={8} className='pdf-section'>
            <Card className='menu-card'>
              <Card.Body className='menu-card-body'>
                <embed
                  src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  type='application/pdf'
                  className='menu-embed'
                />
              </Card.Body>
            </Card>
          </Col>

          {/* Haveli Gallery Section */}
          <Col md={4} className='gallery-section'>
            <h2 className='gallery-title'>Haveli Gallery</h2>
            <div className='gallery-grid mb-3'>
              <img src={slid1} alt='Gallery Image 1' className='gallery-image' />
              <img src={slid3} alt='Gallery Image 2' className='gallery-image' />
              <img src={slid5} alt='Gallery Image 3' className='gallery-image' />
              <img src={slid1} alt='Gallery Image 4' className='gallery-image' />
            </div>
            <div className="menu-logo">
                <img src={menuLogo} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    
    <Footer/>
    </div>
  );
}

export default Menu;
