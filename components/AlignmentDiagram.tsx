import React from 'react';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const AlignmentDiagram: React.FC = () => {
  const { t } = useLanguage();
  const labels = i18n.diagramLabels;

  // Node positions for desktop SVG (viewBox 600x500)
  const nodes = [
    { x: 300, y: 50, angle: -90 },    // Partners (top)
    { x: 530, y: 220, angle: 0 },     // Distributors (right)
    { x: 420, y: 410, angle: 45 },    // Locations (bottom-right)
    { x: 180, y: 410, angle: 135 },   // Teams (bottom-left)
  ];

  const cx = 300;
  const cy = 240;
  const ringRadii = [160, 128, 96, 64];

  // Generate animated particle paths from center to each node
  const getPathD = (node: { x: number; y: number }) => {
    const mx = (cx + node.x) / 2;
    const my = (cy + node.y) / 2;
    const offset = 20;
    return `M${cx},${cy} Q${mx + offset},${my - offset} ${node.x},${node.y}`;
  };

  return (
    <>
      {/* Inline keyframes for animations */}
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.08); } }
        @keyframes pulse-ring { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.6; } }
        @keyframes dash-flow { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
        @keyframes particle-flow-0 { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes center-breathe { 0%, 100% { filter: drop-shadow(0 0 8px rgba(255,77,23,0.3)); } 50% { filter: drop-shadow(0 0 20px rgba(255,77,23,0.6)); } }
        @keyframes orbit-dot {
          from { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
        }

        .diagram-container { animation: fade-in-up 0.8s ease-out both; }
        .ring-animated { animation: pulse-ring 4s ease-in-out infinite; }
        .center-group { animation: center-breathe 3s ease-in-out infinite; }
        .node-card { animation: fade-in-up 0.6s ease-out both; }
        .node-card:nth-child(1) { animation-delay: 0.2s; }
        .node-card:nth-child(2) { animation-delay: 0.35s; }
        .node-card:nth-child(3) { animation-delay: 0.5s; }
        .node-card:nth-child(4) { animation-delay: 0.65s; }
        .flow-line { animation: dash-flow 1.5s linear infinite; }
        .float-label { animation: float 5s ease-in-out infinite; }

        .orbit-dot {
          transform-origin: center;
          animation: orbit-dot var(--orbit-dur) linear infinite;
        }

        /* Mobile card hover */
        .mobile-node-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-node-card:active {
          transform: scale(0.97);
          border-color: #FF4D17;
        }
      `}</style>

      {/* ──────── Desktop / Tablet SVG ──────── */}
      <div className="w-full justify-center hidden sm:flex diagram-container">
        <svg
          viewBox="0 0 600 500"
          className="w-full max-w-[620px] h-auto"
          role="img"
          aria-label={t({
            en: 'Untold alignment system diagram showing Company at center connected to Partners, Distributors, Locations, and Teams through four animated system layers',
            es: 'Diagrama del sistema de alineación Untold mostrando Empresa en el centro conectada a Socios, Distribuidores, Ubicaciones y Equipos a través de cuatro capas animadas'
          })}
        >
          <defs>
            {/* Radial glow behind center */}
            <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF4D17" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#FF4D17" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FF4D17" stopOpacity="0" />
            </radialGradient>

            {/* Gradient for connection lines */}
            <linearGradient id="line-grad-0" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF4D17" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D9D5CF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4D17" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D9D5CF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FF4D17" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D9D5CF" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-grad-3" x1="100%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FF4D17" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D9D5CF" stopOpacity="0.2" />
            </linearGradient>

            {/* Particle glow filter */}
            <filter id="particle-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft shadow for node cards */}
            <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.06" />
            </filter>

            {/* Center node shadow */}
            <filter id="center-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#FF4D17" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* ── Ambient glow behind center ── */}
          <circle cx={cx} cy={cy} r={180} fill="url(#center-glow)" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />

          {/* ── System layer rings ── */}
          {ringRadii.map((r, idx) => (
            <g key={`ring-${idx}`}>
              {/* Solid subtle ring */}
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="#D9D5CF"
                strokeWidth={idx === 0 ? 1.2 : 0.8}
                opacity={0.3 + idx * 0.05}
                className="ring-animated"
                style={{ animationDelay: `${idx * 0.5}s` }}
              />
              {/* Dashed overlay for texture */}
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="#FF4D17"
                strokeWidth="0.5"
                strokeDasharray="2 8"
                opacity={0.15}
                className="flow-line"
                style={{ animationDelay: `${idx * 0.3}s`, animationDuration: `${3 + idx}s` }}
              />
            </g>
          ))}

          {/* ── Orbiting dots on rings ── */}
          {ringRadii.map((r, idx) => (
            <circle
              key={`orb-${idx}`}
              cx={cx}
              cy={cy}
              r={3 - idx * 0.4}
              fill="#FF4D17"
              opacity={0.5 - idx * 0.08}
              filter="url(#particle-glow)"
              className="orbit-dot"
              style={{
                '--orbit-r': `${r}px`,
                '--orbit-dur': `${8 + idx * 4}s`,
                transformOrigin: `${cx}px ${cy}px`,
              } as React.CSSProperties}
            />
          ))}

          {/* ── Layer labels along rings ── */}
          {labels.layers.map((label, idx) => {
            const r = ringRadii[idx];
            const angle = -42 + idx * 14;
            const rad = (angle * Math.PI) / 180;
            const lx = cx + r * Math.cos(rad);
            const ly = cy + r * Math.sin(rad);
            return (
              <text
                key={`label-${idx}`}
                x={lx}
                y={ly}
                textAnchor="start"
                className="fill-untold-gray/30"
                style={{
                  fontSize: '7.5px',
                  fontFamily: 'IBM Plex Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  animation: `fade-in-up 0.5s ease-out ${0.8 + idx * 0.15}s both`,
                }}
              >
                {t(label)}
              </text>
            );
          })}

          {/* ── Curved connection lines with flowing dashes ── */}
          {nodes.map((node, idx) => {
            const d = getPathD(node);
            return (
              <g key={`conn-${idx}`}>
                {/* Base path (subtle) */}
                <path
                  d={d}
                  fill="none"
                  stroke="#D9D5CF"
                  strokeWidth="1.5"
                  opacity={0.25}
                />
                {/* Animated flowing path */}
                <path
                  d={d}
                  fill="none"
                  stroke={`url(#line-grad-${idx})`}
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  className="flow-line"
                  style={{ animationDuration: `${1.2 + idx * 0.2}s` }}
                />
                {/* Traveling particle along path */}
                <circle
                  r="3"
                  fill="#FF4D17"
                  opacity="0.7"
                  filter="url(#particle-glow)"
                >
                  <animateMotion
                    dur={`${2.5 + idx * 0.5}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0.8;0"
                    keyTimes="0;0.1;0.85;1"
                    dur={`${2.5 + idx * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* ── Surrounding node cards ── */}
          {nodes.map((node, idx) => (
            <g key={`node-${idx}`} className="node-card" filter="url(#card-shadow)">
              {/* Card background */}
              <rect
                x={node.x - 56}
                y={node.y - 18}
                width={112}
                height={36}
                rx={4}
                fill="white"
                stroke="#D9D5CF"
                strokeWidth="1"
              />
              {/* Subtle accent line on left */}
              <rect
                x={node.x - 56}
                y={node.y - 18}
                width={3}
                height={36}
                rx={4}
                fill="#FF4D17"
                opacity={0.6}
              />
              {/* Node label */}
              <text
                x={node.x + 2}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-untold-gray"
                style={{
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                {t(labels.nodes[idx])}
              </text>
            </g>
          ))}

          {/* ── Center node — Company ── */}
          <g className="center-group">
            {/* Outer glow ring */}
            <circle
              cx={cx}
              cy={cy}
              r={38}
              fill="none"
              stroke="#FF4D17"
              strokeWidth="0.5"
              opacity={0.3}
            />
            {/* Main center card */}
            <rect
              x={cx - 64}
              y={cy - 22}
              width={128}
              height={44}
              rx={4}
              fill="#000000"
              filter="url(#center-shadow)"
            />
            {/* Orange accent underline */}
            <rect
              x={cx - 40}
              y={cy + 22}
              width={80}
              height={2}
              rx={1}
              fill="#FF4D17"
              opacity={0.6}
            />
            <text
              x={cx}
              y={cy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              style={{
                fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
              }}
            >
              {t(labels.center)}
            </text>
          </g>

          {/* ── Automation & AI label at bottom ── */}
          <g className="float-label" style={{ animationDelay: '1s' }}>
            <line
              x1={cx - 90}
              y1={468}
              x2={cx + 90}
              y2={468}
              stroke="#FF4D17"
              strokeWidth="1"
              opacity={0.2}
            />
            <text
              x={cx}
              y={484}
              textAnchor="middle"
              className="fill-untold-orange"
              style={{
                fontSize: '9px',
                fontFamily: 'IBM Plex Mono, monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.45em',
                fontWeight: 700,
              }}
            >
              {t(labels.behind)}
            </text>
            {/* Small decorative dots */}
            <circle cx={cx - 100} cy={468} r="2" fill="#FF4D17" opacity="0.3" />
            <circle cx={cx + 100} cy={468} r="2" fill="#FF4D17" opacity="0.3" />
          </g>
        </svg>
      </div>

      {/* ──────── Mobile Card Layout ──────── */}
      <div className="sm:hidden w-full space-y-4">
        {/* Center node */}
        <div
          className="bg-untold-black text-white px-5 py-4 text-center rounded-md relative overflow-hidden"
          style={{ boxShadow: '0 4px 20px rgba(255,77,23,0.15)' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(circle at 50% 50%, #FF4D17 0%, transparent 70%)',
            }}
          />
          <span className="font-sans font-black text-sm uppercase tracking-tighter relative z-10">
            {t(labels.center)}
          </span>
          <div className="w-12 h-0.5 bg-untold-orange/50 mx-auto mt-2 rounded-full" />
        </div>

        {/* Surrounding nodes */}
        <div className="grid grid-cols-2 gap-3">
          {labels.nodes.map((node, idx) => (
            <div
              key={idx}
              className="mobile-node-card border border-untold-border bg-white px-4 py-4 text-center rounded-md relative overflow-hidden"
              style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-untold-orange/40" />
              <span className="font-sans font-black text-xs uppercase tracking-tighter text-untold-gray">
                {t(node)}
              </span>
            </div>
          ))}
        </div>

        {/* Layer labels */}
        <div className="border-t border-untold-border pt-4 space-y-2">
          {labels.layers.map((layer, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: `rgba(255, 77, 23, ${0.2 + idx * 0.1})`,
                  boxShadow: `0 0 6px rgba(255, 77, 23, ${0.1 + idx * 0.05})`,
                }}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-untold-gray/50">
                {t(layer)}
              </span>
            </div>
          ))}
        </div>

        {/* AI label */}
        <div className="text-center pt-2">
          <div className="w-16 h-px bg-untold-orange/20 mx-auto mb-2" />
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-untold-orange font-bold">
            {t(labels.behind)}
          </p>
        </div>
      </div>
    </>
  );
};

export default AlignmentDiagram;
