import React, { useState, useEffect } from "react";
import "./Parallax.css";
import { posters } from "../data/posters";

const Parallax = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const handleScroll = () => {
        setScrollOffset(window.scrollY);
      };

      // Attach the event listener when the component mounts
      window.addEventListener("scroll", handleScroll);

      // Detach the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    window.addEventListener("scroll", handleScroll);

    //  Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateParallax = (factor) => {
    return `translateY(${scrollOffset * factor}px)`;
  };

  return (
    <div
      style={{
        transform: calculateParallax(-0.5),
        position: "relative",
        zIndex: "40",
      }}
    >
      <div className="parallax__grid">
        {posters.map(({ img, title },index) => (
          <div key={index} className="parallax__movies">
            <img className="parallax__image" src={img} alt="" />
            <p className="parallax__title">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
