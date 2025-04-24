import React from 'react';
import Header from './Header.tsx';
import GradientDefinition from '../Utilities/GradientDefinition.tsx';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
    <div className="min-h-screen w-full flex justify-start font-sfpro">
        <GradientDefinition />
        <div className="w-full max-w-[520px] ml-[29px] h-[calc(100vh-60px)] my-[30px] bg-[var(--box-bg)]
                flex flex-col text-white overflow-hidden">
            <Header />
            <main className="flex-1">
                {children}
            </main>
        </div>
    </div>
);

export default AppLayout;