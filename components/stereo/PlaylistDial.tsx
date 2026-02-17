import React from 'react';
import { motion } from 'framer-motion';
import './stereo.css';

interface PlaylistDialProps {
  onShuffle: () => void;
  power: boolean;
}

const PlaylistDial: React.FC<PlaylistDialProps> = ({ onShuffle, power }) => {
  const [rotationCount, setRotationCount] = React.useState(0);

  const handleClick = () => {
    if (!power) return;
    setRotationCount(prev => prev + 1);
    onShuffle();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`relative w-[52px] h-[52px] ${power ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
        onClick={handleClick}
      >
        {/* Knob ring */}
        <div className="absolute inset-0 rounded-full bg-black/40 border border-white/5" />

        {/* Knob body */}
        <motion.div
          className="absolute inset-[4px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #4a4a4a 0%, #333 30%, #252525 70%, #1a1a1a 100%)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.1), 0 0 0 2px #1a1a1a, 0 0 0 3px #2a2a2a',
          }}
          animate={{ rotate: rotationCount * 60 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          {/* Indicator notches */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <div
              key={angle}
              className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[1.5px] h-[6px] bg-white/20 rounded-full"
              style={{ transform: `translateX(-50%) rotate(${angle}deg)`, transformOrigin: `50% ${(52 - 8) / 2}px` }}
            />
          ))}
          {/* Primary indicator */}
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[2px] h-[8px] bg-cyan-400/70 rounded-full" />
        </motion.div>
      </div>
      <span className="font-led text-[7px] text-white/20 tracking-[0.3em] uppercase">SHUFFLE</span>
    </div>
  );
};

export default PlaylistDial;
