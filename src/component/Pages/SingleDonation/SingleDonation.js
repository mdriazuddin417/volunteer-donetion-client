import axios from "axios";
import React from "react";

const SingleDonation = ({ picture, handleRemove }) => {
  const { name, img, date, _id } = picture;

  return (
    <div className="cols">
      <div className="bg-white rounded-3">
        <div className="d-flex gap-2 justify-content-around donation-container p-4">
          <img src={img} alt="" width={"200px"} height={"150px"} className="" />
          <div className="d-flex gap-2 justify-content-between">
            <div className="fw-bold">
              <h5 className="text-primary fw-bold">{name || "Not Found"}</h5>
              <p className="text-secondary">{date || "Not Found"}</p>
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
    </div>
  );
};

export default SingleDonation;
