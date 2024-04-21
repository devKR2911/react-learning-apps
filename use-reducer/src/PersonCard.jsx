import React from "react";

const PersonCard = ({ picture, name }) => {
  return (
    <div>
      <h1>
        {name.title}. {name.first} {name.last}
      </h1>
      <img src={picture.large} alt="" />
    </div>
  );
};

export default PersonCard;
