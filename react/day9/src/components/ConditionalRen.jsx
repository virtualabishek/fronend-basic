import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionRen() {
  //   const display = false;
  //   if (display) {
  //     return (
  //       <div>
  //         <h3>This is a Conditional Component.</h3>
  //       </div>
  //     );
  //   } else {
  //     return <h3>Code Everyday!</h3>;
  //   }
  //   const condition = false;
  //   if (condition) {
  //     return <Welcome />;
  //   } else {
  //     return <Code /> ;
  //   }
  let message1 = <h1>This is message 1.</h1>;
  let message2 = <h1>This is message 2.</h1>;
  const display = false;
  if (display) {
    return message1;
  } else {
    return message2;
  }
}
