import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/Logo.png";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navbar.styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/user";

const NavbarPage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("user");
  };

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
          {user.auth ? (
            <div>
              <h4>Ola, {user.name}</h4>
              <button className="Form-Btn" type="submit" onClick={handleLogout}>
                Sair
              </button>
            </div>
          ) : (
            <div>
              <Link to="/user/signin">Login</Link>
              <br />
              <Link to="/user/signup">Cadatrar</Link>
            </div>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarPage;
