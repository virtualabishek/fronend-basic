import { useState } from "preact/hooks";

export default function Doc3() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h4>Updating once.</h4>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}> Clicked {count} times.</button>
    </>
  );
}
