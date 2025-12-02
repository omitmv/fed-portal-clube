// Este arquivo serve como exemplo inicial para componentes em TypeScript
import React from 'react';

type ExampleProps = {
  texto: string;
};

export const ExampleComponent: React.FC<ExampleProps> = ({ texto }) => {
  return <div>{texto}</div>;
};
