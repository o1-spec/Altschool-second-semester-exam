import React from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Homepage({ theme, toggleTheme }) {
  return (
    <div data-aos="fade-up">
      <div>
        <ThemeButton theme={theme} toggleTheme={toggleTheme}/>
        <nav>
          <ul>
            <li>
              {/* CounterApp */}
              <Link to="/counter">CounterApp</Link>
            </li>
            {/* 404 Page */}
            <li className="page">
              <Link to="*">404 Page</Link>
            </li>
            {/* Error Boundary */}
            <li className="error-link">
              <Link to="/error">Error Boundary</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="homepage">Altschool Second Semester Exam!!!!</h1>
    </div>
  );
}

export default Homepage;
