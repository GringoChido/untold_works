import React from 'react';
import { motion } from 'framer-motion';
import './stereo.css';

interface PlaybackControlsProps {
  playing: boolean;
  power: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({ playing, power, onTogglePlay, onNext, onPrev }) => {
  const buttonClass = `metal-button flex items-center justify-center transition-all ${
    power ? 'cursor-pointer hover:brightness-110' : 'cursor-not-allowed opacity-30'
  }`;

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Previous */}
      <motion.button
        className={`${buttonClass} w-[40px] h-[34px] sm:w-[46px] sm:h-[38px] rounded-sm`}
        whileTap={power ? { scale: 0.93, y: 1 } : {}}
        onClick={() => power && onPrev()}
      >
        <div className="flex items-center gap-[1px]">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[7px] border-r-white/50" />
          <div className="w-[2px] h-[12px] bg-white/50" />
        </div>
      </motion.button>

      {/* Play/Pause — larger, accent color */}
      <motion.button
        className={`${buttonClass} w-[50px] h-[38px] sm:w-[56px] sm:h-[42px] rounded-sm`}
        whileTap={power ? { scale: 0.93, y: 1 } : {}}
        onClick={() => power && onTogglePlay()}
      >
        {playing ? (
          <div className="flex items-center gap-[3px]">
            <div className="w-[3.5px] h-[14px] bg-untold-orange" />
            <div className="w-[3.5px] h-[14px] bg-untold-orange" />
          </div>
        ) : (
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-untold-orange ml-[2px]" />
        )}
      </motion.button>

      {/* Next */}
      <motion.button
        className={`${buttonClass} w-[40px] h-[34px] sm:w-[46px] sm:h-[38px] rounded-sm`}
        whileTap={power ? { scale: 0.93, y: 1 } : {}}
        onClick={() => power && onNext()}
      >
        <div className="flex items-center gap-[1px]">
          <div className="w-[2px] h-[12px] bg-white/50" />
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[7px] border-l-white/50" />
        </div>
      </motion.button>
    </div>
  );
};

export default PlaybackControls;
