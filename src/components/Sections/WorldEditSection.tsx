import React from 'react';
import Row from '../Utilities/Row.tsx';
import ExpandableSection from './ExpandableSection.tsx';
import { WebsiteIcon, EyeIcon, PencilIcon, TrashIcon } from '../../assets/icons';

interface WorldEditSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const WorldEditSection: React.FC<WorldEditSectionProps> = ({ isOpen, onToggle }) => {
    return (
        <ExpandableSection
            title="World Edit"
            icon={<WebsiteIcon className="w-[20px] h-[19px] fill-[url(#nav-icon-gradient)]" />}
            isOpen={isOpen}
            onToggle={onToggle}
        >
            <Row variant="shine" className="justify-between items-center h-[70px]">
                <span className="text-[#fff] font-sfpro text-[14px] font-bold tracking-[0.26px]">
                    Random named preset #5
                </span>
                <div className="flex gap-2">
                    <div className="w-[36px] h-[36px] border-2 border-[#131418] flex items-center justify-center bg-transparent">
                        <EyeIcon className="w-[30px] h-[30px] fill-[#fff]" />
                    </div>
                    
                    <div className="w-[36px] h-[36px] border-2 border-[#131418] flex items-center justify-center bg-transparent">
                        <PencilIcon className="w-[30px] h-[30px] fill-[#fff]" />
                    </div>
                    
                    <div className="w-[36px] h-[36px] border-2 border-[#131418] flex items-center justify-center bg-transparent">
                        <TrashIcon className="w-[30px] h-[30px] fill-[#fff]" />
                    </div>
                </div>
            </Row>
        </ExpandableSection>
    );
};

export default WorldEditSection;