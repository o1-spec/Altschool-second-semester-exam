import React from "react";

function ThemeButton({toggleTheme,theme}) {
  return (
    <div>
      <div className="dark-button" onClick={toggleTheme}>
        {theme === "light" ? (
          <img src="Moon.svg" alt="Moon Icon" />
        ) : (
          <img src="Sun.svg" alt="Sun Icon" />
        )}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </div>
  );
}

export default ThemeButton;
