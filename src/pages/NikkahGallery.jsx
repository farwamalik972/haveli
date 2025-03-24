import React from "react";
import { Container } from "react-bootstrap";
import nikha from "../Images/nikha.jpeg";
import nikha2 from "../Images/event (2).jpeg";
import nikha3 from "../Images/event (3).jpeg";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import MainNav from "../Components/MainNav";

const images = [
  { src: nikha, className: "large" },
  { src: nikha2, className: "medium" },
  { src: nikha3, className: "small" },
  { src: nikha2, className: "medium" },
  { src: nikha, className: "large" },
];

const NikkahGallery = () => {
  return (
    <div className="nikha-wrapper">
<MainNav/>
    <Container className="nikkah-gallery">
      {images.map((img, index) => (
        <div key={index} className={`gallery-item ${img.className}`}>
          <img src={img.src} alt={`Nikkah Memory ${index + 1}`} />
        </div>
      ))}
    </Container>
    <Footer/>
    </div>
  );
};

export default NikkahGallery;
