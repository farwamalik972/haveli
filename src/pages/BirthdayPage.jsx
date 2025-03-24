import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import brdy from "../Images/birthday.jpeg"
import brdy1 from "../Images/brdy-1.jpeg"
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";
const BirthdayPage = () => {
  return (
    <div className="birthday-page-earrper">

    
  <MainNav/>
    <div className="birthday-container">
      {/* 🎉 Hero Section */}
      <div className="hero">🎂 Happy Birthday, Alex! 🎈</div>

      {/* 🎈 Fun Facts (3D Flip Cards) */}
      <div className="fun-facts">
        <div className="flip-card">
          <div className="inner">
            <div className="front">🍕 Favorite Food</div>
            <div className="back">Pizza!</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="inner">
            <div className="front">🎮 Hobby</div>
            <div className="back">Playing FIFA</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="inner">
            <div className="front">✈️ Dream Destination</div>
            <div className="back">Paris</div>
          </div>
        </div>
      </div>

      {/* 📸 Interactive Gallery */}
      <div className="gallery">
        <img src={brdy} alt="Memory 1" />
        <img src={brdy1} alt="Memory 2" />
        <img src={brdy} alt="Memory 3" />
        <img src={brdy1} alt="Memory 4" />
      </div>

      {/* 🎊 CTA Section */}
      <Container className="cta">
        <Button className="invite-btn">🎊 Join the Celebration</Button>
      </Container>
    </div>
      <Footer/>
    </div>
  );
};

export default BirthdayPage;
