import axios from "axios";
import React from "react";

const SingleDonation = ({ picture }) => {
  console.log(picture);
  const { name, img, date, _id } = picture;
  console.log(name, img, date);

  const handleRemove = (id) => {
    const url = `http://localhost:5000/picture/${id}`;

    axios.delete(url).then((res) => {
      console.log(res.data);
    });
    window.location.reload();
  };
  return (
    <div className="cols">
      <div className="d-flex gap-2 justify-content-around donation-container p-4">
        <img src={img} alt="" />
        <div className="d-flex gap-2 justify-content-between">
          <div className="fw-bold">
            <h4>{name || "Not Found"}</h4>
            <p>{date || "Not Found"}</p>
          </div>
        </div>
        <div className="d-flex align-items-end">
          <button
            className="btn btn-secondary bg-opacity-10"
            onClick={() => handleRemove(_id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDonation;
