
import './App.css';
import { useReducer } from 'react';
import profile from './profile.jpg';
import Header from './component/Header';

const user = {
  name: "Abishek Devloper",
  img: "profile.jpg"

}
function MyButton() {
  return (
  <button className='button1'>My button</button>
  );
}



function App() {
  return (
    <>    
    <Header />
    </>
  );
}

export default App;
