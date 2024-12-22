import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function incrementMe() {
    setCount(count + incrementBy);
  }
  function decrementMe() {
    setCount(count - incrementBy);
  }
  function increaseMe() {
    setIncrementBy(incrementBy + 1);
  }
  function decrementMe() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      Count Value is: {count} <br />
      <button onClick={incrementMe}>Increment</button>
      <button onClick={decrementMe}>Decrement</button>
      <br />
      <h1>We are incrementing valyue by: {incrementBy}</h1>
      <button onClick={increaseMe}>Increase Increment</button>
      <button onClick={decrementMe}>Decrease Increment</button>
    </div>
  );
}
