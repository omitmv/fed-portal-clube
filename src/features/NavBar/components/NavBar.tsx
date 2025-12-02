import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo } from '@fortawesome/free-solid-svg-icons';

import { NavBarProps } from './NavBar.types';

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <nav className='navbar-fixed'>
      <Link className='btnNavBarLeft' to='/'><FontAwesomeIcon icon={faHome} /></Link>
      {title && <span className='title-project'>{title}</span>}
      <Link className='btnNavBarRight' to='/about'><FontAwesomeIcon icon={faInfo} /></Link>
    </nav>
  );
};

export default NavBar;
