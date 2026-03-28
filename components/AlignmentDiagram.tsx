import React from 'react';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const AlignmentDiagram: React.FC = () => {
  const { t } = useLanguage();
  const labels = i18n.diagramLabels;

  // Node positions around center (Company)
  const nodes = [
    { x: 300, y: 60 },   // Partners (top)
    { x: 540, y: 200 },  // Distributors (right)
    { x: 420, y: 380 },  // Locations (bottom-right)
    { x: 180, y: 380 },  // Teams (bottom-left)
  ];

  // Alternate: also add a fifth if needed, but prompt says 4 surrounding
  const cx = 300;
  const cy = 220;

  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 600 480"
        className="w-full max-w-[600px] h-auto"
        role="img"
        aria-label={t({ en: 'Untold alignment system diagram showing Company at center connected to Partners, Distributors, Locations, and Teams through four system layers', es: 'Diagrama del sistema de alineación Untold mostrando Empresa en el centro conectada a Socios, Distribuidores, Ubicaciones y Equipos a través de cuatro capas de sistema' })}
      >
        {/* System layer rings (behind everything) */}
        {[160, 130, 100, 70].map((r, idx) => (
          <circle
            key={idx}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#D9D5CF"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.6}
          />
        ))}

        {/* Layer labels along rings */}
        {labels.layers.map((label, idx) => {
          const r = 160 - idx * 30;
          const angle = -35 + idx * 15;
          const rad = (angle * Math.PI) / 180;
          const lx = cx + r * Math.cos(rad);
          const ly = cy + r * Math.sin(rad);
          return (
            <text
              key={idx}
              x={lx}
              y={ly}
              textAnchor="start"
              className="fill-untold-gray/40"
              style={{ fontSize: '8px', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.15em' }}
            >
              {t(label)}
            </text>
          );
        })}

        {/* Connection lines from center to each node */}
        {nodes.map((node, idx) => (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke="#D9D5CF"
            strokeWidth="1.5"
            opacity={0.5}
          />
        ))}

        {/* Surrounding nodes */}
        {nodes.map((node, idx) => (
          <g key={idx}>
            <rect
              x={node.x - 52}
              y={node.y - 16}
              width={104}
              height={32}
              rx={2}
              fill="white"
              stroke="#D9D5CF"
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-untold-gray"
              style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}
            >
              {t(labels.nodes[idx])}
            </text>
          </g>
        ))}

        {/* Center node — Company */}
        <rect
          x={cx - 60}
          y={cy - 20}
          width={120}
          height={40}
          rx={2}
          fill="#000000"
        />
        <text
          x={cx}
          y={cy + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}
        >
          {t(labels.center)}
        </text>

        {/* Automation & AI label at bottom */}
        <text
          x={cx}
          y={450}
          textAnchor="middle"
          className="fill-untold-orange"
          style={{ fontSize: '9px', fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.4em', fontWeight: 700 }}
        >
          {t(labels.behind)}
        </text>
        <line
          x1={cx - 80}
          y1={438}
          x2={cx + 80}
          y2={438}
          stroke="#FF4D17"
          strokeWidth="1"
          opacity={0.3}
        />
      </svg>
    </div>
  );
};

export default AlignmentDiagram;
