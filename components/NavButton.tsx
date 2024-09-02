// /components/NavButton.tsx
'use client'; // ระบุว่าเป็น Client Component

import React from 'react';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  aos?: string;
  aosDelay?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, aos, aosDelay }) => {
  return (
    <button
      className="nav-button"
      data-aos={aos}
      data-aos-delay={aosDelay}
      onClick={() => window.location.href = href}
    >
      {children}
    </button>
  );
};

export default NavButton;
