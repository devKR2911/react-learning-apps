import { useState } from "react";

const selecedLang = localStorage.getItem("lang");
const useLang = () => {
  const [lang, setLang] = useState(selecedLang || "en");
  const switchLang = () => setLang((curr) => (curr === "en" ? "no" : "en"));
  return { lang, switchLang };
};

export default useLang;
