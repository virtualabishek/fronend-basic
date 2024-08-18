export default function Message() {
  function handleClick() {
    console.log("Button click.");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to pass message</button>
    </div>
  );
}
