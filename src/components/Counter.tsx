import React from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      {count}
    </div>
  );
};
