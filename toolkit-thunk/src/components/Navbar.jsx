import React from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const user = false;
  const navigate = useNavigate();
  return (
    <div className={styles.navbarWrapper}>
      <h1>My News App</h1>
      <div className="">
        {user && <button onClick={() => navigate("/login")}>LogOut</button>}
        {!user && <button onClick={() => navigate("/login")}>Login</button>}
      </div>
    </div>
  );
};

export default Navbar;
