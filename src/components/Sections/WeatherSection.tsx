import React, { useState } from 'react';
import Row from '../Utilities/Row.tsx';
import ExpandableSection from './ExpandableSection.tsx';
import { WeatherIcon } from '../../assets/icons';
import TimeInput from '../Inputs/TimeInput.tsx';
import GradientButton from '../Buttons/GradientButton.tsx';
import WeatherSelector from '../Inputs/WeatherSelector.tsx';
import SliderButton from '../Buttons/SliderButton.tsx';

interface WeatherSectionProps {
    isOpen: boolean;
    onToggle: () => void;
}

const WEATHER_OPTIONS = [
    'Extra Sunny',
    'Clear',
    'Cloudy',
    'Overcast',
    'Foggy',
    'Rain',
    'Thunder',
    'Snow',
    'Blizzard'
];

const WeatherSection: React.FC<WeatherSectionProps> = ({ isOpen, onToggle }) => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [weather, setWeather] = useState('Extra Sunny');
    const [freezeTime, setFreezeTime] = useState(false);
    const [freezeWeather, setFreezeWeather] = useState(false);

    const handleApplyTime = () => {
        console.log(`Ustawianie czasu: ${hours}:${minutes}:${seconds}`);
    };

    const handleApplyWeather = () => {
        console.log(`Ustawianie pogody: ${weather}`);
    };

    return (
        <ExpandableSection
            title="Time & Weather"
            icon={<WeatherIcon className="w-[18px] h-[18px]" />}
            isOpen={isOpen}
            onToggle={onToggle}
        >
            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Set time
                </span>
                <div className="flex items-center">
                    <div className="flex gap-[10px] mr-[10px]">
                        <TimeInput value={hours} onChange={setHours} placeholder="HH" max={23} />
                        <TimeInput value={minutes} onChange={setMinutes} placeholder="MM" />
                        <TimeInput value={seconds} onChange={setSeconds} placeholder="SS" />
                    </div>
                    <GradientButton onClick={handleApplyTime}>Apply</GradientButton>
                </div>
            </Row>

            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Weather
                </span>
                <div className="flex items-center">
                    <WeatherSelector
                        value={weather}
                        options={WEATHER_OPTIONS}
                        onChange={setWeather}
                    />
                    <div className="w-[10px]"></div>
                    <GradientButton onClick={handleApplyWeather}>Apply</GradientButton>
                </div>
            </Row>

            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Freeze time
                </span>
                <SliderButton value={freezeTime} onChange={setFreezeTime} />
            </Row>

            <Row variant="normal" className="justify-between">
                <span className="text-[#525560] font-sfpro text-[13px] font-bold tracking-[0.26px]">
                    Freeze weather status
                </span>
                <SliderButton value={freezeWeather} onChange={setFreezeWeather} />
            </Row>
        </ExpandableSection>
    );
};

export default WeatherSection;