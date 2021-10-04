import React from 'react';
import { NavDropdownItem, NavDropdownWrapper } from './DropdownMenu.Styles';
const Dropdown = () => {
    return (
        <>
            <NavDropdownWrapper>
                <NavDropdownItem to='bourbon'>Bourbon</NavDropdownItem>
                <NavDropdownItem to='straightbourbon'>Straight Bourbon</NavDropdownItem>
                <NavDropdownItem to='rye'>Rye</NavDropdownItem>
                <NavDropdownItem to='escoces'>Whiskey Escocês</NavDropdownItem>
            </NavDropdownWrapper>
        </>
    )
}

export default Dropdown;
