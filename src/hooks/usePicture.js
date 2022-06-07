import axios from "axios";
import React, { useEffect, useState } from "react";
import { getStored } from "../Facedb/Facedb";

const usePicture = () => {
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    const getPicture = async () => {
      const url = `https://volunteer-server.vercel.app/picture`;
      axios.get(url).then((res) => {
        console.log(res.data);
      });
    };
    getPicture();
  }, []);
  return { picture };
};

export default usePicture;
