import React from 'react';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const AlignmentDiagram: React.FC = () => {
  const { t } = useLanguage();
  const labels = i18n.diagramLabels;

  // Center of the diagram
  const cx = 350;
  const cy = 280;

  // Four nodes distributed across all four quadrants (compass diamond)
  const nodes = [
    { x: 140, y: 90 },   // Partners — upper-left
    { x: 560, y: 90 },   // Distributors — upper-right
    { x: 560, y: 470 },  // Locations — lower-right
    { x: 140, y: 470 },  // Teams — lower-left
  ];

  // Ring radii — outermost = Product Information, innermost = Sales Visibility
  const rings = [
    { r: 175, strokeW: 0.8, opacity: 0.22, dash: '6 10' },
    { r: 138, strokeW: 1.0, opacity: 0.28, dash: '4 8' },
    { r: 101, strokeW: 1.2, opacity: 0.34, dash: 'none' },
    { r: 64,  strokeW: 1.5, opacity: 0.42, dash: 'none' },
  ];

  // Layer label positions — placed on the LEFT side for visual balance
  const layerLabelPositions = [
    { x: cx - 178, y: cy - 40 },  // Product Information — outermost
    { x: cx - 142, y: cy - 15 },  // Communication
    { x: cx - 106, y: cy + 10 },  // Lead Routing
    { x: cx - 70,  y: cy + 35 },  // Sales Visibility — innermost
  ];

  // Curved Bézier path from each node TOWARD center (data flows inward)
  const getPath = (node: { x: number; y: number }) => {
    // Control point offset — perpendicular to direct line for smooth curve
    const dx = node.x - cx;
    const dy = node.y - cy;
    const perpX = -dy * 0.2;
    const perpY = dx * 0.2;
    const cpx = (node.x + cx) / 2 + perpX;
    const cpy = (node.y + cy) / 2 + perpY;
    return `M${node.x},${node.y} Q${cpx},${cpy} ${cx},${cy}`;
  };

  return (
    <>
      <style>{`
        @keyframes diagram-fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes center-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,77,23,0.25)); }
          50% { filter: drop-shadow(0 0 24px rgba(255,77,23,0.5)); }
        }
        @keyframes ring-breathe {
          0%, 100% { opacity: var(--ring-base-opacity); }
          50% { opacity: calc(var(--ring-base-opacity) + 0.12); }
        }
        @keyframes particle-travel {
          0% { offset-distance: 0%; opacity: 0; }
          8% { opacity: 0.85; }
          88% { opacity: 0.85; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes dash-crawl {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes node-enter {
          from { opacity: 0; transform: scale(0.92) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes label-enter {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes ring-expand {
          from { r: 0; opacity: 0; }
          to { opacity: 1; }
        }

        .alignment-diagram { animation: diagram-fade-in 0.7s ease-out both; }
        .center-core { animation: center-pulse 3.5s ease-in-out infinite; }

        .node-enter-0 { animation: node-enter 0.5s ease-out 0.6s both; }
        .node-enter-1 { animation: node-enter 0.5s ease-out 0.75s both; }
        .node-enter-2 { animation: node-enter 0.5s ease-out 0.9s both; }
        .node-enter-3 { animation: node-enter 0.5s ease-out 1.05s both; }

        .label-enter-0 { animation: label-enter 0.4s ease-out 0.5s both; }
        .label-enter-1 { animation: label-enter 0.4s ease-out 0.65s both; }
        .label-enter-2 { animation: label-enter 0.4s ease-out 0.8s both; }
        .label-enter-3 { animation: label-enter 0.4s ease-out 0.95s both; }

        .mobile-node {
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .mobile-node:active {
          transform: scale(0.97);
          border-color: #FF4D17;
        }
      `}</style>

      {/* ══════════ DESKTOP / TABLET SVG ══════════ */}
      <div className="w-full justify-center hidden sm:flex alignment-diagram">
        <svg
          viewBox="0 0 700 560"
          className="w-full max-w-[720px] h-auto"
          role="img"
          aria-label={t({
            en: 'Untold alignment system: Company at center connected to Partners, Distributors, Locations, and Teams through Product Information, Communication, Lead Routing, and Sales Visibility layers',
            es: 'Sistema de alineación Untold: Empresa en el centro conectada a Socios, Distribuidores, Ubicaciones y Equipos a través de capas de Información de Producto, Comunicación, Enrutamiento y Visibilidad de Ventas'
          })}
        >
          <defs>
            {/* Center ambient glow */}
            <radialGradient id="ag-center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF4D17" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#FF4D17" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FF4D17" stopOpacity="0" />
            </radialGradient>

            {/* Particle glow */}
            <filter id="ag-particle-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Card shadow */}
            <filter id="ag-card-shadow" x="-15%" y="-15%" width="130%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.06" />
            </filter>

            {/* Center shadow */}
            <filter id="ag-center-shadow" x="-25%" y="-30%" width="150%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#FF4D17" floodOpacity="0.15" />
            </filter>

            {/* Very faint zone fills between rings */}
            <radialGradient id="ag-zone-0" cx="50%" cy="50%" r="50%">
              <stop offset="78%" stopColor="#D9D5CF" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#D9D5CF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ── Ambient glow ── */}
          <circle cx={cx} cy={cy} r={200} fill="url(#ag-center-glow)" />

          {/* ── Zone fill bands (faint) ── */}
          {rings.map((ring, idx) => (
            <circle
              key={`zone-${idx}`}
              cx={cx}
              cy={cy}
              r={ring.r}
              fill="none"
              stroke="#D9D5CF"
              strokeWidth={ring.r - (rings[idx + 1]?.r ?? 0)}
              opacity={0.015 + idx * 0.005}
            />
          ))}

          {/* ── System layer rings ── */}
          {rings.map((ring, idx) => (
            <circle
              key={`ring-${idx}`}
              cx={cx}
              cy={cy}
              r={ring.r}
              fill="none"
              stroke="#D9D5CF"
              strokeWidth={ring.strokeW}
              strokeDasharray={ring.dash}
              style={{
                '--ring-base-opacity': String(ring.opacity),
                opacity: ring.opacity,
                animation: `ring-breathe 5s ease-in-out ${idx * 0.6}s infinite`,
              } as React.CSSProperties}
            />
          ))}

          {/* ── Layer labels — LEFT side, clearly readable ── */}
          {labels.layers.map((label, idx) => {
            const pos = layerLabelPositions[idx];
            const labelOpacity = 0.4 + idx * 0.08;
            return (
              <g key={`layer-label-${idx}`} className={`label-enter-${idx}`}>
                {/* Leader line from label to ring */}
                <line
                  x1={pos.x + 2}
                  y1={pos.y}
                  x2={cx - rings[idx].r + 4}
                  y2={pos.y}
                  stroke="#D9D5CF"
                  strokeWidth="0.5"
                  opacity={0.3}
                />
                {/* Small dot at ring intersection */}
                <circle
                  cx={cx - rings[idx].r + 4}
                  cy={pos.y}
                  r="2"
                  fill="#FF4D17"
                  opacity={0.3 + idx * 0.08}
                />
                <text
                  x={pos.x}
                  y={pos.y + 1}
                  textAnchor="end"
                  dominantBaseline="middle"
                  style={{
                    fontSize: '10px',
                    fontFamily: 'IBM Plex Mono, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontWeight: idx >= 2 ? 700 : 600,
                    fill: `rgba(74, 74, 74, ${labelOpacity})`,
                  }}
                >
                  {t(label)}
                </text>
              </g>
            );
          })}

          {/* ── Curved connection paths + flowing particles ── */}
          {nodes.map((node, idx) => {
            const d = getPath(node);
            return (
              <g key={`conn-${idx}`}>
                {/* Base path — subtle */}
                <path
                  d={d}
                  fill="none"
                  stroke="#D9D5CF"
                  strokeWidth="1.2"
                  opacity={0.2}
                />
                {/* Animated dashes flowing inward */}
                <path
                  d={d}
                  fill="none"
                  stroke="#D9D5CF"
                  strokeWidth="1.2"
                  strokeDasharray="4 6"
                  opacity={0.35}
                  style={{
                    animation: `dash-crawl ${1.8 + idx * 0.3}s linear infinite`,
                  }}
                />
                {/* Data particle traveling inward */}
                <circle
                  r="2.5"
                  fill="#FF4D17"
                  filter="url(#ag-particle-glow)"
                >
                  <animateMotion
                    dur={`${3 + idx * 0.6}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0.8;0"
                    keyTimes="0;0.08;0.88;1"
                    dur={`${3 + idx * 0.6}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Second staggered particle — offset timing */}
                <circle
                  r="2"
                  fill="#FF4D17"
                  filter="url(#ag-particle-glow)"
                >
                  <animateMotion
                    dur={`${3 + idx * 0.6}s`}
                    repeatCount="indefinite"
                    path={d}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    begin={`${1.5 + idx * 0.3}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.5;0.5;0"
                    keyTimes="0;0.08;0.88;1"
                    dur={`${3 + idx * 0.6}s`}
                    repeatCount="indefinite"
                    begin={`${1.5 + idx * 0.3}s`}
                  />
                </circle>
              </g>
            );
          })}

          {/* ── Outer node cards ── */}
          {nodes.map((node, idx) => {
            const cardW = 120;
            const cardH = 38;
            return (
              <g key={`node-${idx}`} className={`node-enter-${idx}`} filter="url(#ag-card-shadow)">
                {/* Card background */}
                <rect
                  x={node.x - cardW / 2}
                  y={node.y - cardH / 2}
                  width={cardW}
                  height={cardH}
                  rx={4}
                  fill="white"
                  stroke="#D9D5CF"
                  strokeWidth="1"
                />
                {/* Left-edge orange accent bar */}
                <rect
                  x={node.x - cardW / 2}
                  y={node.y - cardH / 2 + 4}
                  width={2.5}
                  height={cardH - 8}
                  rx={1}
                  fill="#FF4D17"
                  opacity={0.55}
                />
                {/* Node label */}
                <text
                  x={node.x + 2}
                  y={node.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    fontSize: '11.5px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    fill: '#4A4A4A',
                  }}
                >
                  {t(labels.nodes[idx])}
                </text>
              </g>
            );
          })}

          {/* ── Center node — Company ── */}
          <g className="center-core">
            <rect
              x={cx - 68}
              y={cy - 24}
              width={136}
              height={48}
              rx={4}
              fill="#000000"
              filter="url(#ag-center-shadow)"
            />
            {/* Orange underline accent */}
            <rect
              x={cx - 36}
              y={cy + 24}
              width={72}
              height={2}
              rx={1}
              fill="#FF4D17"
              opacity={0.5}
            />
            <text
              x={cx}
              y={cy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              {t(labels.center)}
            </text>
          </g>

          {/* ── Automation & AI footer ── */}
          <line
            x1={cx - 80}
            y1={530}
            x2={cx + 80}
            y2={530}
            stroke="#FF4D17"
            strokeWidth="1"
            opacity={0.2}
          />
          <text
            x={cx}
            y={547}
            textAnchor="middle"
            style={{
              fontSize: '9.5px',
              fontFamily: 'IBM Plex Mono, monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontWeight: 700,
              fill: '#FF4D17',
            }}
          >
            {t(labels.behind)}
          </text>
        </svg>
      </div>

      {/* ══════════ MOBILE LAYOUT ══════════ */}
      <div className="sm:hidden w-full px-1">
        {/* Center node — prominent, full-width */}
        <div
          className="bg-untold-black text-white px-5 py-5 text-center rounded relative overflow-hidden"
          style={{ boxShadow: '0 4px 24px rgba(255,77,23,0.12)' }}
        >
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ background: 'radial-gradient(circle at 50% 50%, #FF4D17 0%, transparent 70%)' }}
          />
          <span className="font-sans font-black text-sm uppercase tracking-tight relative z-10">
            {t(labels.center)}
          </span>
          <div className="w-10 h-0.5 bg-untold-orange/40 mx-auto mt-2 rounded-full" />
        </div>

        {/* Vertical spine — connecting center to system layers */}
        <div className="flex justify-center">
          <div className="w-px h-5 bg-untold-border" />
        </div>

        {/* System layers — the value proposition */}
        <div className="border border-untold-border rounded bg-white">
          {labels.layers.map((layer, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-4 py-3 ${idx < 3 ? 'border-b border-untold-border' : ''}`}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  backgroundColor: `rgba(255, 77, 23, ${0.25 + idx * 0.12})`,
                  boxShadow: `0 0 4px rgba(255, 77, 23, ${0.1 + idx * 0.06})`,
                }}
              />
              <span
                className="font-mono uppercase tracking-[0.15em]"
                style={{
                  fontSize: '10px',
                  fontWeight: idx >= 2 ? 700 : 600,
                  color: `rgba(74, 74, 74, ${0.45 + idx * 0.08})`,
                }}
              >
                {t(layer)}
              </span>
            </div>
          ))}
        </div>

        {/* Vertical spine */}
        <div className="flex justify-center">
          <div className="w-px h-5 bg-untold-border" />
        </div>

        {/* Outer nodes — 2×2 grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {labels.nodes.map((node, idx) => (
            <div
              key={idx}
              className="mobile-node border border-untold-border bg-white px-4 py-3.5 rounded relative overflow-hidden"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}
            >
              <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-untold-orange/40" />
              <span className="font-sans font-black text-[11px] uppercase tracking-tight text-untold-gray block text-center">
                {t(node)}
              </span>
            </div>
          ))}
        </div>

        {/* Automation & AI signature */}
        <div className="text-center mt-5">
          <div className="w-14 h-px bg-untold-orange/20 mx-auto mb-2.5" />
          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-untold-orange font-bold">
            {t(labels.behind)}
          </p>
        </div>
      </div>
    </>
  );
};

export default AlignmentDiagram;
