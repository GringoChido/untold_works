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
    power ? 'cursor-pointer hover:brightness-110' : 'cursor-not-allowed opacity-40'
  }`;

  return (
    <div className="flex items-center gap-2">
      {/* Previous */}
      <motion.button
        className={`${buttonClass} w-[34px] h-[28px] rounded-sm`}
        whileTap={power ? { scale: 0.93, y: 1 } : {}}
        onClick={() => power && onPrev()}
      >
        <div className="flex items-center gap-[1px]">
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-white/60" />
          <div className="w-[1.5px] h-[10px] bg-white/60" />
        </div>
      </motion.button>

      {/* Play/Pause */}
      <motion.button
        className={`${buttonClass} w-[40px] h-[32px] rounded-sm`}
        whileTap={power ? { scale: 0.93, y: 1 } : {}}
        onClick={() => power && onTogglePlay()}
      >
        {playing ? (
          <div className="flex items-center gap-[3px]">
            <div className="w-[3px] h-[12px] bg-untold-orange" />
            <div className="w-[3px] h-[12px] bg-untold-orange" />
          </div>
        ) : (
          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[10px] border-l-untold-orange ml-[2px]" />
        )}
      </motion.button>

      {/* Next */}
      <motion.button
        className={`${buttonClass} w-[34px] h-[28px] rounded-sm`}
        whileTap={power ? { scale: 0.93, y: 1 } : {}}
        onClick={() => power && onNext()}
      >
        <div className="flex items-center gap-[1px]">
          <div className="w-[1.5px] h-[10px] bg-white/60" />
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white/60" />
        </div>
      </motion.button>
    </div>
  );
};

export default PlaybackControls;
