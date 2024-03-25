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
                flexboxThis course is created to help you to learning basics of
                flexbox it useful tools used in css This course is flexboxThis
                course is created to help you to learning basics of flexbox it
                useful tools used in css This course is created to help you This
                course is created to help you to learning basics of flexbox
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
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>
            <div className="linkGroup">
              <span className="title">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>
            <div className="linkGroup">
              <span className="title">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
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
