import axios from "axios";
import React, { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://volunteer-server.vercel.app/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return [users, setUsers];
};

export default useUsers;
