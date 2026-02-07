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

// Spotify IFrame API types
interface SpotifyIFrameAPI {
  createController: (
    el: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    callback: (controller: SpotifyEmbedController) => void
  ) => void;
}

interface SpotifyEmbedController {
  loadUri: (uri: string) => void;
  play: () => void;
  pause: () => void;
  resume: () => void;
  togglePlay: () => void;
  destroy: () => void;
  addListener: (event: string, callback: (data: any) => void) => void;
}

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
    _spotifyIFrameAPI?: SpotifyIFrameAPI;
  }
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

  // ── Refs ──
  const vuFrameRef = useRef<number>(0);
  const playingRef = useRef(false);
  const powerRef = useRef(false);
  const setStateRef = useRef(setState);
  setStateRef.current = setState;

  // Spotify controller ref
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const embedElRef = useRef<HTMLElement | null>(null);
  const apiReadyRef = useRef(false);
  const pendingUriRef = useRef<string | null>(null);
  const controllerReadyRef = useRef(false);

  // Track state refs for the animation loop + track end detection
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
    playingRef.current = state.playing;
    powerRef.current = state.power;
  }, [state]);

  // ── Spotify IFrame API initialization ──
  const initController = useCallback((el: HTMLElement, uri: string) => {
    const api = window._spotifyIFrameAPI;
    if (!api || !el) return;

    // Destroy existing controller if any
    if (controllerRef.current) {
      try { controllerRef.current.destroy(); } catch (e) { /* ignore */ }
      controllerRef.current = null;
      controllerReadyRef.current = false;
    }

    api.createController(el, { uri, width: '100%', height: '152' }, (ctrl) => {
      controllerRef.current = ctrl;
      controllerReadyRef.current = true;

      // Start playback once the embed is ready
      ctrl.addListener('ready', () => {
        if (playingRef.current) {
          ctrl.play();
        }
      });

      // Track playback state
      ctrl.addListener('playback_update', (data: any) => {
        if (!data) return;
        const { isPaused, duration, position } = data?.data || data;

        // Auto-advance when track ends (within 1.5s of end)
        if (duration > 0 && position > 0 && duration - position < 1500 && !isPaused) {
          const s = stateRef.current;
          if (s.power && s.shuffledQueue.length > 0) {
            const nextIdx = (s.currentTrackIndex + 1) % s.shuffledQueue.length;
            setStateRef.current(prev => ({
              ...prev,
              currentTrackIndex: nextIdx,
              currentTrack: prev.shuffledQueue[nextIdx],
              playing: true,
            }));
          }
        }
      });

      // If we have a pending URI to load (e.g., from track change), load it now
      if (pendingUriRef.current && pendingUriRef.current !== uri) {
        ctrl.loadUri(pendingUriRef.current);
        pendingUriRef.current = null;
      }
    });
  }, []);

  // Wait for the Spotify API to be ready
  useEffect(() => {
    // If API is already loaded
    if (window._spotifyIFrameAPI) {
      apiReadyRef.current = true;
      return;
    }

    // Set up the global callback
    window.onSpotifyIframeApiReady = (api: SpotifyIFrameAPI) => {
      window._spotifyIFrameAPI = api;
      apiReadyRef.current = true;

      // If we already have an embed element and a pending URI, init now
      if (embedElRef.current && pendingUriRef.current) {
        initController(embedElRef.current, pendingUriRef.current);
        pendingUriRef.current = null;
      }
    };
  }, [initController]);

  // ── When the current track changes, update the Spotify controller ──
  useEffect(() => {
    if (!state.currentTrack || !state.power) return;

    const uri = `spotify:track:${state.currentTrack.spotifyId}`;

    if (controllerRef.current && controllerReadyRef.current) {
      // Controller exists — load new URI and play
      controllerRef.current.loadUri(uri);
      // Small delay to let it load, then play
      setTimeout(() => {
        if (playingRef.current && controllerRef.current) {
          controllerRef.current.play();
        }
      }, 300);
    } else if (embedElRef.current && apiReadyRef.current) {
      // API ready but no controller yet — create one
      initController(embedElRef.current, uri);
    } else {
      // API not ready yet — store pending
      pendingUriRef.current = uri;
    }
  }, [state.currentTrack?.spotifyId, state.power, initController]);

  // ── When playing state changes, sync with controller ──
  useEffect(() => {
    if (!controllerRef.current || !controllerReadyRef.current) return;

    if (state.playing) {
      controllerRef.current.resume();
    } else {
      controllerRef.current.pause();
    }
  }, [state.playing]);

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

  // ── Register the embed DOM element (called from StereoUnit) ──
  const registerEmbedElement = useCallback((el: HTMLElement | null) => {
    embedElRef.current = el;
    // If API is ready and we have a pending URI, init now
    if (el && apiReadyRef.current && pendingUriRef.current) {
      initController(el, pendingUriRef.current);
      pendingUriRef.current = null;
    }
  }, [initController]);

  // ── Power ON → auto-play the first track ──
  const togglePower = useCallback(() => {
    setState(prev => {
      if (prev.power) {
        // Power OFF — pause and clean up
        if (controllerRef.current) {
          try { controllerRef.current.pause(); } catch (e) { /* ignore */ }
        }
        return { ...prev, power: false, playing: false, currentTrack: null, currentTrackIndex: -1, vuLeft: 0, vuRight: 0 };
      }
      const shuffled = shuffleArray(allTracks);
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
      const shuffled = shuffleArray(allTracks);
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
    registerEmbedElement,
  };
}
