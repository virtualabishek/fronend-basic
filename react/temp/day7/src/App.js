import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
let nextId1 = 0;
export function List(){
    const [name, setName] = useState(' ');
    const[artists, setArtists] = useState([]);
    return(<>
    <h1>Inspiring names:</h1>
    <input value={name} onChange={e=> setName(e.target.value)}/>
    <button onClick={()=>{
        setArtists([
            ...artists,
            {id: nextId1++, name: name}
        ]);
    }} >Add</button>
    <ul>
        {artists.map(artist =>(
            <li key={artist.id}>{artist.name}</li>
        ))}
    </ul>
    </>);
}

let initialArtists = [
        {id: 1, name: 'Elon Musk'},
        {id: 2, name: 'Jhon Cena'},
        {id: 3, name: 'Sagar Dhakal'},
        {id: 4, name: 'Abinash'},
        {id: 5, name: 'Andrew'}
    ];

export function List1(){
    const [artists, setArtists] = useState(
        initialArtists
    );
    return (<>
    <h1>Inspiring Names:</h1>
    <ul>
        {artists.map(artist =>(
            <li key={artist.id}>
                {artist.name}{' '}
                <button onClick={()=>{
                    setArtists(
                        artists.filter(a=>
                            a.id!==artist.id
                        )
                    );
                }}>
                    Delete</button>
            </li>
        ))}
    </ul>
    </>);

}
//Transfering of an Array
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];
  
  export function ShapeEditor() {
    const [shapes, setShapes] = useState(
      initialShapes
    );
  
    function handleClick() {
      const nextShapes = shapes.map(shape => {
        if (shape.type === 'square') {
          // No change
          return shape;
        } else {
          // Return a new circle 50px below
          return {
            ...shape,
            y: shape.y + 50,
          };
        }
      });
      // Re-render with the new array
      setShapes(nextShapes);
    }
  
    return (
      <>
        <button onClick={handleClick}>
          Move circles down!
        </button>
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
          }} />
        ))}
      </>
    );
  }
//Inserting the data;

let newId = 3;

const collectionArtists = [
    {id: 0, name: "Abishek Neupane"},
    {id: 1, name: "Abinash Neupane"},
    {id: 2, name: "Bhagawati Neupane"}
];

export function List3(){
  const [name, setName] = useState('');
  const [artists, setArtists] = useState (
    collectionArtists
  );
  function handleClick(){
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0,insertAt),
      {id: newId++, name: name},
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists)
    setName('');
  }
  return (
    <>
    <h1>Inspiring Person</h1>
    <input type="text"
    value={name}
    onChange={e => setName(e.target.value)}
    />
    <button onClick={handleClick}>Insert</button>
    <ul>
      {artists.map(artist =>(
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul>
    </>
  );
}

//Reversing the array

const reverseList = [
  {id: 1, title: "The life journey of Abhi."},
  {id: 2, title: "The life journey of Abi."},
  {id: 3, title: "The life journey of Bhagawat."}
];

export function ReverseMe() {
  const [list, setList] = useState(reverseList);
  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
    }
    return(<>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map(collec=>(
          <li key={collec.id}>{collec.title}</li>
        ))}
      </ul>
    </>);
}

// Updating objects inside arrays

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = [...myList];
    const artwork = myNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setMyList(myNextList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextList = [...yourList];
    const artwork = yourNextList.find(
      a => a.id === artworkId
    );
    artwork.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
export default function App() {
    return(
        <>
        <List/>       
        <List1/>       
        {/* <ShapeEditor/> */}
        <List3/>
        <ReverseMe/>
        <BucketList/>
        </>
    );
}