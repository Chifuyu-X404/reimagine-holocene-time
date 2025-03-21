
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentHoloceneDate } from "@/utils/dateUtils";

const NotFound = () => {
  const location = useLocation();
  const { year } = getCurrentHoloceneDate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
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
