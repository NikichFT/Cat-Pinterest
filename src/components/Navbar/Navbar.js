import React from 'react';
import './Navbar.scss';

import NavbarButton from './NavbarButton/NavbarButton';

function Navbar(){
  return(
    <nav className="nav">
        <NavbarButton link='/all-posts' textButton="Все котики"/>
        <NavbarButton link='/liked-posts' textButton="Любимые котики"/>
    </nav>
  )
}

export default Navbar;