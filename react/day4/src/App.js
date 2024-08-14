import { render } from "@testing-library/react";

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
export function Practice4() {
  function handleClick() {
    alert("You clicked me.")
  }
  return(
    <>
    <button onClick={handleClick}>I do nothing.</button>
    </>
  );
}
export function Practice5({message, children}){
  return(
    <>
    <button onClick={()=> alert(message)}>
    {children}
    </button>
    </>
  );
}
// Passing prop from children to parent
function Practice6({onClick, children}){
  return(
    <button onClick={onClick}>{children}</button>
  );
}
function Practice7({movieName}){
  function handlePlayClick(){
    alert(`Playing ${movieName}`);
  }
  return(
    <Practice6 onClick={handlePlayClick}>Play "{movieName}"</Practice6>
  );
}
function UploadButton(){
  return(
    <>
    <Practice6 onClick={()=> alert('Uploading!')}>
    Upload Image.
    </Practice6>
    </>
  );
}

function Button1({onClick, children}){
  render(
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export function Practice8(){
  return(
    <div className="ToolBar" onClick={()=>{ alert('You clicked on the tool bar');
    }}>
      <Button1 onClick={() => alert("Playing!")}>
        Play Movie
        </Button1>
      <Button1 onClick={() => alert(`Uploading.`)}>
      </Button1>
    </div>
  );
}
export default function App() {
  let cash = [];
    for( var i =1; i <= 5; i++ ) {
      cash.push(<Practice3 key={i} var3={i}/>);
    }
  return (
    <>
    {cash}
    <Practice1 var1={2}/>
    <Practice2 var2={1}/>
    <Practice2 var2={2}/>
    <Practice2 var2={3}/>
    <Practice4/> <br/><br/>
    <Practice5 message={"Playing."}>
    Play a movie.
    </Practice5>
    <Practice5 message={"Uploading"}>Upload a image.</Practice5>
    <Practice7 movieName={"Inteseler"}/>
    <UploadButton/>

    </>
  );
}