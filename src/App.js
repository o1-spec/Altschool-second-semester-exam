///import logo from './logo.svg';
import "./App.css";
import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import ErrorTest from "./ErrorTest";
import CounterApp from "./counterlogic/counterapp";
import Error from "./error";
import ErrorBoundarySuccess from "./ErrorBoundarySuccess";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      // Store the updated theme preference in local storage
      localStorage.setItem('theme', newTheme);

      return newTheme;
    })
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App" id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={<Homepage theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/counter"
              element={<CounterApp theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="error"
              element={<ErrorTest theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/error-success"
              element={
                <ErrorBoundarySuccess theme={theme} toggleTheme={toggleTheme} />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
