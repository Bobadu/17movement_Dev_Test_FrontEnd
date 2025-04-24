import React, { useState } from 'react';
import AppLayout from './components/Master/AppLayout.tsx';
import Navbar, { MenuTab } from './components/Master/Navbar.tsx';
import CoordinatesSection from './components/Sections/CoordinatesSection.tsx';
import WeatherSection from './components/Sections/WeatherSection.tsx';
import PropToolSection from "./components/Sections/PropToolSection.tsx";
import WorldEditSection from "./components/Sections/WorldEditSection.tsx";
import BottomButton from './components/Buttons/BottomButton.tsx';
import InteriorDebugSection from "./components/Sections/InteriorDebugSection.tsx";
import PedSpawnerSection from "./components/Sections/PedSpawnerSection.tsx";
import { PlusIcon, SaveIcon } from './assets/icons';

const SECTIONS = {
    COORDINATES: 'coordinates',
    TIME_WEATHER: 'timeWeather',
    TOOLS: 'tools',
    WORLD_EDIT: 'worldEdit',
    INTERIOR: 'interior',
    HUMAN: 'human'
};

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<MenuTab>('home');
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        [SECTIONS.COORDINATES]: false,
        [SECTIONS.TIME_WEATHER]: false,
        [SECTIONS.TOOLS]: false,
        [SECTIONS.WORLD_EDIT]: false,
        [SECTIONS.INTERIOR]: false,
        [SECTIONS.HUMAN]: false
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <>
                        <CoordinatesSection
                            isOpen={openSections[SECTIONS.COORDINATES]}
                            onToggle={() => toggleSection(SECTIONS.COORDINATES)}
                        />
                        <WeatherSection
                            isOpen={openSections[SECTIONS.TIME_WEATHER]}
                            onToggle={() => toggleSection(SECTIONS.TIME_WEATHER)}
                        />
                    </>
                );
            case 'tools':
                return (
                    <PropToolSection
                        isOpen={openSections[SECTIONS.TOOLS]}
                        onToggle={() => toggleSection(SECTIONS.TOOLS)}
                    />
                );
            case 'website':
                return (
                    <WorldEditSection
                        isOpen={openSections[SECTIONS.WORLD_EDIT]}
                        onToggle={() => toggleSection(SECTIONS.WORLD_EDIT)}
                    />
                );
            case 'chair':
                return (
                    <InteriorDebugSection
                        isOpen={openSections[SECTIONS.INTERIOR]}
                        onToggle={() => toggleSection(SECTIONS.INTERIOR)}
                    />
                );
            case 'human':
                return (
                    <PedSpawnerSection
                        isOpen={openSections[SECTIONS.HUMAN]}
                        onToggle={() => toggleSection(SECTIONS.HUMAN)}
                    />
                );
            default:
                return null;
        }
    };

    const renderBottomButton = () => {
        if (activeTab === 'website') {
            return (
                <BottomButton
                    icon={<PlusIcon/>}
                    text="Create new preset"
                />
            );
        } else if (activeTab === 'chair') {
            return (
                <BottomButton
                    icon={<SaveIcon/>}
                    text="Save changes"
                />
            );
        } else if (activeTab === 'human') {
        return (
            <BottomButton
                icon={<PlusIcon/>}
                text="Create new one"
            />
        );
    }
        return null;
    };

    return (
        <AppLayout>
            <div className="flex flex-col h-full">
                <Navbar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className="flex-grow overflow-auto">
                    {renderContent()}
                </div>
                {renderBottomButton()}
            </div>
        </AppLayout>
    );
};

export default App;