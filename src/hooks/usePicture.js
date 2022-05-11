import axios from "axios";
import React, { useEffect, useState } from "react";
import { getStored } from "../Facedb/Facedb";

const usePicture = () => {
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    const getPicture = async () => {
      const url = `http://localhost:5000/picture`;
      axios.get(url).then((res) => {
        console.log(res.data);
      });
    };
    getPicture();
  }, []);
  return { picture };
};

export default usePicture;
