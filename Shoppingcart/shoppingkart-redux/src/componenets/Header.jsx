import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoBagCheck } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { userLogout } from '../redux/userSlice';
import { NavLink } from 'react-bootstrap';


function Header() {

  const {cartItems} = useSelector((state)=> state.productState);
  const {isAuthenticated} = useSelector((state)=> state.userState);
  const dispatch = useDispatch();

 const handleLogout = ()=>{
  console.log("insideeeeeee");
  
  dispatch(userLogout());
  toast.success("User Loggouted Successfully");
 }




  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand as={Link} href="/home">Shoppingcart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link}  to="/about">About</Nav.Link>
            <Nav.Link as={Link}  to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link}  to="/products">Products</Nav.Link>
           
          </Nav>
           <Nav className="ms-auto">
            {/* <Nav.Link as={Link}  to ="/login">Login</Nav.Link> */}
            <Nav.Link as={Link} to="/cart">
            <IoBagCheck  />
            {cartItems.length}
            </Nav.Link>
            {isAuthenticated ? (
                <NavDropdown title={<FaRegUserCircle />} id="basic-nav-dropdown">
              <NavDropdown.Item  href="/Admin/AddProducts">Add Products</NavDropdown.Item>
              <NavDropdown.Item href="/Admin/ListProducts">
              List Products
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login" onClick={handleLogout}>
              Log Out
              </NavDropdown.Item>
        
            </NavDropdown>

            ) : (
           <Nav.Link as={Link} to="/login">login</Nav.Link>
        
            )}
          
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default Header;