import React from 'react';
import { motion } from 'framer-motion';
import './stereo.css';

interface TurntableProps {
  playing: boolean;
  power: boolean;
}

const Turntable: React.FC<TurntableProps> = ({ playing, power }) => {
  return (
    <div className="relative w-full aspect-square max-w-[300px] mx-auto">
      {/* Turntable base / platter */}
      <div className="absolute inset-0 rounded-full felt-texture border border-white/5 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)]" />

      {/* Vinyl record */}
      <motion.div
        className={`absolute inset-[10px] rounded-full vinyl-grooves ${playing ? 'vinyl-spin' : ''}`}
        style={{
          boxShadow: '0 0 20px rgba(0,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.2)',
        }}
        animate={!playing ? { rotate: 0 } : undefined}
      >
        {/* Vinyl highlight sheen */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)',
          }}
        />

        {/* Record label center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#8B2500] via-[#A0522D] to-[#6B1C00] border-2 border-black/30 flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]">
          {/* Label text */}
          <div className="text-center">
            <div className="font-led text-[6px] text-white/70 tracking-[0.2em] uppercase">UNTOLD</div>
            <div className="font-sans font-black text-[8px] text-white/90 tracking-tight uppercase">ANALOG</div>
            <div className="font-led text-[5px] text-white/40 tracking-[0.15em] mt-0.5">33⅓ RPM</div>
          </div>
          {/* Spindle hole */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-black border border-white/10" />
        </div>
      </motion.div>

      {/* Tonearm */}
      <div className="absolute top-[8px] right-[-8px] z-10">
        {/* Arm pivot base */}
        <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#555] to-[#222] border border-white/10 shadow-md" />

        {/* Arm */}
        <motion.div
          className="absolute top-[6px] right-[6px] origin-top-right"
          animate={{
            rotate: playing ? -32 : -15,
          }}
          transition={{ type: 'spring', stiffness: 40, damping: 12 }}
        >
          {/* Arm shaft */}
          <div className="w-[2px] h-[110px] bg-gradient-to-b from-[#888] to-[#444] rounded-full shadow-md" />

          {/* Headshell */}
          <div className="absolute bottom-0 left-[-4px]">
            <div className="w-[10px] h-[14px] bg-gradient-to-b from-[#666] to-[#333] rounded-b-sm" />
            {/* Stylus */}
            <div className="w-[1px] h-[4px] bg-white/40 mx-auto" />
          </div>
        </motion.div>
      </div>

      {/* Power indicator on platter */}
      {power && (
        <div className="absolute bottom-[20px] left-[20px]">
          <div className={`w-[4px] h-[4px] rounded-full ${playing ? 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]' : 'bg-untold-orange/50'}`} />
        </div>
      )}
    </div>
  );
};

export default Turntable;
