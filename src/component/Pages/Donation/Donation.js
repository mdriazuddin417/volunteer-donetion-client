import axios from "axios";
import React, { useEffect, useState } from "react";

import SingleDonation from "../SingleDonation/SingleDonation";
import "./Donation.css";

const Donation = () => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const getPicture = async () => {
      const url = `http://localhost:5000/picture`;
      await axios.get(url).then((res) => {
        setPicture(res.data);
      });
    };
    getPicture();
  }, []);
  return (
    <div className="donation">
      <div className="container my-4 ">
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
          {picture.map((pic) => (
            <SingleDonation picture={pic} key={pic._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donation;
