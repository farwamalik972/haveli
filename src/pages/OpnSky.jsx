import React, { useState } from 'react';
import MainNav from '../Components/MainNav';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import open from "../Images/roof-top.jpg";
import opn from "../Images/opn.jpg";
import roof from "../Images/rof.jpg";
import Footer from '../Components/Footer';

function OpnSky() {
    const slides = [
        {
            title: "Haveli Restaurant",
            text: "we continuously innovate to provide an unforgettable dining experience that celebrates Lahore's cultural heritage and culinary traditions. Thank you for choosing Haveli Restaurant. We look forward to making your visit truly memorable.",
            imageUrl: open,
        },
        {
            title: "Authentic Taste",
            text: "At Haveli Restaurant, Lahore, our mission is to provide an exceptional dining experience that celebrates the rich cultural heritage and culinary traditions of our historic city",
            imageUrl: opn,
        },
        {
            title: "Discover Palace",
            text: " Haveli Restaurant synonymous with the finest dining experience in Lahore. Thank you for being a part of our story.",
            imageUrl: roof,
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className='open-sky-wraper'>
            <MainNav />
            <div className="header">
                <Container className="header-text">
                    Open to Sky
                </Container>
            </div>
            <Container className="fifty-fifty-slider">
                <div className="slider-wrapper">
                    <ul className="slider-stack">
                        {slides.map((slide, index) => (
                            <li key={index} className={`slider-slide ${activeIndex === index ? "active" : ""}`}>
                                <div className="slider-content">
                                    <div className="slider-content-inner">
                                        <h2 className="slider-title">{slide.title}</h2>
                                        <p className="slider-text">{slide.text}</p>
                                        {/* <a href="#" className="slider-action">...</a> */}
                                    </div>
                                </div>
                                <div
                                    className="slider-image"
                                    style={{
                                        backgroundImage: `url(${slide.imageUrl})`
                                    }}
                                ></div>
                            </li>
                        ))}
                    </ul>

                    <div className="slider-nav">
                        <div className="slider-nav-count">
                            <span className="slider-current">{activeIndex + 1}</span> / <span className="slider-total">{slides.length}</span>
                        </div>
                        <Button variant="link" className="prev" onClick={prevSlide}>
                            <FaChevronLeft size={30} />
                        </Button>
                        <Button variant="link" className="next" onClick={nextSlide}>
                            <FaChevronRight size={30} />
                        </Button>
                    </div>
                </div>
            </Container>
        <Container className="reservation-card-container">
      <Row>
        <Col md={6}>
          <Card className="reservation-card">
            <Card.Body>
              <h3 className="card-title">Reserve Your Spot</h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formSpecialRequests">
                  <Form.Label>Special Requests</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Any special requests?" />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                  Online Reservation
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <div className="operating-hours">
            <h5>Restaurant Operating Hours</h5>

            <div className="a-la-carte">
              <h6>À La Carte Timings</h6>
              <div className="timing-row">
                <span><strong>Monday - Thursday:<br></br></strong> 01:00 PM - 11:00 PM</span>
                <span><strong>Friday - Sunday: <br></br></strong> 01:00 PM - 11:59 PM</span>
              </div>
            </div>

            <div className="weekend-buffet">
              <h6>Weekend Buffet Timings</h6>
              <p className="centered-text"><strong>Every Friday - Saturday - Sunday</strong></p>
              <div className="slots">
                <span><strong>Slot 1: <br></br></strong> 07:00 PM - 09:00 PM</span>
                <span><strong>Slot 2: <br></br></strong> 09:00 PM - 11:00 PM</span>
              </div>
            </div>

            <div className="price-details">
              <h6>Price</h6>
              <div className="price-row">
                <span><strong>Adults: <br></br></strong> Rs. 3,333 + Tax</span>
                <span><strong>Kids Under-8: <br></br></strong> Rs. 1,666 + Tax</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
            <Footer/>
        </div>
    );
}

export default OpnSky;
