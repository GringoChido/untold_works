import React, { useState } from 'react';
import { SpotifyPlaylist, Track } from '../../types';
import './stereo.css';

interface SpotifyPlaylistsProps {
  playlists: SpotifyPlaylist[];
  currentTrack: Track | null;
  power: boolean;
  onPlayTrackById: (spotifyId: string) => void;
  onLoadPlaylist: (tracks: { spotifyId: string; name: string; artist: string }[], playlistName: string) => void;
  shuffledQueue: Track[];
  activePlaylistName: string | null;
}

// Deterministic color palette for playlist cards — warm vintage tones
const LABEL_COLORS = [
  { bg: '#1a1208', accent: '#c4a862', ring: '#c4a862' },
  { bg: '#0d1018', accent: '#6b8cae', ring: '#6b8cae' },
  { bg: '#180d0d', accent: '#ae6b6b', ring: '#ae6b6b' },
  { bg: '#0d1810', accent: '#6bae7a', ring: '#6bae7a' },
  { bg: '#18130d', accent: '#ae8a6b', ring: '#ae8a6b' },
  { bg: '#150d18', accent: '#8a6bae', ring: '#8a6bae' },
  { bg: '#181210', accent: '#c49862', ring: '#c49862' },
  { bg: '#0d1515', accent: '#6ba8a8', ring: '#6ba8a8' },
];

// Extract month abbreviation and year from playlist name
function parsePlaylistDate(name: string): { month: string; year: string } {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return { month: parts[0].substring(0, 3).toUpperCase(), year: parts[parts.length - 1] };
  }
  return { month: name.substring(0, 3).toUpperCase(), year: '' };
}

