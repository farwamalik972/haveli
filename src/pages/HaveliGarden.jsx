import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
 import garden1 from "../Images/garden1.jpeg";
 import garden2 from "../Images/garden3.jpeg";
 import garden3 from "../Images/garden4.jpeg";
 import garden4 from "../Images/garden5.jpeg";
 import garden5 from "../Images/garden1.jpeg";
 import garden6 from "../Images/garden3.jpeg";
 import garden7 from "../Images/garden9.jpeg";
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
      <div className="gallery-wrapper">
        <div className="gallery-track">
          {[...Array(2)].map((_, i) => (
            <div className="gallery-loop" key={i}>
              <img src={garden1} alt={`Garden ${i * 6 + 1}`} />
              <img src={garden2} alt={`Garden ${i * 6 + 3}`} />
              <img src={garden3} alt={`Garden ${i * 6 + 4}`} />
              <img src={garden4} alt={`Garden ${i * 6 + 5}`} />
              <img src={garden5} alt={`Garden ${i * 6 + 6}`} />
              <img src={garden6} alt={`Garden ${i * 6 + 6}`} />
              <img src={garden7} alt={`Garden ${i * 6 + 6}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  );
};

export default HaveliGarden;