import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./singlepage.css";
import image from "../../set/f1.jpg";
import image1 from "../../set/blog-4.jpg";
import image2 from "../../set/blog-5.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import ImageSlider from "./ImageSlider";

const SinglePage = () => {
  const slides = [
    { title: "image1", image: image },
    { title: "image2", image: image1 },
    { title: "image3", image: image2 },
  ];

  const [active, setActive] = useState("bar");

  const togglMenu = () => {
    setActive("nav");
  };

  const close = () => {
    setActive("bar");
  };

  return (
    <section className="single">
      <nav className={active}>
        <div className="leftLogo">
          <div className="logo">
            <MdOutlineTravelExplore className="icon" />
            Travel.
          </div>
          <div className="close">
            <AiFillCloseCircle className="iconClose" onClick={close} />
          </div>
        </div>

        <div className="rightLink">
          <ul>
            <li>
              <Link to="/home" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages" className="link">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="link">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navBar">
        <div className="container">
          <div className="row">
            <div className="left-logo">
              <div className="logo">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </div>
            </div>

            <div className="right-link">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/packages">Packeges</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <button className="btn">
                  <a href="#">Book</a>
                </button>
              </ul>
            </div>
            <div className="tagle-menu" onClick={togglMenu}>
              <TbGridDots />
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="content-single">
          <div className="left">
            <h2>Akagera Nation Park</h2>
            <div className="image">
              <ImageSlider slides={slides} />
            </div>
          </div>
          <div className="right">
            <div className="cardd">
              <h2>Our contacts</h2>
              <div className="icons">
                <div className="call">
                  <h1>Call:</h1>
                  <span>+250784358517</span>
                </div>
                <div className="call">
                  <h1>Call:</h1>
                  <span>+250784358517</span>
                </div>
                <div className="icon">
                  <FaFacebookF /> <p>Facebook</p>
                </div>
                <div className="icon">
                  <FaInstagram /> <p>Instagram</p>
                </div>
                <div className="icon">
                  <FaWhatsapp /> <p>Whatsapp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
