import React from "react";

const Two = ({ prop }) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>NickName: {props.nickName}</p>
      <p>Hobbies: {props.hobbies}</p>
    </div>
  );
};

export default Two;
