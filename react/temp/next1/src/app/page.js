import { useState } from "react";

function clickButton() {
  alert("You clicked?");
}

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={clickButton()}>Click</button>
    </>
  );
}
