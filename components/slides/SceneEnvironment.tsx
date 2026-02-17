import React, { useMemo } from 'react';
import { SlideScene } from '../../types';
import './slides.css';

interface Props {
  scene: SlideScene;
  children: React.ReactNode;
}

// ── Scene configuration ──
const sceneConfigs: Record<SlideScene, {
  bg: string;
  vignette: string;
  overlay?: string;
  textColor: string;
  accentColor: string;
}> = {
  vintage: {
    bg: 'bg-[#1a1408]',
    vignette: 'radial-gradient(ellipse at center, transparent 40%, rgba(30, 20, 5, 0.7) 100%)',
    overlay: 'vintage',
    textColor: 'text-amber-100/70',
    accentColor: 'text-amber-400',
  },
  haring: {
    bg: 'bg-[#FF1493]',
    vignette: 'none',
    overlay: 'haring',
    textColor: 'text-white',
    accentColor: 'text-yellow-300',
  },
  bigsur: {
    bg: 'bg-[#0a1628]',
    vignette: 'radial-gradient(ellipse at center, transparent 30%, rgba(10, 22, 40, 0.8) 100%)',
    overlay: 'bigsur',
    textColor: 'text-blue-100/60',
    accentColor: 'text-teal-400',
  },
  polaroid: {
    bg: 'bg-[#F5F3EF]',
    vignette: 'none',
    textColor: 'text-neutral-600',
    accentColor: 'text-untold-orange',
  },
  tokyo: {
    bg: 'bg-[#0a0014]',
    vignette: 'radial-gradient(ellipse at center, transparent 35%, rgba(10, 0, 20, 0.85) 100%)',
    overlay: 'tokyo',
    textColor: 'text-pink-200/70',
    accentColor: 'text-cyan-400',
  },
  brutalist: {
    bg: 'bg-[#808080]',
    vignette: 'none',
    textColor: 'text-white/60',
    accentColor: 'text-white',
  },
  campfire: {
    bg: 'bg-[#0d0a06]',
    vignette: 'radial-gradient(ellipse at 50% 120%, rgba(255, 120, 30, 0.15) 0%, transparent 60%), radial-gradient(ellipse at center, transparent 40%, rgba(13, 10, 6, 0.85) 100%)',
    overlay: 'campfire',
    textColor: 'text-orange-100/60',
    accentColor: 'text-orange-400',
  },
  cinema: {
    bg: 'bg-black',
    vignette: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
    textColor: 'text-white/50',
    accentColor: 'text-white',
  },
};

// ── Ambient Effects ──

const VintageOverlay: React.FC = () => (
  <>
    {/* Warm light leak — top right */}
    <div
      className="absolute top-0 right-0 w-[60%] h-[50%] pointer-events-none opacity-30"
      style={{
        background: 'radial-gradient(ellipse at 80% 10%, rgba(255, 180, 50, 0.5) 0%, transparent 70%)',
      }}
    />
    {/* Film grain texture */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
    {/* Slow-drifting horizontal scratch */}
    <div
      className="absolute left-0 right-0 h-px pointer-events-none opacity-[0.08]"
      style={{
        top: '38%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,200,100,0.6) 20%, rgba(255,200,100,0.3) 50%, transparent 80%)',
        animation: 'scratch-drift 20s linear infinite',
      }}
    />
  </>
);

const HaringOverlay: React.FC = () => {
  const colors = ['#FF1493', '#00FF41', '#FFD700', '#00BFFF', '#FF4500'];
  const currentColor = useMemo(() => colors[Math.floor(Math.random() * colors.length)], []);
  const nextColor = useMemo(() => colors[Math.floor(Math.random() * colors.length)], []);

  return (
    <>
      {/* Cycling bold background color */}
      <div
        className="absolute inset-0 pointer-events-none transition-colors duration-[3000ms]"
        style={{
          background: `linear-gradient(135deg, ${currentColor} 0%, ${nextColor} 100%)`,
          animation: 'haring-color-cycle 8s ease-in-out infinite alternate',
        }}
      />
      {/* Radiating lines pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 30px,
            rgba(0,0,0,0.5) 30px,
            rgba(0,0,0,0.5) 34px
          )`,
          animation: 'haring-lines 4s linear infinite',
        }}
      />
      {/* Bold black border around viewport */}
      <div className="absolute inset-4 border-[6px] border-black/20 pointer-events-none" />
    </>
  );
};

const BigSurOverlay: React.FC = () => (
  <>
    {/* Fog layer 1 — slow */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.12]"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(180, 210, 220, 0.4) 30%, rgba(180, 210, 220, 0.2) 60%, transparent 100%)',
        animation: 'fog-drift-1 25s ease-in-out infinite alternate',
      }}
    />
    {/* Fog layer 2 — faster, different offset */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.08]"
      style={{
        background: 'linear-gradient(90deg, transparent 20%, rgba(200, 220, 230, 0.3) 50%, transparent 80%)',
        animation: 'fog-drift-2 18s ease-in-out infinite alternate-reverse',
      }}
    />
    {/* God-rays — diagonal light */}
    <div
      className="absolute top-0 left-0 w-[120%] h-[120%] pointer-events-none opacity-[0.06]"
      style={{
        background: 'repeating-linear-gradient(125deg, transparent 0%, transparent 8%, rgba(255,255,255,0.1) 8.5%, transparent 9%)',
        transform: 'translate(-10%, -10%)',
      }}
    />
  </>
);

