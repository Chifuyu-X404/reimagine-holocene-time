
import React, { useEffect, useRef } from 'react';
import { getCurrentHoloceneDate, formatHoloceneDate } from '@/utils/dateUtils';

const HeroSection = () => {
  const { year, month, day } = getCurrentHoloceneDate();
  const todayHolocene = formatHoloceneDate(year, month, day);
  
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const digitSpans = counterRef.current?.querySelectorAll('.digit-wrapper') || [];
            digitSpans.forEach((span, index) => {
              setTimeout(() => {
                span.classList.add('animate-fade-in');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-50 animate-pulse-soft animation-delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide">
            Today is {todayHolocene}
          </span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance relative">
          <span className="relative">
            Reimagining Time: 
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded"></span>
          </span>
          <br />
          <span className="text-primary">The Holocene Calendar</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Discover a revolutionary approach to timekeeping that embraces the full sweep of human civilization, 
          beginning at the dawn of the Holocene epoch—approximately 10,000 BCE.
        </p>
        
        <div ref={counterRef} className="mb-16 text-5xl md:text-6xl lg:text-8xl font-mono font-bold tracking-tight text-balance overflow-visible">
          {year.toString().split('').map((digit, index) => (
            <div key={index} className="digit-wrapper inline-block opacity-0" style={{width: '0.65em'}}>
              <span>{digit}</span>
            </div>
          ))}
          <span className="text-primary animate-pulse-soft"> HE</span>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#about"
            className="px-6 py-3 rounded-md bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80 hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-foreground/30 rounded-full animate-fade-in"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
