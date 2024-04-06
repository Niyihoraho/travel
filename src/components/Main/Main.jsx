import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = ({ destinations = [], selectedDestination, selectedDate }) => {
  const filteredDestinations = destinations.filter((destination) => {
    const matchesDestination = selectedDestination
      ? destination.name === selectedDestination
      : true;
    const matchesDate = selectedDate
      ? destination.location === selectedDate
      : true;

    return matchesDestination && matchesDate;
  });

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <section className="main">
        <div className="container">
          <div className="text" data-aos="fade-up">
            <h1 data-aos="fade-up">Destinations</h1>
          </div>
          <div className="roww">
            {filteredDestinations.map((destination, index) => (
              <div className="cardDestination" data-aos="fade-up" key={index}>
                <div className="image">
                  <img
                    src={`http://localhost:3000/${destination.image1}`}
                    alt="Destination"
                  />
                </div>
                <div className="title">
                  <h2>{destination.name}</h2>
                  <p>
                    <HiOutlineLocationMarker className="icon" />
                    {destination.location}
                  </p>
                </div>
                <div className="divider"></div>
                <div className="price">
                  <h3>Rwf</h3>
                  <p>20000</p>
                </div>
                <div className="divider"></div>
                <div className="details">
                  <p>{destination.description}</p>
                  <button className="btn">
                    <Link to={`/details/${destination.id}`}>
                      DETAILS
                      <HiOutlineClipboardCheck className="icon" />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
