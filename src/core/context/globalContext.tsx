import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalContextType, GlobalState } from './globalContext.types';

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GlobalState>({
    jornadaAtual: {
      title: 'Jornada Exemplo',
      description: 'Descrição da jornada exemplo',
    },
  });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobal deve ser usado dentro de GlobalProvider');
  return context;
}
