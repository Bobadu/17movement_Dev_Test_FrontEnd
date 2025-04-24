import React, { ReactNode } from 'react';

interface GradientButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
       onClick,
       children,
       className = '',
       disabled = false
   }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-[123px] h-[40px] bg-gradient-to-b from-[#FF1A35] to-[#A01F2E] rounded-[2px] text-white font-sfpro text-[13px] font-medium disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
};

export default GradientButton;