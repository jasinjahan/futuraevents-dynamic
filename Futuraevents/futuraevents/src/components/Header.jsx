import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand href="#home">Futuraevents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
               <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          
          
          </Nav>
           <Nav className="ms-auto">
            <Nav.Link href="#home">Works</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Artist management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product Launch</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Wedding Management
              </NavDropdown.Item>
            </NavDropdown>
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    




    
  );
}

export default Header;