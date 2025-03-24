import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faUserTie,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";

const Contact = () => {
  const bigCircleRef = useRef(null);
  const contactBoxRef = useRef(null);
  const infoItemsRef = useRef([]);
  const formRef = useRef(null);
  const smallCirclesRef = useRef([]);

  useEffect(() => {
    // Big Circle Entrance
    gsap.fromTo(
      bigCircleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Contact Box Slide-in
    gsap.fromTo(
      contactBoxRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    // Staggered Animation for Info Items
    gsap.fromTo(
      infoItemsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out", delay: 1 }
    );

    // Form Floating Animation
    gsap.to(formRef.current, {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });

    // Small Circles Random Floating Motion
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

  return (
    <div className="contact-wrapper">
      <MainNav />
      <div className="contact mb-5">
        {/* Big Background Circle */}
        <div className="big-circle" ref={bigCircleRef}></div>

        {/* Contact Box */}
        <div className="contact-box" ref={contactBoxRef}>
          {/* Left Side */}
          <div className="contact-info">
            <h2>Let's get in touch</h2>
            {[
              { icon: faPhoneAlt, label: "Reservations", text: "+92 321 465 1051 (Please call after 1:00 pm)" },
              { icon: faClock, label: "Restaurant Timing", text: "Mon-Fri: 1:00 pm - 1:00 am\nSat-Sun: 9:00 am - 1:00 am" },
              { icon: faMapMarkerAlt, label: "Address", text: "2170-A, Food Street, Fort Road, Lahore, Pakistan" },
              { icon: faUserTie, label: "Admin Officer", text: "+92 321 465 1051" },
              { icon: faUserTie, label: "General Manager", text: "+92 300 841 4899" },
              { icon: faEnvelope, label: "Inquiries", text: "info@haveli.com.pk" },
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

          {/* Right Side (Contact Form) */}
          <div className="contact-form" ref={formRef}>
            {/* Floating Circles Inside Form */}
            <div
              className="small-circle top-left"
              ref={(el) => (smallCirclesRef.current[0] = el)}
            ></div>
            <div
              className="small-circle bottom-right"
              ref={(el) => (smallCirclesRef.current[1] = el)}
            ></div>

            <h3>Instant Inquiry/Feedback</h3>
            <form className="mb-4">
              <label className="mb-2">Name: *</label>
              <input type="text" />
              <label className="mb-2">Phone: *</label>
              <input type="email" />
              <label className="mb-2">Email: *</label>
              <input type="subject" />
              <label className="mb-2">Subject:</label>
              <input type="tel" />
              <label className="mb-2">Message/inquiry: *</label>
              <textarea placeholder="Your Message"></textarea>
            </form>
            <h3>Verification</h3>
            <form>
              <label className="mb-2">"Please enter any two digits"</label>
              <input type="text" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
