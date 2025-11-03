import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import './Carousal.css';

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const slides = [
  {
    image: image1,
    title: "Explore organic & fresh vegetables",
    description: "This is flat 50% off.",
    button: "Shop now"
  },
  {
    image: image2,
    title: "Explore healthy & fresh fruits",
    description: "This is flat 30% off",
    button: "Shop now"
  },
  {
    image: image3,
    title: "Explore warm & fast food snacks",
    description: "This is flat 70% off.",
    button: "Shop now"
  }
];

const ContentImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-wrapper">
      {/* LEFT: Dynamic Content */}
      <div className="text-content">
        <h2>{slides[activeIndex].title}</h2>
        <p>{slides[activeIndex].description}</p>
        <button className="shop-btn">{slides[activeIndex].button}</button>
      </div>

      {/* RIGHT: Swiper Carousel */}
      <div className="image-slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContentImageSlider;
