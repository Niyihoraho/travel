import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Aboutpage from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Service from "../components/Service/Service";
import Guides from "../components/Guides/Guides";
import Blog from "../components/Content/Content";
const About = () => {
  return (
    <div>
      <Navbar title="About Us" />
      <Aboutpage />
      <Service/>
      <Guides/>
      <Footer />
    </div>
  );
};

export default About;