const TokyoOverlay: React.FC = () => (
  <>
    {/* Neon color bleed */}
    <div
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 0, 100, 0.2) 0%, transparent 30%, transparent 70%, rgba(0, 200, 255, 0.2) 100%)',
        animation: 'neon-pulse 6s ease-in-out infinite alternate',
      }}
    />
    {/* Horizontal light streaks — passing cars */}
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        bottom: '20%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 50, 150, 0.5) 30%, rgba(0, 200, 255, 0.5) 70%, transparent 100%)',
        opacity: 0.25,
        animation: 'light-streak 8s linear infinite',
      }}
    />
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        bottom: '35%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 10%, rgba(0, 255, 200, 0.4) 40%, rgba(255, 100, 50, 0.4) 70%, transparent 90%)',
        opacity: 0.15,
        animation: 'light-streak 12s linear infinite reverse',
      }}
    />
    {/* Chromatic aberration edge hint */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        boxShadow: 'inset 0 0 150px 50px rgba(10, 0, 20, 0.8), inset -3px 0 40px rgba(255, 0, 100, 0.08), inset 3px 0 40px rgba(0, 200, 255, 0.08)',
      }}
    />
  </>
);

const CampfireOverlay: React.FC = () => (
  <>
    {/* Warm glow from below */}
    <div
      className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(255, 100, 20, 0.08) 60%, rgba(255, 80, 10, 0.15) 100%)',
        animation: 'fire-glow 4s ease-in-out infinite alternate',
      }}
    />
    {/* Ember particles */}
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          background: `rgba(255, ${120 + Math.random() * 80}, 20, ${0.3 + Math.random() * 0.4})`,
          left: `${20 + Math.random() * 60}%`,
          bottom: `${Math.random() * 20}%`,
          animation: `ember-rise ${6 + Math.random() * 8}s linear infinite`,
          animationDelay: `${Math.random() * 8}s`,
        }}
      />
    ))}
  </>
);

const SceneEnvironment: React.FC<Props> = ({ scene, children }) => {
  const config = sceneConfigs[scene];

  const overlayMap: Record<string, React.FC> = {
    vintage: VintageOverlay,
    haring: HaringOverlay,
    bigsur: BigSurOverlay,
    tokyo: TokyoOverlay,
    campfire: CampfireOverlay,
  };

  const OverlayComponent = config.overlay ? overlayMap[config.overlay] : null;

  return (
    <div className={`fixed inset-0 ${config.bg} overflow-hidden`}>
      {/* Base ambient overlay */}
      {OverlayComponent && <OverlayComponent />}

      {/* Vignette layer */}
      {config.vignette !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: config.vignette }}
        />
      )}

      {/* Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SceneEnvironment;
export { sceneConfigs };
