
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
              The Concept
            </span>
            <br />
            About the Holocene Calendar
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Understanding a revolutionary approach to measuring human history.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full">
            <h3 className="text-xl font-bold mb-3 text-primary">Origins & Development</h3>
            <p className="text-foreground/80 mb-4">
              The Holocene Calendar, also known as the Human Era (HE), was proposed in 1993 by
              Italian scientist Cesare Emiliani. As a geologist and paleontologist, Emiliani sought
              to create a calendar that recognized humanity's broader history.
            </p>
            <p className="text-foreground/80">
              By adding 10,000 years to the conventional Gregorian calendar, Emiliani aligned the 
              start date with the beginning of the Holocene epoch—the geological period marking the 
              end of the last major ice age and the emergence of human civilization.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full">
            <h3 className="text-xl font-bold mb-3 text-primary">How It Works</h3>
            <p className="text-foreground/80 mb-4">
              The Holocene Calendar is remarkably simple: it adds 10,000 years to the Gregorian calendar's
              CE/AD dates. For example, 2023 CE becomes 12023 HE.
            </p>
            <p className="text-foreground/80">
              For BCE/BC dates, the conversion follows the formula: 10,001 - BCE year = HE year.
              For instance, 5000 BCE becomes 5001 HE (10,001 - 5,000).
            </p>
            <p className="text-foreground/80 mt-4">
              This system eliminates the awkward backward counting of the BCE/BC era and creates a
              continuous timeline that better represents human history.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
          <h3 className="text-xl font-bold mb-4 text-primary">Why It Matters</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Broader Historical Context</h4>
              <p className="text-foreground/80 text-sm mb-4">
                The Holocene Calendar provides a more inclusive view of human achievement by encompassing
                the entire span of civilization, not just the last 2,000 years.
              </p>
              
              <h4 className="font-bold mb-2">Eliminates Backward Counting</h4>
              <p className="text-foreground/80 text-sm">
                The BCE/BC system's backward counting creates cognitive challenges when conceptualizing
                ancient history. The Holocene Calendar's continuous forward count is more intuitive.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Culturally Neutral</h4>
              <p className="text-foreground/80 text-sm mb-4">
                By basing the epoch on a significant geological event rather than a religious figure,
                the Holocene Calendar offers a secular alternative that can be embraced by all cultures.
              </p>
              
              <h4 className="font-bold mb-2">Scientific Alignment</h4>
              <p className="text-foreground/80 text-sm">
                The calendar aligns more closely with scientific understanding of human development,
                emphasizing the agricultural revolution that enabled the rise of complex societies.
              </p>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-primary pl-4 mt-6 italic text-foreground/80">
            "Using a calendar with the all-positive Human Era numbering system... would make the
            chronology of human history clearer and more easily grasped."
            <footer className="text-right mt-2 text-sm font-medium">— Cesare Emiliani</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
