import React, { useEffect, useState } from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import axios from "axios";
import config from "../config";

const About = () => {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${config.API_BASE_URL}/api/about`)
      .then((response) => {
        setAbout(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally show a loading spinner or message
  }

  return (
    <div className="about-us-wrapper">
      <MainNav />
      <div className="banner-container mb-4" >
        <div className="banner">
          <h1>{about.about_heading}</h1>
        </div>
      </div>
      <div className="half-half-image-text">
        <div className="container">
          <div className="row" style={{ gap: "95px" }}>
            <div className="col-12 col-lg-5">
              <h1>{about.about_heading}</h1>
              <div className="content">
                <p>{about.description}</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                className="img"
                src={`${config.STORAGE_URL}/${about.image}`}
                alt="Story"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
