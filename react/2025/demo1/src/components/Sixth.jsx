import { list } from "postcss";
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
  "Chess",
];

const familyMember = [
  {
    id: 0,
    name: "Abishek Neupane",
    relationship: "Me",
  },
  {
    id: 1,
    name: "Abinash Neupane",
    relationship: "Brother",
  },
  {
    id: 2,
    name: "Bhagawati Neupane",
    relationship: "Mother",
  },
  {
    id: 3,
    name: "Random Manche Ma",
    relationship: "Random",
  },
  {
    id: 4,
    name: "Ram Saha Thapa",
    relationship: "Random",
  },
];

const listItems = thingsIloveToDo.map((things) => <li>things</li>);
// const listItems = familyMember.filter((person) => <li>{person.relationship =}</li>)

function SelectMe() {
  const RandomManche = familyMember.filter(
    (manche) => manche.relationship === "Random"
  );
  return <li>{RandomManche}</li>;
}
const Sixth = () => {
  return (
    <div>
      <ul className="list-decimal py-5">
        <SelectMe />
      </ul>
    </div>
  );
};

export default Sixth;
