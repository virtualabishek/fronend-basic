import React from "react";
// import { FaTrash, FaChrome, FaPlus } from "react-icons/fa";
// import { Button, Alert, Breadcrumb } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import HeaderStyle from "./components/styles/Header.style";
import {
  BlueButton,
  RedButton,
  MyButton,
} from "./components/styles/Button.style";

const App = () => {
  return (
    <div>
      {/* //   <FaTrash size={400} color="red" title="dustbin" />
    //   <FaChrome size={50} color="blue" />
    //   <br />
    //   <Button variant="success" href="htts://google.com">
    //     Add <FaPlus />
    //   </Button>
    //   <Alert variant="danger">Some Info</Alert>
    //   <Breadcrumb>
    //     <Breadcrumb.Item>Electronics</Breadcrumb.Item>
    //     <Breadcrumb.Item>Gorkha</Breadcrumb.Item>
    //     <Breadcrumb.Item>Sales</Breadcrumb.Item>
    //   </Breadcrumb> */}
      <HeaderStyle>Hello</HeaderStyle>
      <br />
      <HeaderStyle>Hello - 2</HeaderStyle>
      <br />
      <BlueButton type="submit">Login</BlueButton>
      <RedButton>Logout</RedButton>
      <MyButton color="white" backgroundColor="black">
        {" "}
        I am new{" "}
      </MyButton>
      <MyButton color="red" backgroundColor="yellow">
        Hello
      </MyButton>
    </div>
  );
};

export default App;
