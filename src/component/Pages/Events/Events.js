import React from "react";

import img2 from "../../../logos/plus 1.png";
import img3 from "../../../logos/users-alt 1.png";

import AddEvent from "../AddEvent/AddEvent";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../../../CustomLink/CustomLink";

const Events = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-12 text-start">
            <CustomLink
              to={"volunteer"}
              className=" text-decoration-none d-block fw-600 active"
              role="button"
              aria-pressed="true"
            >
              <img src={img3} alt="" width={30} /> Volunteer register list
            </CustomLink>
            <CustomLink
              to={"addevent"}
              className=" text-decoration-none d-block fw-600 active"
            >
              <img src={img2} alt="" width={30} /> Add event
            </CustomLink>
          </div>
          <div
            className="col-lg-8 col-md-6 col-12 p-2 rounded"
            style={{ background: " #E5E5E5" }}
          >
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
