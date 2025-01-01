import React from "react";
import Seventh from "./Seventh";

/*
Theory:

Components can be described on two ways:
function & Class
Before, class way is more used, now a days, function Property is mored used.

Component is nothing but a part of a UI.
It is part of a function or a Class

function AboutPage() {
    console.log("You are on about page")
    return (
    <>
    <h1>Hi i am heading. </h1>
    </>
    )
}
export default AboutPage;


//App.js

import AboutPage from "./App"
<App />


*/

const Ninth = () => {
  return (
    <>
      <div className="p-4 bg-red-200 text-lg font-bold">
        <h1>Hello!</h1>
        <p>I want Seventh Components here.</p>
        <Seventh />
      </div>
    </>
  );
};

export default Ninth;
