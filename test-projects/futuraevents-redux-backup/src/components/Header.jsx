import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import { Link } from 'react-router-dom';
import { IoBag, IoMenu } from 'react-icons/io5';
import { useSelector } from 'react-redux';



function Header() {

const {wishItems} =useSelector((state)=> state.eventState);

  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand href="/home">Futuraevents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>


          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/worksList">
          <IoBag />
          {/* {count} */}
          {wishItems.length}
            </Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <NavDropdown title={<IoMenu />}
           
            
            id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              </NavDropdown.Item>
              <NavDropdown.Item href="/Admin/addlist">
              Add Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/Admin/EventList">Event Lists</NavDropdown.Item>
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