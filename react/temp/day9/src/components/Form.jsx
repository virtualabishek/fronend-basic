import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //const [lastName, setLastName] = useState("");
  //   function handleChange(e) {
  //     setName(e.taget.value);
  //   }
  return (
    <>
      {name.firstName} - {name.lastName}
      <form>
        <label htmlFor="name">First Name:</label>
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          //   onChange={(e) => {
          //     handleChange(e);
          //   }}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          onClick={(e) => setName({ ...name, lastName: e.target.default })}
          //   spread operator. ...name, just ignore what is dont needed.
        />

        <button onClick={(e) => e.preventDefault}>Add</button>
      </form>
    </>
  );
}
