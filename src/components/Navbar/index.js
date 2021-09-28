import React from "react";
import { FaBars} from 'react-icons/fa';
import logo from '../../images/Logo.png'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './Navbar.styles';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
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
                        <NavLinks to='categorias'>Categorias</NavLinks>
                        <NavLinks to='signin'>Contato</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;