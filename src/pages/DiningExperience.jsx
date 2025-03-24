import React, { useEffect, useState } from 'react'
import MainNav from '../Components/MainNav'
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';
import BannerSlider from '../Components/BannerSlider';
import leftVideo from "../Images/drink.mp4";
import rightImage from "../Images/live-music.jpg";
import ButtonWithHover from '../Components/ButtonWithHover';


function DiningExperience() {
  const [diningData, setDiningData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/api/dining`)
      .then(response => {
        setDiningData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading state as per your design
  }

  const {
    backimage,
    heading_1,
    description_1,
    heading_2,
    description_2,
    heading_3,
    description_3,
    image_1,
    image_2,
    image_3
  } = diningData;

  return (
    <div className='dining-page-warpper'>
      <MainNav />
      <BannerSlider />
      <Container className="kebabSection mt-5">
        {/* First Section */}
        <Row className="section">
          <Col md={6} className="textSection">
            <h2>{heading_1}</h2>
            <p>{description_1}</p>
          </Col>
          <Col md={6} className="imageSection">
            <div className="fixed-image">
              <img
                className="fixed-image"
                src={`${config.STORAGE_URL}/${image_1}`}
                alt="Dining Experience"
                onError={(e) => (e.target.src = "/place holder.jpg")} // Handle broken images
              />
            </div>
          </Col>


        </Row>
        {/* Second Section */}
        <Row className="section flex-md-row-reverse">
          <Col md={6} className="textSection">
            <h2>{heading_2}</h2>
            <p>{description_2}</p>
          </Col>
          <Col md={6} className="imageSection">
            <div className="fixed-image" >
              <img
                className="fixed-image"
                src={`${config.STORAGE_URL}/${image_2}`}
                alt="Dining Experience"
                onError={(e) => (e.target.src = "/placeholder.jpg")} // Handle broken images
              />

            </div>
          </Col>
        </Row>
      </Container>
      {/* Last Section with col-12 */}
      <div className="dining-section">
        <Container fluid>
          <Row className="align-items-center">
            {/* Left Image */}
            <Col md={4} className="video-wrapper">
              <video className="left-video" autoPlay loop muted playsInline>
                <source src={leftVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>

            {/* Center Content */}
            <Col md={4} className="text-content text-center">
              <h2>THE HOME OF LIVE MUSIC, COCKTAILS & GOOD TIMES</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
             <ButtonWithHover/>
            </Col>

            {/* Right Image */}
            <Col md={4} className="image-wrapper">
              <img src={rightImage} alt="Bar" className="right-image" />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default DiningExperience;
