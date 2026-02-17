import React, { useState, useMemo } from 'react';
import { Track } from '../../types';
import './stereo.css';

interface TrackBrowserProps {
  tracks: Track[];
  currentTrack: Track | null;
  power: boolean;
  onPlayTrackById: (spotifyId: string) => void;
}

const TrackBrowser: React.FC<TrackBrowserProps> = ({ tracks, currentTrack, power, onPlayTrackById }) => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return tracks;
    const q = search.toLowerCase();
    return tracks.filter(t =>
      t.name.toLowerCase().includes(q) || t.artist.toLowerCase().includes(q)
    );
  }, [tracks, search]);

  return (
    <div className="max-w-[800px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-untold-orange/60" />
          <h3 className="font-led text-[11px] sm:text-[13px] text-untold-orange/50 tracking-[0.4em] uppercase led-glow">
            TRACK LISTING
          </h3>
        </div>
        <span className="font-led text-[9px] text-white/30 tracking-[0.2em]">
          {filtered.length} TRACKS
        </span>
      </div>

      {/* Search input — vintage terminal style */}
      <div className="mb-4 relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-untold-orange/30">
          &gt;_
        </div>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="SEARCH ARTIST OR TRACK..."
          className="w-full bg-black/60 border border-white/5 rounded-sm px-8 py-2.5 font-mono text-[11px] text-untold-orange/60 placeholder:text-white/10 tracking-[0.15em] outline-none focus:border-untold-orange/20 transition-colors"
        />
      </div>

      {/* Track list */}
      <div className="track-list-scroll max-h-[500px] overflow-y-auto border border-white/5 rounded-sm bg-black/30">
        {filtered.length === 0 ? (
          <div className="px-4 py-8 text-center font-led text-[10px] text-white/15 tracking-[0.3em]">
            NO MATCHES FOUND
          </div>
        ) : (
          filtered.map((track, idx) => {
            const isCurrent = currentTrack?.spotifyId === track.spotifyId;
            const hasPreview = track.previewUrl !== null;

            return (
              <button
                key={track.id}
                onClick={() => hasPreview && power && onPlayTrackById(track.spotifyId)}
                disabled={!hasPreview || !power}
                className={`
                  w-full text-left px-4 py-2.5 flex items-center gap-3 border-b border-white/[0.03] transition-all
                  ${isCurrent ? 'bg-untold-orange/10 border-l-2 border-l-untold-orange' : 'border-l-2 border-l-transparent'}
                  ${hasPreview && power ? 'hover:bg-white/[0.03] cursor-pointer' : 'opacity-30 cursor-not-allowed'}
                `}
              >
                {/* Track number */}
                <span className="font-mono text-[9px] text-white/30 w-[24px] text-right tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Track info */}
                <div className="flex-1 min-w-0">
                  <div className={`font-mono text-[11px] truncate ${isCurrent ? 'text-untold-orange' : 'text-white/80'}`}>
                    {track.name}
                  </div>
                  {track.artist && (
                    <div className="font-mono text-[9px] text-white/45 truncate">
                      {track.artist}
                    </div>
                  )}
                </div>

                {/* Status indicators */}
                {isCurrent && (
                  <span className="font-led text-[8px] text-untold-orange tracking-[0.2em]">▶</span>
                )}
                {!hasPreview && (
                  <span className="font-led text-[7px] text-white/10 tracking-[0.15em]">NO PREVIEW</span>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TrackBrowser;
