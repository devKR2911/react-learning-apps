import { createContext, useEffect } from "react";
import useLang from "../hooks/useLang";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const { lang, switchLang } = useLang();
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
