import { useState } from 'react';

export type CaseFilmProps = {
  id: string;
  src: string;
  mobileSrc?: string;
  poster: string;
  width: number;
  height: number;
  title: string;
  caption?: string;
  sourceHref?: string;
  sourceLabel?: string;
};

/** Films play on request with native playback, volume and full-screen controls. */
export const CaseFilm = ({ id, src, mobileSrc, poster, width, height, title, caption, sourceHref, sourceLabel }: CaseFilmProps) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="m-0 min-w-0">
      <video
        id={id}
        width={width}
        height={height}
        style={{ aspectRatio: `${width} / ${height}` }}
        className="block h-auto w-full bg-ink object-contain"
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label={title}
        aria-describedby={caption ? `${id}-caption` : undefined}
        onCanPlay={() => setFailed(false)}
        onError={() => { if (!('__UNTOLD_PRERENDER__' in window)) setFailed(true); }}
      >
        {mobileSrc && <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />}
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="flex flex-wrap items-start justify-between gap-4 border-b border-current py-4">
        <span className="flex max-w-[850px] flex-col gap-2">
          <span className="name text-[24px] leading-[1.1]">{title}</span>
          {caption && <span id={`${id}-caption`} className="text-[15px] leading-[1.5]">{caption}</span>}
          {failed && <span role="status" className="text-[15px] leading-[1.5]">{sourceHref ? 'Film unavailable. Use the source link to watch.' : 'Film could not load. Reload the page to try again.'}</span>}
        </span>
        {sourceHref && <a href={sourceHref} target="_blank" rel="noopener noreferrer" className="lbl text-[13px] underline underline-offset-4">{`${sourceLabel || 'View film source'} ↗`}</a>}
      </figcaption>
    </figure>
  );
};
