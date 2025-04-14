// src/components/Slideshow.jsx
import React from "react";
import Slider from "react-slick";
import "../styles/slick-no-fonts.css"; // instead of slick-carousel CSS

import "slick-carousel/slick/slick-theme.css";

// Import your images from assets
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // You can enable arrows if you like
  };

  const images = [image1, image2, image3, image4, image5];

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "60vh",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
