import styled from "styled-components";

const RedButton = styled.button`
  color: red;
  background-color: wheat;
  border: 2px solid blue;
  padding: 12px;
  //   gap: 2px;
  border-radius: 20px;
  cursor: pointer;
`;

const BlueButton = styled.button`
  color: blue;
  background-color: wheat;
  border: 2px solid blue;
  padding: 12px;
  //   gap: 2px;
  border-radius: 20px;
  cursor: pointer;
`;

const MyButton = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor}
  border: 2px solid blue;
  padding: 12px;
  //   gap: 2px;
  border-radius: 20px;
  cursor: pointer;
`;

export { RedButton, BlueButton, MyButton };
