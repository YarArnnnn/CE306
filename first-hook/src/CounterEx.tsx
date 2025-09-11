import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const resetCount = () => {
    setCount(initialCount); 
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>เพิ่ม</button>
      <button onClick={decrement}>ลด</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};

export default Counter;
