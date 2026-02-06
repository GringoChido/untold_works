import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './stereo/stereo.css';

// Animated equalizer bar component
const EQBar: React.FC<{ delay: number; maxHeight: number; color?: string }> = ({ delay, maxHeight, color = 'bg-green-400' }) => {
  return (
    <motion.div
      className={`w-[3px] sm:w-[4px] rounded-sm ${color}`}
      animate={{
        height: [
          `${maxHeight * 0.2}px`,
          `${maxHeight * 0.9}px`,
          `${maxHeight * 0.4}px`,
          `${maxHeight}px`,
          `${maxHeight * 0.3}px`,
          `${maxHeight * 0.7}px`,
          `${maxHeight * 0.15}px`,
          `${maxHeight * 0.85}px`,
          `${maxHeight * 0.5}px`,
        ],
      }}
      transition={{
        duration: 1.8 + delay * 0.3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay * 0.15,
      }}
    />
  );
};

const StereoTeaser: React.FC = () => {
  // Generate bars with varied heights for realistic EQ look
  const bars = Array.from({ length: 16 }, (_, i) => ({
    delay: i * 0.12,
    maxHeight: 20 + Math.sin(i * 0.8) * 15 + Math.random() * 10,
    color: i > 12 ? 'bg-red-500' : i > 10 ? 'bg-yellow-400' : 'bg-green-400',
  }));

  return (
    <Link to="/stereo" className="block group">
      <section className="relative bg-[#0a0806] border-y border-untold-orange/10 overflow-hidden cursor-pointer">
        {/* Warm ambient glow on hover */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,23,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-8 sm:py-12">
          <div className="flex items-center justify-between">
            {/* Left: Equalizer bars */}
            <div className="flex items-end gap-[2px] sm:gap-[3px] h-[45px] sm:h-[55px]">
              {bars.slice(0, 8).map((bar, i) => (
                <EQBar key={i} delay={bar.delay} maxHeight={bar.maxHeight} color={bar.color} />
              ))}
            </div>

            {/* Center: Bold headline */}
            <div className="flex flex-col items-center gap-2 px-4">
              <div className="font-sans font-black text-xl sm:text-3xl lg:text-4xl text-white/80 uppercase tracking-tighter leading-none text-center group-hover:text-untold-orange transition-colors duration-500">
                UNTOLD ANALOG
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[20px] h-[1px] bg-untold-orange/40 group-hover:w-[40px] transition-all duration-500" />
                <span className="font-mono text-[8px] sm:text-[10px] uppercase tracking-[0.4em] text-untold-orange/50 group-hover:text-untold-orange/80 transition-colors font-bold">
                  TUNE IN
                </span>
                <div className="w-[20px] h-[1px] bg-untold-orange/40 group-hover:w-[40px] transition-all duration-500" />
              </div>
            </div>

            {/* Right: Equalizer bars */}
            <div className="flex items-end gap-[2px] sm:gap-[3px] h-[45px] sm:h-[55px]">
              {bars.slice(8, 16).map((bar, i) => (
                <EQBar key={i + 8} delay={bar.delay} maxHeight={bar.maxHeight} color={bar.color} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default StereoTeaser;
