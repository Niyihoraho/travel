import React,{useEffect} from "react";
import "./footer.css";
import { FiChevronRight} from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {

  useEffect(() =>{
    Aos.init({duration: 1200})
  },[]);
  
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="contact">
            <div className="left" data-aos="fade-up">
              <h2 >Keep in Touch</h2>
              <h1 >Travel with Us</h1>
            </div>
            <div className="input" data-aos="fade-up">
              <input type="text" placeholder="enter email address" />
            </div>
            <div className="btn" data-aos="fade-up">
              <button type="Submit">Send</button>
            </div>
          </div>
          
          <div className="card" >
            <div className="info">
            <div className="left-side">
              <div className="logo">
                <MdOutlineTravelExplore className="icon" data-aos="fade-up"/>
                Travel.
              </div>
              <div className="text" data-aos="fade-up">
                <p>
                  flexboxThis course is created to help you to learning
                  basics of flexbox it useful tools used in css This course is
                  flexboxThis course is created to help you to learning
                  basics of flexbox it useful tools used in css This course is
                  created to help you This course is created to help you to
                  learning basics of flexbox
                </p>
              </div>
              <div className="social-media"></div>
            </div>
            <div className="right-side" data-aos="fade-up">
          
              <ul>
                <li>
                  <h2>AGENCY</h2>
                </li>
                <li><FiChevronRight className="icon" />Service</li>
                <li><FiChevronRight className="icon"/>Insurance</li>
                <li><FiChevronRight className="icon"/>Agency</li>
                <li><FiChevronRight className="icon"/>Tourism</li>
                <li><FiChevronRight className="icon"/>Payment</li>
              </ul>

              <ul>
                <li>
                  <h2>Partners</h2>
                </li>
                <li><FiChevronRight className="icon"/>Booking</li>
                <li><FiChevronRight className="icon"/>RentalCar</li>
                <li><FiChevronRight className="icon"/>HostelWorld</li>
                <li><FiChevronRight className="icon"/>Trivago</li>
                <li><FiChevronRight className="icon"/>TripAdvisor</li>
              </ul>
              <ul>
                <li>
                  <h2>Services</h2>
                </li>
                <li><FiChevronRight className="icon"/>Booking</li>
                <li><FiChevronRight className="icon"/>RentalCar</li>
                <li><FiChevronRight className="icon"/>HostelWorld</li>
                <li><FiChevronRight className="icon"/>Trivago</li>
                <li><FiChevronRight className="icon"/>TripAdvisor</li>
              </ul>

            </div>
            </div>
            <div className="copy">
            <div className="copyright">
              &copy;Copyrights Reserved-Heroic 2024
              </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
