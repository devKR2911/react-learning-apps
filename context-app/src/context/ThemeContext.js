import { useEffect } from "react";
import { createContext } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { theme, switchTheme } = useTheme();
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
