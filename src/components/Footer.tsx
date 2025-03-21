
import React from 'react';
import { getCurrentHoloceneDate } from '@/utils/dateUtils';

const Footer = () => {
  const { year } = getCurrentHoloceneDate();
  
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-xl font-display font-semibold tracking-tight">
              <span className="text-foreground">Holocene</span>
              <span className="text-primary ml-1">Era</span>
            </a>
            <p className="mt-3 text-sm text-foreground/70 max-w-md">
              Reimagining human history through a continuous timeline that begins at the dawn of civilization.
              The Holocene Calendar adds 10,000 years to our conventional dating system.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#converter" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Date Converter
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#this-day" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  This Day
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://en.wikipedia.org/wiki/Holocene_calendar" target="_blank" rel="noopener noreferrer" 
                  className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Wikipedia Article
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=czgOWmtGVGs" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Kurzgesagt Video
                </a>
              </li>
              <li>
                <a href="https://www.scientificamerican.com/article/a-new-calendar-for-the-solar-system/" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Scientific American
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between text-sm text-foreground/60">
          <div>
            &copy; {year} HE. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Inspired by Cesare Emiliani's proposal in <span className="font-medium">11993 HE</span>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
