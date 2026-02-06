import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useStereoPlayer } from '../hooks/useStereoPlayer';
import StereoRoom from '../components/stereo/StereoRoom';

/* ── Fade-in wrapper ── */
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
      {/* ─── Top bar ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-10 py-4 flex items-center justify-between bg-gradient-to-b from-[#050403] to-transparent">
        <Link
          to="/"
          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/30 hover:text-untold-orange transition-colors font-bold"
        >
          ← BACK
        </Link>
        <div className="font-led text-[9px] text-untold-orange tracking-[0.3em] uppercase hidden sm:block">
          UNTOLD ANALOG
        </div>
      </div>

      {/* ━━━━━━━━━━ SECTION 1 — HERO ━━━━━━━━━━ */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-10 overflow-hidden">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center 70%, rgba(255,180,100,0.04) 0%, transparent 60%)' }}
        />

        {/* Subtle tape grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }}
        />

        <div className="relative max-w-[720px] mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-untold-orange/60 mb-6 sm:mb-8">
              UNTOLD ANALOG
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="font-sans font-black text-[clamp(2rem,6vw,3.8rem)] text-[#f5f1e8] uppercase tracking-tighter leading-[0.95] mb-6 sm:mb-8">
              When The API<br />Said No, I Built<br />My Own.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-serif text-[15px] sm:text-[17px] text-[#e8e4d8]/70 leading-relaxed max-w-[540px]">
              Spotify wasn't granting API access. So I built a spreadsheet-powered music system. Sometimes the best solutions come from building around constraints.
            </p>
          </FadeIn>

          {/* Accent line */}
          <FadeIn delay={0.4}>
            <div className="w-[50px] h-[2px] bg-untold-orange/30 mt-10 sm:mt-14" />
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━ SECTION 2 — THE STEREO ━━━━━━━━━━ */}
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

      {/* ━━━━━━━━━━ SECTION 3 — LINER NOTES / THE BUILD ━━━━━━━━━━ */}
      <section className="relative px-5 sm:px-10 py-20 sm:py-28 border-t border-white/5">
        <div className="relative max-w-[720px] mx-auto">
          <FadeIn>
            <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-untold-orange/40 mb-4">
              LINER NOTES
            </div>
            <h2 className="font-sans font-black text-[clamp(1.5rem,4vw,2.5rem)] text-[#f5f1e8] uppercase tracking-tighter leading-none mb-8">
              The Build
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-serif text-[14px] sm:text-[16px] text-[#e8e4d8]/60 leading-relaxed max-w-[500px] mb-12">
              Built with React, Framer Motion, Web Audio API, and a Google Sheet. When platforms close their doors, you build your own.
            </p>
          </FadeIn>

          {/* Tech stack — vintage equipment manual style */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
              {['React', 'TypeScript', 'Framer Motion', 'Web Audio API', 'Google Sheets'].map((tech, i) => (
                <React.Fragment key={tech}>
                  {i > 0 && <span className="text-white/10 text-[10px] hidden sm:inline">•</span>}
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#e8e4d8]/30">
                    {tech}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━ SECTION 4 — CTA ━━━━━━━━━━ */}
      <section className="relative px-5 sm:px-10 py-20 sm:py-28 border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center 30%, rgba(255,77,23,0.03) 0%, transparent 60%)' }}
        />

        <div className="relative max-w-[720px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-sans font-black text-[clamp(1.8rem,5vw,3.2rem)] text-[#f5f1e8] uppercase tracking-tighter leading-[0.95] mb-6">
              This Workflow<br />Is My Marketing
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-serif text-[15px] sm:text-[17px] text-[#e8e4d8]/50 mb-10 sm:mb-12">
              Need someone who builds through obstacles?
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-untold-orange hover:bg-untold-orange/90 text-white font-sans font-black text-[13px] sm:text-[14px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 shadow-[0_0_30px_rgba(255,77,23,0.2)] hover:shadow-[0_0_50px_rgba(255,77,23,0.35)]"
            >
              Let's Talk About Your Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━ FOOTER BAR ━━━━━━━━━━ */}
      <div className="px-5 sm:px-10 py-6 border-t border-untold-orange/15 bg-[#050403]">
        <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[9px] sm:text-[10px] text-untold-orange/40 tracking-[0.3em] uppercase text-center sm:text-left">
            UNTOLD ANALOG // {state.shuffledQueue.length} TRACKS
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] text-white/15 tracking-[0.3em] uppercase">
            © UNTOLD.WORKS
          </div>
        </div>
      </div>
    </div>
  );
};

export default StereoPage;
