import React from "react";

function Item({ itemName, isPacked }) {
  if (isPacked) {
    return <li>{itemName} ✅</li>;
  } else return <li>{itemName} ❌</li>;
}

const Fifth = () => {
  return (
    <div>
      <h1>My Packing List</h1>
      <ul className="list-disc pl-5">
        <Item isPacked={true} itemName={"Laptop Charger"} />
        <Item isPacked={false} itemName={"Phone Charger"} />
        <Item isPacked={false} itemName={"Wireless Mouse"} />
        <Item isPacked={false} itemName={"Wireless Keyboard"} />
        <Item isPacked={true} itemName={"Tripod"} />
        <Item isPacked={true} itemName={"Bag Cover"} />
      </ul>
    </div>
  );
};

export default Fifth;
