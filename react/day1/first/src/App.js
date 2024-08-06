import './App.css';

const user = {
  name: "Abishek",
  age: 21,
  imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  class: "Bachelor of Information Technology",
  imageSize: 400
}

function MyButton() {
  return (
    <button>This is a button</button>
  );
}

const products = [
  { title: "Apple", id: 1 },
  { title: "Bean", id: 2 },
  { title: "Cauliflower", id: 3 },
  { title: "Mushroom", id: 4 }
]

// Converting array into list on our web.
const listItems = products.map(product => 
  <li key={product.id}>{product.title}</li>
)
const users = [
  {name: "Abishek", id: 1, isMale: true},
  {name: "Abinash", id: 2, isMale: true},
  {name: "Bhagawati", id: 3, isMale: false},
  {name: "Shyam", id: 4, isMale: true},
  {name: "Sita", id: 4, isMale: false}
]
//mapping user
const userList = users.map(userData => 
  <li key={userData.id}>{userData.name}</li>
)

const admins = [
  {name: "Abishek", id: 1, isMale: true},
  {name: "Abinash", id: 2, isMale: true},
  {name: "Bhagawati", id: 3, isMale: false},
  {name: "Shyam", id: 4, isMale: true},
  {name: "Sita", id: 4, isMale: false}
]



function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>You are learning React, {user.name}?</p>
      <MyButton />
      <br />
      <br />
      <img className="imagePractice"
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
      
    </>
  );
}

export default App;
