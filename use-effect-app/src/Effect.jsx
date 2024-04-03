import React from "react";
import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("Mouting from useEffect");
  //     setTimeout(() => {
  //       alert("Data Fetched");
  //     }, 3000);
  //   }, [count]);

  const fetchData = () => {
    console.log("Clean-up");
  };

  useEffect(() => {
    console.log("Mounting");

    const interval = setInterval(fetchData, 1000);
    return () => {
      console.log("Unmounting");
      clearInterval(interval);
    };
  }, []);

  console.log("Mouting from render");
  return (
    <div>
      <h3> {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
    </div>
  );
};

export default Effect;
