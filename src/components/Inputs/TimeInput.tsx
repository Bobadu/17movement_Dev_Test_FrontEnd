import React, { ChangeEvent } from 'react';

interface TimeInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    max?: number;
    className?: string;
}

const TimeInput: React.FC<TimeInputProps> = ({
         value,
         onChange,
         placeholder = '',
         max = 59,
         className = ''}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.replace(/\D/g, '');

        if (newValue === '' || (parseInt(newValue) <= max && newValue.length <= 2)) {
            onChange(newValue);
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-[45px] h-[45px] bg-[#101115] rounded-[2px] text-center text-white font-sfpro text-[13px] font-medium focus:outline-none ${className}`}
            maxLength={2}
        />
    );
};

export default TimeInput;