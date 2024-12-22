// import React, { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";

// export default function Content() {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       checked: true,
//       item: "To bring a bag.",
//     },
//     {
//       id: 2,
//       checked: false,
//       item: "To buy a laptop Wrapper.",
//     },
//     {
//       id: 3,
//       checked: false,
//       item: "A new clothes.",
//     },
//   ]);

//   const handleCheck = (id) => {
//     console.log(`key: ${id}`);
//   };

//   // const [count, setCount] = useState(0);

//   // const handleNameChange = () => {
//   //     const names = ["Abinash", "Abishek", "Mom"];
//   //     const int = Math.floor(Math.random() * names.length);
//   //     setName(names[int]);
//   // };

//   // const handleClick = () => {
//   //     setCount(count+1)
//   //     console.log(count);
//   // };

//   // const handleClick3 = (e) => {
//   //     console.log(e.target.innerText);
//   // };

//   return (
//     <main>
//       {/* <p onDoubleClick={handleClick}>Hello {name}!</p>
//             <button onClick={handleNameChange}>Change Name</button>
//             <button onClick={handleClick}>Click It</button>
//             <button onClick={(e) => handleClick(e)}>Click It</button> */}
//       <ul>
//         {items.map((item) => (
//           <li className="item" key={item.id}>
//             <input
//               type="checkbox"
//               checked={item.checked}
//               onChange={() => handleCheck(item.id)}
//             />
//             <label>{item.item}</label>
//             <FaTrashAlt role="button" tabIndex="0" />
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "To bring a bag.",
    },
    {
      id: 2,
      checked: false,
      item: "To buy a laptop Wrapper.",
    },
    {
      id: 3,
      checked: false,
      item: "A new clothes.",
    },
  ]);

  const handleCheck = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor={`item-${item.id}`}>{item.item}</label>
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
