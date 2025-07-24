import { useState } from 'react';
import type { ReactNode } from 'react';
import { Context } from './contextValue';

interface ContextProviderProps {
    children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
    const [addressContext, setAddressContext] = useState('');

    return (
        <Context.Provider value={{ addressContext, setAddressContext }}>
            {children}
        </Context.Provider>
    );
}