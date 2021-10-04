import React, {useState} from "react";

import { FaBars} from 'react-icons/fa';
import logo from '../../images/Logo.png'
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavDropdownMenu} from './Navbar.styles';

import  Dropdown from '../DropdownMenu';

const Navbar = ({ toggle }) => {
    const [dropDown, setDropDown] = useState(false);
    const toggledropdown = () =>{
        setDropDown(!dropDown);
    }
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
                        <NavDropdownMenu to='categorias' onMouseEnter= { toggledropdown } onMouseLeave= { toggledropdown }>Categorias
                        </NavDropdownMenu>
                        {dropDown && <Dropdown />}
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