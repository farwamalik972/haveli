import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import MainNav from "../Components/MainNav";
import club1 from "../Images/club7.jpeg";
import club2 from "../Images/grden2.jpeg";
import club3 from "../Images/sultant-galry.jpeg";
import club4 from "../Images/club9.jpeg";
import club5 from "../Images/sultant-galry1.jpeg";
import club6 from "../Images/club6.jpeg";

import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const clubsData = [
  { id: 1, name: "Sultanate Room", image: club1 },
  { id: 2, name: "Khalsa Room", image: club2 },
  { id: 3, name: "Mughal Room", image: club3 },
  { id: 4, name: "Raj Room ", image: club4 },
  { id: 5, name: "Sammar Palace", image: club5 },
  // { id: 6, name: "Urban Escape", image: club6 },
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
