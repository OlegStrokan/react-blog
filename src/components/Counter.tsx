import React from "react";
import "./Counter.scss";
export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button className="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      {count}
    </div>
  );
};
