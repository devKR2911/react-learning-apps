import React from "react";

export const Main = ({ name, picture, email }) => {
  return (
    <div>
      <h1>
        {name?.first} {name?.last}
      </h1>
      <img src={picture?.large} alt="" />
      <p>{email}</p>
    </div>
  );
};
