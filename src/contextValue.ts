import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface IContext {
  addressContext: string;
  setAddressContext: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<IContext | undefined>(undefined); 