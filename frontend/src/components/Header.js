import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../Images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeee',
};

const Header = (props) => {
  //props received the parameter passed from App.js
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '12rem', maxHight: '2rem' }} />
      </Container>
    </Navbar>
  ); //props.title prints the value passed from App.js
};

export default Header;
