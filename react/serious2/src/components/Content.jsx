import React, { useState } from 'react';

export default function Content() {
    const [items, setItems] = useState([
        {
            id: 1, 
            checked: false,
            item: "To bring a bag."
        },
        {
            id:2,
            checked: false,
            item: "To buy a laptop Wrapper."
        }, 
        {
            id: 3,
            checked: false,
            item: "A new clothes."

        }
    ]);
    // const [count, setCount] = useState(0);

    // const handleNameChange = () => {
    //     const names = ["Abinash", "Abishek", "Mom"];
    //     const int = Math.floor(Math.random() * names.length);
    //     setName(names[int]);
    // };

    // const handleClick = () => {
    //     setCount(count+1)
    //     console.log(count);
    // };

    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText);
    // };

    return (
        <main>
            {/* <p onDoubleClick={handleClick}>Hello {name}!</p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click It</button>
            <button onClick={(e) => handleClick(e)}>Click It</button> */}

        </main>
    );
}
