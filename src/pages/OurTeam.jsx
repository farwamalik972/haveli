import React, { useState } from 'react';
import MainNav from '../Components/MainNav';
import { Card, Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Footer from '../Components/Footer';
import client from "../Images/client.jpg";
import welcom from "../Images/haveli4.jpg"
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function OurTeam() {
  const [tooltipVisible, setTooltipVisible] = useState({});

  const handleTooltipShow = (index) => {
    setTooltipVisible((prev) => ({ ...prev, [index]: true }));
  };

  const handleTooltipHide = (index) => {
    setTooltipVisible((prev) => ({ ...prev, [index]: false }));
  };

  const teamMembers = [
    {
      name: 'Habib R Khan',
      role: 'CEO',
      photo: client,
      description: `As the CEO and founder, I am honored to share the journey of Haveli Restaurant with you. This restaurant is more than just a dining space it is a tribute to Lahore’s rich history, culture, and flavors.
In 2005, my brother Tariq and I set out to restore the historic Haveli Khalil Khan, driven by our passion for preserving Lahore’s architectural heritage. We envisioned a place where people could experience not only exceptional food but also the beauty of the past. Through dedication and hard work, we transformed this space into a unique restaurant where history, tradition, and modernity come together.
Our commitment to excellence is reflected in every detail—from our diverse menu of authentic Pakistani dishes made with the finest ingredients to our focus on sustainability and community engagement. As a proud part of the Fort Road Food Street project, we are dedicated to preserving the heritage of this historic area while creating opportunities for the local community.
As we continue to grow and innovate, our core values remain the same: preserving history, promoting culinary excellence, and delivering outstanding service. Every meal at Haveli Restaurant is a journey through Lahore’s past and a celebration of its rich flavors.
Thank you for your support and trust. Your love for Haveli Restaurant inspires us to keep striving for excellence, and we look forward to welcoming you for many more memorable experiences..
`
    },
    {
      name: 'Tariq Khalil Khan',
      role: 'CFO',
      photo: client,
      description: `As the CFO of Haveli Restaurant, it gives me great pleasure to share our incredible journey with you. Our dream to restore Haveli Khalil Khan and create a dining experience that honors Lahore's rich cultural heritage has been a labor of love and dedication. Alongside my brother, Habib, we set out to transform this historic landmark into a vibrant space that celebrates the architectural beauty and culinary traditions of our beloved city.
The journey began in 2005 with a vision to revive Haveli Khalil Khan, a treasure of Lahore's architectural heritage. We faced numerous challenges, but our unwavering commitment to preserving the past and enriching the present kept us focused. Through meticulous restoration and a passion for excellence, we have created a unique dining destination that reflects the soul of Lahore.
At Haveli Restaurant, we are dedicated to offering a diverse menu of authentic Pakistani dishes, crafted with the finest ingredients and a genuine love for flavor. Our aim is to provide not just a meal, but an experience that connects you with the history and culture of Lahore. We are proud to support sustainable practices and contribute to the revitalization of Fort Road Food Street, creating opportunities and fostering a sense of community.
Our vision is to make Haveli Restaurant a symbol of Lahore's cultural and culinary excellence. We continuously strive to innovate and improve, ensuring that each visit is memorable and special. Your support and patronage inspire us to reach new heights and uphold the values that define us: preserving heritage, culinary excellence, and exceptional service.
Thank you for being a part of our journey. Together, we celebrate the past, embrace the present, and look forward to a future filled with promise and delight.
`
    },
    {
      name: 'Mohammad Ahmed Hassan ',
      role: 'General Manager',
      photo: client,
      description: `As the General Manager, it is my honor and privilege to extend a warm welcome to you. Haveli Restaurant stands as a beacon of Lahore's rich heritage and culinary excellence, and I am delighted to share this unique experience with you.
Our historic venue, Haveli Khalil Khan, beautifully combines the grandeur of the past with the vibrant energy of today. With unparalleled views of Lahore's iconic landmarks and a meticulously crafted menu of authentic Pakistani cuisine, we strive to create memorable moments for each of our guests. Every dish is prepared with the finest ingredients, ensuring a true celebration of flavors that reflects our commitment to culinary excellence.
We take immense pride in preserving the architectural and cultural heritage of this magnificent haveli while integrating modern amenities and sustainable practices. Our dedication to community engagement and environmental responsibility is evident in every aspect of our operations.
At Haveli Restaurant, our team is committed to delivering exceptional service, ensuring that your dining experience is not only enjoyable but also unforgettable. We continuously seek to innovate and improve, always aiming to exceed your expectations and provide a dining experience that is second to none.
Thank you for choosing Haveli Restaurant. Your support and patronage inspire us to maintain the highest standards of hospitality and culinary artistry. We look forward to welcoming you and making your visit truly special.
`
    },
    {
      name: 'Ali Hamza',
      role: 'Branch Manager',
      photo: client,
      description: `As the Branch Manager, I am thrilled to welcome you to our historic and cherished establishment. Haveli Restaurant is not just a place to dine; it is a journey through Lahore's rich cultural and culinary heritage. Our location in the beautifully restored Haveli Khalil Khan offers a unique ambiance where history and modernity come together to create an unforgettable dining experience.
At Haveli Restaurant, we are dedicated to providing exceptional service and exquisite cuisine. Our menu features a diverse array of authentic Pakistani dishes, each prepared with the finest ingredients and a passion for flavor. Whether you're here for a special celebration, a family gathering, or a casual meal, we aim to make every visit a delightful experience.
We take great pride in preserving the architectural beauty of Haveli Khalil Khan and contributing to the vibrant atmosphere of Fort Road Food Street. Our commitment to sustainable practices and community engagement is at the heart of everything we do. We strive to create a welcoming environment where you can enjoy not only great food but also the rich history that surrounds us.
Our team is devoted to ensuring your satisfaction, and we continually seek ways to enhance your dining experience. Your support and patronage inspire us to maintain the highest standards and to keep innovating in our culinary offerings.
Thank you for choosing Haveli Restaurant. We look forward to serving you and making your visit truly memorable.
`
    },
    {
      name: 'Irum Shehzdi',
      role: 'Floor Manager',
      photo: client,
      description: `As the Floor Manager, it is my pleasure to extend a warm welcome to you. At Haveli Restaurant, we take pride in offering not just a dining experience, but a journey into Lahore's cultural tapestry. Located within the historic Haveli Khalil Khan, our restaurant provides a unique blend of traditional charm and modern comforts.
Our team is dedicated to ensuring that every aspect of your visit exceeds your expectations. From our carefully curated menu of authentic Pakistani dishes, prepared with the utmost care and using the finest ingredients, to our commitment to providing exceptional service, we strive to create memorable moments for you and your loved ones.
As you dine with us, take in the breathtaking views of Lahore's iconic landmarks and immerse yourself in the rich history that surrounds our haveli. We are honored to be a part of Fort Road Food Street's cultural revival, contributing to sustainable practices and community engagement.
Thank you for choosing Haveli Restaurant. Whether you are here for a special occasion or a casual meal, we look forward to serving you with warmth, professionalism, and a genuine passion for hospitality.
`
    },
    {
      name: 'Iftkhar Shafiq',
      role: 'Chef',
      photo: client,
      description: `As the Chef of Haveli Restaurant, it is my pleasure to invite you on a culinary journey through the flavors of Pakistan. Nestled in the historic Haveli Khalil Khan, our restaurant is not just a dining destination but a celebration of Lahore's rich culinary heritage.`
    },

  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='our-team-wrapper'>
      <MainNav />
      <Container className="team-section">
        <motion.h2 className="team-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >Meet Our Team <span className="underline"></span></motion.h2>
        <Row className="justify-content-center">
          {/* First Row - 2 Cards Centered */}
          {teamMembers.slice(0, 2).map((member, index) => (
            <Col md={5} sm={6} xs={12} key={index} className="team-card-col" data-aos="flip-left">
              <Card className="team-card">
                <div className="photo-wrapper">
                  <div className="background-overlay"></div>
                  <Card.Img variant="top" src={member.photo} className="team-photo" />
                </div>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <p className="limited-text">{member.description.split(" ").slice(0, 25).join(" ") + "..."}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* Second Row - 3 Cards */}
          <Row className="justify-content-center">
            {teamMembers.slice(2, 5).map((member, index) => (
              <Col md={4} sm={6} xs={12} key={index} className="team-card-col" data-aos="flip-left">
                <Card className="team-card">
                  <div className="photo-wrapper">
                    <div className="background-overlay"></div>
                    <Card.Img variant="top" src={member.photo} className="team-photo" />
                  </div>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <p className="limited-text">{member.description.split(" ").slice(0, 25).join(" ") + "..."}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Third Row - 1 Card Centered */}
          <Row className="justify-content-center">
            {teamMembers.slice(5, 6).map((member, index) => (
              <Col md={4} sm={8} xs={12} key={index} className="team-card-col" data-aos="flip-left">
                <Card className="team-card">
                  <div className="photo-wrapper">
                    <div className="background-overlay"></div>
                    <Card.Img variant="top" src={member.photo} className="team-photo" />
                  </div>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <p className="limited-text">{member.description.split(" ").slice(0, 25).join(" ") + "..."}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>

      </Container>
      <Container fluid className="about-haveli-section">
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col md={6} sm={12} className="image-container" data-aos="zoom-in">
            <img src={welcom} alt="Haveli Restaurant" className="about-image" />
          </Col>

          {/* Right Side - Content */}
          <Col md={6} sm={12} className="content-container" data-aos="fade-left">
            <h3 className="about-title">Welcome to Haveli Restaurant</h3>

            <p data-aos="fade-up" data-aos-duration="1000">
              At Haveli Restaurant, we pride ourselves on offering a menu that showcases
              the diversity and authenticity of Pakistani cuisine. Each dish is crafted
              with care and passion, using the finest ingredients sourced locally to
              ensure freshness and flavor.
            </p>

            <p data-aos="fade-right" data-aos-duration="1200">
              Whether you are indulging in our signature biryanis, savoring our flavorful
              kebabs, or enjoying our traditional desserts, every bite reflects our
              commitment to culinary excellence.
            </p>

            <p data-aos="fade-left" data-aos-duration="1400">
              Thank you for choosing Haveli Restaurant. We look forward to sharing our
              passion for food with you and creating memorable dining experiences that
              exceed your expectations.
            </p>
          </Col>

        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default OurTeam;
