import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CenteredNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="centered-navbar" />
      <Navbar.Collapse id="centered-navbar" className="justify-content-center">
        <Nav>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Products">Product Page</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/checkout">Checkout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/aboutus">About us</Nav.Link>
          <Nav.Link as={Link} to="/product-fullwidth">Product Fullwidth</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CenteredNavbar;


