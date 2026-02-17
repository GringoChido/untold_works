import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSlidesPlayer } from '../hooks/useSlidesPlayer';
import { usePageMeta } from '../hooks/usePageMeta';
import { slideCollections } from '../data/slideCollections';
import CollectionPicker from '../components/slides/CollectionPicker';
import SlideViewer from '../components/slides/SlideViewer';

const SlidesPage: React.FC = () => {
  const {
    state,
    openCollection,
    closeCollection,
    togglePlay,
    toggleMusic,
    nextImage,
    prevImage,
    setVolume,
  } = useSlidesPlayer();

  usePageMeta(
    'Untold Slides — Photography Meets Music',
    'Photography meets music. Curated visual collections with dynamic slide presentations built in React.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // When viewer is open, lock body scroll
  useEffect(() => {
    if (state.activeCollection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [state.activeCollection]);

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">

      {/* ━━━━━━━━━━ TOP NAV ━━━━━━━━━━ */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-5 sm:px-10 lg:px-14 py-5 sm:py-6">
        <div className="max-w-[1540px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-[28px] sm:text-[32px] font-sans font-black tracking-tighter leading-none group inline-flex items-center text-white hover:text-white transition-colors duration-300"
          >
            untold<span className="text-untold-orange group-hover:text-white transition-colors duration-300">.works</span>
          </Link>
          <Link
            to="/analog"
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-untold-orange transition-colors duration-300"
          >
            Untold Analog →
          </Link>
        </div>
      </nav>

      {/* ━━━━━━━━━━ HERO ━━━━━━━━━━ */}
      <section className="px-5 sm:px-10 pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pt-48 lg:pb-32 border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              WORKFLOW_PROOF // VISUAL_SYSTEMS
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(3.5rem,10vw,140px)] leading-[0.8] tracking-tighter uppercase text-untold-orange mb-10 sm:mb-16">
            Untold<br />Slides
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-[42px] font-serif italic text-white/80 leading-[1.15] tracking-tight max-w-5xl">
            Photography Meets Music. Every Collection Is a World.
          </h2>
        </div>
      </section>

      {/* ━━━━━━━━━━ THE COLLECTIONS ━━━━━━━━━━ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-20">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              COLLECTIONS // CHOOSE_A_WORLD
            </h2>
          </div>

          <CollectionPicker
            collections={slideCollections}
            onSelect={openCollection}
          />
        </div>
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
              {/* Concept */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
                  CONCEPT
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-white/70 leading-relaxed">
                  Eight distinct scenes. Each a complete environment — with its own atmosphere, rhythm, and ambient effects. Not a slideshow. A room you walk into.
                </p>
              </div>

              {/* The Build */}
              <div className="pt-16 border-t border-white/5">
                <h3 className="font-sans font-black text-4xl lg:text-6xl uppercase tracking-tighter text-untold-orange leading-none mb-8">
                  The Build
                </h3>
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-white/60 leading-relaxed">
                  Ken Burns motion, crossfade transitions, particle systems, and the same Spotify-preview audio engine from Untold Analog — all synchronized into one cinematic experience.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-16">
              <div className="border-t border-white/10 pt-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 block mb-8">
                  TECH_STACK
                </span>
                <div className="flex flex-wrap gap-4">
                  {['React', 'TypeScript', 'Framer Motion', 'HTML5 Audio', 'CSS Animations', 'Google Sheets'].map((tech) => (
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
                  SCENE_COUNT
                </span>
                <p className="font-sans font-black text-5xl lg:text-7xl uppercase tracking-tighter text-white">
                  {slideCollections.length}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mt-2">
                  UNIQUE ENVIRONMENTS — EACH A DIFFERENT WORLD
                </p>
              </div>

              <div className="border-t border-white/10 pt-12 mt-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 block mb-8">
                  SCENES
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Kodachrome', desc: 'Warm light leaks & grain' },
                    { name: 'Pop Energy', desc: 'Haring-style bold color' },
                    { name: 'Pacific Fog', desc: 'Coastal mist & god-rays' },
                    { name: 'Instant', desc: 'Polaroid frames on cream' },
                    { name: 'Neon Noir', desc: 'Tokyo rain & color bleed' },
                    { name: 'Concrete', desc: 'Brutalist proof sheets' },
                    { name: 'Ember', desc: 'Campfire glow & embers' },
                    { name: 'Cinemascope', desc: 'Letterboxed & deliberate' },
                  ].map((s) => (
                    <div key={s.name} className="border border-white/5 p-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                        {s.name}
                      </p>
                      <p className="font-serif text-[11px] text-white/30 mt-1">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
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
            Every Frame<br />Tells a Story.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[2.2rem] font-serif italic mb-24 max-w-4xl mx-auto text-white/50 leading-relaxed">
            Need someone who builds immersive experiences from scratch?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-8 sm:px-16 py-5 sm:py-8 font-sans font-black uppercase tracking-tighter text-base sm:text-xl hover:scale-105 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)] active:scale-95"
          >
            Let's Talk About Your Project →
          </Link>
        </div>
      </section>

      {/* ━━━━━━━━━━ FULL-SCREEN VIEWER ━━━━━━━━━━ */}
      {state.activeCollection && (
        <SlideViewer
          collection={state.activeCollection}
          currentImageIndex={state.currentImageIndex}
          playing={state.playing}
          musicPlaying={state.musicPlaying}
          volume={state.volume}
          onTogglePlay={togglePlay}
          onToggleMusic={toggleMusic}
          onNext={nextImage}
          onPrev={prevImage}
          onClose={closeCollection}
          onVolumeChange={setVolume}
        />
      )}
    </div>
  );
};

export default SlidesPage;
