
import React, { useEffect, useRef } from 'react';
import { historicalEvents } from '@/utils/dateUtils';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="timeline" className="section-container bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
              Visual Journey
            </span>
            <br />
            Human History Timeline
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Explore key moments in human civilization through the lens of the Holocene Calendar.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {historicalEvents.map((event, index) => (
              <div key={index} className="timeline-item reveal relative">
                <div className="timeline-dot"></div>
                <div className="timeline-card hover:shadow-md">
                  <span className="inline-block py-1 px-2 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
                    {event.year} HE
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.event}</h3>
                  <p className="text-foreground/80 text-sm">{event.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
