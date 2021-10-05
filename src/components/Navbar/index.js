import React from 'react';
import logo from '../../images/Logo.png'
import { Navbar, NavDropdown, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavbarPage = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#manifesto">Manifesto</Nav.Link>
                <NavDropdown title="Categoria" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#bourbon">Bourbon</NavDropdown.Item>
                  <NavDropdown.Item href="#straightbourbon">Straight Bourbon</NavDropdown.Item>
                  <NavDropdown.Item href="#rye">Rye</NavDropdown.Item>
                  <NavDropdown.Item href="#whiskeyescoces">Whiskey Escocês</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contato">Contato</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="dark">Sign in</Button>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
                      
        </>
    )
}

export default NavbarPage;


