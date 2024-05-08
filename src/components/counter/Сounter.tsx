import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const additionCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };

  return (
    <div className="counter">
      <button onClick={decreaseCounter}>-</button>
      <p>{count}</p>
      <button onClick={additionCounter}>+</button>
    </div>
  );
};

export default Counter;
