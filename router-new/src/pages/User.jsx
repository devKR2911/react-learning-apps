import React from "react";
import { getAllUsers } from "../services/apiUsers";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      {users?.data?.map((user, index) => (
        <Card {...user} key={`user-${user?.id}`} />
      ))}
    </div>
  );
};

export const loader = async () => {
  const users = await getAllUsers();
  return users;
};

export default User;
