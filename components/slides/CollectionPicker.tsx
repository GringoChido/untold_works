import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideCollection, SlideScene } from '../../types';

interface Props {
  collections: SlideCollection[];
  onSelect: (collection: SlideCollection) => void;
}

const sceneBadgeColors: Record<SlideScene, string> = {
  vintage: 'bg-amber-500/20 text-amber-300',
  haring: 'bg-pink-500/20 text-pink-300',
  bigsur: 'bg-teal-500/20 text-teal-300',
  polaroid: 'bg-orange-500/20 text-orange-300',
  tokyo: 'bg-cyan-500/20 text-cyan-300',
  brutalist: 'bg-neutral-500/20 text-neutral-300',
  campfire: 'bg-orange-600/20 text-orange-300',
  cinema: 'bg-white/10 text-white/70',
};

const sceneLabels: Record<SlideScene, string> = {
  vintage: 'KODACHROME',
  haring: 'POP ENERGY',
  bigsur: 'PACIFIC FOG',
  polaroid: 'INSTANT',
  tokyo: 'NEON NOIR',
  brutalist: 'CONCRETE',
  campfire: 'EMBER',
  cinema: 'CINEMASCOPE',
};

const CollectionPicker: React.FC<Props> = ({ collections, onSelect }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {collections.map((collection, i) => (
        <motion.button
          key={collection.id}
          onClick={() => onSelect(collection)}
          onMouseEnter={() => setHoveredId(collection.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group relative overflow-hidden text-left border border-white/5 hover:border-white/20 transition-all duration-700 bg-white/[0.02]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          {/* Preview image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={collection.images[0].url}
              alt={collection.title}
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Scene badge */}
            <div className="absolute top-3 left-3">
              <span className={`inline-block px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.3em] rounded-sm ${sceneBadgeColors[collection.scene]}`}>
                {sceneLabels[collection.scene]}
              </span>
            </div>

            {/* Play icon on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-4 sm:p-5">
            <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter text-white group-hover:text-untold-orange transition-colors duration-500 leading-tight">
              {collection.title}
            </h3>
            <p className="font-serif text-sm text-white/40 mt-1.5 leading-relaxed line-clamp-2">
              {collection.subtitle}
            </p>

            {/* Track info */}
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 flex-shrink-0">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span className="font-mono text-[10px] text-white/25 truncate uppercase tracking-[0.2em]">
                {collection.track.name}
                {collection.track.artist ? ` — ${collection.track.artist}` : ''}
              </span>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default CollectionPicker;
