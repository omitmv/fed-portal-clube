import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../../features/About';
import Home from '../../features/Home';
import { Socio } from '../../features/Cadastro';

const Paths = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cadastro/socio" element={<Socio />} />
      </Routes>
    </>
  );
}

export default Paths;
