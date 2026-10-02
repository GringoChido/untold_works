/** The rotated square stamp on a project spread, for example Live / 2026. */
export const Stamp = ({ big, small }: { big: string; small: string }) => (
  <div className="flex h-[104px] w-[104px] shrink-0 -rotate-[4deg] flex-col items-center justify-center gap-1.5 border-rule border-current">
    <span className="wdth-62 text-[26px] font-bold uppercase leading-none tracking-[0.08em]">{big}</span>
    <span className="lbl text-[14px] tracking-[0.1em]">{small}</span>
  </div>
);
