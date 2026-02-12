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
    <div className="brushed-metal rounded-sm border border-white/10 p-4 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">

      {/* ── Top row: AKAI-style power + brand ── */}
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* POWER BUTTON — large, chunky, AKAI style */}
          <button
            onClick={onTogglePower}
            className="relative group cursor-pointer"
          >
            {/* Outer ring / chassis mount */}
            <div className={`
              w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center
              transition-all duration-500
              ${state.power
                ? 'bg-gradient-to-b from-[#3a3a3a] to-[#222] shadow-[0_2px_8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]'
                : 'bg-gradient-to-b from-untold-orange/90 to-[#cc3a0f] shadow-[0_0_25px_rgba(255,77,23,0.4),0_0_60px_rgba(255,77,23,0.15),0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,77,23,0.55),0_0_80px_rgba(255,77,23,0.2)]'
              }
            `}>
              {/* Inner button face */}
              <div className={`
                w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-full flex items-center justify-center
                transition-all duration-300
                ${state.power
                  ? 'bg-gradient-to-b from-[#444] to-[#2a2a2a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]'
                  : 'bg-gradient-to-b from-untold-orange to-[#e0400f] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] group-hover:from-[#ff6030]'
                }
              `}>
                {/* Power icon */}
                <div className={`w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] rounded-full border-[2.5px] relative ${
                  state.power ? 'border-green-400/70' : 'border-white/90'
                }`}>
                  <div className={`absolute top-[-4px] left-1/2 -translate-x-1/2 w-[2.5px] h-[9px] ${
                    state.power ? 'bg-green-400/70' : 'bg-white/90'
                  }`} />
                </div>
              </div>
            </div>
          </button>

          {/* Power label / status */}
          {!state.power ? (
            <div className="flex flex-col gap-0.5">
              <div className="font-sans font-black text-[11px] sm:text-[12px] text-untold-orange/80 tracking-[0.15em] uppercase animate-pulse">
                POWER ON
              </div>
              <div className="font-mono text-[8px] text-white/20 tracking-[0.2em] uppercase">
                PRESS TO START
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
              <div className="flex flex-col gap-0.5">
                <div className="font-led text-[10px] sm:text-[11px] text-white/30 tracking-[0.3em] uppercase">
                  UNTOLD ANALOG
                </div>
                <div className="font-led text-[7px] text-white/10 tracking-[0.2em]">
                  MODEL UA-2026
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right side — model badge */}
        <div className="hidden sm:flex flex-col items-end gap-1">
          <div className="font-led text-[7px] text-white/[0.08] tracking-[0.2em]">STEREO</div>
          <div className="font-led text-[8px] text-untold-orange/20 tracking-[0.15em]">RECEIVER</div>
        </div>
      </div>

      {/* ── LED Display ── */}
      <div className="mb-4 sm:mb-5">
        <LEDDisplay
          power={state.power}
          playing={state.playing}
          currentTrack={state.currentTrack}
          trackIndex={state.currentTrackIndex}
          totalTracks={state.shuffledQueue.length}
        />
      </div>

      {/* ── VU Meters — large, reactive, center stage ── */}
      <div className="flex items-center justify-center gap-6 sm:gap-10 mb-4 sm:mb-5 py-4 sm:py-5 bg-black/30 rounded-sm border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]">
        <VUMeter level={state.vuLeft} label="L" />
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1px] h-[40px] sm:h-[50px] bg-white/5" />
          <div className="font-led text-[6px] text-untold-orange/20 tracking-[0.3em]">dB</div>
        </div>
        <VUMeter level={state.vuRight} label="R" />
      </div>

      {/* ── Playback controls — centered, substantial ── */}
      <div className="flex items-center justify-center pt-2 sm:pt-3">
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
