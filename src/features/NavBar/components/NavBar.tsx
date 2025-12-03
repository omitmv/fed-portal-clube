import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faBars } from '@fortawesome/free-solid-svg-icons';

import { NavBarProps } from './NavBar.types';

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const location = useLocation();

  return (
    <nav className='navbar-fixed'>
      {location.pathname !== '/' 
        ? <Link className='btnNavBarLeft' to='/'><FontAwesomeIcon icon={faHome} /></Link> 
        : <Link className='btnNavBarLeft' to='/menu'><FontAwesomeIcon icon={faBars} /></Link>
      }
      {title && <span className='title-project'>{title}</span>}
      <Link className='btnNavBarRight' to='/about'><FontAwesomeIcon icon={faInfo} /></Link>
    </nav>
  );
};

export default NavBar;
