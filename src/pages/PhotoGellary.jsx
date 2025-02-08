import React from 'react';
import MainNav from '../Components/MainNav';
import Footer from '../Components/Footer';
import haveli1 from "../Images/havil1.jpg";
import haveli2 from "../Images/haveli2.jpg";
import haveli3 from "../Images/haveli3.jpg";
import haveli4 from "../Images/haveli4.jpg";
import haveli5 from "../Images/haveli5.jpg";
import haveli6 from "../Images/galry.webp";
import slid6 from "../Images/slide-4.jpg";
import slid5 from "../Images/slide-5.jpg";
import slid1 from "../Images/slide-1.jpg";
import slid3 from "../Images/slide-3.jpg";
import sitting from "../Images/siiting.webp";
import gril from "../Images/gril.webp";
import frinture from "../Images/furniture.webp";

const images = [
  { src: haveli1, size: "large" },
  { src: haveli2, size: "medium" },
  { src: haveli3, size: "small" },
  { src: haveli4, size: "large" },
  { src: haveli5, size: "medium" },
  { src: haveli6, size: "small" },
  { src: slid6, size: "large" },
  { src: slid5, size: "medium" },
  { src: slid1, size: "small" },
  { src: slid3, size: "large" },
  { src: sitting, size: "medium" },
  { src: gril, size: "small" },
  { src: slid6, size: "large" },


];

function PhotoGellary() {
  return (
    <>
      <div className="photo-gallery-wrapper">
        <MainNav />
        <h2>Our Gallery</h2>
        <div className="masonry-grid p-5">
          {images.map((image, index) => (
            <div key={index} className={`grid-item ${image.size}`}>
              <img src={image.src} alt={`Gallery ${index + 1}`} />
              <div className="overlay">
                <p>Haveli Restaurant</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PhotoGellary;
