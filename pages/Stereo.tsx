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
  } = useStereoPlayer();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">

      {/* ━━━━━━━━━━ TOP NAV — Logo back to Home (stays at top, does NOT scroll) ━━━━━━━━━━ */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-5 sm:px-10 lg:px-14 py-5 sm:py-6">
        <div className="max-w-[1540px] mx-auto">
          <Link
            to="/"
            className="text-[28px] sm:text-[32px] font-sans font-black tracking-tighter leading-none group inline-flex items-center text-white hover:text-white transition-colors duration-300"
          >
            untold<span className="text-untold-orange group-hover:text-white transition-colors duration-300">.works</span>
          </Link>
        </div>
      </nav>

      {/* ━━━━━━━━━━ HERO ━━━━━━━━━━ */}
      <section className="px-5 sm:px-10 pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pt-48 lg:pb-32 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}
        />

        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              WORKFLOW_PROOF // ANALOG_SYSTEMS
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(3.5rem,10vw,140px)] leading-[0.8] tracking-tighter uppercase text-untold-orange mb-10 sm:mb-16">
            Untold<br />Analog
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-[42px] font-serif italic text-white/80 leading-[1.15] tracking-tight max-w-5xl">
            When The API Said No, I Built My Own.
          </h2>
        </div>
      </section>

      {/* ━━━━━━━━━━ THE PLAYER ━━━━━━━━━━ */}
      <section className="border-b border-white/10">
        <StereoRoom
          state={state}
          onTogglePower={togglePower}
          onTogglePlay={togglePlay}
          onNext={nextTrack}
          onPrev={prevTrack}
          onVolumeChange={setVolume}
          onShuffle={reshuffle}
        />
      </section>

      {/* ━━━━━━━━━━ LINER NOTES / THE BUILD ━━━━━━━━━━ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-20">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              LINER_NOTES // THE_BUILD
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 sm:gap-24 items-start">
            <div className="lg:col-span-5 space-y-16">
              {/* Constraints */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
                  CONSTRAINTS
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-white/70 leading-relaxed">
                  Spotify wasn't granting API access. So I built a spreadsheet-powered music system. Sometimes the best solutions come from building around constraints.
                </p>
              </div>

              {/* The Build */}
              <div className="pt-16 border-t border-white/5">
                <h3 className="font-sans font-black text-4xl lg:text-6xl uppercase tracking-tighter text-untold-orange leading-none mb-8">
                  The Build
                </h3>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-white/60 leading-relaxed">
                  Built with React, Framer Motion, Web Audio API, and a Google Sheet. When platforms close their doors, you build your own.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-16">
              <div className="border-t border-white/10 pt-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 block mb-8">
                  TECH_STACK
                </span>
                <div className="flex flex-wrap gap-4">
                  {['React', 'TypeScript', 'Framer Motion', 'Web Audio API', 'Google Sheets'].map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white hover:border-white/50 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-12 mt-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 block mb-8">
                  TRACK_COUNT
                </span>
                <p className="font-sans font-black text-5xl lg:text-7xl uppercase tracking-tighter text-white">
                  {state.shuffledQueue.length}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mt-2">
                  TRACKS LOADED FROM GOOGLE SHEETS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━ CTA ━━━━━━━━━━ */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 text-center bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="w-px h-32 bg-gradient-to-b from-untold-orange to-transparent mx-auto mb-16"></div>
          <h2 className="font-sans font-black text-3xl sm:text-6xl lg:text-[110px] mb-12 uppercase tracking-tighter leading-none text-white">
            This Workflow<br />Is My Marketing.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[2.2rem] font-serif italic mb-24 max-w-4xl mx-auto text-white/50 leading-relaxed">
            Need someone who builds through obstacles?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-8 sm:px-16 py-5 sm:py-8 font-sans font-black uppercase tracking-tighter text-base sm:text-xl hover:scale-105 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)] active:scale-95"
          >
            Let's Talk About Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StereoPage;
