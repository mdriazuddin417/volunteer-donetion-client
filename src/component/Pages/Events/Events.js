import React, { useState } from "react";

import img1 from "../../../logos/trash-2 9.png";
import img2 from "../../../logos/plus 1.png";
import img3 from "../../../logos/users-alt 1.png";
import Tables from "../Table/Table";
import AddEvent from "../AddEvent/AddEvent";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../../../CustomLink/CustomLink";

const Events = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-4 text-start">
            <CustomLink
              to={"volunteer"}
              className=" text-decoration-none d-block fw-600"
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
          <div className="col-8 p-2 rounded" style={{ background: " #E5E5E5" }}>
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
