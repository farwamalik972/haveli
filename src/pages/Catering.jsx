
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
 import sushiImg from "../Images/sushi-sprite-final.png";
 import chopsticksImg from "../Images/catering.jpg";
 import bannerBg from "../Images/buffy.jpeg";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";

const Catering = () => {
  return (
    <div className="catering-page">
 <MainNav/>
      {/* Banner Section */}
      <div className="banner-section mb-5" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="banner-content animate-banner">
          <h1>Events and Buffet<br></br> Information</h1>
        </div>
      </div>

      {/* Catering Section */}
      <Container className="catering-section">
        <h1 className="catering-heading animate-text">Catering</h1>
        <p className="animate-text mt-5">
          Adachi can provide an amazing experience for<br></br> your next special occasion. 
          Please contact our staff to<br></br>  learn more on how we can cater your next event.
        </p>
        <Row>
          {/* Form Section */}
          <Col md={6} className="animate-form">
            <Form>
              <Form.Group controlId="fullName" className="mb-4">
                <Form.Control type="text" placeholder="FULL NAME" />
              </Form.Group>
              <Form.Group controlId="email"  className="mb-4">
                <Form.Control type="email" placeholder="EMAIL" />
              </Form.Group>
              <Form.Group controlId="company"  className="mb-4">
                <Form.Control type="text" placeholder="COMPANY" />
              </Form.Group>
              <Form.Group controlId="location"  className="mb-4">
                <Form.Control type="text" placeholder="LOCATION" />
              </Form.Group>
              <Form.Group controlId="budget"  className="mb-4">
                <Form.Control type="text" placeholder="BUDGET" />
              </Form.Group>
              <Button className="submit-btn">SUBMIT</Button>
            </Form>
          </Col>

          {/* Image Section */}
          {/* Image Section */}
<Col md={6} className="animate-image">
  <div className="image-container">
    {/* Image with rotation effect */}
    <img src={sushiImg} alt="Sushi Dish" className="rotating-dish" />
  </div>
</Col>

          {/* <Col md={6} className="animate-image">
            <img src={sushiImg} alt="Chopsticks" className="chopsticks-img" />
          </Col> */}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Catering;
