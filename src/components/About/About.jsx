import React from "react";
import "./about.css";
import image from "../../set/gorila1.jpg";
import image2 from "../../set/p2.jpg";
import image3 from "../../set/p3.jpg";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="content-About">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <h2>ABOUT US</h2>

            <h1>
              We Provide Best Tour <br /> Packages In Your Budget
            </h1>

            <p>
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
            </p>
            <div className="images">
              <img src={image2} alt="" />
              <img src={image3} alt="" />
            </div>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="content-quality">
          
            <div className="left">
              <div className="icon"><FaMoneyCheckAlt/></div>
              <div className="content">
                <h2>Competitive Pricing</h2>
                <p>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
              </div>
            </div>
          
          <div className="middle">
              <div className="icon"><FaAward/></div>
              <div className="content">
                <h2>Best Services</h2>
                <p>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
              </div>
            </div>
            <div className="right">
              <div className="icon"><FaGlobe/></div>
              <div className="content">
                <h2>Worldwide Coverage</h2>
                <p>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
