import { useState } from "preact/hooks";
import React from "react";

const Doc4 = () => {
  const [count, setCount] = useState(0);
  function addMe() {
    setCount(count + 1);
  }
  return (
    <main>
      <button onClick={addMe}>Click me.</button>
      <p>You clicked {count} times.</p>
    </main>
  );
};

export default Doc4;
