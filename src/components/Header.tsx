
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-display font-semibold tracking-tight">
            <span className="text-foreground">Holocene</span>
            <span className="text-primary ml-1">Era</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#converter" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Converter
            </a>
            <a href="#timeline" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Timeline
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#this-day" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              This Day
            </a>
          </nav>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md text-foreground/80 hover:bg-secondary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
