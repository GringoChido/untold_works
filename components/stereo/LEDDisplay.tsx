import React from 'react';
import { Track } from '../../types';
import './stereo.css';

interface LEDDisplayProps {
  power: boolean;
  playing: boolean;
  currentTrack: Track | null;
  trackIndex: number;
  totalTracks: number;
  progress: number;
  duration: number;
  currentTime: number;
  activePlaylistName?: string | null;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

const LEDDisplay: React.FC<LEDDisplayProps> = ({ power, playing, currentTrack, trackIndex, totalTracks, progress, duration, currentTime, activePlaylistName }) => {
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
            <div className="flex items-center gap-3">
              {duration > 0 && (
                <span className="font-led text-[8px] text-untold-orange/40 tracking-[0.2em]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              )}
              <span className="font-led text-[8px] text-untold-orange/40 tracking-[0.2em]">
                {trackIndex + 1}/{totalTracks}
              </span>
            </div>
          </div>
          {activePlaylistName && (
            <div className="font-led text-[7px] text-untold-orange/35 tracking-[0.3em] uppercase truncate">
              PLAYLIST: {activePlaylistName.toUpperCase()}
            </div>
          )}
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

      {/* ── Progress bar ── */}
      {power && duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-untold-orange/10">
          <div
            className="h-full bg-untold-orange/70 transition-[width] duration-200 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default LEDDisplay;
