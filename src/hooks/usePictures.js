import { useEffect, useState } from "react";

const usePictures = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pictures")
      .then((res) => res.json())
      .then((data) => {
        setPictures(data);
      });
  }, []);

  return [pictures, setPictures];
};

export default usePictures;
