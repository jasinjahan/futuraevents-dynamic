import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { FaUserCircle } from 'react-icons/fa';


function Header({cartItems}) {
  
  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} to="/">ShoperKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaBagShopping size={20} />
              {cartItems.length}
            </Nav.Link>
            <NavDropdown title={<FaUserCircle />} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;