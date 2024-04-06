import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideWrapperStyles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const slideStyles = (index) => ({
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[index].image})`,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: currentIndex === index ? 1 : 0,
    transition: "opacity 0.5s ease",
  });

  const arrowStyles = (direction) => ({
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    [direction]: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  });

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
    setPrevIndex(currentIndex);
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setPrevIndex(currentIndex);
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={arrowStyles("left")} onClick={goToPrevious}>
        <FaChevronLeft />
      </div>
      <div style={arrowStyles("right")} onClick={goToNext}>
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
      <div style={slideWrapperStyles}>
        {slides.map((slide, index) => (
          <div key={index} style={slideStyles(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;