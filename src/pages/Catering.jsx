import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import sushiImg from "../Images/sushi-sprite-final.png";
import bannerBg from "../Images/buffy.jpeg";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import axios from "axios";
import config from "../config";

const Catering = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    location: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.API_BASE_URL}/api/catering-request`, formData);
      alert("Catering request submitted successfully!");
      // Clear the form after submission
      setFormData({
        fullName: "",
        email: "",
        company: "",
        location: "",
        budget: ""
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="catering-page">
      <MainNav />

      {/* Banner Section */}
      <div
        className="banner-section mb-5"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="banner-content animate-banner">
          <h1>Events and Buffet<br />Information</h1>
        </div>
      </div>

      {/* Catering Section */}
      <Container className="catering-section">
        <h1 className="catering-heading animate-text">Catering</h1>
        <p className="animate-text mt-5">
        Haveli can provide an amazing experience for<br />
          your next special occasion. Please contact our staff to<br />
          learn more on how we can cater your next event.
        </p>

        <Row>
          {/* Form Section */}
          <Col md={6} className="animate-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="fullName" className="mb-4">
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-4">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="company" className="mb-4">
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="COMPANY"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="location" className="mb-4">
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="LOCATION"
                  value={formData.location}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="budget" className="mb-4">
                <Form.Control
                  type="text"
                  name="budget"
                  placeholder="BUDGET"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="submit-btn" type="submit">
                SUBMIT
              </Button>
            </Form>
          </Col>

          {/* Image Section */}
          <Col md={6} className="animate-image">
            <div className="image-container">
              <img
                src={sushiImg}
                alt="Sushi Dish"
                className="rotating-dish"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Catering;
