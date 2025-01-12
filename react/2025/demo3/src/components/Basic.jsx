import React, { useState, useEffect } from "react";

const Basic = () => {
  const [count, setCount] = useState(0);
  const incrementMe = () => setCount(count + 1);
  const decrementMe = () => setCount(count - 1);
  //   const useAunthenticate = null;
  //   // custom hooks
  //   const [user, setUser] = useState(null);
  //   //   useEffect() => {
  //   //     const isAuthenticate = checkAuthentication();
  //   //   }
  return (
    <div>
      <button onClick={incrementMe}>Increment</button>
      <br /> <br />
      <button onClick={decrementMe}>Decrement</button>
      <p>Count = {count}</p>
    </div>
  );
};

export default Basic;
