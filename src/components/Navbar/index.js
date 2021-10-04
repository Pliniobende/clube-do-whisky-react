import React, {useState, useContext, useCallback } from "react";

import { FaBars, FaUserCheck } from 'react-icons/fa';
import logo from '../../images/Logo.png'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavDropdownMenu, UserIcon } from './Navbar.styles';
import  Dropdown from '../DropdownMenu';
import { AuthConext } from "../../context/auth-context";

const Navbar = ({ toggle }) => {
    const [dropDown, setDropDown] = useState(false);
    const toggledropdown = () =>{
        setDropDown(!dropDown);
    };
    const auth = useContext(AuthConext);
 
    const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
console.log(isLoggedIn);
  if(isLoggedIn){
      routes=(
          <>
        <NavbarLogo to="/home">
        <img src={logo} alt="Logo"/>
    </NavbarLogo>
    <MobileIcon onClick={toggle}>
        <FaBars />
    </MobileIcon>
    <NavMenu>
        <NavItem>
           <NavLinks to='home'>Home</NavLinks>
            <NavLinks to='manifesto'>Manifesto</NavLinks>
            <NavDropdownMenu to='categorias' onMouseEnter= { toggledropdown } onMouseLeave= { toggledropdown }>Categorias
            </NavDropdownMenu>
            {dropDown && <Dropdown />}
            <NavLinks to='signin'>Contato</NavLinks>
        </NavItem>

    </NavMenu>
    <NavBtn>
        <UserIcon >
            <FaUserCheck />
        </UserIcon>
    </NavBtn>

    </>
      )
  }else{
    routes=(
      <>
    <NavbarLogo to="/home">
    <img src={logo} alt="Logo"/>
</NavbarLogo>
<MobileIcon onClick={toggle}>
    <FaBars />
</MobileIcon>
<NavMenu>
    <NavItem>
       <NavLinks to='home'>Home</NavLinks>
        <NavLinks to='manifesto'>Manifesto</NavLinks>
        <NavDropdownMenu to='categorias' onMouseEnter= { toggledropdown } onMouseLeave= { toggledropdown }>Categorias
        </NavDropdownMenu>
        {dropDown && <Dropdown />}
        <NavLinks to='signin'>Contato</NavLinks>
    </NavItem>
</NavMenu>
<NavBtn>
    <NavBtnLink to="/signin">Sign In</NavBtnLink>
</NavBtn>
</>)
  }

    return (
        <>
        <AuthConext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        <Nav>
            <NavbarContainer>
                {routes}
            </NavbarContainer>
        </Nav>
        </AuthConext.Provider>
        </>
    );
};

export default Navbar;