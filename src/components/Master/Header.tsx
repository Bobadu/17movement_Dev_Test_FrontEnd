import React from 'react';
import { Logo, LogoMini, WebsiteIcon, DiscordIcon } from '../../assets/icons';

const Header: React.FC = () => {
    return (
        <header
            className="w-full flex items-center justify-between relative overflow-hidden h-16 md:h-[75px]"
            style={{
                background: 'radial-gradient(98.99% 128.86% at 0.58% 5.33%, rgba(255, 26, 53, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #17181C 0%, #0A0B0F 100%)'
            }}
        >
            <div className="flex items-center h-full">
                <div className="relative w-16 md:w-[81px] h-full overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Logo className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <LogoMini className="w-auto h-auto" />
                    </div>
                </div>
                
                <div className="-ml-1 md:-ml-2 font-sfpro">
                    <div className="text-white font-bold text-xs md:text-[14px] tracking-wider leading-none">
                        17 MOVEMENT
                    </div>
                    <div className="mt-1 text-xs md:text-[13px] tracking-wider leading-none text-white/35">
                        Development tool
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4 px-2 sm:px-4 md:px-6">
                <button className="hover:opacity-80 transition-opacity" aria-label="Odwiedź naszą stronę">
                    <WebsiteIcon className={"fill-inactive"} />
                </button>
                <button className="hover:opacity-80 transition-opacity" aria-label="Dołącz do naszego Discorda">
                    <DiscordIcon className={"fill-inactive"}/>
                </button>
            </div>
        </header>
    );
};

export default Header;