import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = {
  darkMode: true,
};

const themeReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SWITCH":
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispach] = useReducer(themeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispach }}>
      {children}
    </ThemeContext.Provider>
  );
};
