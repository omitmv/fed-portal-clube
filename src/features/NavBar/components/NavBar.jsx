import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar-fixed">
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/cadastro/socio" style={{ marginLeft: 10 }}>Cadastro de Sócio</Link>
    </nav>
  )
};

export default NavBar;
