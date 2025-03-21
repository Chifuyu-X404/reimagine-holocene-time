
import React, { useState, useEffect } from 'react';
import { getCurrentHoloceneDate, formatHoloceneDate, getThisDayEvent } from '@/utils/dateUtils';

const ThisDaySection = () => {
  const [event, setEvent] = useState(getThisDayEvent());
  const currentDate = getCurrentHoloceneDate();
  const formattedDate = formatHoloceneDate(currentDate.year, currentDate.month, currentDate.day);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate loading a new event
      setEvent(getThisDayEvent());
    }, 24 * 60 * 60 * 1000); // Refresh every 24 hours
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="this-day" className="section-container bg-accent/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
              Daily Feature
            </span>
            <br />
            This Day in Holocene History
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Reimagining historical events through the lens of the Holocene Calendar.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-primary/10 flex flex-col items-center justify-center text-center p-4 shadow-inner">
                  <div className="text-sm font-medium text-primary mb-1">Year</div>
                  <div className="text-4xl font-mono font-bold">{event.year}</div>
                  <div className="text-sm text-primary mt-1">HE</div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="mb-2 text-sm font-medium text-primary">
                  Featured Event
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{event.event}</h3>
                <p className="text-foreground/80">{event.details}</p>
                
                <div className="mt-6 pt-4 border-t border-border text-sm text-foreground/60">
                  Today is <span className="font-medium">{formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            className="px-6 py-2 rounded-md bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80"
            onClick={() => setEvent(getThisDayEvent())}
          >
            Show Another Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThisDaySection;
