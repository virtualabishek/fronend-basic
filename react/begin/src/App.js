import Profile4 from "./component/Profile4";
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

//Question solving from react official 
export function Bio() {
  return (
    <div>
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br/><br/>
      <b>And <i>pictures</i></b> of scientists!
    </p>
    </div>
  );
}
// Solving next question.

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
//Question 3

const person1 = {
  name: 'Gregorio Y. Zara',
  sourceImage: 'https://i.imgur.com/7vQD0fPs.jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function TodoList1() {
  return (
    <div style={person1.theme}>
      <h1>{person1.name}'s Todos</h1>
      <img
        className="avatar"
        src={person1.sourceImage}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// next question :) Listening - Coldplay - yellow

const baseUrl = 'https://i.imgur.com/';
const person3 = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function TodoList2() {
  return (
    <div style={person3.theme}>
      <h1>{person3.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person3.imageId + person3.imageSize + '.jpg'}
        alt={person3.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
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
      <Profile3/>
      <p>Question 5</p>
      <Bio/>
      <p>Question 6</p>
      <TodoList/>
      <p>Question 7</p>
      <TodoList1/>
      <p>Question 8</p>
      <TodoList2/>
      <p>Question 9</p>
      <p>Question 10</p>


    </section>
  );
}