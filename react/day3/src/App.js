import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Abishek Neupane";


  return (
    <div className="appMain">
      <img src ={logo} className='App-logo' 
      alt="logo>"/>
      <p>Learning HTML</p>
      <p>{[1, 2, 3]}</p>
    </div>
  );
}

export default App;
