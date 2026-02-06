import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStereoPlayer } from '../hooks/useStereoPlayer';
import StereoRoom from '../components/stereo/StereoRoom';

const StereoPage: React.FC = () => {
  const {
    state,
    togglePower,
    togglePlay,
    nextTrack,
    prevTrack,
    setVolume,
    reshuffle,
    getEmbedUrl,
  } = useStereoPlayer();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#050403] min-h-screen selection:bg-untold-orange selection:text-white">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-10 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/30 hover:text-untold-orange transition-colors font-bold"
        >
          ← BACK TO UNTOLD.WORKS
        </Link>
        <div className="font-led text-[9px] text-white/10 tracking-[0.2em] hidden sm:block">
          UNTOLD_ANALOG // v1.0
        </div>
      </div>

      {/* Main stereo room */}
      <StereoRoom
        state={state}
        embedUrl={getEmbedUrl()}
        onTogglePower={togglePower}
        onTogglePlay={togglePlay}
        onNext={nextTrack}
        onPrev={prevTrack}
        onVolumeChange={setVolume}
        onShuffle={reshuffle}
      />

      {/* Bottom info bar — bright orange */}
      <div className="px-5 sm:px-10 py-6 border-t border-untold-orange/20 bg-[#050403]">
        <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[9px] sm:text-[10px] text-untold-orange/50 tracking-[0.3em] uppercase text-center sm:text-left">
            BUILT WITH REACT + TYPESCRIPT + FRAMER MOTION // SPOTIFY EMBED API
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-untold-orange/50 tracking-[0.3em] uppercase">
            {state.shuffledQueue.length} TRACKS LOADED
          </div>
        </div>
      </div>
    </div>
  );
};

export default StereoPage;
