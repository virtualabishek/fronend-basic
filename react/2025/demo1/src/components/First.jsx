import "./App.css";

function App() {
  const myName = "Abishek";
  var date = new Date().getFullYear();
  var color = ["red", "green"];
  var check = Math.floor(Math.random() * 2);
  const data = () => {
    console.log("I love react");
    console.log("I love js");
  };

  return (
    <div>
      <h1>{myName}</h1>
      {/* Aba yai kura html ma garna paryo vane, without the react, we have to use different dom. but
      react help it do on easier way. This is the power of the react. */}
      <p>{["Abishek", " ", "Neupane"]}</p>
      <p>{date}</p>
      <p>{color[check]}</p>
      <p> I love React + Js + Tailwind + {color[check]}</p>
      <p>{"Abishek".toUpperCase()}</p>
      {/* Haha Hihi Huhu This is code. */}
      {/* <p>{console.log("I love react") 
        console.log("I love js")}</p>
        }</p> This will bring error */}
      <p>{data()}</p>
      {/* On same */}
      <p>
        {/* Self invoking function
        Immediatrly Involed Function Expression */}
        {/* calling without naming a arrow or anonymous function */}
        {(() => {
          console.log("I love react");
          console.log("I love js");
        })()}
      </p>
    </div>
  );
}

export default App;
