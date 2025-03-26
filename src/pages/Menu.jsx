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
  STARTERS: [
    {
      name: "Soups",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
        { name: "Garlic Mushroom", single: "445", family: "1695" },
        { name: "19-B", single: "445", family: "1695" },
        { name: "Haveli Special Soup", single: "595", family: "1895" },
      ],
      image: burger,
    },
    {
      name: "APPETIZERS",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
        { name: "Garlic Mushroom", single: "445", family: "1695" },
        { name: "19-B", single: "445", family: "1695" },
        { name: "Haveli Special Soup", single: "595", family: "1895" },
      ],
      image: burger,
    },
    {
      name: "Fries & Onion Rings",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
        { name: "Garlic Mushroom", single: "445", family: "1695" },
        { name: "19-B", single: "445", family: "1695" },
        { name: "Haveli Special Soup", single: "595", family: "1895" },
      ],
      image: burger,
    },
    {
      name: "Nuggets",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
    {
      name: "Wings",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
    {
      name: "NAAN",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
  ],
 BBQ: [
    {
      name: "BBQ EVERY NITE",
      soups: [
        { name: "Chicken Piece (L/B)", single: "345", family: "1295" },
        { name: "Fish Tika", single: "345", family: "1275" },
        { name: "Lahore Fish Seikh Kabab", single: "395", family: "1525" },
        { name: "Paner Tika", single: "395", family: "1525" },
      ],
      image: burger,
    },
    {
      name: "GAZ KABAB KOOBIDEH",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
    {
      name: "CHICKEN BOOTI",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
    {
      name: "BEEF",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
    {
      name: "MUTTON / DUMBA",
      soups: [
        { name: "Thai Consome", single: "345", family: "1295" },
        { name: "Vegetable Soup", single: "345", family: "1275" },
        { name: "Hot & Sour Soup", single: "395", family: "1525" },
        { name: "Chicken Corn Soup", single: "395", family: "1525" },
      ],
      image: burger,
    },
  ],
  KARAHI: [
    {
      name: "Karahi Korner",
      soups: [
        { name: "Batari Karahi", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "Chicken",
      soups: [
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "Mutton",
      soups: [
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
      ],
      image: burger,
    },
  ],
  "FAMILY PLATTERS": [
    {
      name: "STARTERS PLATTER",
      soups: [
        { name: "Batari Karahi", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "BBQ PLATERS",
      soups: [
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "KABAB PLATERS",
      soups: [
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
        { name: "Lahori Chiken Karahi", single: "345", family: "1295" },
        { name: "Chicken Gravy Karahi ", single: "345", family: "1275" },
      ],
      image: burger,
    },
  ],
  "TAKKA TAK": [
    {
      name: "TAKKA TAK",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "Bhaji TARKAARI",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
  ],
  HANDI: [
    {
      name: "Chicken",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "MUTTON",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "FISH",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "HAVELI SUJI",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" }, 
      ],
      image: burger,
    },
 
  ],
 "FRESH FISH CO": [
    {
      name: "BBQ",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "RAHU",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "GRAVIES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "HAVELI SUJI",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" }, 
      ],
      image: burger,
    },
    {
      name: "JHEENGA LALA",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
    {
      name: "FRIED PRAWNS",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
    {
      name: "GRILLED PRAWNS",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
    {
      name: "PRAWNS WITH GRAVY",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  ],
  "CHINA EXPRESS": [
    {
      name: "SOUPS",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "FISH GRAVIES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "GRAVIES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "CHINES RICE",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
  ],
  "CONTINENTAL": [
    {
      name: "PASTA",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "STEAK",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
  ],
  "BURGGER": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
    {
      name: "CHICKEN",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
       
      ],
      image: burger,
    },
    {
      name: "BEEF",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
  ],
  "TANDOORI": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
      ],
      image: burger,
    },
  
  ],
  "SIDE ORDERS": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
  "SPECIAL DRINKS": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
  "HAVELI HALWAI": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
  "ICE CREAM PARLOUR": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
  "COFFE BAR": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
  "HAVELI DELAIGHTS": [
    {
      name: "SANDWICHES",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
  "NASHTA": [
    {
      name: "NASHTA",
      soups: [
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
        { name: "Desi Murgh Karahi", single: "345", family: "1275" },
        { name: "Tawa Chicken Piece", single: "345", family: "1295" },
      ],
      image: burger,
    },
  
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("STARTERS");
  const [activeTab, setActiveTab] = useState("Starters");

  return (
    <div className="menu-wrapper">
      <MainNav />
      <Container className="menu-section mb-5">
        <h2 className="menu-title">Our Menu</h2>

        {/* Category Tabs */}
        <Row>
          <Col md={3}>
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
          </Col>
          <Col lg={9}>
            <Row>
              <AnimatePresence mode="wait">
                {menuData[activeCategory].map((item, index) => (
                  <div key={index} className="menu-item">
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
                        {item.name}
                        <p>Single/family</p>
                        </h4>

                      <p className="menu-description">{item.description}</p>
                      {item.soups && (
                        <ul className="soup-list">
                          {item.soups.map((soup, i) => (
                            <li key={i} className="soup-item">
                              {soup.name} <span className="soup-price">{soup.single} / {soup.family}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.price && <span className="menu-price">{item.price}</span>}
                      <div className="menu-border"></div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            </Row>
          </Col>
        </Row>
     

        {/* Menu Items with Animation */}
        {/* <Row className="justify-content-center">
          <Col lg={9}>
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
                        {item.name}
                        <p>Single/family</p>
                        </h4>

                      <p className="menu-description">{item.description}</p>
                      {item.soups && (
                        <ul className="soup-list">
                          {item.soups.map((soup, i) => (
                            <li key={i} className="soup-item">
                              {soup.name} <span className="soup-price">{soup.single} / {soup.family}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.price && <span className="menu-price">{item.price}</span>}
                      <div className="menu-border"></div>
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </Col>
        </Row> */}
      </Container>
      <Footer />
    </div>
  );
};

export default Menu;