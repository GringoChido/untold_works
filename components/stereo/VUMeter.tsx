import React, { useRef, useEffect } from 'react';
import './stereo.css';

interface VUMeterProps {
  level: number; // 0 to 1
  label: string;
}

const VUMeter: React.FC<VUMeterProps> = ({ level, label }) => {
  const needleRef = useRef<HTMLDivElement>(null);

  // Direct DOM manipulation — bypasses React render cycle for smooth 60fps needle movement
  useEffect(() => {
    if (needleRef.current) {
      const rotation = -45 + level * 90; // maps 0→-45deg, 1→+45deg
      needleRef.current.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
    }
  }, [level]);

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
      {/* Meter housing */}
      <div className="relative w-[130px] h-[75px] sm:w-[155px] sm:h-[90px] overflow-hidden">
        {/* Warm backlight glow */}
        <div className="absolute inset-0 vu-backlight rounded-t-full" />

        {/* Dial face */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[60px] sm:w-[145px] sm:h-[72px] rounded-t-full bg-gradient-to-b from-[#1e1c16] to-[#15130e] border border-white/[0.08] border-b-0 overflow-hidden shadow-[inset_0_1px_6px_rgba(0,0,0,0.5)]">
          {/* Subtle warm tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff8c00]/[0.02] to-transparent pointer-events-none" />

          {/* Tick marks */}
          {tickMarks.map((tick, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-1/2"
              style={{
                transform: `translateX(-50%) rotate(${tick.angle}deg)`,
                transformOrigin: 'bottom center',
                height: '55px',
                width: '1px',
              }}
            >
              <div className={`w-[1px] ${i >= 6 ? 'bg-red-500/80' : 'bg-[#e8e4d8]/30'}`} style={{ height: tick.label ? '8px' : '5px' }} />
              {tick.label && (
                <span
                  className={`absolute top-[10px] left-1/2 -translate-x-1/2 font-led text-[7px] sm:text-[8px] ${i >= 6 ? 'text-red-400/80' : 'text-[#e8e4d8]/30'}`}
                  style={{ transform: `translateX(-50%) rotate(${-tick.angle}deg)` }}
                >
                  {tick.label}
                </span>
              )}
            </div>
          ))}

          {/* "VU" label */}
          <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 font-led text-[8px] sm:text-[10px] text-[#e8e4d8]/20 tracking-[0.3em]">
            VU
          </div>
        </div>

        {/* Needle — direct DOM via ref, no Framer Motion */}
        <div
          ref={needleRef}
          className="absolute bottom-0 left-1/2 w-[1.5px] z-10"
          style={{
            height: '54px',
            transformOrigin: 'bottom center',
            transform: 'translateX(-50%) rotate(-45deg)',
            background: 'linear-gradient(to top, rgba(255,255,255,0.8), #e8524a)',
            transition: 'transform 0.08s linear',
          }}
        >
          {/* Needle tip glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-red-400 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
        </div>

        {/* Needle pivot */}
        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-gradient-to-b from-[#444] to-[#222] border border-white/10 z-20 shadow-[0_0_4px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Channel label */}
      <span className="font-led text-[8px] sm:text-[9px] text-[#e8e4d8]/20 tracking-[0.4em] mt-2 uppercase">{label}</span>
    </div>
  );
};

export default VUMeter;
