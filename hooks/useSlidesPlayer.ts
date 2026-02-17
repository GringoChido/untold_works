import { useState, useCallback, useRef, useEffect } from 'react';
import { SlideCollection, SlidesState } from '../types';

export function useSlidesPlayer() {
  const [state, setState] = useState<SlidesState>({
    activeCollection: null,
    currentImageIndex: 0,
    playing: false,
    musicPlaying: false,
    volume: 70,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number>(0);
  const playingRef = useRef(false);

  // Keep ref in sync
  useEffect(() => {
    playingRef.current = state.playing;
  }, [state.playing]);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7;
    audio.loop = true; // Loop the 30-second preview
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  // Volume sync
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume / 100;
    }
  }, [state.volume]);

  // Auto-advance timer
  const getInterval = useCallback((scene?: string) => {
    // Different scenes have different rhythms
    switch (scene) {
      case 'bigsur':
      case 'campfire':
        return 10000; // Slow, meditative
      case 'brutalist':
      case 'haring':
        return 5000;  // Snappy, punchy
      case 'cinema':
        return 9000;  // Deliberate
      default:
        return 7000;  // Standard
    }
  }, []);

  // Start/stop the auto-advance timer
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = 0;
    }

    if (state.playing && state.activeCollection) {
      const interval = getInterval(state.activeCollection.scene);
      timerRef.current = window.setInterval(() => {
        setState(prev => {
          if (!prev.activeCollection || !prev.playing) return prev;
          const nextIdx = (prev.currentImageIndex + 1) % prev.activeCollection.images.length;
          return { ...prev, currentImageIndex: nextIdx };
        });
      }, interval);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state.playing, state.activeCollection?.id, getInterval]);

  // Music playback when collection changes or music state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!state.activeCollection || !state.musicPlaying) {
      audio.pause();
      return;
    }

    const url = state.activeCollection.track.previewUrl;
    if (!url) return;

    // Only change source if it's a different track
    if (audio.src !== url) {
      audio.src = url;
    }

    audio.play().catch(() => {
      // Autoplay may be blocked until user gesture
    });
  }, [state.activeCollection?.id, state.musicPlaying]);

  // ── Controls ──

  const openCollection = useCallback((collection: SlideCollection) => {
    setState(prev => ({
      ...prev,
      activeCollection: collection,
      currentImageIndex: 0,
      playing: true,
      musicPlaying: true,
    }));
  }, []);

  const closeCollection = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
    setState(prev => ({
      ...prev,
      activeCollection: null,
      currentImageIndex: 0,
      playing: false,
      musicPlaying: false,
    }));
  }, []);

  const togglePlay = useCallback(() => {
    setState(prev => ({ ...prev, playing: !prev.playing }));
  }, []);

  const toggleMusic = useCallback(() => {
    setState(prev => ({ ...prev, musicPlaying: !prev.musicPlaying }));
  }, []);

  const nextImage = useCallback(() => {
    setState(prev => {
      if (!prev.activeCollection) return prev;
      const nextIdx = (prev.currentImageIndex + 1) % prev.activeCollection.images.length;
      return { ...prev, currentImageIndex: nextIdx };
    });
  }, []);

  const prevImage = useCallback(() => {
    setState(prev => {
      if (!prev.activeCollection) return prev;
      const prevIdx = prev.currentImageIndex <= 0
        ? prev.activeCollection.images.length - 1
        : prev.currentImageIndex - 1;
      return { ...prev, currentImageIndex: prevIdx };
    });
  }, []);

  const setVolume = useCallback((volume: number) => {
    setState(prev => ({ ...prev, volume: Math.max(0, Math.min(100, volume)) }));
  }, []);

  return {
    state,
    openCollection,
    closeCollection,
    togglePlay,
    toggleMusic,
    nextImage,
    prevImage,
    setVolume,
  };
}
