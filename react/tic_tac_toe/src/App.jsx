import "./App.css";
import { useState } from "react";

export default function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  // ['O', null, 'X', 'X', 'X', 'O', 'O', null, null] example
  return (
    <>
      <div className="board-row">
        <Square value={square[0]} />
        <Square value={square[1]} />
        <Square value={square[2]} />
      </div>
      <div className="board-row">
        <Square value={square[3]} />
        <Square value={square[4]} />
        <Square value={square[5]} />
      </div>
      <div className="board-row">
        <Square value={square[6]} />
        <Square value={square[7]} />
        <Square value={square[8]} />
      </div>
    </>
  );
}

function Square({ value }) {
  return (
    <>
      <button className="square">{value}</button>
    </>
  );
}
