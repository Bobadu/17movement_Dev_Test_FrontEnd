import React, { ReactNode } from 'react';

interface RowProps {
    variant: 'shine' | 'normal';
    children?: ReactNode;
    className?: string;
    paddingX?: string;
    [x: string]: any;
}

const Row: React.FC<RowProps> = ({
     variant = 'normal',
     children,
     className = '',
     paddingX,
     ...props
 }) => {
    const paddingClasses = paddingX || 'px-[22px]';
    const baseClasses = `w-full h-[60px] ${paddingClasses} flex items-center`;
    const variantClasses = variant === 'shine' ? 'bg-[#0D0E12]' : 'bg-transparent';

    return (
        <div className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Row;