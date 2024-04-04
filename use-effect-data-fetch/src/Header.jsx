import React from "react";

export const Header = ({ user: { name, picture, email } }) => {
  //   const { name, picture, email } = user;
  console.log(name, picture, email);
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
