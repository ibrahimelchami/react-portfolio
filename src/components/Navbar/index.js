import React from 'react';
import { Nav, NavBtn, NavLink } from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/me" activeStyle>
        Me
      </NavLink>
      <NavLink to="/design" activeStyle>
        Design
      </NavLink>
      <NavLink to="/coding" activeStyle>
        Coding
      </NavLink>
      <NavLink to="/writing" activeStyle>
        Writing
      </NavLink>
    </Nav>
  );
};

export default Navbar;
