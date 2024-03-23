import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import image from "../../set/f1.jpg";
import image1 from "../../set/girilla.jpg";
import image2 from "../../set/p2.jpg";
import image3 from "../../set/p3.jpg";
import image4 from "../../set/p4.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const data = [
    {
      image: image2,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image1,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image3,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image4,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image2,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image1,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
    {
      image: image3,
      title: "Nyungwe",
      location: "Rusizi",
      price: "20000",
      datails:
        "This course is created to help you to learning basics of flexbox it useful tools used in css This course is createdto help you This course is created to help you to learningbasics of flexbox",
    },
  ];

  return (
    <div>
      <section className="main">
        <div className="container">
          <div className="text" data-aos="fade-up">
            <h1 data-aos="fade-up">Destinations</h1>
          </div>
          <div className="roww">
            {data.map((d, index) => (
              <div className="cardDestination" data-aos="fade-up" key={index}>
                <div className="image">
                  <img src={d.image} alt="image" />
                </div>
                <div className="title">
                  <h2>{d.title}</h2>
                  <p>
                    <HiOutlineLocationMarker className="icon" />
                    {d.location}
                  </p>
                </div>
                <div className="divider"></div>
                <div className="price">
                  <h3>Rwf</h3>
                  <p>{d.price}</p>
                </div>
                <div className="divider"></div>
                <div className="details">
                  <p>{d.datails}</p>
                  <button className="btn">
                    <Link to="/package">
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
