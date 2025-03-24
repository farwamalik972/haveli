import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import raj from "../Images/raj.jpeg"
import MainNav from "../Components/MainNav";

const RajRoom = () => {
  return (
    <div className="raj-wrapper">
   <MainNav/>
      <Container fluid className="raj-room">
        {/* Header Section */}
        <Row className="header text-center">
          <Col>
            <h1>🏯 The Raj Room</h1>
            <p>Experience the elegance of Raj-era architecture and culture.</p>
          </Col>
        </Row>

        {/* Room Content */}
        <Row className="room-content">
          <Col md={6} className="room-details">
            <h2>Royal Interiors</h2>
            <p>
              The Raj Room is inspired by the grandeur of British-era Indian
              palaces, featuring vintage chandeliers, antique furniture, and
              Indo-Saracenic architecture.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={raj}
              alt="Raj Palace"
              className="room-image"
            />
          </Col>
        </Row>

        {/* Reversed Section for Variety */}
        <Row className="room-content reverse">
          <Col md={6} className="text-center">
            <img
              src={raj}
              alt="Vintage Raj Interior"
              className="room-image"
            />
          </Col>
          <Col md={6} className="room-details">
            <h2>Colonial Charm</h2>
            <p>
              The fusion of Mughal and British aesthetics in Raj-era rooms
              brings a unique blend of history and elegance to the experience.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default RajRoom;
