"use client";

import { useState, useEffect } from "react";

const BANNER_TEXT =
  "Welcome to Virtec. Precision flow meters, high-efficiency VFDs, and IAQ sensors for optimal HVAC performance. Engineered for accurate measurement, variable speed drives, and real-time air quality analytics—discover our solutions.";

// Hide on even small scroll - threshold of 5px
const SCROLL_THRESHOLD = 5;

export default function WelcomeBanner() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > SCROLL_THRESHOLD);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-40 top-16 sm:top-20 md:top-24 lg:top-[97px] xl:top-[97px] transition-all duration-300 ease-out ${
        hidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
      aria-hidden={hidden}
      aria-label="Welcome banner"
    >
      <div className="relative flex w-full overflow-hidden border-b border-slate-200/80 bg-primary-yellow/10 py-2.5 sm:py-3 lg:py-3 xl:py-3 select-none backdrop-blur-sm">
        <div className="welcome-banner-track flex shrink-0 items-center gap-8 whitespace-nowrap">
          <span className="text-sm font-medium text-slate-800 sm:text-base">
            {BANNER_TEXT}
          </span>
          <span
            className="hidden text-slate-500 sm:inline"
            aria-hidden
          >
           
          </span>
          <span className="text-sm font-medium text-slate-800 sm:text-base">
            {BANNER_TEXT}
          </span>
          <span
            className="hidden text-slate-500 sm:inline"
            aria-hidden
          >
            •
          </span>
          <span className="text-sm font-medium text-slate-800 sm:text-base">
            {BANNER_TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}
