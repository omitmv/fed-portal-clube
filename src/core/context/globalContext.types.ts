import React from 'react';

export interface GlobalState {
  [key: string]: any;
}

export interface GlobalContextType {
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
}
