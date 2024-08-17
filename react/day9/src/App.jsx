//jsx on new version
import Hello from "./components/Hello";
const name = "Abishek";
function App() {
  return (
    <>
      <div className="App">Hello, {name}</div>
      <Hello />
    </>
  );
}

export default App;
