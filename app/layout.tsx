'use client';

import React, { useState, useEffect } from 'react';
import AOSInitializer from '../components/AOSInitializer';
import NavButton from '../components/NavButton';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Reset menu when screen size is expanded
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* ใส่ข้อมูล head ที่จำเป็น */}
      </head>
      <body>
        <AOSInitializer />
        <header className="flex items-center justify-between p-5 bg-blue-600 text-white">
          <div className="flex-1">
            <h1 className="header-title" data-aos="fade-down">My Portfolio</h1>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="hamburger-icon">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
          </div>
          <nav className={`hamburger-menu ${isOpen ? 'open' : ''} md:flex md:items-center md:space-x-4`}>
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li>
                <NavButton href="/" aos="flip-left" aosDelay="100">Home</NavButton>
              </li>
              <li>
                <NavButton href="/about" aos="flip-left" aosDelay="200">About</NavButton>
              </li>
              <li>
                <NavButton href="/projects" aos="flip-left" aosDelay="300">Projects</NavButton>
              </li>
              <li>
                <NavButton href="/contact" aos="flip-left" aosDelay="400">Contact</NavButton>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-10">
          {children}
        </main>
        <footer className="p-5 bg-gray-800 text-white text-center">
          © {new Date().getFullYear()} My Portfolio
        </footer>
      </body>
    </html>
  );
}
