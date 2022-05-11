import axios from "axios";
import React, { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return [users, setUsers];
};

export default useUsers;
