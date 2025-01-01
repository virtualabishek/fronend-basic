import React from "react";

const Form = () => {
  function doSomething() {
    alert("Form is submitted.");
  }
  return (
    <>
      <form onSubmit={doSomething}>
        <input type="text" />
      </form>
    </>
  );
};

export default Form;
