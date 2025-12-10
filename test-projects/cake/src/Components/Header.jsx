import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

function Header({Order}) {
  return (
    <Navbar expand="lg" className="cake-nav">
      <Container>
        <Navbar.Brand href="#home">Cakes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cakes">Cakes</Nav.Link>
          <Nav.Link href="/order">Order</Nav.Link>
          {Order}
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


    
  );
  
}

export default Header;