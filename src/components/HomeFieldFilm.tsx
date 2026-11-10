import { useState } from 'react';

export const HomeFieldFilm = ({ featured = false }: { featured?: boolean }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <figure id="home-field-film" className="m-0">
      {playing ? (
        <iframe
          className="block aspect-video w-full border-0 bg-ink"
          src="https://www.youtube-nocookie.com/embed/PQPKLvWnTHc?autoplay=1&playsinline=1"
          title="Shoot Pool, Not People! by Billiard Factory"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="relative block aspect-video w-full overflow-hidden bg-ink text-left" onClick={() => setPlaying(true)} aria-label="Play Shoot Pool, Not People!">
          <img
            src="/images/home-field-pool-hall-1920.webp"
            srcSet="/images/home-field-pool-hall-720.webp 720w, /images/home-field-pool-hall-1920.webp 1920w"
            sizes={featured ? '(min-width: 701px) 56vw, 100vw' : '(min-width: 1440px) 1312px, 100vw'}
            alt="Two women playing pool beneath a stained-glass lamp, with a jukebox behind them"
            width="1920" height="1080" loading={featured ? 'lazy' : 'eager'}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-ink px-5 py-3 font-semibold text-cream md:bottom-7 md:left-7"><span aria-hidden="true">▶ </span>Play film</span>
        </button>
      )}
      <figcaption className="flex flex-wrap items-baseline justify-between gap-3 border-b border-current py-4">
        <span className="name text-[24px] leading-tight">Shoot Pool, Not People!</span>
        <a className="text-link" href="https://www.youtube.com/watch?v=PQPKLvWnTHc" target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
      </figcaption>
    </figure>
  );
};
