import React, { useEffect, useState } from 'react';
import HomeBanner from '../Components/HomeBanner';
import MainNav from '../Components/MainNav';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';
import Preloader from '../Components/Preloader';
import slide1 from "../../src/Images/slide-1.jpg"
import CustomNavbar from '../Components/CustomNavbar';

function Home() {
  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/home`)
      .then((response) => {
        setRestaurantData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || !restaurantData) {
    return <div></div>;
  }

  const cardData = [
    {
      title: restaurantData.atmospheric_imager_heading_1,
      img: `${config.STORAGE_URL}/${restaurantData.atmospheric_imager_image_1}`,
    },
    {
      title: restaurantData.atmospheric_imager_heading_2,
      img: `${config.STORAGE_URL}/${restaurantData.atmospheric_imager_image_2}`,
    },
    {
      title: restaurantData.atmospheric_imager_heading_3,
      img: `${config.STORAGE_URL}/${restaurantData.atmospheric_imager_image_3}`,
    },
  ];

  return (
    <div className='home-page-wrapper'>
      {/* <Preloader/> */}
      <MainNav />
      <HomeBanner />
      <div className='welcom-wrapper'>
        <h2>{restaurantData.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: restaurantData.description}}></div>
      </div>
      {/* <section className='black-section-bg mb-5'>
        <Container>
          <Row className='gap-5'>
            <Col xs={12} md={8} className='leftRightImageBlock order-md-1'>
            <img src={slide1} alt=""  className='left-img'/>
            </Col>
            <Col xs={12} md={4} className='order-md-2'>
              <div className='leftRightTextBlock p-5 text-start'>
                <div dangerouslySetInnerHTML={{ __html: restaurantData.note}}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <Container className='page-content'>
        <h2 className='page-heading mb-5'>{restaurantData.atmospheric_imager_heading}</h2>
        <Row>
          {cardData.map((card, index) => (
            <Col md={4} key={index} className='mb-4'>
              <Card className='d_card'>
                <div
                  className='card-image'
                  style={{ backgroundImage: `url(${card.img})` }}
                ></div>
                <Card.Body className='content'>
                  <Card.Title className='heading'>{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
