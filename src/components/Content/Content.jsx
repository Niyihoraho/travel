import React from "react";
import "./content.css";
import image from "../../set/blog-2.jpg";
import image1 from "../../set/blog-4.jpg";
import image2 from "../../set/blog-5.jpg";
import Aos from "aos";
const Content = () => {

  const data = [
    {
      imgg: image,
      name: "TOURS & TRAVEL",
      title:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. ",
    },
    {
      imgg: image1,
      name: "TOURS & TRAVEL",
      title:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially. ",
    },
    {
      imgg: image2,
      name: "TOURS & TRAVEL",
      title:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.",
    },
  ];
  return (
    <section className="blogs">
      <div className="container">
        <div className="text" data-aos="fade-up">
          <h1>Latest From Our Blog</h1>
        </div>
        <div className="content-blog">
          {data.map((d, index) => (
            <div className="blog" key={index} data-aos="fade-up">
              <div className="image">
                <img src={d.imgg} alt="" />
                <div className="blog-date">
                  <h1>01</h1>
                  <small>JAN</small>
                </div>
              </div>
              <div className="title">
                <h1>{d.name}</h1>
                <p>{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
