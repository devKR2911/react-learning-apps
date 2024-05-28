import React from "react";
import { getSelectedUser } from "../services/apiUsers";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { email, avatar, first_name, last_name } = userDetails;
  return (
    <div>
      <h2>User Details Page</h2>

      <div>
        <h4>
          {first_name} {last_name}
        </h4>
        <img src={avatar} alt="" />
        <p>email {email}</p>
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  const userData = await getSelectedUser(params.id);
  return userData.data;
};

export default UserDetails;
