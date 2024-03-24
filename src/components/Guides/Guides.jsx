import React from "react";
import image from "../../set/heroic1.jpg";
import image1 from "../../set/pc.jpg";
import image2 from "../../set/team-2.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./guides.css";



const Guides = () => {
  const data = [
    {
      imgg: image,
      name: "Guide Name",
      title: "Designation",
    },
    {
      imgg: image1,
      name: "Guide Name",
      title: "Designation",
    },
    {
      imgg: image,
      name: "Guide Name",
      title: "Designation",
    },
    {
      imgg: image2,
      name: "Guide Name",
      title: "Designation",
    },
  ];
  return (
    <section className="guides">
      <div className="container">
        <div className="text">
          <h2>GUIDES</h2>
          <h1>Our Travel Guides</h1>
        </div>
        <div className="content-guides">
          {data.map((d, index) => (
            <div className="guide" key={index}>
              <div className="image">
                <img src={d.imgg} alt="" />
                
                  <div className="icons">
                   <FaFacebookF className="icon"/>
                   <FaInstagram className="icon"/>
                   <FaWhatsapp className="icon"/>
                  
                </div>
              </div>
              <div className="title">
                <h1>{d.name}</h1>
                <h2>{d.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guides;
