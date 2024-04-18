import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
// import TestComponent from "./TestComponent";

const ChangeThemeBtn = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { lang, switchLang } = useContext(LanguageContext);
  return (
    <div>
      <h1>Change Theme Component</h1>
      <p>Theme: {theme}</p>
      <p>Language: {lang}</p>
      <button onClick={switchTheme}>Change Theme</button>
      <button onClick={switchLang}>Change Language</button>
      {/* <TestComponent></TestComponent> */}
    </div>
  );
};

export default ChangeThemeBtn;
