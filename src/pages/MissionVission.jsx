import React, { useEffect, useState } from 'react';
import MainNav from '../Components/MainNav';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';

function MissionVission() {
  const [missionVisionData, setMissionVisionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/api/mission`)
      .then(response => {
        setMissionVisionData(response.data); // assuming the API returns a single object or an array
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
          <div>Loading...</div>
        ) : (
          <>
            <section className="our-vision">
              <Row className="align-items-center">
                <Col md={6} className="image-container fixed-image">
                  <img
                    src={`${config.STORAGE_URL}/${missionVisionData.image_1}`} // Dynamic image
                    alt={missionVisionData.name_1}
                    className="img-fluid"
                  />
                </Col>
                <Col md={6} className="text-container">
                  <div className="card-wrapper">
                    <Card className="content-card">
                      <Card.Body>
                        <Card.Title>{missionVisionData.name_1}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: missionVisionData.description_1 }} />
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </section>

            <section className="our-mission">
              <Row className="align-items-center flex-row-reverse">
                <Col md={6} className="image-container fixed-image">
                  <img
                    src={`${config.STORAGE_URL}/${missionVisionData.image_3}`} // Dynamic image
                    alt={missionVisionData.name_2}
                    className="img-fluid"
                  />
                </Col>
                <Col md={6} className="text-container">
                  <div className="card-wrapper">
                    <Card className="content-card">
                      <Card.Body>
                        <Card.Title>{missionVisionData.name_2}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: missionVisionData.description_2 }} />
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </section>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default MissionVission;
