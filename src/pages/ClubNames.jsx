import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import MainNav from "../Components/MainNav";
import club from "../Images/furniture.webp";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const clubsData = [
  { id: 1, name: "Night Vibes Club", image: club },
  { id: 2, name: "Sky Lounge", image: club },
  { id: 3, name: "Neon Beats", image: club },
  { id: 4, name: "Retro Groove", image: club },
  { id: 5, name: "Elite Nights", image: club },
  { id: 6, name: "Urban Escape", image: club },
];

const ClubNames = () => {
  const [search, setSearch] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const filteredClubs = clubsData.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div 
      className="club-page-wrapper" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
    <MainNav/>
      {/* <MainNav /> */}
      <Container fluid className="club-names-page mt-5">
        <h2 className="page-title">Explore Our Clubs</h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <Form.Control
            type="text"
            placeholder="Search clubs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Row className="justify-content-center">
          {filteredClubs.map((club) => (
            <Col md={4} sm={6} xs={12} key={club.id} className="mb-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: club.id * 0.1 }}
              >
                <Card className="club-card">
                  <Card.Img variant="top" src={club.image} alt={club.name} />
                  <Card.Body>
                    <Card.Title>{club.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </motion.div>
  );
};

export default ClubNames;
