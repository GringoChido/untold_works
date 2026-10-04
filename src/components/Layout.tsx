import type { ReactNode } from 'react';
import { tones, type Tone } from '../theme';

export const Layout = ({ children, tone = tones.intro, className = '' }: { children: ReactNode; tone?: Tone; className?: string }) => (
  <div
    className={['site-shell', 'flex min-h-dvh flex-col', tone.className, className].filter(Boolean).join(' ')}
  >
    <div className="mx-auto flex w-full max-w-[1440px] grow flex-col px-5 md:px-10 xl:px-16">{children}</div>
  </div>
);
