import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Counter = ({ value }) => {
  const { state, dispatch } = useContext(CounterContext);
  console.log(state);
  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })} type="button">
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} type="button">
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })} type="button">
        Reset
      </button>
    </div>
  );
};

export default Counter;
