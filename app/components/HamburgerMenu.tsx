'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const linkStyle = {
      display: 'block',
      margin: '10px',
      color: 'black',
      textDecoration: 'none',
    };

    const linkStyleDark = {
      ...linkStyle,
      color: 'white',
    };

    const { resolvedTheme } = useTheme();

    const isDarkMode = resolvedTheme === 'dark';
    const fillColor = isDarkMode ? '#ffffff' : '#000000';

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={() => setIsOpen(!isOpen)}>
            <svg viewBox="0 0 100 80" width="40" height="40">
                <rect y="10" width="100" height="15" fill={fillColor}></rect>
                <rect y="40" width="100" height="15" fill={fillColor}></rect>
                <rect y="70" width="100" height="15" fill={fillColor}></rect>
            </svg>
            </button>
            {isOpen && (
                <div style={{position:'absolute', top:'100%', backgroundColor: isDarkMode ? '#1a202c' : '#f2f2f2', borderRadius:'10px', padding:'10px'}}>
                    <nav>
                        <Link href="/ecosort" style={isDarkMode ? linkStyleDark : linkStyle}>
                            EcoSort
                        </Link>
                        <Link href="/ecolocator" style={isDarkMode ? linkStyleDark : linkStyle}>
                            EcoLocator
                        </Link>
                        <Link href="/ecoexchange" style={isDarkMode ? linkStyleDark : linkStyle}>
                            EcoExchange
                        </Link>
                        <Link href="/ecodonate" style={isDarkMode ? linkStyleDark : linkStyle}>
                            EcoDonate
                        </Link>
                        <Link href="/ecodashboard" style={isDarkMode ? linkStyleDark : linkStyle}>
                            EcoDashboard
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}