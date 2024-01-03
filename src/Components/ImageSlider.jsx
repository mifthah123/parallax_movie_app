import React from "react";
import "./ImageSlider.css";
import { backdrop } from "../data/backdrop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  return (
    <div className="slider__container">
      <Carousel
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {backdrop.map(({ img, title }, index) => (
          <div key={index}>
            <img src={img} alt={title} className="slider__images" />
            <p className="slider__text">{title}</p>
          </div>
        ))}
      </Carousel>
      <div className="slider__gradient" />
    </div>
  );
};

export default ImageSlider;
