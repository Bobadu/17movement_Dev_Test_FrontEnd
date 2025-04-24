import React from 'react';
import Row from '../Utilities/Row.tsx';
import ExpandableSection from './ExpandableSection.tsx';
import { ModelIcon } from '../../assets/icons';
import TextInput from '../Inputs/TextInput.tsx';
import DropdownInput from "../Inputs/DropdownInput.tsx";

interface PropToolSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const PropToolSection: React.FC<PropToolSectionProps> = ({ isOpen, onToggle }) => {
    return (
        <ExpandableSection
            title="Prop tool"
            icon={<ModelIcon className="w-[20px] h-[19px]" />}
            isOpen={isOpen}
            onToggle={onToggle}
        >
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Prop model
                </span>
                <TextInput placeholder="vw_prop_casino_slot_06a" />
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Target entity
                </span>
                <DropdownInput
                    options={["mp_f_freemode_01", "mp_m_freemode_01", "vw_prop_casino_slot_08a"]}
                    value="mp_f_freemode_01"
                />
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Animation
                </span>
                <div className={"flex items-center gap-1.5"}>
                    <TextInput placeholder="Animation dict" />
                    <TextInput placeholder="Animation clip" />
                </div>
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Bones
                </span>
                <DropdownInput
                    options={["Head", "Hand", "Feet"]}
                    value="Select"
                />
            </Row>
            <div className="flex w-full mt-4">
                <button
                    className="flex-1 h-[56px] text-white font-sfpro text-[13px] font-bold bg-[#0F1014] hover:bg-gradient-to-b hover:from-[#FF1A35] hover:to-[#A01F2E] transition-colors duration-200"
                >
                    Copy native
                </button>
                <button
                    className="flex-1 h-[56px] text-white font-sfpro text-[13px] font-bold bg-[#0F1014] hover:bg-gradient-to-b hover:from-[#FF1A35] hover:to-[#A01F2E] transition-colors duration-200"
                >
                    Edit offset
                </button>
            </div>
        </ExpandableSection>
    );
};

export default PropToolSection;