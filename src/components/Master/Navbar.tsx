import React from 'react';
import Row from '../Utilities/Row.tsx';
import {
    HomeIcon,
    ToolsIcon,
    WebsiteIcon,
    ChairIcon,
    HumanIcon
} from '../../assets/icons';

export type MenuTab = 'home' | 'tools' | 'website' | 'chair' | 'human';

export const NAV_ITEMS = [
    { id: 'home', Icon: HomeIcon, label: 'Strona główna' },
    { id: 'tools', Icon: ToolsIcon, label: 'Narzędzia' },
    { id: 'website', Icon: WebsiteIcon, label: 'Strona WWW' },
    { id: 'chair', Icon: ChairIcon, label: 'Krzesło' },
    { id: 'human', Icon: HumanIcon, label: 'Profil' }
] as const;

interface NavbarProps {
    activeTab: MenuTab;
    setActiveTab: (tab: MenuTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <Row paddingX="px-[12px]" variant="normal" className="justify-between">
            <div className="flex items-center gap-4">
                {NAV_ITEMS.map(({ id, Icon }) => {
                    const isActive = activeTab === id;
                    return (
                        <div
                            key={id}
                            onClick={() => setActiveTab(id as MenuTab)}
                            className={`w-10 h-10 flex items-center justify-center cursor-pointer
                         ${isActive ? 'bg-[var(--nav-active-bg)]' : 'bg-transparent'}`}
                        >
                            <Icon
                                className={`h-[16px] ${isActive ? 'fill-active' : 'fill-inactive'}`}
                            />
                        </div>
                    );
                })}
            </div>
        </Row>
    );
};

export default Navbar;