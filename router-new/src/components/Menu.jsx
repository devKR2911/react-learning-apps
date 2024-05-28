import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navWrapper">
      <ul className="navList">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">Users</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
