import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const context = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState("light");
  function toggleLocalTheme() {
    if (localTheme === "light") {
      setLocalTheme("dark");
    } else {
      setLocalTheme("light");
    }
  }
  useEffect(() => {
    toggleLocalTheme();
  }, [context.theme]);
  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-theme-box"
      className={"bg-" + localTheme}
    >
      <p className={"txt-" + localTheme} id="local-theme-text-container">
        Hiiii
      </p>
      <button
        id="local-theme-toggler"
        className={"btn btn-" + localTheme}
        onClick={toggleLocalTheme}
      >
        Toggle local theme to {localTheme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default LocalThemedBox;
