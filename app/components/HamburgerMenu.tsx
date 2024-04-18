'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const linkStyle = {
      display: 'block',
      margin: '10px',
    };

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <HamburgerIcon />
            </button>
            {isOpen && (
                <div style={{position:'absolute', top:'100%', backgroundColor:'#f2f2f2', borderRadius:'10px', padding:'10px'}}>
                    <nav>
                        <Link href="/ecosort" style={linkStyle}>
                            EcoSort
                        </Link>
                        <Link href="/ecolocator" style={linkStyle}>
                            EcoLocator
                        </Link>
                        <Link href="/ecoexchange" style={linkStyle}>
                            EcoExchange
                        </Link>
                        <Link href="/ecodonate" style={linkStyle}>
                            EcoDonate
                        </Link>
                        <Link href="/ecodashboard" style={linkStyle}>
                            EcoDashboard
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="15"></rect>
      <rect y="30" width="100" height="15"></rect>
      <rect y="60" width="100" height="15"></rect>
    </svg>
  );
}