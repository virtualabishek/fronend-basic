//Condition Rendering.
function Item({name, isPacked}) {
  if(isPacked) {
    return <li>{name}✓</li>;
  }
    return <li>{name}</li>;
}

export function Button() {
  return (
    <button>Click me.</button>
  );
}

// finding error. Solving through, JS official website.

export function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}
export function Profile1() {
  return (
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
  );
}
//Question 3
export function Profile3() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile3 />
      <Profile3 />
      <Profile3 />
    </section>
  );
}

export default function App() {
  return(
    <section>
      <h1>Abishek Packing List</h1>
      <ul>
        <Item 
        isPacked = {true}
        name = "Dress Suit"
        />
        <Item
        isPacked = {true}
        name = "Toothbrush"
        />
        <Item 
        isPacked = {false}
        name = "Electronic Gadgets"
        />
      </ul>
      <h2>Revising all.</h2>
      <Button/><br/><br/>
      <p>Question 1</p>
      <Profile/>
      <p>Question 2</p>
      <Profile1/>
      <p>Question 3</p>
      <Gallery />
      <p>Question 4</p>
      <p>Question 5</p>
      <p>Question 6</p>
      <p>Question 7</p>
      <p>Question 8</p>
      <p>Question 9</p>
      <p>Question 10</p>


    </section>
  );
}