import React from 'react';
import { useGlobal } from '../../../core/context/globalContext';
import Button from '../../../core/common/components/Button';

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
      <Button className='text-left color-secondary' onClick={() => atualizarValor()}>Valor Padrão</Button>
      <Button onClick={() => atualizarValor()}>Valor Padrão</Button>
      <Button onClick={() => atualizarValor('Teste')}>Atualizar Valor</Button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Home;
