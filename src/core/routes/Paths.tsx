import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../features/Home';
import Menu from '../../features/Menu';
import About from '../../features/About';
import { Socio } from '../../features/Cadastro';

const Paths: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cadastro/socio" element={<Socio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Paths;
