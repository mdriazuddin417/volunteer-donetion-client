import React from "react";
import "./SingleImage.css";
const SingleImage = ({ picture }) => {
  const { img, name } = picture;
  const randomColor = parseInt(Math.random() * 100);

  return (
    <div className="cols   ">
      <div className="card-container">
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
