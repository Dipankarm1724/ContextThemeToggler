import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const context = useContext(ThemeContext);
  const toggleTheme = () => {
    const { setTheme } = context;
    if (context.theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <button
        className={"btn btn-" + context.theme}
        id="global-theme-toggler"
        onClick={toggleTheme}
      >
        Switch to {context.theme === "light" ? "dark" : "light"} theme
      </button>
    </>
  );
};

export default ThemeToggleButton;
