export function Practice1({var1}) {
return(
    <>
    <ol>
      <li>This is just for practice. </li>
      <li>Lets multiply the variable by 3 is: {var1*3}</li>
      <li>This is okey.</li>
    </ol>
    </>
  );
}
export function Practice2({var2}){
  return (
    <h1>This is {var2} times.</h1>
  );
}
export function Practice3({var3}){
  return (
    <h3>Day will be {var3} times better tomorrow.</h3>
  );
}
export default function App() {
  return (
    <>
    <Practice1 var1={2}/>
    <Practice2 var2={1}/>
    <Practice2 var2={2}/>
    <Practice2 var2={3}/>
    let var = [];
    
    </>
  );
}