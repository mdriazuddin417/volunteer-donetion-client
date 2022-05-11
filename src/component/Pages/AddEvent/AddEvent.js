import axios from "axios";
import React, { useEffect, useState } from "react";

const AddEvent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.title.value;
    const date = e.target.date.value;
    const description = e.target.description.value;
    const img = e.target.image.value;

    console.log(name, date, description, img);
    axios
      .post("http://localhost:5000/pictures", {
        name,
        date,
        description,
        img,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="bg-white rounded-3 p-5">
      <form onSubmit={handleSubmit}>
        <div className="row row-cols-lg-2 row-cols-1 g-4">
          <div className="cols">
            <div>
              <label>Event Title</label>
              <input
                required
                type="text"
                className="w-100 rounded border border-success py-2"
                placeholder="Enter Title.."
                name="title"
              />
            </div>
          </div>
          <div className="cols">
            <div>
              <label>Event Date</label>
              <input
                required
                type="date"
                className="w-100 rounded border border-success py-2"
                name="date"
              />
            </div>
          </div>
          <div className="cols">
            <div>
              <label>Description</label>
              <textarea
                required
                cols={20}
                rows={5}
                className="w-100 border border-success rounded"
                placeholder="Enter Description.."
                name="description"
              />
            </div>
          </div>
          <div className="cols">
            <div>
              <label>Upload image URL</label>
              <input
                required
                type="text"
                className="w-100 rounded border border-success py-2"
                placeholder="image URL"
                name="image"
              />
            </div>
          </div>
        </div>
        <button className="btn btn-outline-success " type="submit">
          Add Events
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
