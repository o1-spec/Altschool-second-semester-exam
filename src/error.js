import React from "react";
import { Link } from 'react-router-dom';
import ThemeButton from "./ThemeButton";

//A function that displays the error 404 page 
function Error({theme, toggleTheme}) {
    return (
      <div data-aos="fade-up" className="error">
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <button className="back">
          <Link to="/">Homepage</Link>
        </button>
      </div>
    );
  }
  
  export default Error;