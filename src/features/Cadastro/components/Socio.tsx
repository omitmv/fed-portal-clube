import React, { useState } from 'react';
import { useGlobal } from '../../../core/context/globalContext';

export const Socio: React.FC = () => {
  const [socio, setSocio] = useState({
    cdSocio: 0,
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
  });
  const { state, setState } = useGlobal();

  return <h2>Cadastro de Sócio</h2>;
};
