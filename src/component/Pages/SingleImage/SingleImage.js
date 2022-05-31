import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

import "./SingleImage.css";
const SingleImage = ({ picture }) => {
  const { _id, img, name } = picture;

  const randomColor = parseInt(Math.random() * 100);

  const handlePicture = (picture) => {
    const url = `http://localhost:5000/picture`;
    axios
      .post(url, {
        picture,
      })
      .then((res) => {
        toast.success("Your choice complete");
      });
  };
  return (
    <div className="cols d-flex justify-content-center ">
      <div
        className="card-container"
        onClick={() => handlePicture(picture)}
        style={{ cursor: "pointer" }}
      >
        <img src={img} alt="" className="w-100 img-fluid " />
        <div
          className="card-name"
          style={{ backgroundColor: `#f${randomColor}e` }}
        >
          <h5> {name}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
