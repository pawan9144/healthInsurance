'use client'
import React from 'react';
import { reducer } from './reducer';
import { initialState } from './store';

export const StoreContext = React.createContext<any>(initialState);

type IProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
