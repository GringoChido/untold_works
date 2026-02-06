import React from 'react';
import './stereo.css';

const RoomScene: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0806] overflow-hidden">
      {/* Wall texture */}
      <div className="absolute inset-0 wood-dark opacity-40" />

      {/* Ambient warm glow from behind stereo */}
      <div className="absolute inset-0 ambient-glow" />

      {/* Wall — Bold "UNTOLD ANALOG" headline */}
      <div className="absolute top-[4%] sm:top-[6%] left-0 right-0 flex flex-col items-center px-4">
        <h2 className="font-sans font-black text-[clamp(2.5rem,12vw,120px)] text-white/[0.06] uppercase tracking-tighter leading-none text-center select-none">
          UNTOLD
        </h2>
        <h2 className="font-sans font-black text-[clamp(2.5rem,12vw,120px)] text-white/[0.06] uppercase tracking-tighter leading-none text-center select-none -mt-2 sm:-mt-4">
          ANALOG
        </h2>
        {/* Subtle accent line */}
        <div className="w-[60px] h-[2px] bg-untold-orange/15 mt-3 sm:mt-5" />
      </div>

      {/* Shelf surface */}
      <div className="absolute left-0 right-0" style={{ top: '38%' }}>
        <div className="h-[12px] wood-grain border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Main content (stereo unit goes here) */}
      <div className="relative z-10 pt-[40%] sm:pt-[38%] px-4 sm:px-8 pb-20">
        <div className="max-w-[800px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RoomScene;
