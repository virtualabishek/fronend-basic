import { useState } from "react";
// Render and commit the changes

// export function Clock({time}){
//   return (
//     <div>
//       <h1>Current Time: {time}</h1>
//     </div>
//   );
// }
// export function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState("Hi!");
//   if(isSent){
//     return <h1>Your message is on its way.</h1>
//   }
//   return (
//     <>
//     <h4>Form</h4>
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       setMessage(message);
//     }}>
//       <textarea name="name" id="name"
//       placeholder="Message"
//       value={message}
//       onChange={(e)=> setMessage(e.target.value)}>
        
//       </textarea><br></br>
//       <button type="submit">Send</button>
//     </form>
//     </>
//   );
// }

export function Form(){
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
export default function App(){
  return (
    <>
    <Form/>
    </>
  );
}
