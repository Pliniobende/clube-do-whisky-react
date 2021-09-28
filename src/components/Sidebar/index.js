import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './Sidebar.styles';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} > 
            <Icon onClick={toggle}>
                <CloseIcon />                
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="manifesto" onClick={toggle}>Manifesto</SidebarLink>
                    <SidebarLink to="categorias" onClick={toggle}>Categorias</SidebarLink>
                    <SidebarLink to="Signin" onClick={toggle}> Sign in</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

