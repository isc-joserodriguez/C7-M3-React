import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavComponent = () => {
  const {
    user: { token },
  } = useContext(UserContext);
  const publicRoutes = [
    <Nav.Link as={Link} to="/login" key={0}>
      Login
    </Nav.Link>,
    <Nav.Link as={Link} to="/registro" key={1}>
      Registro
    </Nav.Link>,
  ];

  const privRoutes = [
    <Nav.Link as={Link} to="/profile" key={0}>
      Mi Perfil
    </Nav.Link>,
    <Nav.Link as={Link} to="/about" key={1}>
      Acerca de...
    </Nav.Link>,
    <Nav.Link as={Link} to="/logout" key={2}>
      Cerrar sesión
    </Nav.Link>,
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {token ? privRoutes : publicRoutes}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
