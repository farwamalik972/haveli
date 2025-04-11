import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import axios from "axios";
import config from "../config";

const Menu = () => {
  const [menuData, setMenuData] = useState({});
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/cat/all`) 
      .then((response) => {
        const data = response.data;

        const grouped = {};
        data.forEach((item) => {
          if (!grouped[item.heading_name]) {
            grouped[item.heading_name] = [];
          }

          grouped[item.heading_name].push({
            name: item.sub_cat,
            heding_name_1: item.heding_name_1,
            heding_name_2: item.heding_name_2,
            image: `${config.API_BASE_URL}/uploads/sub_categories/${item.image}`,
          });
        });

        setMenuData(grouped);
        const categoryList = Object.keys(grouped);
        setCategories(categoryList);
        setActiveCategory(categoryList[0]);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  return (
    <div className="menu-wrapper">
      <MainNav />
      <Container className="menu-section mb-5">
        <Row>
          <Col md={3}>
            <div className="menu-tabs">
              {categories.map((category) => (
                <Button
                  key={category}
                  className={`menu-tab ${activeCategory === category ? "active" : ""}`}  // Fix the className here
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
          <Col lg={9}>
            <Row>
              <AnimatePresence mode="wait">
                <h2 className="menu-title">Our Menu</h2>
                {menuData[activeCategory]?.map((item, index) => (
                  <div key={index} className="menu-item d-flex mb-4">
                    <motion.div
                      className="menu-img me-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={item.image} alt={item.name} style={{ width: "150px", borderRadius: "10px" }} />
                    </motion.div>
                    <motion.div
                      className="menu-content"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="menu-header row">
                        <div className="col-md-8">
                          <h4 className="menu-title">{item.name}</h4>
                        </div>
                        <div className="col-md-2">
                          <h4 className="menu-title-api">{item.heding_name_1}</h4>
                        </div>
                        <div className="col-md-2">
                          <h4 className="menu-title-api">{item.heding_name_2}</h4>
                        </div>
                      </div>
                      <div className="menu-border"></div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Menu;
