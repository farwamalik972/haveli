import React from 'react'
import MainNav from '../Components/MainNav'
import { Container } from "react-bootstrap";
import histroy from "../Images/history.jpg"
import slide3 from "../Images/slide-3.jpg"
import slide2 from "../Images/slide-2.jpg"
import gellry from "../Images/17.jpg"
import gellry1 from "../Images/12.jpg"
import gellry2 from "../Images/16-1.jpg"
import slide1 from "../Images/slide-1.jpg"
import gril from "../Images/gril.webp"
import Footer from '../Components/Footer';


function OurHistory() {
    return (
        <div className='our-history-wrapper'>
            <MainNav />
            <section className="our-history">
                <Container>
                    <div className="history-container">
                        {/* Main History Content */}
                        <div className="history-content">
                            <h2>Our History</h2>
                            <p>
                                <strong>Haveli Restaurant</strong> is located in the historic{" "}
                                <em>Haveli Khalil Khan</em>, an architectural landmark of the Fort
                                Food Street in Lahore. Nestled in history, <strong>Haveli</strong>{" "}
                                offers breathtaking views of Badshahi Mosque, Minar-e-Pakistan,
                                and Lahore Fort, places that have stood for centuries.
                            </p>
                            <p>
                                The structure represents Lahore's rich heritage, featuring wooden
                                balconies, jharokas, hand-carved doors, iron railings, and antique
                                materials. Initially built under British Raj, it later evolved
                                into a landmark of culture and food.
                            </p>

                            {/* History Images */}
                            <div className="history-images">
                                <img
                                    src={histroy}
                                    alt="Haveli View"
                                />
                                <img
                                    src={slide3}
                                    alt="Inside View"
                                />
                                <img
                                    src={slide2}
                                    alt="Haveli View"
                                />
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="gallery">
                            <h3>Haveli Gallery</h3>
                            <div className="gallery-grid">
                                <img
                                    src={gellry}
                                    alt="Gallery 1"
                                />
                                <img
                                    src={gellry1}
                                    alt="Gallery 2"
                                />
                                <img
                                    src={gellry2}
                                    alt="Gallery 3"
                                />
                                <img
                                    src={slide2}
                                    alt="Gallery 4"
                                />
                                <img
                                    src={slide3}
                                    alt="Gallery 5"
                                />
                                <img
                                    src={slide1}
                                    alt="Gallery 6"
                                />
                            </div>

                            {/* Restaurant Banner */}
                            <div className="restaurant-banner">
                                <img
                                    src={gril}
                                    alt="Haveli Grill"
                                />
                            </div>
                        </div>
                        <div className="histroy-text">
                        <p>
                         With a visionary zeal to reclaim the Haveli to its original plan, the current owners, the brothers Habib Khan and Tariq Khan, painstakingly bought out the divided portions from different individuals in 2005-6, and carefully started the work of structural reinforcement, renovation and restoration. When the Punjab government announced its intention to develop a Food Street on Fort Road in 2010, Habib Khan voluntarily assisted in the project execution and helped in delivering a unique concept of sustainable inner city regeneration, with underground electric cables , round the clock availability of utilities, modern standards of sanitation, and new job opportunities for surrounding inhabitants.
                        </p>
                        <p>
                        Habib Khan and Tariq Khan are constantly striving to bring innovation and improvement for the Food Street and the Haveli, with stewardship from the Walled City Authority, and today it has become a must-see destination for visitors from different areas of Pakistan and from all over the world.
                        </p>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer/>
        </div>
    )
}

export default OurHistory