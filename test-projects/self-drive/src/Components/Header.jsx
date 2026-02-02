import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"


function Header({wishList}) {
  return (
    <Navbar expand="lg" className=" header-searchbar ">
      <Container>
        <Navbar.Brand href="#home">SELF DRIVE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cars">Cars</Nav.Link>
             <Nav.Link href="/wishlist">WishList</Nav.Link>
           
           
          </Nav>
             <Nav className="ms-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
              {wishList}
            <Nav.Link href="/login">Login</Nav.Link>
             <Nav.Link href="/profile">Profile</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;