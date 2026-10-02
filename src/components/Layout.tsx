import type { ReactNode } from 'react';
import { Rail } from './Rail';

export const Layout = ({ rail, children }: { rail: string; children: ReactNode }) => (
  <div className="flex min-h-dvh flex-col bg-cream pr-rail text-ink">
    <Rail text={rail} />
    <div className="mx-auto flex w-full max-w-[1320px] grow flex-col px-5 md:px-16">{children}</div>
  </div>
);
