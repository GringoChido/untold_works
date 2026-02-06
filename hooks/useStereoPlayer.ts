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

export function useStereoPlayer() {
  const [state, setState] = useState<StereoState>(() => {
    const shuffled = shuffleArray(allTracks);
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

  // Refs for the VU animation loop — decoupled from React render cycle
  const vuFrameRef = useRef<number>(0);
  const playingRef = useRef(false);
  const powerRef = useRef(false);
  const vuLeftRef = useRef(0);
  const vuRightRef = useRef(0);
  const setStateRef = useRef(setState);
  setStateRef.current = setState;

  // Keep refs in sync
  useEffect(() => {
    playingRef.current = state.playing;
    powerRef.current = state.power;
  }, [state.playing, state.power]);

  // VU meter animation — one stable loop, never restarts
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
        vuLeftRef.current = Math.max(0, Math.min(1, bL + nL));
        vuRightRef.current = Math.max(0, Math.min(1, bR + nR));
      } else {
        vuLeftRef.current = 0;
        vuRightRef.current = 0;
      }

      // Push to React state — this drives the VUMeter component props
      setStateRef.current(prev => {
        if (prev.vuLeft === vuLeftRef.current && prev.vuRight === vuRightRef.current) return prev;
        return { ...prev, vuLeft: vuLeftRef.current, vuRight: vuRightRef.current };
      });

      vuFrameRef.current = requestAnimationFrame(tick);
    };

    vuFrameRef.current = requestAnimationFrame(tick);
    return () => { active = false; cancelAnimationFrame(vuFrameRef.current); };
  }, []);

  // Power ON → auto-play the first track immediately
  const togglePower = useCallback(() => {
    setState(prev => {
      if (prev.power) {
        return { ...prev, power: false, playing: false, currentTrack: null, currentTrackIndex: -1, vuLeft: 0, vuRight: 0 };
      }
      const shuffled = shuffleArray(allTracks);
      return {
        ...prev,
        power: true,
        playing: true, // auto-play on power on
        shuffledQueue: shuffled,
        currentTrackIndex: 0,
        currentTrack: shuffled[0],
      };
    });
  }, []);

  // Play/Pause toggle — only button that can pause
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
      const shuffled = shuffleArray(allTracks);
      return {
        ...prev,
        shuffledQueue: shuffled,
        currentTrackIndex: 0,
        currentTrack: prev.power ? shuffled[0] : null,
        playing: prev.power, // keep playing if on
      };
    });
  }, []);

  const getEmbedUrl = useCallback((): string | null => {
    if (!state.currentTrack) return null;
    return `https://open.spotify.com/embed/track/${state.currentTrack.spotifyId}?utm_source=generator&theme=0&autoplay=1`;
  }, [state.currentTrack]);

  return {
    state,
    togglePower,
    togglePlay,
    nextTrack,
    prevTrack,
    setVolume,
    reshuffle,
    getEmbedUrl,
  };
}
