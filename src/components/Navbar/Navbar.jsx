import React, { useEffect, useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = ({ title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [active, setActive] = useState('bar');

  const togglMenu = () => {
    setActive('nav');
  };

  const close = () => {
    setActive('bar');
  };

  return (
    <div>
      <header>
        <nav className={active}>
          <div className="leftLogo">
            <div className="logo">
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </div>
            <div className="close" >
              <AiFillCloseCircle className="iconClose" onClick={close}/>
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
                    <Link to="/packages">Packages</Link>
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

        <div className="content">
          <div className="container">
            <div className="text">
              <h2 data-aos="fade-up">{title}</h2>
              <h1 data-aos="fade-up">Search Your Place</h1>
            </div>
            <div className="card" data-aos="fade-up">
              <form action="" className="row">
                <div className="textInput">
                  <label htmlFor="text">search your destination:</label>
                  <div className="input">
                    <input type="text" placeholder="enter Place here..." />
                    <GrLocation className="icon" />
                  </div>
                </div>

                <div className="dateInput">
                  <label htmlFor="date">select you data:</label>
                  <div className="input">
                    <input type="date" />
                  </div>
                </div>
                <div className="price">
                  <span className="row">
                    <p className="tx">max price:</p>
                    <h3 className="tx">$5000</h3>
                  </span>
                  <div className="input">
                    <input type="range" max="10000" min="0" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
