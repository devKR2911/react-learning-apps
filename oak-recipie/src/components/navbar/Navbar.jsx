import { Link, NavLink, Navigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(localStorage.getItem("USER"));
  // const { name, email } = user ? JSON.parse(user) : { user: "", email: "" };
  console.log("Load");
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="nav-wrapper">
      <p>Oak Recipie</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <NavLink onClick={logout} to="/login">
            {user ? "Logout" : "Login"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
