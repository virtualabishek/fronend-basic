import React from "react";
import { useEffect, useState } from "react";

/*
Mounting:
constructor()
render()

*/

const Tenth = () => {
  useEffect(() => {
    console.log("Component is mounted");
    return () => {
      console.log("Component is unamount.");
    };
  }, [Count, products]);
  return (
    <>
      <div>App</div>
    </>
  );
};

export default Tenth;
