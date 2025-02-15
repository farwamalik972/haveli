import React, { useEffect, useState } from 'react'
import MainNav from '../Components/MainNav'
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';
import backimage from "../Images/dining.jpg"

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
      <div className="header">
        <Container className="header-text">
          {heading_1}
        </Container>
      </div>
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
      onError={(e) => (e.target.src = "/placeholder.jpg")} // Handle broken images
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
        {/* Third Section */}
        {/* <Row className="section">
          <Col md={6} className="textSection">
            <h2>{heading_3}</h2>
            <p>{description_3}</p>
          </Col>
          <Col md={6} className="imageSection">
            <div className="fixed-image" style={{ backgroundImage: `url(${image_3})` }}></div>
          </Col>
        </Row> */}
      </Container>
      {/* Last Section with col-12 */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 toast-wrapper">
            <h2 className='toast-heading'>{heading_3}</h2>
            <p className='toast-para'>{description_3}</p>
            <div className='music-image'>
            <img
      className="fixed-image"
      src={`${config.STORAGE_URL}/${image_3}`} 
      alt="Dining Experience"
      onError={(e) => (e.target.src = "/placeholder.jpg")} // Handle broken images
    />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DiningExperience;
