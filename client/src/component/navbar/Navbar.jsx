import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarEl = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="#features">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarEl;
