import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../Css/Header.css'; 
import logo from '../assets/gijendra.png';

const Header = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="">
        <img
          src={logo}
          alt="Your Logo Alt Text"
          width="200"
          height="50"
          style={{ position: 'absolute', top: '6px' }}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <div className={`toggle ${isNavbarExpanded ? 'rotate' : ''}`} onClick={handleToggle}>
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </div>
      <Navbar.Collapse
        id="navbarScroll"
        in={isNavbarExpanded}
        onEnter={() => setIsNavbarExpanded(true)}
        onExit={() => setIsNavbarExpanded(false)}
      >
        <Nav className="mr-auto">
          <Nav.Link style={{ color: 'black', fontFamily: 'monospace' }} href="#About">About</Nav.Link>
          <Nav.Link style={{ color: 'black', fontFamily: 'monospace' }} href="#projects">Projects</Nav.Link>
          <Nav.Link style={{ color: 'black', fontFamily: 'monospace' }} href="#skills-section">Skills</Nav.Link>
          <Nav.Link style={{ color: 'black', fontFamily: 'monospace' }} href="#contact">Contact</Nav.Link>
          <Nav.Link style={{ color: 'black', fontFamily: 'monospace' }} href="https://drive.google.com/file/d/1nUEAcGu9lj5Yi2kVm0V_Ne5d5hZYYbvY/view?usp=sharing" target="_blank" rel="noreferrer">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
