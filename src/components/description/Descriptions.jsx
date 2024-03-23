import React from "react";
import "./description.css";
import image from "../../set/f1.jpg";

const Descriptions = () => {
  return (
    <section className="description">
      <div className="container">
        <div className="content-description">
          <div className="left">
            <div className="description">
              <h2>Description</h2>
              <p>
                flexboxThis course is created to help you to learning basics of
                flexbox it useful tools used in css This course is flexboxThis
                course is created to help you to learning basics of flexbox it
                useful tools used in css This course is created to help you This
                course is created to help you to learning basics of
                flexboxflexboxThis course is created to help you to learning
                basics of flexbox it useful tools used in css This course is
                flexboxThis course is created to help you to learning basics of
                flexbox it useful tools used in css This course is created to
                help you This course is created to help you to learning basics
                of flexboxflexboxThis course is created to help you to learning
                basics of flexbox it useful tools used in css This course is
                flexboxThis course is created to help you to learning basics of
                flexbox it useful tools used in css This course is created to
                help you This course is created to help you to learning basics
                of flexboxflexboxThis course is created to help you to learning
                basics of flexbox it useful tools used in css This course is
                flexboxThis course is created to help you to learning basics of
                flexbox it useful tools used in css This course is created to
                help you This course is created to help you to learning basics
                of flexbox
              </p>
            </div>
          </div>
          <div className="right">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15950.073909143497!2d30.0613673!3d-1.9454991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca55053fc3a17%3A0x9ae3208781ebddbd!2sVisit%20Akagera%20National%20Park!5e0!3m2!1sen!2srw!4v1710626540362!5m2!1sen!2srw"
                width="500"
                height="400"
                style={{ border: "0" }} // Pass style as an object
                allowFullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Descriptions;
