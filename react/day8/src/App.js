import { useState } from "react";

function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value);
  };

  if (status === 'success') {
    return <h1>Form Submitted.</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  return (
    <>
      <h2>Fill the form!</h2>
      <p>Tell me about your birthplace?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === 'submitting'}
        /> <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error && <p className="showError">{error.message}</p>}
      </form>
    </>
  );
}

//Choosing the state structure.
export function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
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
  )
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'gorkha';
      if (shouldError) {
        reject(new Error('Good guess, but wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default function App() {
  return (
    <>
    </>
  );
}

