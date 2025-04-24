import React, { ReactNode } from 'react';
import Row from '../Utilities/Row.tsx';

interface BottomButtonProps {
    icon: ReactNode;
    text: string;
    onClick?: () => void;
    className?: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({
   icon,
   text,
   onClick,
   className = ''
}) => {
    return (
        <Row
            variant="normal"
            className={`h-[56px] bg-gradient-to-b from-[#FF1A35] to-[#A01F2E] cursor-pointer hover:brightness-110 ${className}`}
            onClick={onClick}
        >
            <div className="flex items-center w-full gap-2">
                {icon}
                <span className="text-white font-sfpro text-[13px] font-bold">
          {text}
        </span>
            </div>
        </Row>
    );
};

export default BottomButton;