const SpotifyPlaylists: React.FC<SpotifyPlaylistsProps> = ({
  playlists, currentTrack, power, onPlayTrackById, onLoadPlaylist, shuffledQueue, activePlaylistName,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Build a Set of playable spotifyIds for fast lookup
  const playableIds = new Set(shuffledQueue.map(t => t.spotifyId));

  const handleCardClick = (playlist: SpotifyPlaylist) => {
    // Load playlist into the player
    onLoadPlaylist(playlist.tracks, playlist.name);
    // Expand the track listing
    setExpandedId(prev => (prev === playlist.id ? null : playlist.id));
  };

  const expandedPlaylist = playlists.find(p => p.id === expandedId);

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-untold-orange/60" />
        <h3 className="font-led text-[11px] sm:text-[13px] text-untold-orange/50 tracking-[0.4em] uppercase led-glow">
          CRATE // PLAYLISTS
        </h3>
      </div>

      {/* Playlist grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {playlists.map((playlist, idx) => {
          const isExpanded = expandedId === playlist.id;
          const isActive = activePlaylistName === playlist.name;
          const colors = LABEL_COLORS[idx % LABEL_COLORS.length];
          const { month, year } = parsePlaylistDate(playlist.name);
          const matchCount = playlist.tracks.filter(t => playableIds.has(t.spotifyId)).length;

          return (
            <button
              key={playlist.id}
              onClick={() => handleCardClick(playlist)}
              className={`
                group text-left rounded-sm overflow-hidden transition-all duration-300
                border
                ${isExpanded || isActive ? 'border-untold-orange/40 ring-1 ring-untold-orange/20' : 'border-white/5 hover:border-white/10'}
              `}
            >
              {/* Vinyl label cover — CSS generated */}
              <div
                className="aspect-square relative overflow-hidden flex items-center justify-center"
                style={{ background: colors.bg }}
              >
                {/* Outer ring */}
                <div
                  className="absolute inset-[8%] rounded-full border opacity-20"
                  style={{ borderColor: colors.accent }}
                />
                {/* Inner ring */}
                <div
                  className="absolute inset-[18%] rounded-full border opacity-10"
                  style={{ borderColor: colors.accent }}
                />
                {/* Center label area */}
                <div className="relative z-10 text-center px-2">
                  <div
                    className="font-sans font-black text-[24px] sm:text-[28px] leading-none tracking-tighter"
                    style={{ color: colors.accent }}
                  >
                    {month}
                  </div>
                  <div
                    className="font-led text-[10px] tracking-[0.4em] mt-1 opacity-50"
                    style={{ color: colors.accent }}
                  >
                    {year}
                  </div>
                  <div className="w-8 h-[1px] mx-auto mt-2 mb-1.5 opacity-20" style={{ background: colors.accent }} />
                  <div className="font-led text-[6px] tracking-[0.2em] text-white/15 uppercase">
                    UNTOLD.WORKS
                  </div>
                </div>
                {/* Center hole */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-black/60 border border-white/5" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-led text-[9px] text-untold-orange tracking-[0.3em]">
                    {matchCount > 0 ? `${matchCount} PLAYABLE` : 'VIEW'}
                  </span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-2 right-2">
                    <span className="w-2 h-2 rounded-full bg-untold-orange inline-block animate-pulse" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="px-2.5 py-2 bg-white/[0.02]">
                <div className={`font-mono text-[10px] sm:text-[11px] truncate ${isActive ? 'text-untold-orange' : 'text-white/50'}`}>
                  {playlist.name}
                </div>
                <div className="font-mono text-[8px] text-white/15 mt-0.5">
                  {playlist.tracks.length} tracks
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded track listing */}
      {expandedPlaylist && (
        <div className="mt-6 border border-white/5 rounded-sm bg-black/30 overflow-hidden">
          {/* Expanded header with playlist title */}
          <div className="flex items-center gap-4 p-4 border-b border-white/5">
            {/* Mini vinyl label */}
            <div
              className="w-[60px] h-[60px] rounded-full flex-shrink-0 flex items-center justify-center relative"
              style={{ background: LABEL_COLORS[playlists.indexOf(expandedPlaylist) % LABEL_COLORS.length].bg }}
            >
              <div
                className="absolute inset-[12%] rounded-full border opacity-15"
                style={{ borderColor: LABEL_COLORS[playlists.indexOf(expandedPlaylist) % LABEL_COLORS.length].accent }}
              />
              <span
                className="font-sans font-black text-[11px] tracking-tight relative z-10"
                style={{ color: LABEL_COLORS[playlists.indexOf(expandedPlaylist) % LABEL_COLORS.length].accent }}
              >
                {parsePlaylistDate(expandedPlaylist.name).month}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-sans font-black text-[16px] sm:text-[20px] text-untold-orange uppercase tracking-tight truncate">
                {expandedPlaylist.name}
              </div>
              <div className="font-mono text-[9px] text-white/30 mt-0.5">
                {expandedPlaylist.description} — {expandedPlaylist.tracks.length} tracks
                {activePlaylistName === expandedPlaylist.name && (
                  <span className="ml-2 text-untold-orange/60">NOW PLAYING</span>
                )}
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
              className="font-led text-[9px] text-white/20 hover:text-white/40 tracking-[0.2em] transition-colors px-2"
            >
              CLOSE ✕
            </button>
          </div>

          {/* Track list */}
          <div className="track-list-scroll max-h-[400px] overflow-y-auto">
            {expandedPlaylist.tracks.map((track, idx) => {
              const isPlayable = playableIds.has(track.spotifyId);
              const isCurrent = currentTrack?.spotifyId === track.spotifyId;

              return (
                <button
                  key={`${expandedPlaylist.id}-${track.spotifyId}-${idx}`}
                  onClick={() => isPlayable && power && onPlayTrackById(track.spotifyId)}
                  disabled={!isPlayable || !power}
                  className={`
                    w-full text-left px-4 py-2.5 flex items-center gap-3 border-b border-white/[0.03] transition-all
                    ${isCurrent ? 'bg-untold-orange/10 border-l-2 border-l-untold-orange' : 'border-l-2 border-l-transparent'}
                    ${isPlayable && power ? 'hover:bg-white/[0.03] cursor-pointer' : 'opacity-30 cursor-not-allowed'}
                  `}
                >
                  <span className="font-mono text-[9px] text-white/30 w-[20px] text-right tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className={`font-mono text-[11px] truncate ${isCurrent ? 'text-untold-orange' : isPlayable ? 'text-white/80' : 'text-white/25'}`}>
                      {track.name}
                    </div>
                    {track.artist && (
                      <div className={`font-mono text-[9px] truncate ${isPlayable ? 'text-white/45' : 'text-white/15'}`}>
                        {track.artist}
                      </div>
                    )}
                  </div>

                  {isCurrent && (
                    <span className="font-led text-[8px] text-untold-orange tracking-[0.2em]">▶</span>
                  )}
                  {!isPlayable && (
                    <span className="font-led text-[6px] text-white/10 tracking-[0.1em] whitespace-nowrap">NO PREVIEW</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlaylists;
