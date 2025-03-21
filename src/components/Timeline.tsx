
import React, { useEffect, useRef } from 'react';
import { historicalEvents } from '@/utils/historicalEvents';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

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

  // Fixed timeline width - making it very wide to ensure horizontal scrolling
  const timelineWidth = "6000px";

  return (
    <section id="timeline" className="section-container bg-background relative overflow-hidden border-t border-border/10">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background/0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
              Visual Journey
            </span>
            <br />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Human History Timeline
            </span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Explore key moments in human civilization through the lens of the Holocene Calendar.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative">
          <ScrollArea className="w-full">
            <div className="py-8 px-10 relative" style={{ width: timelineWidth, transition: 'width 0.3s ease-out' }}>
              {/* Timeline line */}
              <div className="timeline-line-horizontal"></div>
              
              {/* Timeline items */}
              <div className="flex items-start justify-between">
                {historicalEvents.map((event, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <div 
                        className={cn(
                          "timeline-item reveal relative mx-2 cursor-pointer group",
                          index % 2 === 0 ? "mt-12" : "mt-0"
                        )}
                        style={{ width: "120px" }}
                      >
                        <div className="timeline-dot-horizontal group-hover:scale-125 transition-all duration-300 ease-out-expo"></div>
                        <div className="text-center">
                          <span className="block text-xl font-bold text-primary">{event.year} HE</span>
                          <span className="block text-sm text-foreground/80 mt-1 line-clamp-1">{event.event}</span>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="timeline-card-hover w-72 p-4 backdrop-blur-lg bg-card/80 border border-border/50">
                      <span className="inline-block py-1 px-2 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
                        {event.year} HE
                      </span>
                      <h3 className="text-xl font-bold mb-2">{event.event}</h3>
                      <p className="text-foreground/80 text-sm">{event.details}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
