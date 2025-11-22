import React from 'react';
import { useGlobal } from '../../../core/context/globalContext';

const Home = () => {
  const { state, setState } = useGlobal();

  const atualizarValor = (novoValor) => {
    setState(prev => ({
      ...prev,
      novoValor: novoValor !== undefined ? novoValor : 'Valor Padrão'
    }));
  };

  return(
    <>
      <h2>Página Inicial</h2>
      <button onClick={() => atualizarValor()}>Valor Padrão</button>
      <button onClick={() => atualizarValor('Teste')}>Atualizar Valor</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

export default Home;