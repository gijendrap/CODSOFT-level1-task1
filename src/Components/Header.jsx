import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Css/Header.css'; 
import logo from '../assets/gijendra.png';

const Header = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="">
        <img
          src={logo}
          alt="Your Logo Alt Text"
          width="200"
          height="50"
          style={{position:'absolute',top:'6px'}}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto">
          <Nav.Link style={{color:'black'}} href="#About">About</Nav.Link>
          <Nav.Link style={{color:'black'}} href="#projects">Projects</Nav.Link>
          <Nav.Link style={{color:'black'}} href="#skills-section">Skills</Nav.Link>
          <Nav.Link style={{color:'black'}} href="#contact">Contact</Nav.Link>
          <Nav.Link style={{color:'black'}} href="https://drive.google.com/file/d/1-_BJVwsOI7vB59qmADRcY1YtELxCXoP5/view?usp=sharing" target="_blank" rel="noreferrer">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
