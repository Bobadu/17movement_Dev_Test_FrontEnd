import React from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="75" viewBox="0 0 97 75" fill="none" {...props}>
            <g opacity="0.2" filter="url(#filter0_d_1_12)">
                <path d="M38.1064 -5.99086L47.5601 -1.96468C48.9112 -1.3893 49.5355 0.165993 48.9592 1.50764L15.0439 80.4399C14.4674 81.7817 12.906 82.407 11.5549 81.8316L2.10116 77.8054C0.750153 77.2299 0.125987 75.6738 0.702467 74.3322L34.6178 -4.60012C35.1943 -5.94161 36.7554 -6.56613 38.1064 -5.99086Z" stroke="url(#paint0_linear_1_12)"/>
                <path d="M60.4941 -4.63672C61.1342 -6.15229 62.8283 -6.87127 64.3232 -6.30859L64.4668 -6.25098L64.4678 -6.25L72.9971 -2.54102H72.998C74.4897 -1.89603 75.1877 -0.132222 74.5459 1.40137L48.0938 64.2529L47.8008 64.9463H79.1035C80.9726 64.9463 82.4999 66.4863 82.5 68.4053V78.9502C82.5 80.9153 80.9354 82.5 79.0146 82.5L38.5215 82.4922H38.5225L35.1104 82.4775L34.8555 82.4717C29.6177 82.281 26.1059 76.8579 28.0361 71.877L28.1338 71.6367L60.4941 -4.63672Z" stroke="url(#paint1_linear_1_12)"/>
            </g>
            <defs>
                <filter id="filter0_d_1_12" x="-14.0129" y="-19" width="111.013" height="118" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="7"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.117647 0 0 0 0 0.188235 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_12"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_12" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_12" x1="33.1402" y1="18.6155" x2="2.95495" y2="78.4213" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF1A35"/>
                    <stop offset="1" stopColor="#A01F2E"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_12" x1="55.0449" y1="17.4853" x2="53.8164" y2="82.977" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF1A35"/>
                    <stop offset="1" stopColor="#A01F2E"/>
                </linearGradient>
            </defs>
        </svg>
    );
};