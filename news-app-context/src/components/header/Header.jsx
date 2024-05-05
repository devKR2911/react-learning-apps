import React, { useState } from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Theme from "../theme/Theme";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>News App</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">SEARCH</button>
        </form>
        <Theme />
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
