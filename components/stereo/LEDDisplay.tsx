import React from 'react';
import { Track } from '../../types';
import './stereo.css';

interface LEDDisplayProps {
  power: boolean;
  playing: boolean;
  currentTrack: Track | null;
  trackIndex: number;
  totalTracks: number;
}

const LEDDisplay: React.FC<LEDDisplayProps> = ({ power, playing, currentTrack, trackIndex, totalTracks }) => {
  return (
    <div className="led-panel relative overflow-hidden rounded-sm px-4 py-3 h-full min-h-[60px] flex flex-col justify-center scanlines">
      {!power ? (
        <div className="text-center">
          <span className="font-led text-[11px] text-untold-orange/30 tracking-[0.3em] uppercase">
            UNTOLD ANALOG
          </span>
        </div>
      ) : (
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-led text-[8px] text-untold-orange/40 tracking-[0.2em]">
              {playing ? '► PLAYING' : '■ STOPPED'}
            </span>
            <span className="font-led text-[8px] text-untold-orange/40 tracking-[0.2em]">
              {trackIndex + 1}/{totalTracks}
            </span>
          </div>
          {currentTrack ? (
            <div className="overflow-hidden">
              <div className={`font-led text-[13px] text-untold-orange led-glow tracking-[0.15em] whitespace-nowrap ${currentTrack.name.length > 24 ? 'led-scroll-text' : ''}`}>
                {currentTrack.name.toUpperCase()}
              </div>
              {currentTrack.artist && (
                <div className="font-led text-[9px] text-untold-orange/50 tracking-[0.2em] truncate mt-0.5">
                  {currentTrack.artist.toUpperCase()}
                </div>
              )}
            </div>
          ) : (
            <div className="font-led text-[13px] text-untold-orange/30 led-glow tracking-[0.15em]">
              NO SIGNAL
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LEDDisplay;
