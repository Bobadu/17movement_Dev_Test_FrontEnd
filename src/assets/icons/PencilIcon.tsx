import React from 'react';

export const PencilIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.9744 22.1959H12V19.2215L20.0162 11.2053C20.1477 11.0738 20.3259 11 20.5118 11C20.6977 11 20.876 11.0738 21.0075 11.2053L22.9907 13.1877C23.0558 13.2529 23.1075 13.3302 23.1428 13.4153C23.1781 13.5004 23.1963 13.5916 23.1963 13.6837C23.1963 13.7758 23.1781 13.8671 23.1428 13.9522C23.1075 14.0373 23.0558 14.1146 22.9907 14.1797L14.9744 22.1959ZM12 23.598H24.6184V25H12V23.598Z"
            fill="white"
        />
    </svg>
);