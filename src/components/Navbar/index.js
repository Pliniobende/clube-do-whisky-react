import React from "react";
import { FaBars} from 'react-icons/fa';
import logo from '../../images/Logo.png'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './Navbar.styles';
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <Link to="/home">
                    <img src={logo} alt="Logo" height="150px"/>
                </Link>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/home'>Home</NavLinks>
                        <NavLinks to='/manifesto'>Manifesto</NavLinks>
                        <NavLinks to='/categories'>Categorias</NavLinks>
                        <NavLinks to='/signin'>Contato</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <Link to="/user/signup">Sign In</Link>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;