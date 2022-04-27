import React from "react";

const AddEvent = () => {
  return (
    <div className="bg-white rounded-3 p-5">
      <div className="row row-cols-lg-2 row-cols-1 g-4">
        <div className="cols">
          <div>
            <label>Event Title</label>
            <input
              type="text"
              className="w-100 rounded border border-success py-2"
              placeholder="Enter Title.."
            />
          </div>
        </div>
        <div className="cols">
          <div>
            <label>Event Date</label>
            <input
              type="date"
              className="w-100 rounded border border-success py-2"
            />
          </div>
        </div>
        <div className="cols">
          <div>
            <label>Description</label>
            <textarea
              cols={20}
              rows={5}
              className="w-100 border border-success rounded"
              placeholder="Enter Description.."
            />
          </div>
        </div>
        <div className="cols">
          <div>
            <label>Upload image URL</label>
            <input
              type="text"
              className="w-100 rounded border border-success py-2"
              placeholder="image URL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
