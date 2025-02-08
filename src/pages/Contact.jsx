import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaWhatsapp, FaSkype, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import MainNav from '../Components/MainNav';

function Contact() {
  return (
    <div className='contact-warrper'>
        <MainNav/>
     <section className="footer_get_touch_outer">
      <Container>
        <Row className="footer_get_touch_inner">
          {/* Form Section */}
          <Col md={6} className="get_form">
            <div className="get_form_inner">
              <div className="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <Form>
                <Row>
                  <Col md={6}><Form.Control type="text" placeholder="First Name" /></Col>
                  <Col md={6}><Form.Control type="text" placeholder="Last Name" /></Col>
                  <Col md={6}><Form.Control type="email" placeholder="Email" /></Col>
                  <Col md={6}><Form.Control type="tel" placeholder="Phone/Skype" /></Col>
                </Row>
                <Form.Group className="mt-3">
                  <Form.Control as="textarea" rows={4} placeholder="About Your Project" />
                </Form.Group>
                <Button type="submit" className="submit-btn">Submit</Button>
              </Form>
            </div>
          </Col>
          {/* Contact Info Section */}
          <Col md={6} className="get_say_form">
            <h5>Say Hi!</h5>
            <ul className="get_say_info_sec">
              <li><FaEnvelope /><a href="mailto:info@stackfindover.com">info@stackfindover.com</a></li>
              <li><FaWhatsapp /><a href="tel:+919602381997">+91 9602381997</a></li>
              <li><FaSkype /><a href="#">Stackfindover</a></li>
            </ul>
            <ul className="get_say_social-icn">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Contact