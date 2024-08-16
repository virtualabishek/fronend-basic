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

export default function App() {
    return(
        <>
        <List/>       
        <List1/>       
        </>
    );
}