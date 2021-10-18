import React, { useContext } from "react";
import logo from "../../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavDropdown, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { UserContext } from "../../providers/user";
import usersServices from "../../services/users.services";

const NavbarPage = () => {
  const { user, setUser } = useContext(UserContext);

  const userButtons = () => {
    return (
      <div>
        <NavLink to="/user/signin">
          <Button variant="dark">Signin</Button>
        </NavLink>
        <NavLink to="/user/signup">
          <Button variant="dark">Signup</Button>
        </NavLink>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <h3>
        Olá, {user.name}, (<a onClick={handleLogout}>sair</a>){" "}
      </h3>
    );
  };

  const handleLogout = async () => {
    try {
      const response = await usersServices.signout();
      if (!response.data.auth) {
        setUser({
          auth: response.data.auth,
          name: response.data.name,
          email: response.data.email,
          token: response.data.token,
        });
        sessionStorage.removeItem("user");
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/manifesto">Manifesto</Nav.Link>
              <NavDropdown title="Categoria" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/bourbon">Bourbon</NavDropdown.Item>
                <NavDropdown.Item href="/straightbourbon">
                  Straight Bourbon
                </NavDropdown.Item>
                <NavDropdown.Item href="/rye">Rye</NavDropdown.Item>
                <NavDropdown.Item href="/ whiskeyescoces">
                  Whiskey Escocês
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
            <Nav>{user.token ? userInfo() : userButtons()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
