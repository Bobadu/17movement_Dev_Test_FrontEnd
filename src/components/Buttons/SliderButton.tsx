import React from 'react';

interface SliderButtonProps {
    value: boolean;
    onChange: (value: boolean) => void;
    className?: string;
}

const SliderButton: React.FC<SliderButtonProps> = ({
       value,
       onChange,
       className = ''
   }) => {
    const toggleValue = () => {
        onChange(!value);
    };

    return (
        <div
            onClick={toggleValue}
            className={`relative w-[36px] h-[20px] rounded-full cursor-pointer transition-colors duration-300 ${value ? 'bg-[#FF1A35]' : 'bg-[#141519]'} ${className}`}
        >
            <div
                className={`absolute top-[2px] w-[16px] h-[16px] bg-white rounded-full transition-transform duration-300 ${value ? 'transform translate-x-[18px]' : 'transform translate-x-[2px]'}`}
            />
        </div>
    );
};

export default SliderButton;