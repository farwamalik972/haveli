import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import MainNav from '../Components/MainNav'
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from '../Components/Footer';
import ambaince from "../Images/ambanicxe.jpg"
import furniture from "../Images/furniture.webp"
import entrior from "../Images/entrior.jpg"

function Home() {
  const cardData = [
    {
      title: "Ambiance",
      // text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:ambaince,
    },
    {
      title: "Interior",
      // text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: furniture,
    },
    {
      title: "Exterior",
      // text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: entrior,
    },
  ];
  
  return (
    <div className='home-page-wrapper'>
        <MainNav/>
        <HomeBanner/>
        <div className="welcom-wrapper">
          <h2>Haveli Restaurant</h2>
          <p>Located in the historic Haveli Khalil Khan on Fort Road Food Street, our restaurant offers a unique blend of history and culinary excellence. Enjoy unparalleled views of the majestic Badshahi Mosque, the revered Temple of Guru Arjun (Dera Sahib), the tombs of Allama Iqbal and Sir Sikander Hayat Khan, the iconic Minar-e-Pakistan, and the impressive Lahore Fort.</p>
         <p>
         Haveli Khalil Khan, with its wooden balconies, hand-carved doors and windows, wrought iron railings, sun-dried bricks, and handmade tiles, is a testament to Lahore's rich heritage. Lovingly restored by brothers Habib Khan and Tariq Khan, Haveli is now a vibrant hub of sustainable inner-city regeneration, offering modern amenities and job opportunities.
         </p>
         <p>
         At Haveli Restaurant, we continuously innovate to provide an unforgettable dining experience that celebrates Lahore's cultural heritage and culinary traditions.
         </p>
        </div>
        <section className="black-section-bg mb-5">
      <Container>
        <Row className='gap-5'>
          {/* Left Image Section */}
          <Col xs={12} md={8} className="leftRightImageBlock order-md-1"></Col>
          
          {/* Right Text Section */}
          <Col xs={12} md={4} className="order-md-2">
            <div className="leftRightTextBlock p-5 text-start">
              <p className="strapline mb-0">At</p>
              <h2 className="heading">Haveli Restaurant</h2>
              <p className="custom-para para-bottom">
              we continuously innovate to provide an unforgettable dining experience that celebrates Lahore's cultural heritage and culinary traditions.
              Thank you for choosing Haveli Restaurant. We look forward to making your visit truly memorable.
              </p>
              <p className="strapline mb-0">Welcome, and enjoy your dining experience!</p>
              {/* <h2 className="heading">Haveli Restaurant</h2> */}
              <p className="custom-para para-bottom">A brief message introducing visitors to the essence of Haveli Restaurant.</p>
              {/* <Button href="/" className="custom-btn btn-sm mt-4">
                Learn More
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Container className="page-content">
      <h2 className='page-heading mb-5'>Atmospheric Imagery</h2>
      <Row>
        {cardData.map((card, index) => (
          <Col md={4} key={index} className='mb-4'>
            <Card className="d_card">
              <div className="card-image" style={{ backgroundImage: `url(${card.img})` }}></div>
              <Card.Body className="content">
                <Card.Title className="heading">{card.title}</Card.Title>
                <Card.Text className="data-content">{card.text}</Card.Text>
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

export default Home