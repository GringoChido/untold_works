import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './stereo/stereo.css';

// Animated equalizer bar component
const EQBar: React.FC<{ delay: number; maxHeight: number; color?: string }> = ({ delay, maxHeight, color = 'bg-green-400' }) => {
  return (
    <motion.div
      className={`w-[4px] sm:w-[5px] rounded-sm ${color}`}
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
  // Generate bars with varied heights for realistic EQ look — taller for bigger visual impact
  const bars = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.1,
    maxHeight: 32 + Math.sin(i * 0.7) * 20 + Math.random() * 14,
    color: i > 16 ? 'bg-red-500' : i > 13 ? 'bg-yellow-400' : 'bg-green-400',
  }));

  return (
    <Link to="/stereo" className="block group">
      <section className="relative bg-[#0a0806] border-y border-untold-orange/10 overflow-hidden cursor-pointer">
        {/* Warm ambient glow on hover */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,23,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-10 sm:py-14">
          {/* Stacked layout: bars flanking headline, tighter spacing */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* Left: Equalizer bars — bigger */}
            <div className="flex items-end gap-[2px] sm:gap-[3px] h-[55px] sm:h-[70px]">
              {bars.slice(0, 10).map((bar, i) => (
                <EQBar key={i} delay={bar.delay} maxHeight={bar.maxHeight} color={bar.color} />
              ))}
            </div>

            {/* Center: Bold headline — tighter to bars */}
            <div className="flex flex-col items-center gap-2">
              <div className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl text-white/80 uppercase tracking-tighter leading-none text-center group-hover:text-untold-orange transition-colors duration-500">
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

            {/* Right: Equalizer bars — bigger */}
            <div className="flex items-end gap-[2px] sm:gap-[3px] h-[55px] sm:h-[70px]">
              {bars.slice(10, 20).map((bar, i) => (
                <EQBar key={i + 10} delay={bar.delay} maxHeight={bar.maxHeight} color={bar.color} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default StereoTeaser;
