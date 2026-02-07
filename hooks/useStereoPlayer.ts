import { useState, useCallback, useRef, useEffect } from 'react';
import { Track, StereoState } from '../types';
import { tracks as allTracks } from '../data/musicLibrary';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Filter to only tracks with preview URLs
const playableTracks = allTracks.filter(t => t.previewUrl !== null);

export function useStereoPlayer() {
  const [state, setState] = useState<StereoState>(() => {
    const shuffled = shuffleArray(playableTracks);
    return {
      power: false,
      playing: false,
      volume: 70,
      currentTrack: null,
      currentTrackIndex: -1,
      shuffledQueue: shuffled,
      vuLeft: 0,
      vuRight: 0,
    };
  });

  // ── Refs ──
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const vuFrameRef = useRef<number>(0);
  const playingRef = useRef(false);
  const powerRef = useRef(false);
  const setStateRef = useRef(setState);
  setStateRef.current = setState;

  // Keep refs in sync
  useEffect(() => {
    playingRef.current = state.playing;
    powerRef.current = state.power;
  }, [state.playing, state.power]);

  // ── Create the Audio element once on mount ──
  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7;
    audioRef.current = audio;

    // When a track ends, auto-advance to next
    audio.addEventListener('ended', () => {
      setStateRef.current(prev => {
        if (!prev.power || prev.shuffledQueue.length === 0) return prev;
        const nextIdx = (prev.currentTrackIndex + 1) % prev.shuffledQueue.length;
        return {
          ...prev,
          currentTrackIndex: nextIdx,
          currentTrack: prev.shuffledQueue[nextIdx],
          playing: true,
        };
      });
    });

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  // ── When current track changes, load and play the preview ──
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!state.currentTrack || !state.power) {
      audio.pause();
      return;
    }

    const url = state.currentTrack.previewUrl;
    if (!url) {
      // No preview — skip to next track
      const nextIdx = (state.currentTrackIndex + 1) % state.shuffledQueue.length;
      setState(prev => ({
        ...prev,
        currentTrackIndex: nextIdx,
        currentTrack: prev.shuffledQueue[nextIdx],
      }));
      return;
    }

    audio.src = url;
    if (state.playing) {
      audio.play().catch(() => {
        // Browser may block autoplay on first interaction — that's OK,
        // the power button click counts as user gesture
      });
    }
  }, [state.currentTrack?.spotifyId, state.power]);

  // ── When playing state changes, play or pause ──
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !state.currentTrack) return;

    if (state.playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [state.playing]);

  // ── Volume control ──
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume / 100;
    }
  }, [state.volume]);

  // ── VU meter animation — one stable loop, never restarts ──
  useEffect(() => {
    let active = true;

    const tick = (time: number) => {
      if (!active) return;

      if (playingRef.current && powerRef.current) {
        const t = time * 0.001;
        const bL = 0.45 + 0.25 * Math.sin(t * 2.1) + 0.15 * Math.sin(t * 5.3) + 0.08 * Math.sin(t * 8.7);
        const bR = 0.45 + 0.25 * Math.sin(t * 2.3 + 0.5) + 0.15 * Math.sin(t * 4.7 + 1.2) + 0.08 * Math.sin(t * 9.1 + 0.8);
        const nL = (Math.random() - 0.5) * 0.18;
        const nR = (Math.random() - 0.5) * 0.18;
        const vuLeft = Math.max(0, Math.min(1, bL + nL));
        const vuRight = Math.max(0, Math.min(1, bR + nR));

        setStateRef.current(prev => {
          if (prev.vuLeft === vuLeft && prev.vuRight === vuRight) return prev;
          return { ...prev, vuLeft, vuRight };
        });
      } else {
        setStateRef.current(prev => {
          if (prev.vuLeft === 0 && prev.vuRight === 0) return prev;
          return { ...prev, vuLeft: 0, vuRight: 0 };
        });
      }

      vuFrameRef.current = requestAnimationFrame(tick);
    };

    vuFrameRef.current = requestAnimationFrame(tick);
    return () => { active = false; cancelAnimationFrame(vuFrameRef.current); };
  }, []);

  // ── Power ON → auto-play the first track ──
  const togglePower = useCallback(() => {
    setState(prev => {
      if (prev.power) {
        // Power OFF
        if (audioRef.current) audioRef.current.pause();
        return { ...prev, power: false, playing: false, currentTrack: null, currentTrackIndex: -1, vuLeft: 0, vuRight: 0 };
      }
      const shuffled = shuffleArray(playableTracks);
      return {
        ...prev,
        power: true,
        playing: true,
        shuffledQueue: shuffled,
        currentTrackIndex: 0,
        currentTrack: shuffled[0],
      };
    });
  }, []);

  // Play/Pause toggle
  const togglePlay = useCallback(() => {
    setState(prev => {
      if (!prev.power) return prev;
      if (prev.playing) return { ...prev, playing: false };
      const idx = prev.currentTrackIndex >= 0 ? prev.currentTrackIndex : 0;
      return { ...prev, playing: true, currentTrackIndex: idx, currentTrack: prev.shuffledQueue[idx] };
    });
  }, []);

  // Next track — always plays
  const nextTrack = useCallback(() => {
    setState(prev => {
      if (!prev.power || prev.shuffledQueue.length === 0) return prev;
      const nextIdx = (prev.currentTrackIndex + 1) % prev.shuffledQueue.length;
      return {
        ...prev,
        currentTrackIndex: nextIdx,
        currentTrack: prev.shuffledQueue[nextIdx],
        playing: true,
      };
    });
  }, []);

  // Prev track — always plays
  const prevTrack = useCallback(() => {
    setState(prev => {
      if (!prev.power || prev.shuffledQueue.length === 0) return prev;
      const prevIdx = prev.currentTrackIndex <= 0 ? prev.shuffledQueue.length - 1 : prev.currentTrackIndex - 1;
      return {
        ...prev,
        currentTrackIndex: prevIdx,
        currentTrack: prev.shuffledQueue[prevIdx],
        playing: true,
      };
    });
  }, []);

  const setVolume = useCallback((volume: number) => {
    setState(prev => ({ ...prev, volume: Math.max(0, Math.min(100, volume)) }));
  }, []);

  const reshuffle = useCallback(() => {
    setState(prev => {
      const shuffled = shuffleArray(playableTracks);
      return {
        ...prev,
        shuffledQueue: shuffled,
        currentTrackIndex: 0,
        currentTrack: prev.power ? shuffled[0] : null,
        playing: prev.power,
      };
    });
  }, []);

  return {
    state,
    togglePower,
    togglePlay,
    nextTrack,
    prevTrack,
    setVolume,
    reshuffle,
  };
}
