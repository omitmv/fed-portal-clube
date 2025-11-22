import React from 'react';

export default function About() {
  const [state, setState] = React.useState({});

  const atualizarValor = (novoValor) => {
    setState(prev => ({
      ...prev,
      novoValor: novoValor !== undefined ? novoValor : 'Valor Padrão'
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
}
