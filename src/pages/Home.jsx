import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Service from "../components/Service/Service";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar title="Home" />
      <Main />
      <Service/>
      <Content/>
      <Footer />
    </div>
  );
};

export default Home;
