import React, { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "../Constants";

export const ThemeContext = createContext(null);
export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || THEMES.DARK);

  const toggleTheme = () => {
    setTheme((prevState) =>
      prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    { children }
  </ThemeContext.Provider>;
};

export default ThemeProvider;
