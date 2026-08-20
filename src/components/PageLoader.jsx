'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const triggerFinish = () => {
      // Allow brief smooth visual buffer before fading out
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => setLoading(false), 500);
      }, 300);
    };

    // Check if browser has already completed loading all resources
    if (document.readyState === 'complete') {
      triggerFinish();
    } else {
      const onLoad = () => triggerFinish();
      window.addEventListener('load', onLoad);
      
      // Fallback max timer to prevent infinite stuck loader
      const fallbackTimer = setTimeout(triggerFinish, 2000);

      return () => {
        window.removeEventListener('load', onLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 transition-opacity duration-500 ease-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-5">
        {/* Centered Brand Text matching user image */}
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight select-none">
          BusinessFinder
        </h1>

        {/* Real-time Line Loader */}
        <div className="w-48 sm:w-60 h-[3.5px] bg-slate-100 rounded-full overflow-hidden relative">
          <div className="h-full bg-slate-900 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
