import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Service from "../components/Service/Service";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Axios from "axios";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const packageItems = [
    ...new Set(destinations.map((destination) => destination.category)),
  ];

  useEffect(() => {
    Axios.get("http://localhost:3000/destinationsSelect")
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar
        title="Home"
        destinations={destinations}
        packageItems={packageItems}
        setSelectedDestination={setSelectedDestination}
        setSelectedDate={setSelectedDate}
      />
      <Main
        destinations={destinations}
        selectedDestination={selectedDestination}
        selectedDate={selectedDate}
        setDestinations={setDestinations}
      />
      <Service />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
