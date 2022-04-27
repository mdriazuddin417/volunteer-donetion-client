import React, { useEffect, useState } from "react";
import SingleImage from "../SingleImage/SingleImage";
import "./Home.css";
const Home = () => {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch("pic.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPictures(data);
      });
  }, []);
  return (
    <div>
      <div className="home ">
        <div className="container ">
          <div className="d-flex justify-content-center align-items-center">
            <h2>THis is Home</h2>
          </div>
        </div>
      </div>
      <div className="container mb-4" style={{ marginTop: " -139px" }}>
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1 g-3 mt-2">
          {pictures.map((picture) => (
            <SingleImage key={picture.id} picture={picture}></SingleImage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
