import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";

const SultanateRoom = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Speed ko optimize karo
          once: false, // Animation har scroll pe ho
          easing: "ease-in-out",
          anchorPlacement: "top-bottom", // Ensure ke correct trigger ho
        });
      }, []);
      
  return (
    <div className="sultanate-room">
     <MainNav/>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 data-aos="fade-down">Sultanate Room</h1>
          <p data-aos="fade-up">A Grand Experience of Royalty & Elegance</p>
        </div>
      </section>

      {/* Luxurious Experience */}
      <Container className="luxury-section">
        <Row>
          <Col md={4} data-aos="fade-up" className="mb-3">
            <div className="luxury-box">
              <h3>Opulent Decor</h3>
              <p>Step into a space adorned with intricate designs.</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200"  className="mb-3">
            <div className="luxury-box">
              <h3>Private Dining</h3>
              <p>Enjoy an exclusive and intimate dining experience.</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="400"  className="mb-3">
            <div className="luxury-box">
              <h3>Regal Hospitality</h3>
              <p>Service fit for royalty with a personalized touch.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Showcase Gallery */}
      <section className="gallery">
        <h2 data-aos="fade-down">Gallery</h2>
        <div className="gallery-container">
          <div className="gallery-item one"></div>
          <div className="gallery-item two"></div>
          <div className="gallery-item three"></div>
        </div>
      </section>

      {/* Exclusive Features */}
    {/* Exclusive Features */}
<Container className="exclusive-features mb-5">
  <Row>
    <Col md={6} data-aos="fade-right"  className="mb-3">
      <div className="feature-box bg-dark rounded-5 p-5">
        <i className="fas fa-utensils"></i>
        <h3>Customized Dining</h3>
        <p>Specially curated meals for an unforgettable experience.</p>
      </div>
    </Col>
    <Col md={6} data-aos="fade-left"  className="mb-3">
      <div className="feature-box bg-dark rounded-5 p-5">
        <i className="fas fa-concierge-bell"></i>
        <h3>Personalized Service</h3>
        <p>Hospitality that caters to your every need.</p>
      </div>
    </Col>
  </Row>
</Container>

      <Footer/>
    </div>
  );
};

export default SultanateRoom;
