import React from "react";
import { Navbar } from "react-bootstrap";

const Header = (props) => {     //props received the parameter passed from App.js
  return (
    <Navbar bg="light" variant="light">
         <Navbar.Brand href="/">{props.title}</Navbar.Brand>
    </Navbar>
  );            //props.title prints the value passed from App.js
};

export default Header;