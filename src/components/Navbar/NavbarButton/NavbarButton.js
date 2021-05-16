import React from 'react';
import './NavbarButton.scss';
import {NavLink} from 'react-router-dom';

function NavbarButton({textButton, link}){
  return(
    <NavLink className="nav__item" to={link} activeStyle= {{color: '#FFFFFF', background: ' #21cc99'}}>
        {textButton}
    </NavLink>
  )
}

export default NavbarButton;