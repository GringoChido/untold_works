import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  id: string;
  src: string;
  mobileSrc?: string;
  poster: string;
  width: number;
  height: number;
  label: string;
  controlLabel: string;
  caption: ReactNode;
  sourceHref?: string;
  sourceLabel?: string;
  nativeControls?: boolean;
  autoPlayWhenVisible?: boolean;
  className?: string;
};

/** Ambient films load and play when visible, with an explicit pause control. */
export const PortfolioFilm = ({ id, src, mobileSrc, poster, width, height, label, controlLabel, caption, sourceHref, sourceLabel, nativeControls = false, autoPlayWhenVisible = true, className = '' }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const automaticPause = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlayWhenVisible || '__UNTOLD_PRERENDER__' in window) return;
    // Restore media properties after hydration of the prerendered page.
    video.defaultMuted = true;
    video.muted = true;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden && !reducedMotion.matches && !userPaused.current) {
        void video.play().catch(() => setPlaying(false));
      } else if (!video.paused) {
        automaticPause.current = true;
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      syncPlayback();
    }, { threshold: [0, 0.25] });
    observer.observe(video);
    reducedMotion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      if (!video.paused) {
        automaticPause.current = true;
        video.pause();
      }
    };
  }, [autoPlayWhenVisible]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      void video.play().catch(() => setPlaying(false));
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <figure className={`showroom-film ${className}`}>
      <video ref={videoRef} id={id} width={width} height={height} style={{ aspectRatio: `${width} / ${height}` }} muted={autoPlayWhenVisible} loop={autoPlayWhenVisible} playsInline controls={nativeControls} preload="none" poster={poster} aria-label={label} onPlay={() => { userPaused.current = false; setPlaying(true); }} onPause={() => { if (nativeControls && !automaticPause.current) userPaused.current = true; automaticPause.current = false; setPlaying(false); }} onCanPlay={() => setFailed(false)} onError={(event) => { if (event.currentTarget.error && !('__UNTOLD_PRERENDER__' in window)) setFailed(true); }}>
        {mobileSrc && <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />}
        <source src={src} type="video/mp4" />
      </video>
      <figcaption>
        <span className="film-caption-copy"><span>{caption}</span>{sourceHref && <a href={sourceHref} target="_blank" rel="noopener noreferrer">{`${sourceLabel || 'Watch the full film'} ↗`}</a>}{failed && <span role="status">{sourceHref ? 'Film unavailable. Use the source link to watch.' : 'Film could not load. Reload the page to try again.'}</span>}</span>
        <button type="button" onClick={togglePlayback} aria-controls={id} aria-label={`${playing ? 'Pause' : 'Play'} ${controlLabel}`} disabled={failed}><span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>{playing ? 'Pause film' : 'Play film'}</button>
      </figcaption>
    </figure>
  );
};
