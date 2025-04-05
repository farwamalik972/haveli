import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import liveMusic from "../Images/live-music.jpg";
import romanticAmbiance from "../Images/roof-open.jpeg";
import menuImage from "../Images/open-menu.jpeg";
import coupleDinner from "../Images/night-dinner.jpeg";
import birthdayPackage from "../Images/birthday-pkg.jpeg";
import MainNav from "../Components/MainNav";
import axios from "axios";
import config from "../config";


const OpnSky = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
    .get(`${config.API_BASE_URL}/api/opensky`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <div className="loading"></div>;

  return (
    <div className="open-to-sky">
 <MainNav/>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>{data.heading_name}</h1>
          <p>{data.description}</p>
        </div>
      </section>

      {/* Experience Highlights */}
      <Container className="experience-section">
        <h2 className="section-title">{data.heading_name_1}</h2>
        <Row>
          <Col md={4} className="experience-box mb-3">
            <img src={data.image_1} alt="Live Music" />
            <div className="overlay-text">
              <h3>{data.heading_name_2}</h3>
              <p>{data.description_2}</p>
            </div>
          </Col>
          <Col md={4} className="experience-box mb-3">
            <img src={data.image_2} alt="Exclusive Menu" />
            <div className="overlay-text">
              <h3>{data.heading_name_3}</h3>
              <p>{data.description_3}</p>
            </div>
          </Col>
          <Col md={4} className="experience-box mb-3">
            <img src={data.image_3} alt="Romantic Ambiance" />
            <div className="overlay-text">
              <h3>{data.heading_name_4}</h3>
              <p>{data.description_4}</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Special Offers */}
      <Container className="special-offers">
        <h2 className="section-title">{data.heading_name_5}</h2>
        <Row>
          <Col md={6} className="offer-box mb-3">
            <img src={data.image_4} alt="Birthday Packages" />
            <div className="offer-text">
              <h3>{data.heading_name_6}</h3>
              <p>{data.description_6}</p>
            </div>
          </Col>
          <Col md={6} className="offer-box mb-3">
            <img src={data.image_5} alt="Couple Dinners" />
            <div className="offer-text">
              <h3>{data.heading_name_7}</h3>
              <p>{data.description_7}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default OpnSky;
