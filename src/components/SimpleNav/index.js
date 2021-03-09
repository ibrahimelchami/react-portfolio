import React, { useState, useEffect } from 'react';
import { Nav } from './SimpleNav';

const Navbar = () => {
  const [linkcolor, setLinkcolor] = useState('#AAA');

  const str = window.location.href;
  const n = str.lastIndexOf('/');
  const page = str.substring(n);

  useEffect(() => {
    if (page === '/the-inside') {
      setLinkcolor('#FFAA45');
    } else {
      setLinkcolor('#FFD702');
    }
  });

  // useEffect(() => {
  //   if (page === '/the-inside') {
  //     setLinkcolor('#FFAA45');
  //   } else {
  //     setLinkcolor('#FFD702');
  //   }
  // });

  return (
    <Nav to="/" linkcolor={linkcolor}>
      &#8592; home
    </Nav>
  );
};

export default Navbar;
