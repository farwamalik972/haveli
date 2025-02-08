import React from "react";
import MainNav from "../Components/MainNav";
import story from "../Images/story.webp"
import Footer from "../Components/Footer";

const About = () => {

    return (
        <div className="about-us-wrapper">
            <MainNav />
            <div className="banner-container mb-4">
                <div className="banner">
                    <h1>About Us</h1>
                </div>
            </div>
            <div class="half-half-image-text">
                <div class="container">
                    <div class="row" style={{gap:"95px"}}>
                        <div class="col-12 col-lg-5">
                        <h1>Our Story</h1>
                            <div class="content">
                                <p>
                                 Haveli Restaurant is located in the historic Haveli Khalil Khan, which is an architectural landmark of the Fort Road Food Street in Lahore. Nestled in the lap of history, Haveli offers incomparable and outstanding views of the famous Badshahi Mosque built by the Moghul emperor Aurangzeb in 1673, which remained the largest mosque in the world for over 300 years, the Temple of Guru Arjun (1563-1606), or Dera Sahib, where Raja Ranjit Singh of the Sikh kingdom of Punjab was cremated in 1839 along with his principal Rani the princess of Kangra and three other wives, the tombs of Allama Iqbal and Sir Sikander Hayat Khan, the Minar-e-Pakistan and last but not least, the impressive Lahore Fort with its fascinating history of one thousand years.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <img className="img" src={story} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
