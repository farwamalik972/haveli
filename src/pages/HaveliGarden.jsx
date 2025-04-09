import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
 import garden from "../Images/haveli-garden.jpeg";
 import bbq from "../Images/bbq.jpeg"
 import music from "../Images/live-music.jpg"
 import event from "../Images/event (3).jpeg"
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";
import config from "../config";
import axios from "axios";

const HaveliGarden = () => {
   const [gardenData, setgardenData] = useState(null);
  
    useEffect(() => {
      axios
      .get(`${config.API_BASE_URL}/api/garden`)
        .then((response) => {
          setgardenData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    if (!gardenData) return <div className="loading"></div>;
  
  return (
    <div className="haveli-garden">
    <MainNav/>
      {/* Immersive Entry Section */}
      <section className="immersive-entry">
        <div className="overlay">
          <Container className="text-center text-white">
            <h1>{gardenData.heading_name}</h1>
            <p>{gardenData.description}</p>
          </Container>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="experience-section">
        <Container>
          <Row className="experience-row">
            <Col md={6} className="experience-box reverse">
              <img  src={`${config.STORAGE_URL}/${gardenData.image_1}`} alt="Live BBQ" />
              <div className="text-content">
                <h4>{gardenData.heading_name_2}</h4>
                <p>{gardenData.description_2}</p>
              </div>
            </Col>
            <Col md={6} className="experience-box">
              <div className="text-content">
                <h4>{gardenData.heading_name_3}</h4>
                <p>{gardenData.description_3}</p>
              </div>
              <img src={`${config.STORAGE_URL}/${gardenData.image_2}`} alt="Serene Greenery" />
            </Col>
            <Col md={6} className="experience-box reverse">
              <img src={`${config.STORAGE_URL}/${gardenData.image_3}`} alt="Live Music Nights" />
              <div className="text-content">
                <h4>{gardenData.heading_name_4}</h4>
                <p>{gardenData.description_4}</p>
              </div>
            </Col>
            <Col md={6} className="experience-box">
              <div className="text-content">
                <h4>{gardenData.heading_name_6}</h4>
                <p>{gardenData.description_6}</p>
              </div>
              <img src={`${config.STORAGE_URL}/${gardenData.image_4}`} alt="Event Celebrations" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Smooth Scrolling Photo Gallery */}
      <section className="scroll-gallery">
        <h2 className="section-title">Mesmerizing Garden Views</h2>
        <div className="gallery-container">
          <div className="gallery-track">
            <div className="gallery-column">
              <img src={garden} alt="Garden 1" />
              <img src={garden} alt="Garden 2" />
            </div>
            <div className="gallery-column">
              <img src={garden} alt="Garden 3" />
              <img src={garden} alt="Garden 4" />
            </div>
            <div className="gallery-column">
              <img src={garden} alt="Garden 5" />
              <img src={garden} alt="Garden 6" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HaveliGarden;