import React, { useContext } from "react";
import styles from "./Theme.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Theme = () => {
  const { state, dispach } = useContext(ThemeContext);

  const onThemeChange = () => {
    dispach({ type: "SWITCH" });
  };
  return (
    <select
      onChange={(e) => onThemeChange(e.target.value)}
      value={state.darkMode ? "dark" : "light"}
    >
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
    </select>
  );
};

export default Theme;
