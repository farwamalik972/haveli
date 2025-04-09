import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import config from "../config";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faUserTie,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
import axios from "axios";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const bigCircleRef = useRef(null);
  const contactBoxRef = useRef(null);
  const infoItemsRef = useRef([]);
  const formRef = useRef(null);
  const smallCirclesRef = useRef([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    gsap.fromTo(
      bigCircleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      contactBoxRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      infoItemsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out", delay: 1 }
    );

    gsap.to(formRef.current, {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    smallCirclesRef.current.forEach((circle, i) => {
      gsap.to(circle, {
        x: gsap.utils.random(-10, 10),
        y: gsap.utils.random(-10, 10),
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(1, 2),
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("");
    try {
      const res = await axios.post(`${config.API_BASE_URL}/api/contact`, formData);
      setResponseMsg(res.data.message);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors || {});
      } else {
        setResponseMsg("Something went wrong. Please try again.");
      }
    }
  };
  useEffect(() => {
    axios.get(`${config.API_BASE_URL}/api/contact-info`)
      .then(response => {
        setContactInfo(response.data); 
      })
      .catch(error => {
        console.error("API Error:", error);
      });
  }, []);

  return (
    <div className="contact-wrapper">
      <MainNav />
      <div className="contact mb-5">
        <div className="big-circle" ref={bigCircleRef}></div>

        <div className="contact-box" ref={contactBoxRef}>
          {/* Info Left */}
          <div className="contact-info">
            <h2>Let's get in touch</h2>
            {[
              {
                icon: faPhoneAlt,
                label: "Reservations",
                text: contactInfo.reservations,
              },
              {
                icon: faClock,
                label: "Restaurant Timing",
                text: contactInfo.restaurant_timing,
              },
              {
                icon: faMapMarkerAlt,
                label: "Address",
                text: contactInfo.address,
              },
              {
                icon: faUserTie,
                label: "Admin Officer",
                text:  contactInfo.admin_officer,
              },
              {
                icon: faUserTie,
                label: "General Manager",
                text: contactInfo.general_manager,
              },
              {
                icon: faEnvelope,
                label: "Inquiries",
                text: contactInfo.inquiries,
              },
            ].map((item, index) => (
              <div
                className="info-item"
                key={index}
                ref={(el) => (infoItemsRef.current[index] = el)}
              >
                <FontAwesomeIcon icon={item.icon} />
                <p>
                  <strong>{item.label}</strong>
                  <br />
                  {item.text}
                </p>
              </div>
            ))}

            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px", marginTop: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Right */}
          <div className="contact-form" ref={formRef}>
            <div
              className="small-circle top-left"
              ref={(el) => (smallCirclesRef.current[0] = el)}
            ></div>
            <div
              className="small-circle bottom-right"
              ref={(el) => (smallCirclesRef.current[1] = el)}
            ></div>

            <h3>Instant Inquiry/Feedback</h3>

            <form className="mb-4" onSubmit={handleSubmit}>
              <label className="mb-2">Name: *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <label className="mb-2">Phone: *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <label className="mb-2">Email: *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label className="mb-2">Subject:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label className="mb-2">Message/inquiry: *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit">Send</button>
              {responseMsg && <p className="response">{responseMsg}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
