import type { ReactNode } from 'react';

export const Layout = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div
    className={['site-shell', 'flex min-h-dvh flex-col', className].filter(Boolean).join(' ')}
  >
    <div className="mx-auto flex w-full max-w-[1440px] grow flex-col px-5 md:px-10 xl:px-16">{children}</div>
  </div>
);
