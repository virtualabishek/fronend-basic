import React from "react";

const Two = ({ name, nickName, hobbies }) => {
  // const { name, nickName, hobbies } = UserActivation;

  return (
    <div>
      <p>
        {name}: {nickName} and hobbies are {hobbies}
      </p>
    </div>
  );
};

Two.defaultProps = {
  hobbies: "Football, Gaming",
};

export default Two;
