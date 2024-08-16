import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
let nextId = 0;
export function List(){
    const [name, setName] = useState(' ');
    const[artists, setArtists] = useState([]);
    return(<>
    <h1>Inspiring names:</h1>
    <input value={name} onChange={e=> setName(e.target.value)}/>
    <button onClick={()=>{
        setArtists([
            ...artists,
            {id: nextId++, name: name}
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
  

export default function App() {
    return(
        <>
        <List/>       
        <List1/>       
        <ShapeEditor/>
        </>
    );
}