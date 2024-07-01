import logo from './logo.svg';
import './App.css';

function App() {
  const namehandle = () => {
    const name = ["Abishek", "Abinash", "Bhagawati"];
    const newa = Math.floor(Math.random() * name.length);
    return name[newa];
  };

  return (
    <div className="appMain">
      <p>Hello World!</p>
      <p>Hello {namehandle()}</p>
    </div>
  );
}

export default App;
