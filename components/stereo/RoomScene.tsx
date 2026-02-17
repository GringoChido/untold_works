import React from 'react';
import './stereo.css';

const RoomScene: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full bg-[#0a0806] overflow-hidden py-8 sm:py-12">
      {/* Warm ambient spotlight from above */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(255,180,100,0.06) 0%, transparent 70%), radial-gradient(ellipse 80% 50% at 50% 80%, rgba(255,120,50,0.03) 0%, transparent 60%)',
        }}
      />

      {/* Subtle wall grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px)',
        }}
      />

      {/* Main content (stereo unit) */}
      <div className="relative z-10 px-4 sm:px-8">
        <div className="max-w-[800px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RoomScene;
