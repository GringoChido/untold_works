import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './stereo/stereo.css';

const StereoTeaser: React.FC = () => {
  return (
    <Link to="/stereo" className="block group">
      <section className="relative bg-[#0a0806] border-y border-white/5 overflow-hidden cursor-pointer">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,23,0.06) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-6 sm:py-8">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            {/* Left VU needle */}
            <div className="relative w-[24px] h-[30px] overflow-hidden shrink-0">
              <div className="absolute bottom-0 left-1/2 w-[8px] h-[8px] rounded-full bg-[#1a1812] border border-white/10 -translate-x-1/2" />
              <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[1px] h-[22px] bg-gradient-to-t from-white/40 to-untold-orange/60 vu-idle group-hover:animate-none"
                style={{ transformOrigin: 'bottom center' }}
              />
            </div>

            {/* Spinning vinyl */}
            <motion.div
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full shrink-0 border border-white/10"
              style={{
                background: 'repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 3px, transparent 3px, transparent 5px), radial-gradient(circle, #1a1a1a, #0a0a0a)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              whileHover={{ transition: { duration: 1, repeat: Infinity, ease: 'linear' } }}
            >
              {/* Center label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] rounded-full bg-gradient-to-br from-[#8B2500] to-[#5C1A00] border border-black/30" />
            </motion.div>

            {/* Right VU needle */}
            <div className="relative w-[24px] h-[30px] overflow-hidden shrink-0">
              <div className="absolute bottom-0 left-1/2 w-[8px] h-[8px] rounded-full bg-[#1a1812] border border-white/10 -translate-x-1/2" />
              <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[1px] h-[22px] bg-gradient-to-t from-white/40 to-untold-orange/60 vu-idle-delayed group-hover:animate-none"
                style={{ transformOrigin: 'bottom center' }}
              />
            </div>

            {/* Text */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block w-[20px] h-[1px] bg-untold-orange/30 group-hover:bg-untold-orange/60 transition-colors" />
              <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/20 group-hover:text-untold-orange/60 transition-colors font-bold whitespace-nowrap">
                UNTOLD_ANALOG // TUNE IN
              </span>
              <span className="text-untold-orange/40 group-hover:text-untold-orange group-hover:translate-x-2 transition-all duration-500 text-lg">
                →
              </span>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default StereoTeaser;
