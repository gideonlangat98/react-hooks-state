import React, { useState } from "react";

function Counter() {
  // if (props.shouldHaveCount) {
  //   // This is wrong -- never call a hook inside a condition
  //   const [count, setCount] = useState(0);

  //   // return ...
  // }
  // // return ...
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
