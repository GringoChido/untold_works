import React, { useRef } from 'react';
import { StereoState } from '../../types';
import Turntable from './Turntable';
import ReceiverPanel from './ReceiverPanel';
import './stereo.css';

interface StereoUnitProps {
  state: StereoState;
  embedUrl: string | null;
  onTogglePower: () => void;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onVolumeChange: (v: number) => void;
  onShuffle: () => void;
}

const StereoUnit: React.FC<StereoUnitProps> = ({
  state, embedUrl, onTogglePower, onTogglePlay, onNext, onPrev, onVolumeChange, onShuffle
}) => {
  return (
    <div className="relative">
      {/* Main chassis */}
      <div
        className="wood-grain rounded-sm overflow-hidden"
        style={{
          boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Top edge bevel */}
        <div className="h-[3px] bg-gradient-to-b from-white/5 to-transparent" />

        {/* Inner padding */}
        <div className="p-3 sm:p-5 space-y-4">
          {/* Turntable section with dust cover */}
          <div className="relative bg-[#0d0d0d] rounded-sm p-4 sm:p-6 border border-white/5">
            <div
              className="absolute inset-0 rounded-sm pointer-events-none z-10"
              style={{
                background: 'linear-gradient(165deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(255,255,255,0.01) 100%)',
              }}
            />
            <Turntable playing={state.playing} power={state.power} />
          </div>

          {/* Receiver / Faceplate */}
          <ReceiverPanel
            state={state}
            onTogglePower={onTogglePower}
            onTogglePlay={onTogglePlay}
            onNext={onNext}
            onPrev={onPrev}
            onVolumeChange={onVolumeChange}
            onShuffle={onShuffle}
          />
        </div>

        {/* Bottom edge */}
        <div className="h-[3px] bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Spotify iframe — hidden but plays audio.
          Key prop forces remount on track change so autoplay kicks in fresh. */}
      {state.power && embedUrl && (
        <div className="fixed" style={{ left: '-9999px', top: '-9999px', width: '300px', height: '152px' }} aria-hidden="true">
          <iframe
            key={embedUrl}
            src={embedUrl}
            width="300"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="Spotify Player"
          />
        </div>
      )}

      {/* Feet / stands */}
      <div className="flex justify-between px-6 mt-[-2px]">
        <div className="w-[20px] h-[6px] bg-gradient-to-b from-[#333] to-[#1a1a1a] rounded-b-sm" />
        <div className="w-[20px] h-[6px] bg-gradient-to-b from-[#333] to-[#1a1a1a] rounded-b-sm" />
        <div className="w-[20px] h-[6px] bg-gradient-to-b from-[#333] to-[#1a1a1a] rounded-b-sm" />
        <div className="w-[20px] h-[6px] bg-gradient-to-b from-[#333] to-[#1a1a1a] rounded-b-sm" />
      </div>
    </div>
  );
};

export default StereoUnit;
