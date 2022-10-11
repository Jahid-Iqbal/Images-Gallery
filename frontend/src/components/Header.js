import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = (props) => {
  //props received the parameter passed from App.js
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  ); //props.title prints the value passed from App.js
};

export default Header;
