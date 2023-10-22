import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  //Increment
  const increment = () => {
    setCount(count + 1);
  };

  //Decrement
  const decrement = () => {
    setCount(count - 1);
  };
  
  //Reset
  const reset = () => {
    setCount(initialValue); 
  };

  //Set Value
  const setValue = (newValue) => {
    setCount(newValue);
  };

  useEffect(() => {
    if (count === 10) {
      console.log('Count reached 10!');
    }
  }, [count]);

  return { count, increment, decrement, reset ,setValue};
}

export default useCounter;
