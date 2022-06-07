import axios from "axios";
import React, { useEffect, useState } from "react";

import SingleDonation from "../SingleDonation/SingleDonation";
import "./Donation.css";

const Donation = () => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const getPicture = async () => {
      const url = `https://volunteer-server.vercel.app/picture`;
      await axios.get(url).then((res) => {
        setPicture(res.data);
      });
    };
    getPicture();
  }, []);
  const handleRemove = (id) => {
    const url = `https://volunteer-server.vercel.app/picture/${id}`;

    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = picture.filter((pc) => pc._id !== id);
        setPicture(remaining);
      });
  };
  return (
    <div
      className=" bg-secondary bg-opacity-10 pt-5"
      style={{ height: "100vh" }}
    >
      <div className="container ">
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 g-5 ">
          {picture.map((pic) => (
            <SingleDonation
              picture={pic}
              key={pic._id}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donation;
