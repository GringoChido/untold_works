import type { ReactNode } from 'react';

/** The chip in the bottom-left corner of a visual. Ink with cream caps, or the inverse. */
export const Tag = ({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) => (
  <span
    className={`wdth-62 absolute bottom-0 left-0 px-3 py-1.5 text-[14px] font-semibold uppercase tracking-[0.08em] ${
      inverse ? 'bg-cream text-ink' : 'bg-ink text-cream'
    }`}
  >
    {children}
  </span>
);
