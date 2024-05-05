import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.outerUl}>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className={styles.innerUl}>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "business" } })
            }
          >
            Business
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "general" } })
            }
          >
            General
          </li>
          <li
            onClick={() =>
              navigate("/categories", { state: { category: "sports" } })
            }
          >
            Sports
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
