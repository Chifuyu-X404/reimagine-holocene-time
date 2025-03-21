
import React, { useState } from 'react';
import { toHoloceneYear, fromHoloceneYear } from '@/utils/dateUtils';

const DateConverter = () => {
  const [gregorianYear, setGregorianYear] = useState<number>(2023);
  const [era, setEra] = useState<'CE' | 'BCE'>('CE');
  const [holoceneYear, setHoloceneYear] = useState<number>(12023);
  const [activeTab, setActiveTab] = useState<'g-to-h' | 'h-to-g'>('g-to-h');
  const [isConverting, setIsConverting] = useState(false);
  
  const handleGregorianConvert = () => {
    setIsConverting(true);
    setTimeout(() => {
      setHoloceneYear(toHoloceneYear(gregorianYear, era));
      setIsConverting(false);
    }, 400);
  };
  
  const handleHoloceneConvert = () => {
    setIsConverting(true);
    setTimeout(() => {
      const { year, era: newEra } = fromHoloceneYear(holoceneYear);
      setGregorianYear(year);
      setEra(newEra);
      setIsConverting(false);
    }, 400);
  };
  
  return (
    <section id="converter" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-2">
              Interactive Tool
            </span>
            <br />
            Date Converter
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Instantly transform dates between the Gregorian and Holocene calendars.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
          {/* Tab navigation */}
          <div className="flex border-b border-border">
            <button
              className={`flex-1 py-4 font-medium text-center transition-colors ${
                activeTab === 'g-to-h' 
                  ? 'bg-accent text-primary' 
                  : 'hover:bg-secondary/50 text-foreground/70'
              }`}
              onClick={() => setActiveTab('g-to-h')}
            >
              Gregorian → Holocene
            </button>
            <button
              className={`flex-1 py-4 font-medium text-center transition-colors ${
                activeTab === 'h-to-g' 
                  ? 'bg-accent text-primary' 
                  : 'hover:bg-secondary/50 text-foreground/70'
              }`}
              onClick={() => setActiveTab('h-to-g')}
            >
              Holocene → Gregorian
            </button>
          </div>
          
          {/* Converter content */}
          <div className="p-8">
            {activeTab === 'g-to-h' ? (
              <div className="flex flex-col">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Gregorian Year
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 input-bordered"
                      value={gregorianYear}
                      onChange={(e) => setGregorianYear(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Era
                    </label>
                    <select
                      className="w-full px-4 py-2 input-bordered"
                      value={era}
                      onChange={(e) => setEra(e.target.value as 'CE' | 'BCE')}
                    >
                      <option value="CE">CE (AD)</option>
                      <option value="BCE">BCE (BC)</option>
                    </select>
                  </div>
                </div>
                
                <button
                  className="px-6 py-3 mx-auto mb-8 flex items-center justify-center space-x-2 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 disabled:opacity-70"
                  onClick={handleGregorianConvert}
                  disabled={isConverting}
                >
                  {isConverting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <span>Convert to Holocene</span>
                  )}
                </button>
                
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground/80 mb-2">
                    Holocene Year (HE)
                  </div>
                  <div className="text-4xl md:text-5xl font-mono font-bold text-primary">
                    {holoceneYear}
                    <span className="text-2xl md:text-3xl ml-2">HE</span>
                  </div>
                  <p className="mt-4 text-sm text-foreground/70">
                    {era === 'CE' ? (
                      <>
                        {gregorianYear} CE + 10,000 = {holoceneYear} HE
                      </>
                    ) : (
                      <>
                        10,001 - {gregorianYear} BCE = {holoceneYear} HE
                      </>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Holocene Year (HE)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 input-bordered"
                    value={holoceneYear}
                    onChange={(e) => setHoloceneYear(Number(e.target.value))}
                  />
                </div>
                
                <button
                  className="px-6 py-3 mx-auto mb-8 flex items-center justify-center space-x-2 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 disabled:opacity-70"
                  onClick={handleHoloceneConvert}
                  disabled={isConverting}
                >
                  {isConverting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <span>Convert to Gregorian</span>
                  )}
                </button>
                
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground/80 mb-2">
                    Gregorian Year
                  </div>
                  <div className="text-4xl md:text-5xl font-mono font-bold text-primary">
                    {gregorianYear}
                    <span className="text-2xl md:text-3xl ml-2">{era}</span>
                  </div>
                  <p className="mt-4 text-sm text-foreground/70">
                    {era === 'CE' ? (
                      <>
                        {holoceneYear} HE - 10,000 = {gregorianYear} CE
                      </>
                    ) : (
                      <>
                        10,001 - {holoceneYear} HE = {gregorianYear} BCE
                      </>
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateConverter;
