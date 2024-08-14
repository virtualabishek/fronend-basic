import { useState } from "react";
import {sculptureList} from './data';
export function Practice1() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index+1);
  }
  let sculpture = sculptureList[index];
  return(
    <>
    <button onClick={handleClick}>Next</button>
    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
    <h3>({index + 1} of {sculptureList.length})</h3>
    <img src={sculpture.url} alt={sculpture.alt} />
    <p>{sculpture.description}</p>
    </>
  );
}
export default function App(){
  return(
    <>
    <h1>Checking...</h1>
    <Practice1/>
    </>
  );
}