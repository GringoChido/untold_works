import { Link } from 'react-router-dom';
import { MAILTO, TAGLINE } from '../site';

type Crumb = { label: string; to?: string };

export const Header = ({ crumbs }: { crumbs?: Crumb[] }) => (
  <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-ink py-[26px]">
    <div className="flex flex-wrap items-baseline gap-x-[18px] gap-y-1">
      <Link to="/" className="display text-[26px] leading-none tracking-[-0.02em] no-underline">
        Untold.works
      </Link>
      {crumbs ? (
        <span className="lbl flex flex-wrap items-baseline gap-x-[18px]">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-baseline gap-x-[18px]">
              {i > 0 && <span aria-hidden="true">/</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="no-underline">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </span>
          ))}
        </span>
      ) : (
        <span className="lbl">{TAGLINE}</span>
      )}
    </div>
    <nav aria-label="Primary" className="lbl flex gap-7">
      <Link to="/#work" className="no-underline">
        Work
      </Link>
      <Link to="/about" className="no-underline">
        About
      </Link>
      <a href={MAILTO} className="house-underline">
        Email
      </a>
    </nav>
  </header>
);
