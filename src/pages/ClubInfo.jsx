import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMusic, FaGlassCheers, FaGamepad, FaUsers } from "react-icons/fa";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import clubBanner from "../Images/club.jpg";
import event1 from "../Images/exhibitions.jpg";

// Animations
const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Event Data
const events = [
  { id: 1, name: "DJ Night", image: event1 },
  { id: 2, name: "Live Band Performance", image: event1 },
  { id: 3, name: "Retro Party", image: event1 },
];

const ClubInfo = () => {
  return (
    <motion.div
      className="club-info-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MainNav />

      {/* Hero Section */}
      <motion.div className="hero-section">
        <img src={clubBanner} alt="Club Banner" className="hero-image" />
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Welcome to Night Vibes Club</h1>
          <p>Experience the ultimate nightlife with the best music, drinks, and ambiance.</p>
        </motion.div>
      </motion.div>

      <Container>
        {/* About the Club */}
        <motion.div className="about-club" {...fadeIn}>
          <h2>About Night Vibes Club</h2>
          <p>
            Night Vibes Club is the ultimate nightlife destination, offering an unforgettable experience
            with live music, energetic DJs, and a vibrant atmosphere. Enjoy our premium drinks and exclusive VIP sections.
          </p>
        </motion.div>

        {/* Entertainment Offerings */}
        <motion.div className="entertainment-section" {...fadeIn}>
          <h2>What We Offer</h2>
          <Row className="offer-cards">
            {[
              { icon: <FaMusic />, text: "Live Music" },
              { icon: <FaGlassCheers />, text: "Premium Drinks" },
              { icon: <FaGamepad />, text: "Gaming Lounge" },
              { icon: <FaUsers />, text: "VIP Lounges" },
            ].map((item, index) => (
              <Col md={3} key={index}>
                <motion.div
                  className="offer-card"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                  <p>{item.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      <Footer />
    </motion.div>
  );
};

export default ClubInfo;
