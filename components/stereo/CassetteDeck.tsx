import React from 'react';
import { motion } from 'framer-motion';
import './stereo.css';

interface CassetteDeckProps {
  playing: boolean;
  power: boolean;
  progress: number; // 0–1
}

const CassetteDeck: React.FC<CassetteDeckProps> = ({ playing, power, progress }) => {
  const isSpinning = playing && power;

  // Supply reel shrinks as tape plays, take-up reel grows
  const supplyRadius = 18 - progress * 10;  // 18px → 8px
  const takeupRadius = 8 + progress * 10;   // 8px → 18px

  // Reel speed: supply slows, take-up speeds up
  const supplyDuration = 2 + progress * 2;  // 2s → 4s
  const takeupDuration = 4 - progress * 2;  // 4s → 2s

  /* ── Spoke Reel Hub ── */
  const ReelHub = ({ duration, radius, label }: { duration: number; radius: number; label: string }) => (
    <div className="relative flex items-center justify-center">
      {/* Tape wound around reel */}
      <div
        className="rounded-full tape-spool flex items-center justify-center"
        style={{
          width: `${radius * 2 + 8}px`,
          height: `${radius * 2 + 8}px`,
          background: `radial-gradient(circle, #1a1410 ${radius - 2}px, #3a2a1a ${radius}px, #2a1e14 ${radius + 4}px)`,
        }}
      >
        {/* The white spoke reel — matches Maxell photo */}
        <motion.div
          className="rounded-full relative"
          style={{
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle at 45% 40%, #e8e0d4 0%, #ccc5b8 30%, #b0a898 60%, #918a7e 100%)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.3)',
          }}
          animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
          transition={isSpinning ? { duration, repeat: Infinity, ease: 'linear' } : { duration: 0 }}
        >
          {/* 5 spokes — wider, cream-colored like the Maxell */}
          {[0, 72, 144, 216, 288].map(angle => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2"
              style={{
                width: '2px',
                height: '7px',
                background: 'linear-gradient(180deg, #d4cdc0, #a89e90)',
                borderRadius: '1px',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}
          {/* Center hole — dark pentagon shape */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: '6px',
              height: '6px',
              background: '#1a1410',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
            }}
          />
        </motion.div>
      </div>
    </div>
  );

  /* ── Corner Screw ── */
  const Screw = ({ className }: { className: string }) => (
    <div
      className={`absolute w-[8px] h-[8px] rounded-full ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #5a5a5a, #333 50%, #222 100%)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.6), inset 0 0.5px 0 rgba(255,255,255,0.1)',
      }}
    >
      {/* Phillips screw cross */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[0.5px] bg-black/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-[5px] bg-black/40" />
    </div>
  );

  return (
    <div className="relative">
      {/* Deck bay — recessed dark area */}
      <div
        className="relative bg-[#080808] rounded-sm border border-white/5 p-3 sm:p-4"
        style={{ boxShadow: 'inset 0 3px 12px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,0,0,0.4)' }}
      >
        {/* Transport label */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-led text-[7px] text-white/10 tracking-[0.3em] uppercase">CASSETTE DECK</span>
          <span className="font-led text-[7px] text-white/10 tracking-[0.3em] uppercase">DOLBY NR</span>
        </div>

        {/* ═══════════ CASSETTE BODY — Maxell XLII 90 style ═══════════ */}
        <div
          className="cassette-body relative rounded-[4px] overflow-hidden mx-auto max-w-[280px]"
          style={{
            aspectRatio: '1.58 / 1',
            background: 'linear-gradient(180deg, #5a5652 0%, #4e4b48 5%, #474441 10%, #3e3c3a 25%, #3a3836 50%, #353331 75%, #302e2c 90%, #2a2826 100%)',
            boxShadow: '0 3px 12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.3)',
          }}
        >
          {/* Corner screws */}
          <Screw className="top-[5px] left-[5px] sm:top-[6px] sm:left-[6px]" />
          <Screw className="top-[5px] right-[5px] sm:top-[6px] sm:right-[6px]" />
          <Screw className="bottom-[30%] left-[5px] sm:bottom-[32%] sm:left-[6px]" />
          <Screw className="bottom-[30%] right-[5px] sm:bottom-[32%] sm:right-[6px]" />

          {/* ── UPPER LABEL AREA — dark panel with gold text ── */}
          <div
            className="mx-[14px] sm:mx-[18px] mt-[8px] sm:mt-[10px] rounded-[2px] relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #2a2826 0%, #222120 50%, #1e1d1c 100%)',
              padding: '6px 8px 5px',
              boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            {/* Handwritten label — "Untold Analog" */}
            <div className="text-center">
              <div
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 'clamp(13px, 2.8vw, 18px)',
                  color: '#c4a862',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  textShadow: '0 0 8px rgba(196,168,98,0.2)',
                }}
              >
                Untold Analog
              </div>
            </div>

            {/* Sub-label info */}
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <div className="h-[1px] flex-1 bg-[#c4a862]/15" />
              <span className="font-led text-[6px] text-[#c4a862]/40 tracking-[0.25em] whitespace-nowrap">
                XLII 90
              </span>
              <div className="h-[1px] flex-1 bg-[#c4a862]/15" />
            </div>
            <div className="font-led text-[5px] text-white/15 tracking-[0.3em] mt-0.5 text-center">
              POSITION · HIGH
            </div>
          </div>

          {/* Side label: "A" marker like the Maxell */}
          <div
            className="absolute left-[6px] sm:left-[8px]"
            style={{
              top: '52%',
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(8px, 1.5vw, 12px)',
              color: '#c4a862',
              opacity: 0.5,
              fontStyle: 'italic',
            }}
          >
            A
          </div>

          {/* ── WINDOW — smoky transparent area showing reels ── */}
          <div className="mx-[12px] sm:mx-[16px] mt-[4px] sm:mt-[5px] relative">
            <div
              className="cassette-window relative rounded-[3px] flex items-center justify-center overflow-hidden"
              style={{
                height: 'clamp(38px, 9vw, 56px)',
                background: 'linear-gradient(180deg, rgba(35,30,28,0.95) 0%, rgba(28,25,22,0.97) 50%, rgba(22,20,18,0.98) 100%)',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.7), inset 0 0 16px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              {/* Smoky glass sheen */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(170deg, rgba(255,255,255,0.03) 0%, transparent 40%, transparent 70%, rgba(255,255,255,0.01) 100%)',
              }} />

              {/* Tape path between reels */}
              <div className="absolute top-1/2 left-[16%] right-[16%] h-[1px] bg-[#3a2a1a]/50 -translate-y-1/2" />

              {/* ── Left Reel (Supply) ── */}
              <div className="absolute left-[22%] top-1/2 -translate-y-1/2">
                <ReelHub duration={supplyDuration} radius={supplyRadius} label="supply" />
              </div>

              {/* ── Right Reel (Take-up) ── */}
              <div className="absolute right-[22%] top-1/2 -translate-y-1/2">
                <ReelHub duration={takeupDuration} radius={takeupRadius} label="takeup" />
              </div>

              {/* Tape guides */}
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-[#555]" />
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-[#555]" />

              {/* Head assembly — center bottom */}
              <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[18px] h-[5px] rounded-t-[2px]"
                style={{
                  background: 'linear-gradient(180deg, #444 0%, #333 100%)',
                  boxShadow: '0 -1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              />
            </div>
          </div>

          {/* Brand mark — centered below window */}
          <div className="text-center mt-[2px] sm:mt-[3px]">
            <span
              className="font-sans font-black tracking-[0.4em] uppercase"
              style={{
                fontSize: 'clamp(7px, 1.5vw, 10px)',
                color: '#c4a862',
                opacity: 0.45,
              }}
            >
              maxell
            </span>
          </div>

          {/* ── BOTTOM RIDGED GRIP — like the Maxell's textured bottom edge ── */}
          <div
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{
              height: 'clamp(14px, 3.5vw, 20px)',
              background: 'linear-gradient(180deg, #3a3836 0%, #333130 30%, #2e2c2a 100%)',
              borderTop: '1px solid rgba(255,255,255,0.03)',
            }}
          >
            {/* Horizontal ridges */}
            <div className="absolute inset-0" style={{
              background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 3px, transparent 3px, transparent 5px)',
            }} />
            {/* Center indent area */}
            <div
              className="absolute left-[15%] right-[15%] top-[15%] bottom-[15%] rounded-[2px]"
              style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
              }}
            />
            {/* Ridges inside the indent */}
            <div
              className="absolute left-[15%] right-[15%] top-[15%] bottom-[15%]"
              style={{
                background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)',
              }}
            />
          </div>

          {/* Side detail — small circular cutout (right side, like real cassettes) */}
          <div
            className="absolute right-[8px] sm:right-[12px]"
            style={{ top: '52%' }}
          >
            <div
              className="w-[6px] h-[6px] rounded-full"
              style={{
                background: 'radial-gradient(circle, #1a1a1a 40%, #2a2826 100%)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>

        {/* Deck status indicators */}
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex items-center gap-2">
            <div className={`w-[4px] h-[4px] rounded-full transition-colors duration-300 ${isSpinning ? 'bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)]' : 'bg-red-900/30'}`} />
            <span className="font-led text-[6px] text-white/10 tracking-[0.2em]">REC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-[4px] h-[4px] rounded-full transition-colors duration-300 ${power ? 'bg-green-400/60 shadow-[0_0_6px_rgba(74,222,128,0.4)]' : 'bg-green-900/20'}`} />
            <span className="font-led text-[6px] text-white/10 tracking-[0.2em]">TAPE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CassetteDeck;
