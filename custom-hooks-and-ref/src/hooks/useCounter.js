import { useState } from "react";

const useCounter = (initialVal) => {
  const [count, setCount] = useState(initialVal);
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const increment = () => {
    setCount((count) => count + 1);
  };

  return {
    count,
    decrement,
    increment,
  };
};

export default useCounter;
