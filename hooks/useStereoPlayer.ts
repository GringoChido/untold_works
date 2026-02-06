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

  const vuFrameRef = useRef<number>(0);

  // VU meter simulation — organic, music-like movement
  useEffect(() => {
    if (state.playing && state.power) {
      const animate = (time: number) => {
        const t = time * 0.001;
        const baseL = 0.45 + 0.25 * Math.sin(t * 2.1) + 0.15 * Math.sin(t * 5.3) + 0.08 * Math.sin(t * 8.7);
        const baseR = 0.45 + 0.25 * Math.sin(t * 2.3 + 0.5) + 0.15 * Math.sin(t * 4.7 + 1.2) + 0.08 * Math.sin(t * 9.1 + 0.8);
        const noiseL = (Math.random() - 0.5) * 0.18;
        const noiseR = (Math.random() - 0.5) * 0.18;
        const vuLeft = Math.max(0, Math.min(1, baseL + noiseL));
        const vuRight = Math.max(0, Math.min(1, baseR + noiseR));

        setState(prev => {
          if (!prev.playing || !prev.power) return prev;
          return { ...prev, vuLeft, vuRight };
        });
        vuFrameRef.current = requestAnimationFrame(animate);
      };
      vuFrameRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(vuFrameRef.current);
    } else {
      cancelAnimationFrame(vuFrameRef.current);
      setState(prev => {
        if (prev.vuLeft === 0 && prev.vuRight === 0) return prev;
        return { ...prev, vuLeft: 0, vuRight: 0 };
      });
    }
  }, [state.playing, state.power]);

  const togglePower = useCallback(() => {
    setState(prev => {
      if (prev.power) {
        return { ...prev, power: false, playing: false, currentTrack: null, currentTrackIndex: -1, vuLeft: 0, vuRight: 0 };
      }
      const shuffled = shuffleArray(allTracks);
      return { ...prev, power: true, shuffledQueue: shuffled, currentTrackIndex: 0, currentTrack: shuffled[0] };
    });
  }, []);

  const togglePlay = useCallback(() => {
    setState(prev => {
      if (!prev.power) return prev;
      if (prev.playing) return { ...prev, playing: false };
      const idx = prev.currentTrackIndex >= 0 ? prev.currentTrackIndex : 0;
      return { ...prev, playing: true, currentTrackIndex: idx, currentTrack: prev.shuffledQueue[idx] };
    });
  }, []);

  // Next track — ALWAYS sets playing: true so music continues seamlessly
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

  // Prev track — ALWAYS sets playing: true so music continues seamlessly
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
