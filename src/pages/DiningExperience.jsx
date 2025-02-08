import React from 'react'
import MainNav from '../Components/MainNav'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import dining from "../Images/1.png"
import diningarea from "../Images/3.png"
import music from "../Images/live-music.jpg"
import Footer from '../Components/Footer';

function DiningExperience() {
  return (
    <div className='dining-page-warpper'>
    <MainNav/>
    <div className="header">
      <Container className="header-text">
        Our Dining Area 
      </Container>
    </div>
     <Container className="kebabSection mt-5">
        {/* First Section */}
        <Row className="section">
          <Col md={6} className="textSection">
            <h2>Discover Palace</h2>
            <p>
              Experience the rich flavors of our authentic kebabs, crafted with 
              fresh ingredients and traditional spices. Join us for a delightful meal!
            </p>
          </Col>
          <Col md={6} className="imageSection">
            <div className="fixed-image" style={{ backgroundImage: `url(${dining})` }}></div>
          </Col>
        </Row>
        {/* Second Section */}
        <Row className="section flex-md-row-reverse">
          <Col md={6} className="textSection">
            <h2>Authentic Taste</h2>
            <p>
              Our chefs bring you the best of Mediterranean cuisine with a touch of 
              modern fusion. Come and enjoy the taste of tradition!
            </p>
          </Col>
          <Col md={6} className="imageSection">
            <div className="fixed-image" style={{ backgroundImage: `url(${diningarea})` }}></div>
          </Col>
        </Row>
      </Container>
      <div className="container mb-5">
        <div className="row">
        <div className="col-md-12 toast-wrapper">
            <h2 className='toast-heading'>A Toast to Live Music</h2>
            <p className='toast-para'>The spirit of Lahore City comes to life at The Oban Hotels through our jam-packed schedule of Qawali 
                and Ghazal shows, three nights a week. Settle in, order and get yourself in the groove for the night.
                 After all, it is all about you.
                 </p>
                 <div className='music-image'>
                    <img className='music-img' src={music} alt="music" />
                 </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DiningExperience