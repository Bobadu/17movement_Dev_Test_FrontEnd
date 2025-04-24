import React, { useState } from 'react';
import Row from '../Utilities/Row.tsx';
import ExpandableSection from './ExpandableSection.tsx';
import TextInput from '../Inputs/TextInput.tsx';
import {HumanIcon} from "../../assets/icons";
import Coords from "../Inputs/Coords.tsx";

interface PedSpawnerSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const PedSpawnerSection: React.FC<PedSpawnerSectionProps> = ({ isOpen, onToggle }) => {
    const [isChichuaOpen, setIsChichuaOpen] = useState(false);

    return (
        <div>
            <ExpandableSection
                title="Ped Spawner"
                icon={<HumanIcon className={"fill-active"} />}
                isOpen={isOpen}
                onToggle={onToggle}
            >
                <ExpandableSection
                    title="Chichuaa ped"
                    icon={<HumanIcon className={"fill-inactive"} />}
                    isOpen={isChichuaOpen}
                    onToggle={() => setIsChichuaOpen(!isChichuaOpen)}
                    trash={true}
                    onTrashClick={() => {
                        console.log("Usuwanie peda Chichuaa");
                    }}
                >
                    <Row variant="normal" className="justify-between">
                        <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                            Model ID
                        </span>
                        <TextInput placeholder="mp_f_freemode_01" />
                    </Row>

                    <Row variant="normal" className="justify-between">
                        <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                            Coordinates
                        </span>
                        <Coords value="X: 123.123, Y: 456.213, Z: 789.723" />
                    </Row>

                    <Row variant="normal" className="justify-between">
                        <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                            Rotation
                        </span>
                        <div className={"flex gap-2"}>
                            <Coords value="X: 30°" />
                            <Coords value="Y: 30°" />
                            <Coords value="Z: 30°" />
                        </div>
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
                </ExpandableSection>
            </ExpandableSection>
        </div>
    );
};

export default PedSpawnerSection;