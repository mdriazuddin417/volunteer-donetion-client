import React from "react";

import { Table } from "react-bootstrap";
import useUsers from "../../../hooks/useUsers";
import SingleTable from "../SingleTable/SingleTable";

const Tables = () => {
  const [users, setUsers] = useUsers();

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Full Name</th>
            <th>Email ID</th>
            <th>Registration Date</th>
            <th>Volunteer list</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <SingleTable key={user._id} user={user}></SingleTable>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
