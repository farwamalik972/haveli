import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
     <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4>Online Shop</h4>
            <ul>
              <li><a href="#">Watch</a></li>
              <li><a href="#">Bag</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Dress</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer