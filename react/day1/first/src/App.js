import { useState } from 'react';
import './App.css';

const user = {
  name: "Abishek",
  age: 21,
  imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  class: "Bachelor of Information Technology",
  imageSize: 400
};

const products = [
  { title: "Apple", id: 1 },
  { title: "Bean", id: 2 },
  { title: "Cauliflower", id: 3 },
  { title: "Mushroom", id: 4 }
];

// Converting array into list on our web.
const listItems = products.map(product => 
  <li key={product.id}>{product.title}</li>
);

const users = [
  { name: "Abishek", id: 1, isMale: true },
  { name: "Abinash", id: 2, isMale: true },
  { name: "Bhagawati", id: 3, isMale: false },
  { name: "Shyam", id: 4, isMale: true },
  { name: "Sita", id: 5, isMale: false } // Fixed duplicate id
];

// Mapping user
const userList = users.map(userData => 
  <li key={userData.id}>{userData.name}</li>
);

const admins = [
  { name: "Abishek", id: 1, isMale: true },
  { name: "Abinash", id: 2, isMale: true },
  { name: "Bhagawati", id: 3, isMale: false },
  { name: "Shyam", id: 4, isMale: true },
  { name: "Sita", id: 5, isMale: false } // Fixed duplicate id
];

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>Click me. Count: {count}</button>
  );
}

function App() {
  const [count, setCount] = useState(0); // State managed in App

  function handleClick() {
    setCount(count + 1);
    console.log(`Button clicked! New count: ${count + 1}`);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <p>You are learning React, {user.name}?</p>
      <br />
      <br />
      <img
        className="imagePractice"
        src={user.imageUrl}
        alt="Image not found."
        style={{
          height: user.imageSize,
          width: user.imageSize
        }}
      />
      <p>List Items:</p>
      <ul>{listItems}</ul>
      <p>Collection of my Users.</p>
      <ol>{userList}</ol>
      <h3>Event Listening - just beginning.</h3>
      <MyButton count={count} onClick={handleClick} /> <br/>
    </>
  );
}

export default App;
