import { useState } from "react";
import "./App.css";

/* 
Two options:
 Option - 1
 
const [x, setX] = useState(0)
const [y, setY] = useState(0)

 Option - 2
 const [position, setPosition] = useState({ x: 0, y: 0 });
 This is a better way.
*/

// Avoid Contradiction in states
export function FeedbackForm() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.prevent.defualt();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for sharing!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How your practice is going?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export default function App() {
  return (
    <>
      <FeedbackForm />
    </>
  );
}
