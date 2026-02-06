import React from 'react';
import './stereo.css';

const RoomScene: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0806] overflow-hidden">
      {/* Wall texture */}
      <div className="absolute inset-0 wood-dark opacity-40" />

      {/* Ambient warm glow from behind stereo */}
      <div className="absolute inset-0 ambient-glow" />

      {/* Wall decorations */}
      <div className="absolute top-[5%] left-0 right-0 flex justify-center gap-6 sm:gap-10 px-4 sm:px-10 max-w-[900px] mx-auto">
        {/* Poster 1 — Concert */}
        <div className="poster-worn w-[120px] sm:w-[180px] h-[160px] sm:h-[240px] bg-gradient-to-b from-[#1a0a00] to-[#0d0500] border border-white/5 p-3 sm:p-4 flex flex-col justify-between transform rotate-[-2deg] hidden sm:flex">
          <div>
            <div className="font-sans font-black text-[10px] sm:text-[14px] text-untold-orange/80 uppercase tracking-tight leading-tight">
              LIVE AT<br/>THE FILLMORE
            </div>
            <div className="font-led text-[6px] sm:text-[8px] text-white/30 mt-1 tracking-[0.2em]">DEC 1974</div>
          </div>
          <div className="space-y-1">
            <div className="h-[1px] bg-untold-orange/20" />
            <div className="h-[1px] bg-untold-orange/10" />
            <div className="h-[1px] bg-untold-orange/5" />
          </div>
          <div className="font-mono text-[5px] sm:text-[6px] text-white/15 tracking-[0.3em] uppercase">
            ALL AGES • 8PM DOORS
          </div>
        </div>

        {/* Poster 2 — Analog Sessions */}
        <div className="poster-worn w-[140px] sm:w-[200px] h-[180px] sm:h-[260px] bg-gradient-to-b from-[#0a0500] to-[#050200] border border-untold-orange/10 p-3 sm:p-5 flex flex-col justify-center items-center transform rotate-[1deg]">
          {/* Abstract circle shape */}
          <div className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px] rounded-full border-2 border-untold-orange/30 mb-3 sm:mb-4 flex items-center justify-center">
            <div className="w-[25px] sm:w-[40px] h-[25px] sm:h-[40px] rounded-full bg-untold-orange/10" />
          </div>
          <div className="font-sans font-black text-[12px] sm:text-[18px] text-untold-orange/70 uppercase tracking-tighter text-center leading-tight">
            ANALOG<br/>SESSIONS
          </div>
          <div className="font-led text-[6px] sm:text-[7px] text-white/20 mt-2 tracking-[0.3em]">'74 — '76</div>
        </div>

        {/* Poster 3 — UNTOLD */}
        <div className="poster-worn w-[120px] sm:w-[180px] h-[160px] sm:h-[240px] bg-gradient-to-b from-[#120800] to-[#080400] border border-white/5 p-3 sm:p-4 flex flex-col justify-between transform rotate-[2.5deg] hidden md:flex">
          <div className="font-mono text-[5px] sm:text-[6px] text-untold-orange/30 tracking-[0.4em] uppercase">
            PRESENTS
          </div>
          <div>
            <div className="font-sans font-black text-[16px] sm:text-[24px] text-white/60 uppercase tracking-tighter leading-none">
              UNTOLD
            </div>
            <div className="font-sans font-black text-[10px] sm:text-[14px] text-untold-orange/50 uppercase tracking-tighter">
              .WORKS
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-untold-orange/20" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-untold-orange/10" />
          </div>
        </div>
      </div>

      {/* Shelf surface */}
      <div className="absolute left-0 right-0" style={{ top: '38%' }}>
        {/* Shelf top surface */}
        <div className="h-[12px] wood-grain border-t border-white/5 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Joint in ashtray */}
      <div className="absolute hidden sm:block" style={{ top: '35.5%', right: '8%' }}>
        <div className="relative">
          {/* Ashtray */}
          <div className="w-[30px] h-[10px] bg-gradient-to-b from-[#555] to-[#333] rounded-full border border-white/10" />

          {/* Joint */}
          <div className="absolute bottom-[4px] left-[4px] w-[22px] h-[3px] bg-gradient-to-r from-[#e8dcc8] to-[#d4c4a8] rounded-full transform rotate-[-15deg]">
            {/* Ember end */}
            <div className="absolute right-[-1px] top-[-0.5px] w-[4px] h-[4px] rounded-full bg-gradient-radial from-orange-400 to-red-600 ember-glow" style={{ background: 'radial-gradient(circle, #ff6b35, #cc3300)' }} />
          </div>

          {/* Smoke wisps */}
          <div className="absolute bottom-[8px] right-[2px]">
            <div className="smoke-wisp w-[2px] h-[8px] bg-white/10 rounded-full" style={{ filter: 'blur(1.5px)' }} />
            <div className="smoke-wisp-delayed absolute left-[3px] w-[1.5px] h-[6px] bg-white/8 rounded-full" style={{ filter: 'blur(2px)' }} />
            <div className="smoke-wisp-slow absolute left-[-2px] w-[1px] h-[10px] bg-white/6 rounded-full" style={{ filter: 'blur(2.5px)' }} />
          </div>
        </div>
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
