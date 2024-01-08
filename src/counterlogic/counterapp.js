import React, { useState } from "react";
import useCounter from "./counterhook";
import { Link } from "react-router-dom";
import ThemeButton from "../ThemeButton";

function CounterApp({ theme, toggleTheme }) {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const [customValue, setCustomValue] = useState(0);

  const handleCustomValueChange = (e) => {
    setCustomValue(parseInt(e.target.value, 10));
  };

  //CounterApp Actions for both increment and decrement
  return (
    <>
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      <div data-aos="fade-up" className="main-container">
        <div className="container">
          <p>Count: {count}</p>
          <div className="buttons">
            <button className="increment" onClick={increment}>
              Increment
            </button>
            <button className="decrement" onClick={decrement}>
              Decrement
            </button>
            <button className="reset" onClick={reset}>
              Reset
            </button>
          </div>
          <input
            type="number"
            value={customValue}
            onChange={handleCustomValueChange}
          />
          <button className="setvalue" onClick={() => setValue(customValue)}>
            Set Custom Value
          </button>
        </div>
        <button className="back">
          <Link to="/">Homepage</Link>
        </button>
      </div>
    </>
  );
}

export default CounterApp;
