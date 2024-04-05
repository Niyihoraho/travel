import React from "react";
import "./service.css";
import { FaRoute } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import Aos from "aos";
const Service = () => {

  return (
    <section className="services">
      <div className="container">

      <div className="title">
                <h2 >SERVICES</h2>
                <h1 >Tours & Travel Services</h1>
            </div>
        <div className="content-services">
            
          <div className="left">
            <div className="icon"><FaRoute/></div>
            <h2>Travel Guide</h2>
            <p>
            You can refer to our travel guide with the help of 
               our support team and our travel map
            </p>
          </div>
          <div className="middle">
            <div className="icon"><FaTicketAlt /></div>
            <h2>Ticket Booking</h2>
            <p>
              We offer various range of booking  service 
            </p>
          </div>
          <div className="right">
            <div className="icon"><FaHotel/></div>
            <h2>Hotel Booking</h2>
            <p>
              we offer hotel and related service booking     
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
