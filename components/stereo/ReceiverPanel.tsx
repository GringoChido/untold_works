import React from 'react';
import { StereoState } from '../../types';
import LEDDisplay from './LEDDisplay';
import VUMeter from './VUMeter';
import PlaybackControls from './PlaybackControls';
import VolumeKnob from './VolumeKnob';
import PlaylistDial from './PlaylistDial';
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
  state, onTogglePower, onTogglePlay, onNext, onPrev, onVolumeChange, onShuffle
}) => {
  return (
    <div className="brushed-metal rounded-sm border border-white/10 p-3 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      {/* Top row: Brand + Power */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Power button */}
          <button
            onClick={onTogglePower}
            className="relative w-[28px] h-[28px] rounded-full metal-button flex items-center justify-center cursor-pointer"
          >
            {/* Power icon */}
            <div className="w-[10px] h-[10px] rounded-full border-[1.5px] border-white/40 relative">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[1.5px] h-[5px] bg-white/40" />
            </div>
          </button>

          {/* Power LED */}
          <div className={`w-[5px] h-[5px] rounded-full ${
            state.power
              ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]'
              : 'bg-red-500/60 power-led-pulse'
          }`} />

          {/* Brand */}
          <div className="font-led text-[8px] text-white/20 tracking-[0.3em] uppercase">
            UNTOLD ANALOG
          </div>
        </div>

        {/* Model number */}
        <div className="font-led text-[7px] text-white/10 tracking-[0.2em] hidden sm:block">
          MODEL UA-2026
        </div>
      </div>

      {/* Main controls row */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* LED Display */}
        <div className="flex-1 min-w-0">
          <LEDDisplay
            power={state.power}
            playing={state.playing}
            currentTrack={state.currentTrack}
            trackIndex={state.currentTrackIndex}
            totalTracks={state.shuffledQueue.length}
          />
        </div>

        {/* VU Meters */}
        <div className="flex gap-2 sm:gap-3 shrink-0">
          <VUMeter level={state.vuLeft} label="L" />
          <VUMeter level={state.vuRight} label="R" />
        </div>
      </div>

      {/* Bottom controls row */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
        {/* Playback controls */}
        <PlaybackControls
          playing={state.playing}
          power={state.power}
          onTogglePlay={onTogglePlay}
          onNext={onNext}
          onPrev={onPrev}
        />

        {/* Knobs */}
        <div className="flex items-center gap-4 sm:gap-6">
          <VolumeKnob
            volume={state.volume}
            onVolumeChange={onVolumeChange}
            label="VOL"
          />
          <PlaylistDial
            onShuffle={onShuffle}
            power={state.power}
          />
        </div>
      </div>
    </div>
  );
};

export default ReceiverPanel;
