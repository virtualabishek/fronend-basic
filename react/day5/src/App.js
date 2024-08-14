import { useState } from "react";
import {sculptureList} from './data';
export function Practice1() {
  const [index, setIndex] = useState(0);
  const [showMore, SetShowMore] = useState(false)
  function handleClick() {
    setIndex(index+1);
  }
  function handleShowMoreClick(){
    SetShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return(
    <>
    <button onClick={handleClick}>Next</button>
    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
    <h3>{index + 1} of {sculptureList.length}</h3>
    <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
    {showMore && <p>{sculpture.description}</p>}
    <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />

    </>
  );
}
export default function App(){
  return(
    <>
    <h1>Checking...</h1>
    <Practice1/>
    <Practice1/>
    </>
  );
}