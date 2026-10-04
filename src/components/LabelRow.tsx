import type { ReactNode } from 'react';

/** The condensed caps row that opens a section: a label left, a note right, a rule underneath. */
export const LabelRow = ({ left, right, className = 'border-current' }: { left: ReactNode; right?: ReactNode; className?: string }) => (
  <div className={`lbl flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b pb-2.5 ${className}`}>
    <span>{left}</span>
    {right !== undefined && <span>{right}</span>}
  </div>
);
