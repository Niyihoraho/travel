import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].image})`,
    transition: "background-image 0.35s ease",
  };
  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const dots = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    zIndex: "10",
    color: "white",
    top: "95%",
    left: "47%",
  };

  const dotStyles = {
    margin: "0 5px",
    fontSize: "7px",
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrow} onClick={goToPrevious}>
        <FaChevronLeft />
      </div>
      <div style={rightArrow} onClick={goToNext}>
        <FaChevronRight />
      </div>
      <div style={dots}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            <FaCircle color={slideIndex === currentIndex ? "white" : "grey"} />
          </div>
        ))}
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
