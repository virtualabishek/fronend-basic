import Hello from "./components/Hello";

function App() {
  const personDetails = {
    name: "Bhagawati",
    message: "hi There!",
    emoji: "❤️",
    seatNumbers: [1, 2, 4],
  };
  return (
    <>
      <Hello personDetails={personDetails} />
    </>
  );
}

export default App;
