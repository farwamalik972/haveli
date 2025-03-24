import React, { useEffect, useState } from 'react';
import MainNav from '../Components/MainNav';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rotate from "../Images/home-pic-2.png"
import rotate1 from "../Images/home-pic-5.png"

function MissionVission() {
  const [missionVisionData, setMissionVisionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    axios.get(`${config.API_BASE_URL}/api/mission`)
      .then(response => {
        setMissionVisionData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='mission-vission-wrapper'>
      <MainNav />
      <Container className="vision-mission">
        {loading ? (
          <div className="loading-text">Loading...</div>
        ) : (
          <>
            <section className="our-vision">
              <Row className="align-items-center">
                <Col md={6} className="image-container fixed-image" data-aos="zoom-in">
                  <div className="image-wrapper">
                    <img
                      src={`${config.STORAGE_URL}/${missionVisionData.image_1}`}
                      alt={missionVisionData.name_1}
                      className="img-fluid"
                    />
                  </div>
                  <div className="vission-rotate-img bottom">
                    <img className="rotate" src={rotate1} alt="Rotating Icon" />
                  </div>

                </Col>
                <Col md={6} className="text-container" data-aos="fade-left">
                  <div className="card-wrapper">
                    <Card className="content-card">
                      <Card.Body>
                        <Card.Title className="animated-title">{missionVisionData.name_1}</Card.Title>
                        <Card.Text className="animated-text" dangerouslySetInnerHTML={{ __html: missionVisionData.description_1 }} />
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </section>

            <div className="animated-border"></div> {/* Animated Center Border */}

            <section className="our-mission">
              <Row className="align-items-center flex-row-reverse">
                <Col md={6} className="image-container fixed-image" data-aos="zoom-in">
                  <div className="image-wrapper">
                    <img
                      src={`${config.STORAGE_URL}/${missionVisionData.image_3}`}
                      alt={missionVisionData.name_2}
                      className="img-fluid"
                    />
                  </div>
                  <div className="vission-rotate-img bottom">
                    <img className="rotate" src={rotate1} alt="Rotating Icon" />
                  </div>
                </Col>
                <Col md={6} className="text-container" data-aos="fade-right">
                  <div className="card-wrapper">
                    <Card className="content-card">
                      <Card.Body>
                        <Card.Title className="animated-title">{missionVisionData.name_2}</Card.Title>
                        <Card.Text className="animated-text" dangerouslySetInnerHTML={{ __html: missionVisionData.description_2 }} />
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </section>
            <div className="animated-border"></div>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default MissionVission;
