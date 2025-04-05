import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import haveli from "../Images/haveli2.jpg"
import haveli1 from "../Images/haveli3.jpg"
import haveli2 from "../Images/haveli2.jpg"

const slidesData = [
  {
    image: haveli,
    title: "History of Haveli Khalil Khan",
    description:
      "The Haveli Khalil Khan is in itself a unique representation of the rich heritage of Lahore. Its wooden balconies and jharokas, hand carved doors and windows, wrought iron railings, sun dried flat bricks, handmade tiles and other antique features, makes it an embodiment of the characteristic style of the old ‘Walled City’. It was constructed under a special permission awarded by the British Raj to a prominent Hindu grandee of Lahore during the First World War, but fell into disrepair and neglect after the Partition of 1947, and became divided into several portions, each occupied by a different family from the nearby “red light” district.",
  },
  {
    image: haveli1,
    title: "Restoration & Preservation",
    description:
     "With a visionary zeal to reclaim the Haveli to its original plan, the current owners, the brothers Habib Khan and Tariq Khan, painstakingly bought out the divided portions from different individuals in 2005-6, and carefully started the work of structural reinforcement, renovation and restoration. When the Punjab government announced its intention to develop a Food Street on Fort Road in 2010, Habib Khan voluntarily assisted in the project execution and helped in delivering a unique concept of sustainable inner city regeneration, with underground electric cables , round the clock availability of utilities, modern standards of sanitation, and new job opportunities for surrounding inhabitants.",
  },
  {
    image: haveli2,
    title: "Present & Future Vision",
    description:
      "Habib Khan and Tariq Khan are constantly striving to bring innovation and improvement for the Food Street and the Haveli, with stewardship from the Walled City Authority, and today it has become a must-see destination for visitors from different areas of Pakistan and from all over the world.",
    }
];

const AquaticAnimalsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container fluid className="aquatic-slider mb-5">
      <Row className="align-items-center">
        {/* Left Side Text Content */}
        <Col md={6} className="text-content" style={{paddingLeft:"75px"}}>
          <span>Discover</span>
          <h1>{slidesData[activeIndex].title}</h1>
          <hr />
          <p>{slidesData[activeIndex].description}</p>
        </Col>

        {/* Right Side Image Slider */}
        <Col md={6} className="slider-container">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ thresholdDelta: 70 }}
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            modules={[Pagination, EffectCoverflow, Keyboard, Mousewheel]}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index} className="image-slide">
                <img src={slide.image} alt={slide.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default AquaticAnimalsSlider;
