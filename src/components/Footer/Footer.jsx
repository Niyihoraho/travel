import React, { useEffect } from "react";
import "./footer.css";
import { FiChevronRight } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import image from "../../set/f1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    
      <section className="footer">

        <div className="setContent container">
          <div className="contactDiv flex">
            <div className="text" data-aos="fade-up">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>
            <div className="inputDiv flex">
              <input type="text" placeholder="Enter Email Address" data-aos="fade-up" />
              <button className="btn flex" type="submit" data-aos="fade-up">
                SEND
                <FiSend className="icon" />
              </button>
            </div>
          </div>
          <div className="footercard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdOutlineTravelExplore className="icon" /> travel.
                </a>
              </div>

              <div className="footerParagraph" data-aos="fade-up">
              This is a big company operating in Rwanda-Karongi-Kibuye in western province,
               starting since 2023. We have different tours like Lake kivu  boat ride,
                Biking Adventure, Congo Nile Trails Hiking, hayaking, 
                Sunset & Fisherman singing, Night Fishing experience, Coffee & Tea tour, 
                Swimming cows Experience, Bird-watching tour, frogs tour, City tours, 
                Village and culture tour, Accommodations, Camping Spots, 
                Bikes & Kayaks Rental and other related activities.
              </div>
              <div className="footerSocials flex" data-aos="fade-up">
               <AiOutlineTwitter className="icon"/>
               <AiOutlineYoutube className="icon"/>
               <AiFillInstagram className="icon"/>
               <AiFillFacebook className="icon"/>
              </div>

            </div>

           <div className="footerLinks grid">
{/* ------------------------------------------------------- */}
            <div className="linkGroup" data-aos="fade-up">
              <span className="title">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Coffee & Tea tour
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Lake kivu  boat ride, 
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Night Fishing experience
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bird-watching 
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Swimming cows Experience, 
              </li>
            </div>
            <div className="linkGroup">
              <span className="title">
              OUR Service
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                 Village and culture tour
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Biking Adventure
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Congo Nile Trails Hiking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Kayaking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Sunset & Fisherman 
              </li>
            </div>
            <div className="linkGroup">
              <span className="title">
                OUR Service
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Accommodations
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                City tours
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bird-watching tour
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Camping Spots
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bikes & Kayaks Rental 
              </li>
            </div>
            {/* ---------------------------------------------------------- */}
            </div> 




  
          <div className="footerDiv flex">
            <small>&copy;CopyRight Reserved -artDEVELOPER</small>
          </div>
          </div>
        </div>
      </section>
  
  );
};

export default Footer;
