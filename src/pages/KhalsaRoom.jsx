import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import food from "../Images/haveli5.jpg";
import MainNav from "../Components/MainNav";

const KhalsaRoom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="khalsa-room">
    <MainNav/>

      {/* Hero Section - Left Aligned */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <Container>
          <Row>
            <Col md={6} data-aos="fade-right">
              <h1>Khalsa Room</h1>
              <p>Experience the grandeur of Sikh heritage in an ambiance of elegance and culture.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Masonry Gallery */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item tall" data-aos="zoom-in"></div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200"></div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200"></div>
          <div className="gallery-item wide" data-aos="zoom-in" data-aos-delay="400"></div>
        </div>
      </section>

      {/* Cultural Features - Vertical Layout */}
 {/* Cultural Features - New Card Layout */}
<Container fluid className="features">
  <Row>
    <Col md={6} data-aos="fade-right">
      <div className="feature-card  mb-4">
        <div className="feature-icon">
          <img src={food} alt="Cuisine" />
        </div>
        <div className="feature-text">
          <h3>Authentic Punjabi Cuisine</h3>
          <p>Traditional dishes crafted with rich flavors and served with warmth.</p>
        </div>
      </div>
    </Col>
    <Col md={6} data-aos="fade-left">
      <div className="feature-card mb-4">
        <div className="feature-icon">
          <img src={food} alt="Heritage" />
        </div>
        <div className="feature-text">
          <h3>Historical Sikh Heritage</h3>
          <p>Ancient artifacts and paintings reflecting Sikh history.</p>
        </div>
      </div>
    </Col>
    <Col md={6} data-aos="fade-right mb-3">
      <div className="feature-card">
        <div className="feature-icon">
          <img src={food} alt="Live Bhangra" />
        </div>
        <div className="feature-text">
          <h3>Live Bhangra Performances</h3>
          <p>Vibrant cultural shows that bring energy and joy to your dining experience.</p>
        </div>
      </div>
    </Col>
    <Col md={6} data-aos="fade-left mb-3">
      <div className="feature-card">
        <div className="feature-icon">
          <img src={food} alt="Royal Seating" />
        </div>
        <div className="feature-text">
          <h3>Luxurious Royal Seating</h3>
          <p>Experience comfort and grandeur with our elegant decor.</p>
        </div>
      </div>
    </Col>
  </Row>
</Container>

   <Footer />
    </div>
  );
};

export default KhalsaRoom;
