
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentHoloceneDate } from "@/utils/dateUtils";

const NotFound = () => {
  const location = useLocation();
  const { year } = getCurrentHoloceneDate();

  useEffect(() => {
    // Apply dark theme
    document.body.classList.add('dark');
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute inset-0 -z-10 bg-[#0A0B12]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-top [mask-image:linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2),transparent)]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-50 blur-2xl"></div>
      </div>
      <div className="text-center max-w-md backdrop-blur-lg bg-card/30 p-8 rounded-xl border border-border/20 shadow-xl">
        <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-4">
          Year {year} HE
        </div>
        <h1 className="text-6xl font-display font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-foreground/80 mb-6">
          This timeline doesn't exist in our records
        </p>
        <a 
          href="/" 
          className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 inline-block"
        >
          Return to Present Day
        </a>
      </div>
    </div>
  );
};

export default NotFound;
