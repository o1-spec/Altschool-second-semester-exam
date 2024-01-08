import React from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

//Successfull error boundary function
function ErrorBoundarySuccess({ theme, toggleTheme }) {
  return (
      <div data-aos="fade-up" className="success-container">
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <h1 className="error-success">
          Oops... an error occurred somewhere in the component{" "}
        </h1>
        <button className="back">
          <Link to="/">Homepage</Link>
        </button>
      </div>
  );
}

export default ErrorBoundarySuccess;
