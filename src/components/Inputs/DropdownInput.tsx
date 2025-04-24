import React, { useState, useRef, useEffect } from 'react';
import { ArrowIcon } from '../../assets/icons';

interface DropdownInputProps {
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
     options,
     value,
     onChange,
     placeholder = 'Wybierz opcję',
     className = '',
 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: string) => {
        setSelectedValue(option);
        if (onChange) {
            onChange(option);
        }
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            <div
                onClick={toggleDropdown}
                className="flex items-center justify-between w-[189px] h-[43px] border-2 border-[#131418] bg-[#0F1014] text-white font-sfpro text-[13px] font-medium px-3 cursor-pointer"
                style={{
                    fontFamily: "'SF Pro Display', sans-serif",
                    fontSize: '13px',
                    fontStyle: 'normal',
                    fontWeight: 500
                }}
            >
                <span className="truncate">{selectedValue || placeholder}</span>
                <ArrowIcon className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
                <div className="absolute z-10 w-[189px] mt-1 bg-[#131418] border-2 border-[#131418] rounded-sm max-h-60 overflow-auto">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="px-3 py-2 text-white hover:bg-[#1A1B20] cursor-pointer font-sfpro text-[13px] font-medium"
                            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownInput;