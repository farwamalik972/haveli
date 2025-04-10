import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../Images/footer-logo.png"

function Footer() {
  return (
     <footer className="footer">
      <Container>
        <Row>
          <Col md={3} sm={6} className="footer-col">
            <img className='footer-logo' src={logo} alt="" />
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/contact">Contact</a></li>
             
             
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4>More About</h4>
            <ul>
            <li><a href="/dining-experience">Dining Area</a></li>
              <li><a href="#"> Haveli Club</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="">info@haveli.com.pk</a></li>
              <li><a href="">Phone:+92 300 841 4899</a></li>
              <li><a href="">Phone:+92 321 465 1051</a></li>
            </ul>
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