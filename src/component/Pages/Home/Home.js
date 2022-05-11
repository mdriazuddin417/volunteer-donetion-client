import React, { useEffect, useState } from "react";
import usePictures from "../../../hooks/usePictures";
import SingleImage from "../SingleImage/SingleImage";
import "./Home.css";
const Home = () => {
  const [pictures, setPictures] = usePictures();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // useEffect(() => {
  //   fetch("http://localhost:5000/picturesCount")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const count = data.count;
  //       const pages = Math.ceil(count / 10);
  //       setPageCount(pages);
  //     });
  // }, []);

  return (
    <div>
      <div className="home w-100  d-flex justify-content-center align-items-center">
        <div className="container ">
          <div className="d-flex justify-content-center align-items-center">
            <div className="input-group mb-3 w-50">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Charity"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4 " style={{ marginTop: " -139px" }}>
        <div className=" ">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1  g-3 mt-2 ">
            {pictures.map((picture) => (
              <SingleImage key={picture._id} picture={picture}></SingleImage>
            ))}
          </div>
        </div>
      </div>
      {/* <div>{[...Array(pageCount).keys()]}</div> */}
    </div>
  );
};

export default Home;
