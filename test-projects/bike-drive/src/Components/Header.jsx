import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoBagCheck } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';



function Header({wishItems}) {
  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand href="/home">Bikerzone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link}  to="/about">About</Nav.Link>
            <Nav.Link as={Link}  to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link}  to="/products">bikes</Nav.Link>
           
          </Nav>
           <Nav className="ms-auto">
            <Nav.Link as={Link}  to ="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
            <IoBagCheck  />
           {wishItems?.length || 0}

            </Nav.Link>
            <NavDropdown title={<FaRegUserCircle />} id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/addbikes">Add Bikes</NavDropdown.Item>
              <NavDropdown.Item href="/admin/listbikes">
              List Bikes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default Header;