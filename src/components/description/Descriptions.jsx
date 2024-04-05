import React from "react";
import "./description.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Descriptions = () => {

  const { id } = useParams();

  const [destination, setDestination] = useState({
    name: "",
    location: "",
    description: "",
    map_location: "",
    image1: "",
    image2: "",
    image3: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/SelectUpdateDestination/${id}`)
      .then((res) => {
        const data = res.data[0];
        setDestination({
          name: data.name,
          location: data.location,
          description: data.description,
          map_location: data.map_location,
          details: data.details,
          image1: data.image1,
          image2: data.image2,
          image3: data.image3,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <section className="description">
      <div className="container">
        <div className="content-description">
          <div className="left">
            <div className="description">
              <h2>Description</h2>
              <p>
                {destination.detail}
              </p>
            </div>
          </div>
          <div className="right">
            <div className="map">
            {destination.map_location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Descriptions;
