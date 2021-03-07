import React from 'react';
import { Nav, NavBtn, NavLink } from './NavbarElements';

const Navbar = () => {
  return (
    <Nav>
      <div style={{ height: '100%' }}></div>
      {/* <NavBtn> */}
      <NavLink to="/" activeStyle>
        Me
      </NavLink>
      {/* </NavBtn> */}
      {/* <NavBtn> */}
      <NavLink to="/Design" activeStyle>
        Design
      </NavLink>
      {/* </NavBtn> */}
      {/* <NavBtn> */}
      <NavLink to="/Coding" activeStyle>
        Coding
      </NavLink>
      {/* </NavBtn> */}
      {/* <NavBtn> */}
      <NavLink to="/Writing" activeStyle>
        Writing
      </NavLink>
      {/* </NavBtn> */}
    </Nav>
  );
};

export default Navbar;
