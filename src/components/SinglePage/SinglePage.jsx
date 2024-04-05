import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./singlepage.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import Aos from "aos";


const SinglePage = () => {

  const { id } = useParams();

  const [destination, setDestination] = useState({
    name: "",
    location: "",
    description: "",
    map_location: "",
    image1: "",
    image2: "",
    image3: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/SelectUpdateDestination/${id}`)
      .then((res) => {
        const data = res.data[0];
        setDestination({
          name: data.name,
          location: data.location,
          description: data.description,
          map_location: data.map_location,
          image1: data.image1,
          image2: data.image2,
          image3: data.image3,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);


  const slides = [
    { title: "image1", image: `http://localhost:3000/${destination.image1}` },
    { title: "image2", image: 'http://localhost:3000/public/package_tradition_3.JPG'.replace(/\\/g, '/') },
    { title: "image3", image: 'http://localhost:3000/public/package_monkey_1.jpeg'.replace(/\\/g, '/') },
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
            <h2>{destination.name}</h2>
            <div className="image">
              <img src={`http://localhost:3000/${destination.image1}`} alt="" />
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
