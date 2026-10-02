import type { ReactNode } from 'react';

/** A condensed caps chip. Outlined in the current color by default. */
export const Chip = ({ children, className = 'border-rule border-current' }: { children: ReactNode; className?: string }) => (
  <span className={`lbl whitespace-nowrap px-2.5 py-[5px] text-[13px] tracking-[0.1em] ${className}`}>{children}</span>
);
