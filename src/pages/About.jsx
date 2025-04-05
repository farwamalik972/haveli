import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import axios from "axios";
import config from "../config";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import p1 from "../Images/goals.jpeg";
import glass from "../Images/deink-1.jpeg";
import haveli from "../Images/haveli2.jpg";
import haveli2 from "../Images/haveli3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AquaticAnimalsSlider from "../Components/AquaticAnimalsSlider";

const sections = [
  {
    id: 1,
    image: haveli,
    title: "History of Haveli Khalil Khan",
    text: "The Haveli Khalil Khan is a unique representation of the rich heritage of Lahore. Its wooden balconies, hand-carved doors, and antique features make it a historic landmark.",
  },
  {
    id: 2,
    image: haveli2,
    title: "Restoration & Preservation",
    text: "With a vision to reclaim its grandeur, the Khan brothers restored the Haveli from ruins. Structural reinforcement and careful restoration helped revive its historic beauty.",
  },
  {
    id: 3,
    image: haveli,
    title: "Present & Future Vision",
    text: "Today, the Food Street stands as a hub of culture and cuisine. With modern infrastructure and traditional charm, it attracts visitors from all over the world.",
  },
];

const About = () => {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/about`)
      .then((response) => setAbout(response.data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div></div>;

  return (
    <div className="about-us-wrapper">
      <MainNav />
      <div className="banner-container mb-4">
        <div className="banner">
          <h1>{about.name}</h1>
        </div>
      </div>
      <section className="about-us">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="image-container">
              <div className="image-wrapper">
                <img src={p1} alt="Haveli" className="main-image" />
              </div>
            </Col>
            <Col md={6} className="content">
              <h2 className="section-title">{about.about_heading}</h2>
              <p>
                {about.description}
              </p>
              <div className="info-section">
                <img src={glass} alt="Dining" className="small-image" />
                <div className="opening-hours">
                  <h5>Opening Hours</h5>
                  <p>Mon – Thu: 10 am – 01 am</p>
                  <p>Fri – Sun: 10 am – 02 am</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

   <AquaticAnimalsSlider/>
      <Footer />
    </div>
  );
};

export default About;
