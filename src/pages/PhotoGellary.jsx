import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import axios from "axios";
import config from "../config";

function PhotoGallery() {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/gallery`)
      .then((response) => {
        console.log("API Response:", response.data); // ✅ Debugging ke liye
  
        if (response.data) {
          // ✅ Sirf image fields ko extract kar ke ek array banayenge
          const images = Object.keys(response.data)
            .filter((key) => key.startsWith("image_")) // Sirf "image_1", "image_2", etc. lo
            .map((key) => response.data[key]); // Values extract karo
  
          setPhotoGallery(images);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load gallery.");
      })
      .finally(() => setLoading(false));
  }, []);
  

  // Function to get full image path
  const getImagePath = (imageSrc) => {
    if (!imageSrc) return "/placeholder.jpg"; // Fallback image
    return `${config.STORAGE_URL}/${imageSrc.replace(/^\/+/, "")}`;
  };

  return (
    <>
      <div className="photo-gallery-wrapper">
        <MainNav />
        <h2 className="text-center my-4">Our Gallery</h2>

        {loading ? (
          <p className="text-center">Loading images...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : (
          <div className="masonry-grid p-5">
           {photoGallery.length > 0 ? (
      <div className="masonry-grid">
    {photoGallery.map((imageSrc, index) => (
      <div key={index} className="grid-item medium">
        <a href={getImagePath(imageSrc)} target="_blank" rel="noopener noreferrer">
          <img
            src={getImagePath(imageSrc)}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            onError={(e) => (e.target.src = "/placeholder.jpg")}
          />
        </a>
        <div className="overlay">
          <p>Haveli Restaurant</p>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-center">No images available</p>
)}

          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PhotoGallery;
