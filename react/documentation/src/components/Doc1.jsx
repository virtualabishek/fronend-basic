// Remember something what user did before
import { useState } from "preact/hooks";
export default function Doc1() {
  const [count, setCount] = useState(0);
  const user = {
    name: "XYZ Thaxaina",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  const products = [
    { title: "Coffee", id: 1 },
    { title: "Chess", id: 2 },
    { title: "Code", id: 3 },
  ];
  const listItems = products.map((product) => {
    return <li key={product.id}>{product.title}</li>;
  });
  // List rendering with boolean values
  const students = [
    { name: "Abishek", id: 1, paidFee: true },
    { name: "Abinash", id: 2, paidFee: false },
    { name: "Bhagawati", id: 3, paidFee: true },
    { name: "Ram", id: 4, paidFee: false },
  ];
  const single = students.map((student) => {
    return (
      <li
        key={student.id}
        style={{
          color: student.paidFee ? "green" : "red",
        }}
      >
        {student.name}
      </li>
    );
  });
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <hr />
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "20px",
        }}
      />
      <hr />
      {/* <div>{isLoggedIn ? <Home /> : <Signup />}</div> */}
      <div>
        <h3>Things i love</h3>
        <ul>{listItems}</ul>
      </div>
      <hr />
      {/* Paid fee -> green, no paid -> red */}
      <div>
        <ol>{single}</ol>
      </div>
      <hr />
      <button onClick={handleClick}>I am a button. </button>
      <p>You clicked me {count} times.</p>
    </>
  );
}
