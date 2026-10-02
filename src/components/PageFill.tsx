import { createContext, useCallback, useContext, useState, type MouseEvent, type ReactNode } from 'react';
import { Link, useNavigate, type LinkProps } from 'react-router-dom';
import { fillClasses, type CardColor } from '../data/categories';

type Fill = (color: CardColor, to: string) => void;

const FillContext = createContext<Fill>(() => {});

/** Opening a card fills the screen with its color, then shows the page. The only page transition. */
export const PageFillProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [fill, setFill] = useState<{ color: CardColor; on: boolean } | null>(null);

  const start = useCallback<Fill>(
    (color, to) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        navigate(to);
        return;
      }
      setFill({ color, on: true });
      window.setTimeout(() => {
        navigate(to);
        window.setTimeout(() => setFill({ color, on: false }), 80);
        window.setTimeout(() => setFill(null), 480);
      }, 260);
    },
    [navigate],
  );

  return (
    <FillContext.Provider value={start}>
      {children}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300 ease-out ${fill?.on ? 'opacity-100' : 'opacity-0'} ${
          fill ? fillClasses[fill.color] : 'bg-transparent'
        }`}
      />
    </FillContext.Provider>
  );
};

type FillLinkProps = LinkProps & { to: string; color: CardColor };

export const FillLink = ({ to, color, onClick, children, ...rest }: FillLinkProps) => {
  const fill = useContext(FillContext);
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    fill(color, to);
  };
  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};
