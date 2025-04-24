import React, { useState } from 'react';
import Row from '../Utilities/Row.tsx';
import ExpandableSection from './ExpandableSection.tsx';
import {ChairIcon} from "../../assets/icons";
import Coords from "../Inputs/Coords.tsx";
import SliderButton from "../Buttons/SliderButton.tsx";

interface InteriorDebugSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const InteriorDebugSection: React.FC<InteriorDebugSectionProps> = ({ isOpen, onToggle }) => {
    const [changedebugging, setChangedebugging] = useState(false);

    return (
        <ExpandableSection
            title="Interior debugger"
            icon={
                <ChairIcon className={"fill-active"}/>
            }
            isOpen={isOpen}
            onToggle={onToggle}
        >
            <Row variant="normal" className="h-[63px] flex items-center">
                <span className="text-[#fff] font-sfpro text-[18px] font-bold tracking-[0.26px] self-end pb-2">
                    Interior information
                </span>
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Current interior ID
                </span>
                <Coords value={"v_garagem"}/>
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Current room ID
                </span>
                <Coords value={"v_michael_g_lounge"}/>
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Portal Debugging
                </span>
                <SliderButton value={changedebugging} onChange={setChangedebugging}/>
            </Row>
        </ExpandableSection>
    );
};

export default InteriorDebugSection;