import React from 'react';
import Row from '../Utilities/Row.tsx';
import ExpandableSection from './ExpandableSection.tsx';
import { LocationIcon } from '../../assets/icons';
import Coords from '../Inputs/Coords.tsx';

interface CoordinatesSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const CoordinatesSection: React.FC<CoordinatesSectionProps> = ({ isOpen, onToggle }) => {
    return (
        <ExpandableSection
            title="Current coordinates"
            icon={<LocationIcon className="w-[13px] h-[18px]" />}
            isOpen={isOpen}
            onToggle={onToggle}
        >
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Coordinates
                </span>
                <Coords value="X: 123, Y: 456, Z: 789" />
            </Row>
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Heading
                </span>
                <Coords value="213.635" />
            </Row>
        </ExpandableSection>
    );
};

export default CoordinatesSection;