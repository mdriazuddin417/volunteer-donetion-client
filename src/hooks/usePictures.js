import { useEffect, useState } from "react";

const usePictures = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("pic.json")
      .then((res) => res.json())
      .then((data) => {
        setPictures(data);
      });
  }, []);

  return [pictures, setPictures];
};

export default usePictures;
