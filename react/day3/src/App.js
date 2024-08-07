import { useState } from "react";

//Checking Onclic ...

function MyButton() {
  const [count, setCount] = useState(0);
  function check() {
    setCount(count+1)
  }
  return (
    <>
    <button onClick={check}>You clicked me: {count} times.</button> 
    </>
  );
}
//Fixing on from react.dev. :)))

export function Bio() {
  const name = "Abishek Neupane";
  return(
    <>
    <div className="intro">
      <h1>Welcome to my website.</h1>
    </div>
    <p className="summary">
      You can find my thoughts here. -by {name} <br /><br />
      <b>And<i>pictures</i></b> of scientists!
    </p>
    </>
  );
}

// displaying day of week.
const today = new Date;
function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday: 'long'}
  ).format(date);
}
//changing the background using some simple CSS theme property.
const userDetail = {
  name: "Abishek",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function TodoList() {
  return (
    <div style={userDetail.theme}>
      <h1>{userDetail.name} ToDo's</h1>
      <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="A photo" 
      />
    <ui>
      <li>Learning React to become a pro</li>
      <li>Main target on backend. </li>
    </ui>
    </div>
  );
}

//Passing props to a component.]

function Avatar(person, size)  {
  return (
    <img
    src="https://i.imgur.com/1bX5QH6.jpg"
    alt="Lin Lanying"
    width={100}
    height={100}
    />
  );
}

export default function App() {
  return (
    <>
    <MyButton/>
    <Bio />
    <p>Hello! Todays day is: {formatDate(today)}</p>
    <TodoList/>
    <p>Passing props to a component.</p>
    <Avatar
    person={{name: "Lin Lanying", imnageId: '1bX5QH6'}}
    size= {100}
    />
    </>
  );
}

