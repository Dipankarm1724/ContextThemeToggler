import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import LocalThemedBox from "./LocalThemedBox";

export default function Page() {
  const context = useContext(ThemeContext);
  return (
    <div
      className={
        "container " + `${context.theme === "light" ? "bg-light" : "bg-dark"}`
      }
      id="themed-page"
    >
      <p id="themed-text-container" className={"txt-" + context.theme}>
        lorem ipsum dolor iterit n stuf
      </p>
      <button className={"btn btn-" + context.theme} id="themed-button">
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
}
