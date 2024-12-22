import { useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz";
import Scrimba1 from "./Components/Scrimba1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Quiz /> */}
      <Scrimba1 />
    </>
  );
}

export default App;
