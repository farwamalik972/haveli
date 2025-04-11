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
          const category = item.heading_name;
          const subCat = item.sub_cat;

          if (!grouped[category]) {
            grouped[category] = {};
          }

          if (!grouped[category][subCat]) {
            grouped[category][subCat] = {
              heding_name_1: item.heding_name_1,
              heding_name_2: item.heding_name_2,
              image: `${config.API_BASE_URL}/uploads/sub_categories/${item.image}`,
              items: [],
            };
          }

          if (item.menu) {
            grouped[category][subCat].items.push({
              name: item.menu,
              price_s: item.price_s,
              price_f: item.price_f,
              all_price: item.all_price,
            });
          }
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
                  className={`menu-tab ${activeCategory === category ? "active" : ""}`}
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
                <h2 className="menu-title mb-4">{activeCategory}</h2>
                {menuData[activeCategory] &&
                  Object.entries(menuData[activeCategory]).map(([subCatName, subCatData], index) => (
                    <motion.div
                      key={index}
                      className="menu-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Hexagon Image */}
                      <div className="menu-img">
                        <img src={subCatData.image} alt={subCatName} />
                      </div>

                      {/* Menu Content */}
                      <div className="menu-content">
                        <div className="menu-title">
                          {subCatName}
                       {(subCatData.heding_name_1 || subCatData.heding_name_2) && (
  <p>
    {subCatData.heding_name_1}
    {subCatData.heding_name_1 && subCatData.heding_name_2 && ' / '}
    {subCatData.heding_name_2}
  </p>
)}

                        </div>

                        <div className="soup-list">
                          {subCatData.items.map((item, i) => (
                            <div className="soup-item" key={i}>
                              <div className="soup-name">{item.name}</div>
                              <div className="menu-price">
                              {item.price_s && item.price_f ? (
                                <>
                                  {item.price_s} / {item.price_f}
                                </>
                              ) : (
                                item.all_price
                              )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="menu-border"></div>
                      </div>
                    </motion.div>
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
