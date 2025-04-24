import React from 'react';

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, fill = "white", ...props }) => (
    <svg
        className={className}
        width="30"
        height="30"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M24 13.6667H21.25L20.4643 13H16.5357L15.75 13.6667H13V15H24M13.7857 23.6667C13.7857 24.0203 13.9513 24.3594 14.246 24.6095C14.5407 24.8595 14.9404 25 15.3571 25H21.6429C22.0596 25 22.4593 24.8595 22.754 24.6095C23.0487 24.3594 23.2143 24.0203 23.2143 23.6667V15.6667H13.7857V23.6667Z"
            fill={fill}
        />
    </svg>
);