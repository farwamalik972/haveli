import React from 'react'
import MainNav from '../Components/MainNav'
import {Container, Row, Col, Card } from 'react-bootstrap';
import vission from "../Images/vision.jpg"
import mission from "../Images/mission.jpg"
import Footer from '../Components/Footer';

function MissionVission() {
   
    
  return (
    <div className='mission-vission-wrapper'>
    <MainNav/>
    <Container className="vision-mission">
      <section className="our-vision">
        <Row className="align-items-center">
          <Col md={6} className="image-container fixed-image">
            <img src={vission} alt="Our Vision" className="img-fluid" />
          </Col>
          <Col md={6} className="text-container">
            <div className="card-wrapper">
              <Card className="content-card">
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                   Our vision is to be a beacon of Lahore's cultural and culinary heritage,
                   where each meal is a journey through history and a celebration of flavors. 
                   We aspire to establish Haveli Restaurant as a must-visit destination for 
                   locals and tourists alike, showcasing the best of Lahore's architectural and cultural legacy. We aim to foster a strong sense of community by supporting local artisans, employing sustainable practices, and providing job opportunities. Our goal is to gain international acclaim for our dedication to preserving history, culinary excellence, and exceptional hospitality, making Haveli Restaurant synonymous with the finest dining experience in Lahore. Thank you for being a part of our story. Together, we celebrate the past and look forward to an exciting future.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </section>

      <section className="our-mission">
        <Row className="align-items-center flex-row-reverse">
          <Col md={6} className="image-container fixed-image">
          <img src={mission} alt="Our Vision" className="img-fluid" />
          </Col>
          <Col md={6} className="text-container">
            <div className="card-wrapper">
              <Card className="content-card">
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                  At Haveli Restaurant, Lahore, our mission is to provide an exceptional dining 
                  experience that celebrates the rich cultural heritage and culinary traditions 
                  of our historic city. We are committed to preserving the architectural and historical 
                  significance of Haveli Khalil Khan, creating a vibrant and welcoming space for all. 
                  Our diverse menu features authentic Pakistani dishes prepared with the finest ingredients and a passion for flavor. We promote sustainable inner-city regeneration through modern amenities, environmental responsibility, and community engagement. Our warm, attentive, and personalized service ensures every guest feels valued and appreciated. We strive for continuous improvement and innovation to enhance our offerings and exceed our guests' expectations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <Footer/>
    </div>
  )
}

export default MissionVission