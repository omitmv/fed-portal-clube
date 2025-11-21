import React, { createContext, useContext, useState } from 'react';

// Criação do contexto global
export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Estado global inicial (adicione propriedades conforme necessário)
  const [state, setState] = useState({});

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Hook para acessar o contexto global
export function useGlobal() {
  return useContext(GlobalContext);
}
