import { Link } from 'react-router-dom';

type Target = { label: string; to: string };

/** The ink strip at the bottom of a page: back, the wordmark, next. */
export const HouseBar = ({ back, next, wide = false }: { back: Target; next?: Target; wide?: boolean }) => (
  <nav aria-label="Previous and next" className={`bar mt-auto py-[15px] text-[15px] ${wide ? 'px-6 md:px-14' : 'px-6'}`}>
    <Link to={back.to} className="no-underline">
      {back.label}
    </Link>
    <Link to="/" className="no-underline">
      Untold.works
    </Link>
    {next ? (
      <Link to={next.to} className="no-underline">
        {next.label}
      </Link>
    ) : (
      <span />
    )}
  </nav>
);
