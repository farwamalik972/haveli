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
                  Object.entries(menuData[activeCategory]).map(
                    ([subCatName, subCatData], index) => (
                      <div key={index} className="menu-item mb-5">
                        <motion.div
                          className="menu-img mb-3"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h4 className="subcat-title">{subCatName}</h4>
                          <img
                            src={subCatData.image}
                            alt={subCatName}
                            style={{ width: "150px", borderRadius: "10px" }}
                          />
                        </motion.div>

                        <div className="menu-header row fw-bold mt-2 mb-2">
                          <div className="col-md-8">Item</div>
                          <div className="col-md-2">{subCatData.heding_name_1}</div>
                          <div className="col-md-2">{subCatData.heding_name_2}</div>
                        </div>

                        {subCatData.items.map((item, i) => (
                          <motion.div
                            key={i}
                            className="menu-content row mb-2"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="col-md-8">{item.name}</div>
                            <div className="col-md-2">{item.price_s}</div>
                            <div className="col-md-2">{item.price_f}</div>
                          </motion.div>
                        ))}

                        <div className="menu-border mt-3 mb-4"></div>
                      </div>
                    )
                  )}
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
