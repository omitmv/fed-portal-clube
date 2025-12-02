import React from 'react';

const About: React.FC = () => {
  const [state, setState] = React.useState<Record<string, any>>({});

  const atualizarValor = (novoValor?: string) => {
    setState(prev => ({
      ...prev,
      novoValor: novoValor !== undefined ? novoValor : 'Valor Padrão',
    }));
  };

  return (
    <>
      <h2>Sobre o Projeto</h2>
      <button onClick={() => atualizarValor()}>Valor Padrão</button>
      <button onClick={() => atualizarValor('Teste')}>Atualizar Valor</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default About;
