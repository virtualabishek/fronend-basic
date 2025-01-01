import React from "react";
/* 
Synthatic Events: react le banayako events haru lai synthatic events vaninxa.
*/

const Eight = () => {
  const callMe = (value) => console.log(`You double click ME ${value}`);
  return (
    <>
      <button onClick={() => console.log("You clicked me.")}>Click Me</button>
      <br />
      <br />
      {/* <button onDoubleClick={callMe}>Click</button> */}
      <br />
      <button onClick={() => callMe(2)}>Clik For ALert</button>
    </>
  );
};

export default Eight;
