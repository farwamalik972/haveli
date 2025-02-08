import React from 'react'
import MainNav from '../Components/MainNav'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Footer from '../Components/Footer';

function OurTeam() {
    const teamMembers = [
        {
          name: 'Habib R Khan',
          role: 'CEO',
          photo: 'path-to-habib-photo.jpg',
          description: 'As the CEO and founder, it is with immense pride and gratitude that I share our journey with you. Haveli Restaurant stands as a testament to Lahore\'s rich cultural heritage and vibrant culinary traditions...'
        },
        {
          name: 'Tariq Khalil Khan',
          role: 'CFO',
          photo: 'path-to-tariq-photo.jpg',
          description: 'As the CFO of Haveli Restaurant, it gives me great pleasure to share our incredible journey with you. Our dream to restore Haveli Khalil Khan and create a dining experience that honors Lahore\'s rich cultural heritage...'
        },
        {
          name: 'Mohammad Ahmed Hassan',
          role: 'General Manager',
          photo: 'path-to-ahmed-photo.jpg',
          description: 'As the General Manager, it is my honor and privilege to extend a warm welcome to you. Haveli Restaurant stands as a beacon of Lahore\'s rich heritage and culinary excellence...'
        },
        {
          name: 'Ali Hamza',
          role: 'Branch Manager',
          photo: 'path-to-ali-photo.jpg',
          description: 'As the Branch Manager, I am thrilled to welcome you to our historic and cherished establishment. Haveli Restaurant is not just a place to dine; it is a journey through Lahore\'s rich cultural and culinary heritage...'
        },
        {
          name: 'Iftkhar Shafiq',
          role: 'Chef',
          photo: 'path-to-iftkhar-photo.jpg',
          description: 'As the Chef of Haveli Restaurant, it is my pleasure to invite you on a culinary journey through the flavors of Pakistan. Nestled in the historic Haveli Khalil Khan, our restaurant is not just a dining destination but a celebration of Lahore\'s rich culinary heritage...'
        }
      ];
      
    
  return (
    <div className='our-team-wrapper'>
<MainNav/>
<Container className="team-section">
      <h2 className="team-heading">Meet Our Team <span className="underline"></span></h2>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="team-card-col">
            <Card className="team-card">
              <div className="photo-wrapper">
                <Card.Img variant="top" src={member.photo} className="team-photo" />
              </div>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
<Footer/>
    </div>
  )
}

export default OurTeam