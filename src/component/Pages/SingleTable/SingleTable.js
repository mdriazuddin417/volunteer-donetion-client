import axios from "axios";
import React from "react";
import img from "../../../logos/trash-2 9.png";

const SingleTable = ({ user }) => {
  const { name, email, description, organize, date, _id } = user;

  const removeUser = (id) => {
    const url = `http://localhost:5000/users/${id}`;
    axios.delete(url).then((res) => {
      if (res.data) {
        window.location.reload();
      }
    });
  };

  return (
    <tr className="text-center">
      <td>{}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{organize}</td>
      <td className=" p-2">
        <button className="btn btn-danger " onClick={() => removeUser(_id)}>
          <img src={img} alt="" width={25} />
        </button>
      </td>
    </tr>
  );
};

export default SingleTable;
