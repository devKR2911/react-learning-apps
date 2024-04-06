import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter(2);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
