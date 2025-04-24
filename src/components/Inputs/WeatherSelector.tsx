import React from 'react';
import { ArrowIcon } from '../../assets/icons';

interface WeatherSelectorProps {
    value: string;
    options: string[];
    onChange: (value: string) => void;
    className?: string;
}

const WeatherSelector: React.FC<WeatherSelectorProps> = ({
     value,
     options,
     onChange,
     className = '',
 }) => {
    const handleNext = () => {
        const currentIndex = options.indexOf(value);
        const nextIndex = (currentIndex + 1) % options.length;
        onChange(options[nextIndex]);
    };

    const handlePrevious = () => {
        const currentIndex = options.indexOf(value);
        const previousIndex = (currentIndex - 1 + options.length) % options.length;
        onChange(options[previousIndex]);
    };

    return (
        <div
            className={`w-[155px] h-[45px] bg-transparent border-2 border-[#101115] rounded-[2px] flex items-center justify-between px-3 ${className}`}
        >
            <button
                onClick={handlePrevious}
                className="cursor-pointer"
                aria-label="Poprzednia opcja"
            >
                <ArrowIcon className="-rotate-90" />
            </button>
            <span className="text-white font-sfpro text-[13px] font-medium">
        {value}
      </span>
            <button
                onClick={handleNext}
                className="cursor-pointer"
                aria-label="Następna opcja"
            >
                <ArrowIcon className="rotate-90" />
            </button>
        </div>
    );
};

export default WeatherSelector;