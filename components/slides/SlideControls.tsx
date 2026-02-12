import React from 'react';
import { SlideScene } from '../../types';
import { sceneConfigs } from './SceneEnvironment';

interface Props {
  visible: boolean;
  scene: SlideScene;
  playing: boolean;
  musicPlaying: boolean;
  volume: number;
  currentIndex: number;
  totalImages: number;
  trackName: string;
  trackArtist: string;
  collectionTitle: string;
  onTogglePlay: () => void;
  onToggleMusic: () => void;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onVolumeChange: (v: number) => void;
}

const SlideControls: React.FC<Props> = ({
  visible,
  scene,
  playing,
  musicPlaying,
  volume,
  currentIndex,
  totalImages,
  trackName,
  trackArtist,
  collectionTitle,
  onTogglePlay,
  onToggleMusic,
  onNext,
  onPrev,
  onClose,
  onVolumeChange,
}) => {
  const config = sceneConfigs[scene];
  const isLight = scene === 'polaroid';
  const btnBase = isLight
    ? 'text-neutral-700 hover:text-untold-orange'
    : 'text-white/60 hover:text-white';
  const bgBar = isLight
    ? 'bg-white/80 backdrop-blur-md border-t border-neutral-200'
    : 'bg-black/40 backdrop-blur-md border-t border-white/5';

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className={`${bgBar} px-4 sm:px-8 py-3 sm:py-4`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">

          {/* Left — track info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Music toggle */}
            <button
              onClick={onToggleMusic}
              className={`${btnBase} transition-colors flex-shrink-0`}
              title={musicPlaying ? 'Mute music' : 'Play music'}
            >
              {musicPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              )}
            </button>

            <div className="min-w-0">
              <p className={`font-mono text-[10px] uppercase tracking-[0.3em] truncate ${isLight ? 'text-neutral-400' : 'text-white/30'}`}>
                {collectionTitle}
              </p>
              <p className={`font-mono text-[11px] truncate ${isLight ? 'text-neutral-600' : 'text-white/50'}`}>
                {trackName}{trackArtist ? ` — ${trackArtist}` : ''}
              </p>
            </div>
          </div>

          {/* Center — playback controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={onPrev} className={`${btnBase} transition-colors p-2`} title="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            <button
              onClick={onTogglePlay}
              className={`${btnBase} transition-colors p-2 sm:p-3 border ${isLight ? 'border-neutral-300' : 'border-white/20'} rounded-full`}
              title={playing ? 'Pause slideshow' : 'Play slideshow'}
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            <button onClick={onNext} className={`${btnBase} transition-colors p-2`} title="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          {/* Right — counter + close */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Progress dots */}
            <div className="hidden sm:flex items-center gap-1.5">
              {Array.from({ length: totalImages }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? (isLight ? 'bg-untold-orange w-4' : 'bg-white w-4')
                      : (isLight ? 'bg-neutral-300' : 'bg-white/20')
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <span className={`font-mono text-[11px] tabular-nums ${isLight ? 'text-neutral-400' : 'text-white/30'}`}>
              {String(currentIndex + 1).padStart(2, '0')}/{String(totalImages).padStart(2, '0')}
            </span>

            {/* Close */}
            <button
              onClick={onClose}
              className={`${btnBase} transition-colors p-2`}
              title="Close (Esc)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideControls;
