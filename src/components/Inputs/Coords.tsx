import React, { ReactNode } from 'react';
import { CopyIcon } from '../../assets/icons';

interface CoordsProps {
    value: string | ReactNode;
    onCopy?: () => void;
    className?: string;
}

const Coords: React.FC<CoordsProps> = ({ value, onCopy, className = '' }) => {
    const handleCopy = () => {
        if (onCopy) {
            onCopy();
        } else if (typeof value === 'string') {
            navigator.clipboard.writeText(value)
                .catch(err => console.error('Nie udało się skopiować tekstu: ', err));
        }
    };

    return (
        <div className={`inline-flex items-center h-[30px] bg-[#111216] rounded-[4px] ${className}`}>
            <div className="px-2 text-white font-sfpro text-[13px] font-medium">
                {value}
            </div>
            <button
                onClick={handleCopy}
                className="h-[30px] w-[30px] flex items-center justify-center hover:bg-[#1A1B20] rounded-r-[4px]"
                aria-label="Kopiuj do schowka"
            >
                <CopyIcon className={"fill-inactive"}/>
            </button>
        </div>
    );
};

export default Coords;