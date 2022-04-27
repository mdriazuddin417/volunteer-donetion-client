import React from "react";
import img from "../../../logos/trash-2 9.png";
import { Table } from "react-bootstrap";
const Tables = () => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registration Date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Mark</td>
            <td>mdriazuddin417@gmail.com</td>
            <td>22-02-2020</td>
            <td>Organize books at the library.</td>
            <td className=" p-2">
              <button className="btn btn-danger ">
                <img src={img} alt="" width={25} />
              </button>
            </td>
          </tr>
          <tr className="text-center">
            <td>2</td>
            <td>Mark</td>
            <td>mdriazuddin417@gmail.com</td>
            <td>22-02-2020</td>
            <td>Organize books at the library.</td>
            <td className=" p-2">
              <button className="btn btn-danger ">
                <img src={img} alt="" width={25} />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
