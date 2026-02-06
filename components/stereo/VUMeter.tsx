import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import './stereo.css';

interface VUMeterProps {
  level: number; // 0 to 1
  label: string;
}

const VUMeter: React.FC<VUMeterProps> = ({ level, label }) => {
  const springLevel = useSpring(level, { stiffness: 300, damping: 15, mass: 0.5 });
  const rotation = useTransform(springLevel, [0, 1], [-45, 45]);

  const tickMarks = [
    { angle: -45, label: '-20' },
    { angle: -30, label: '-10' },
    { angle: -18, label: '-7' },
    { angle: -8, label: '-5' },
    { angle: 0, label: '-3' },
    { angle: 12, label: '0' },
    { angle: 28, label: '+3' },
    { angle: 45, label: '' },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[120px] h-[70px] sm:w-[140px] sm:h-[80px] overflow-hidden">
        {/* VU Meter face */}
        <div className="absolute inset-0 vu-backlight rounded-t-full" />

        {/* Dial face background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] rounded-t-full bg-[#1a1812] border border-white/10 border-b-0 overflow-hidden">
          {/* Tick marks and labels */}
          {tickMarks.map((tick, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-1/2"
              style={{
                transform: `translateX(-50%) rotate(${tick.angle}deg)`,
                transformOrigin: 'bottom center',
                height: '50px',
                width: '1px',
              }}
            >
              <div className={`w-[1px] ${i >= 6 ? 'bg-red-500/70' : 'bg-white/30'}`} style={{ height: tick.label ? '7px' : '5px' }} />
              {tick.label && (
                <span
                  className={`absolute top-[9px] left-1/2 -translate-x-1/2 font-led text-[7px] sm:text-[8px] ${i >= 6 ? 'text-red-400/70' : 'text-white/35'}`}
                  style={{ transform: `translateX(-50%) rotate(${-tick.angle}deg)` }}
                >
                  {tick.label}
                </span>
              )}
            </div>
          ))}

          {/* "VU" label */}
          <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 font-led text-[8px] sm:text-[9px] text-white/20 tracking-[0.25em]">
            VU
          </div>
        </div>

        {/* Needle */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-[1.5px] bg-gradient-to-t from-white/80 to-red-400 z-10"
          style={{
            height: '48px',
            transformOrigin: 'bottom center',
            rotate: rotation,
            translateX: '-50%',
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-red-400 shadow-[0_0_4px_rgba(239,68,68,0.5)]" />
        </motion.div>

        {/* Needle pivot point */}
        <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] rounded-full bg-white/15 border border-white/10 z-20" />
      </div>
      <span className="font-led text-[7px] sm:text-[8px] text-white/25 tracking-[0.3em] mt-1.5 uppercase">{label}</span>
    </div>
  );
};

export default VUMeter;
