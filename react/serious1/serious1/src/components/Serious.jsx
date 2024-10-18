export default function Serious({ color }) {
  const car = "Honda";
  return (
    <>
      <h1>
        This is a {car} name of a car. And its colour is {color}
      </h1>
      {/* events */}
      <button onClick={() => alert("SHUT UP!")}>Click ME</button>
    </>
  );
}
