import React from 'react';
import { Download } from 'lucide-react';

export const ResumeButton: React.FC = () => {
  return (
    <button className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 group relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/25 animate-pulse-glow">
      <div className="relative flex items-center gap-2 sm:gap-3">
        <span className="relative z-10 text-sm sm:text-base">Resume</span>
        <div className="relative">
          <Download className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 animate-orbit">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Gradient shift background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      {/* Pulse glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
    </button>
  );
};