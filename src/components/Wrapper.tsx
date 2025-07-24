import type { ReactNode } from 'react';

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-7xl flex flex-col gap-4">
            {children}
        </div>
    )
}
