import { useState } from "react";
//Render and commit the changes

export function Clock({time}){
  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
}
export function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  if(isSent){
    return <h1>Your message is on its way.</h1>
  }
  return (
    <>
    <h4>Form</h4>
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      setMessage(message);
    }}>
      <textarea name="name" id="name"
      placeholder="Message"
      value={message}
      onChange={(e)=> setMessage(e.target.value)}>
        
      </textarea><br></br>
      <button type="submit">Send</button>
    </form>
    </>
  );
}

export function Form1(){
  const [toSent, setToSent] = useState('Ram');
  // suru ma default type ko diyo. (Ram)
  const [message, setMessage] = useState('Hello');
  //default message ->Hello.
  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(()=> {
      alert(`You send: ${message} to ${toSent}`);
    },5000)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        To: {' '}
        <select value={toSent}
        onChange={e=>setToSent(e.target.value)}>
          <option value="Ram">Ram</option>
          <option value="Shyam">Shyam</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <br/>
      <br/>
      <textarea 
      placeholder="Message..."
      value={message}
      onChange={e=> setMessage(e.target.value)}/>
      <br/>
      <br/>
      <button type="submit">Send</button>
    </form>
    </>
  );
}

// next session
export function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
    <h1>{number}</h1>
    <button onClick={() => {
      setNumber(number+1);
      setNumber(number+1);
      setNumber(number+1);
    }}>+3</button>
    </>
  );
}

export function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y:0
  });
  return (
    <div
    onPointerMove={e=>{
      setPosition({
      x: e.clientX,
      y: e.clientY
    });
    }}
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
    }}>
    <div style={{
      position: 'absolute',
      backgroundColor: 'red',
      borderRadius: '50%',
      transform: `translate(${position.x}px, ${position.y}px)`,
      left: -10,
      top: -10,
      width: 20,
      height: 20, 
    }} />


    </div>
  );
}
export function Form3(){
  const [person, setPerson] = useState({
    firstName: 'Abishek',
    lastName: 'Neupane',
    email: '717abishekneupane@gmail.com'
  });
  function handleFirstName(e){
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }
  function handleLastName(e){
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }
  function handleEmailChange(e){
    setPerson({
      ...person,
      email: e.target.value
    });
  }
  return(
    <>
    <label htmlFor="name">First Name:
    <input type="text"  value={person.firstName} onChange={handleFirstName}/>
    </label>
    <label htmlFor="lastName">
      <input type="text" value={person.lastName} onChange={handleLastName} />
    </label>
    <label htmlFor="email">
      <input type="email" name="email" id="email" value={person.email}
      onChange={handleEmailChange} />
    </label>
    <p>
      {person.firstName}
      {person.lastName}
      {person.email}
    </p>
    </>
  );
}
export default function App(){
  return (
    <>
    <Counter/>
    <br />
    {/* <MovingDot/> */}
    <br />
    <Form3/>
    </>
  );
}
