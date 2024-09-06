import { useState } from "preact/hooks";
export default function Doc2() {
  return (
    <>
      <hr />
      <ClickTriggers /> <br /> <br />
      <ClickTriggers />
      <br /> <hr />
    </>
  );
}

function ClickTriggers() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>You clicked me {count} times.</button>
    </>
  );
}
