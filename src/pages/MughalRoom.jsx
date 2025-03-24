import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import room from "../Images/mughal.jpeg"
import MainNav from "../Components/MainNav";

const MughalRoom = () => {
  return (
    <div className="mughal-wrapper">
    <MainNav/>
    <Container fluid className="mughal-room mt-5">
      {/* Header Section */}
      <Row className="header text-center">
        <Col>
          <h1>🏰 The Mughal Room</h1>
          <p>Experience the grandeur of Mughal architecture and heritage.</p>
        </Col>
      </Row>

      {/* Room Content */}
      <Row className="room-content mb-5">
        <Col md={6} className="text-center">
          <img
            src={room}
            alt="Mughal Palace"
            className="room-image"
          />
        </Col>
        <Col md={6} className="room-details">
          <h2>Majestic Interiors</h2>
          <p>
            Inspired by the Mughal era, this room features intricate jali work,
            ornate arches, and Persian carpets, bringing the charm of history to
            life.
          </p>
          <Button variant="danger">Explore More</Button>
        </Col>
      </Row>
    </Container>
      <Footer/>
    </div>
  );
};

export default MughalRoom;
