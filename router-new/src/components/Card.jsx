import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ email, avatar, first_name, last_name, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/user/${id}`)}>
      <h4>
        {first_name} {last_name}
      </h4>
      <img src={avatar} alt="" />
      <p>email {email}</p>
    </div>
  );
};

export default Card;
