import { useState } from "react";

const useTheme = () => {
  const currentTheme = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(currentTheme);
  const switchTheme = () =>
    setTheme((curTheme) => (curTheme === "light" ? "dark" : "light"));

  return { theme, switchTheme };
};

export default useTheme;
