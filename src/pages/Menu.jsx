import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import burger from "../Images/bbq.jpeg";
import coffee from "../Images/bbq.jpeg";
import friedRice from "../Images/bbq.jpeg";
import meat from "../Images/bbq.jpeg";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";

const menuData = {
  Breakfast: [
    { name: "Pancakes", price: "$15", description: "Fluffy pancakes with syrup.", image: burger },
    { name: "Omelette", price: "$12", description: "Cheese & veggie-filled omelette.", image: coffee },
  ],
  Lunch: [
    { name: "Grilled Chicken", price: "$30", description: "Served with steamed vegetables.", image: friedRice },
    { name: "Pasta", price: "$25", description: "Creamy alfredo pasta.", image: meat },
  ],
  Dinner: [
    { name: "Chicken Burger", price: "$24", description: "Juicy chicken patty with cheese.", image: burger },
    { name: "Black Coffee", price: "$20", description: "Freshly brewed strong coffee.", image: coffee },
    { name: "Fried Rice", price: "$45", description: "Mixed vegetable and chicken rice.", image: friedRice },
    { name: "Meat", price: "$24", description: "Tender meat with rich spices.", image: meat },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <div className="menu-wrapper">
      <MainNav />
      <Container className="menu-section mb-5">
        <h2 className="menu-title">Our Menu</h2>

        {/* Category Tabs */}
        <div className="menu-tabs">
          {Object.keys(menuData).map((category) => (
            <Button
              key={category}
              className={`menu-tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items with Animation */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              <AnimatePresence mode="wait">
                {menuData[activeCategory].map((item, index) => (
                  <Col md={6} key={index} className="menu-item">
                    <motion.div
                      className="menu-img"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={item.image} alt={item.name} />
                    </motion.div>
                    <motion.div
                      className="menu-content"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="menu-title">
                        {item.name} <span className="menu-price">{item.price}</span>
                      </h4>
                      <p className="menu-description">{item.description}</p>
                      <div className="menu-border"></div>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </Col>
        </Row>

        {/* View More Button with Hover Effect */}
        <motion.button
          className="menu-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View More
        </motion.button>
      </Container>
      <Footer />
    </div>
  );
};

export default Menu;
