import React from 'react';

export const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" {...props}>
            <path d="M11 7L6 2L1 7" stroke="#525560" strokeWidth="1.5"/>
        </svg>
    );
};