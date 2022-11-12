import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavEl() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src='./logo.png' alt='logo' width="100" height="100"/>
          <Nav className="navlinks">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About Me</Nav.Link>
            <Nav.Link href="/Portfolio">Potfolio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavEl;