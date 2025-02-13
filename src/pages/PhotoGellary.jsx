import React, { useEffect, useState } from 'react';
import MainNav from '../Components/MainNav';
import Footer from '../Components/Footer';
import axios from 'axios';
import config from '../config';

function PhotoGallery() {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/api/gallery`)
      .then(response => {
        setPhotoGallery(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to load gallery.");
      })
      .finally(() => setLoading(false));
  }, []);

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
              photoGallery.map((image, index) => (
                <div key={index} className={`grid-item ${image.size || 'medium'}`}>
                  <img src={image.src} alt={`Gallery ${index + 1}`} loading="lazy" />
                  <div className="overlay">
                    <p>Haveli Restaurant</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No images available.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PhotoGallery;
