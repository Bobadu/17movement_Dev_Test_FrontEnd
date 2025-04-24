import React from 'react';
import Row from '../Utilities/Row.tsx';
import { ArrowIcon, TrashIcon } from '../../assets/icons';

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children?: React.ReactNode;
    trash?: boolean;
    onTrashClick?: () => void;
}

const ExpandableSection: React.FC<SectionProps> = ({
   title,
   icon,
   isOpen,
   onToggle,
   children,
   trash = false,
   onTrashClick
}) => (
    <>
        <Row
            variant="shine"
            className="justify-between cursor-pointer"
            onClick={onToggle}
        >
            <div className="flex items-center pl-[12px] -ml-[25px]">
                <div className="w-10 h-10 flex items-center justify-center">
                    {icon}
                </div>
                <span className="text-white text-[15px] font-bold tracking-[0.3px]">
                    {title}
                </span>
            </div>
            <div className="flex items-center">
                {trash && (
                    <TrashIcon
                        className="mr-3 cursor-pointer w-9 h-9"
                        fill="#525560"
                        onClick={(e) => {
                            e.stopPropagation();
                            onTrashClick && onTrashClick();
                        }}
                    />
                )}
                <ArrowIcon
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>
        </Row>
        {isOpen && children}
    </>
);

export default ExpandableSection;