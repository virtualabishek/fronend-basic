import { useState } from "react";
// Render and commit the changes

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

export default function App(){
  return (
    <>
    <Form/>
    </>
  );
}
