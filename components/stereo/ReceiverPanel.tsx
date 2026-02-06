import React from 'react';
import { StereoState } from '../../types';
import LEDDisplay from './LEDDisplay';
import VUMeter from './VUMeter';
import PlaybackControls from './PlaybackControls';
import './stereo.css';

interface ReceiverPanelProps {
  state: StereoState;
  onTogglePower: () => void;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onVolumeChange: (v: number) => void;
  onShuffle: () => void;
}

const ReceiverPanel: React.FC<ReceiverPanelProps> = ({
  state, onTogglePower, onTogglePlay, onNext, onPrev
}) => {
  return (
    <div className="brushed-metal rounded-sm border border-white/10 p-3 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      {/* Top row: Power + Brand + Model */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Power button — BIGGER and more obvious */}
          <button
            onClick={onTogglePower}
            className={`relative w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
              state.power
                ? 'metal-button'
                : 'bg-gradient-to-b from-untold-orange/80 to-untold-orange/60 shadow-[0_0_20px_rgba(255,77,23,0.4),0_2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,77,23,0.6)]'
            }`}
          >
            {/* Power icon */}
            <div className={`w-[14px] h-[14px] rounded-full border-2 relative ${state.power ? 'border-green-400/60' : 'border-white/80'}`}>
              <div className={`absolute top-[-3px] left-1/2 -translate-x-1/2 w-[2px] h-[7px] ${state.power ? 'bg-green-400/60' : 'bg-white/80'}`} />
            </div>
          </button>

          {/* Power label when off */}
          {!state.power && (
            <div className="font-led text-[8px] sm:text-[9px] text-untold-orange/70 tracking-[0.2em] uppercase animate-pulse">
              PRESS TO POWER ON
            </div>
          )}

          {/* Power LED + Brand when on */}
          {state.power && (
            <>
              <div className="w-[6px] h-[6px] rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
              <div className="font-led text-[8px] sm:text-[10px] text-white/25 tracking-[0.3em] uppercase">
                UNTOLD ANALOG
              </div>
            </>
          )}
        </div>

        <div className="font-led text-[7px] text-white/10 tracking-[0.2em] hidden sm:block">
          MODEL UA-2026
        </div>
      </div>

      {/* LED Display — full width */}
      <div className="mb-4">
        <LEDDisplay
          power={state.power}
          playing={state.playing}
          currentTrack={state.currentTrack}
          trackIndex={state.currentTrackIndex}
          totalTracks={state.shuffledQueue.length}
        />
      </div>

      {/* VU Meters — LARGE, taking center stage */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mb-4 py-3 sm:py-4 bg-black/20 rounded-sm border border-white/5">
        <VUMeter level={state.vuLeft} label="LEFT" />
        <div className="w-[1px] h-[50px] bg-white/5" />
        <VUMeter level={state.vuRight} label="RIGHT" />
      </div>

      {/* Bottom: Playback controls centered */}
      <div className="flex items-center justify-center pt-2">
        <PlaybackControls
          playing={state.playing}
          power={state.power}
          onTogglePlay={onTogglePlay}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
    </div>
  );
};

export default ReceiverPanel;
