import React from "react";
import "./about.css";
import image from "../../set/gorila1.jpg";
import image2 from "../../set/lake-kivu.jpg";
import image3 from "../../set/package_mountain_2.jpeg";
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
            This is a big company operating in Rwanda-Karongi-Kibuye in western province, 
            starting since 2023. We have different tours like Lake kivu  boat ride, 
            Biking Adventure, Congo Nile Trails Hiking, Kayaking, Sunset & Fisherman singing,
             Night Fishing experience, Coffee & Tea tour, Swimming cows Experience, 
             Bird-watching tour, frogs tour, City tours, Village and culture tour, 
             Accommodations, Camping Spots, Bikes & Kayaks Rental 
             and other related activities.
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
                <p>Our tour and travel packages in Rwanda provide a perfect blend of great service, 
                  affordable prices, and carefully planned trips that offer amazing experiences.</p>
              </div>
            </div>
          
          <div className="middle">
              <div className="icon"><FaAward/></div>
              <div className="content">
                <h2>Best Services</h2>
                <p>TURACOS Tours Africa Safaris in Rwanda offers exceptional service and 
                   affordable prices for unforgettable travel experiences.</p>
              </div>
            </div>
            <div className="right">
              <div className="icon"><FaGlobe/></div>
              <div className="content">
                <h2>Worldwide Coverage</h2>
                <p>Turacos Tours Africa Safaris offers 
                   an exceptional  national and 
                  international safari experience.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
