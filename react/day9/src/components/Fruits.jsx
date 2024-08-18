import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Pineapple", price: 20, emoji: "🍍" },
    { name: "Mango", price: 12, emoji: "🥭" },
    { name: "Orange", price: 21, emoji: "🍊" },
  ];
  return (
    <div>
      <ul>
        <li>
          {fruits.map((fruit) => {
            {
            }
          })}
        </li>
      </ul>
    </div>
  );
}
