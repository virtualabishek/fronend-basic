import React from "react";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

const Doc5 = () => {
  return (
    <>
      <button onClick={() => alert("Playing")}>Play Movie</button>
      <button onClick={() => alert("Uploading")}>Upload Image</button>
      <div>
        <AlertButton message="studying">Study More.</AlertButton>
        <AlertButton message="writing">Write a game.</AlertButton>
      </div>
    </>
  );
};

export default Doc5;
