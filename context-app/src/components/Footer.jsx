import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { lang, switchLang } = useContext(LanguageContext);
  return (
    <div>
      <h1>Footer</h1>
      <p>Language: {lang}</p>
      <button onClick={switchLang}>Change Lang</button>
    </div>
  );
};

export default Footer;
