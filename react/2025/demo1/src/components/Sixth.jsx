import React from "react";

const thingsIloveToDo = [
  "Coding",
  "Listening Song",
  "Listening Podcast",
  "Watching Cricket",
  "Tweeting",
  "Vibing",
  "Playing with Kids",
  "Family",
];

const listItems = thingsIloveToDo.map((things) => <li>{things}</li>);

const Sixth = () => {
  return (
    <div>
      <ul className="list-decimal py-5">{listItems}</ul>
    </div>
  );
};

export default Sixth;
