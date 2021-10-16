import React, { useContext } from "react";
import logo from "../../images/Logo.png";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./Navbar.styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/user";

const NavbarPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link to="/home">
            <img src={logo} alt="Logo" height="150px" />
          </Link>
          <NavMenu>
            <NavItem>
              <NavLinks to="/home">Home</NavLinks>
              <NavLinks to="/manifesto">Manifesto</NavLinks>
              <NavLinks to="/categories">Categorias</NavLinks>
              <NavLinks to="/signin">Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            {user.token ? (
              `Ola, ${user.name}`
            ) : (
              <Link to="/user/signup">Signup</Link>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarPage;
