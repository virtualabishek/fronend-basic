import { useState } from "react";

//Checking Onclic ...

function MyButton() {
  const [count, setCount] = useState(0);
  function check() {
    setCount(count+1)
  }
  return (
    <>
    <button onClick={check}>You clicked me: {count} times.</button> 
    </>
  );
}
//Fixing on from react.dev. :)))

export function Bio() {
  const name = "Abishek Neupane";
  return(
    <>
    <div className="intro">
      <h1>Welcome to my website.</h1>
    </div>
    <p className="summary">
      You can find my thoughts here. -by {name} <br /><br />
      <b>And<i>pictures</i></b> of scientists!
    </p>
    </>
  );
}

// displaying time

export default function App() {
  return (
    <>
    <MyButton/>
    <Bio />
    </>
  );
}