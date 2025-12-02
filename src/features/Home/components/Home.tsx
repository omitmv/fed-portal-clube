import React from 'react';
import { useGlobal } from '../../../core/context/globalContext';

const Home: React.FC = () => {
  const { state, setState } = useGlobal();

  const atualizarValor = (novoValor?: string) => {
    setState((prev: any) => ({
      ...prev,
      novoValor: novoValor !== undefined ? novoValor : 'Valor Padrão',
    }));
  };

  return (
    <div className='home-container'>
      <h2>Página Inicial</h2>
      <button onClick={() => atualizarValor()}>Valor Padrão</button>
      <button onClick={() => atualizarValor('Teste')}>Atualizar Valor</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Home;
