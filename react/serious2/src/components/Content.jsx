import React from 'react'

export default function Content() {
    const handleNameChange = () => {
        const names = ["Abinash", "Abishek", "Mom"];
        const int = Math.floor(Math.random() * 3);
        return names[int]
    }

    function handleClick() {
        console.log("you clicked me.")
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick} > Hello {handleNameChange()} </p>
            <button onClick={handleClick()} >Click It</button>
            <button onClick={() => handleClick2("Abishek")} >Click It</button>
            <button onClick={(e) => handleClick3(e)} >Click It</button>
            {/* <button onClick={("Abi") => console.log(`${name} was clicked.`)} >Hey Inline function</button> */}
        </main>
    );
}