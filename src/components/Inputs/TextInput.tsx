import React, { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
     value,
     onChange,
     className = '',
     ...props
 }) => {
    return (
        <input
            type="text"
            className={`w-[189px] h-[43px] border-2 border-[#131418] bg-[#0F1014] text-white font-sfpro text-[13px] font-medium px-3 placeholder-white placeholder-font-sfpro placeholder-text-[13px] placeholder-font-medium ${className}`}
            style={{
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 500
            }}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

export default TextInput;