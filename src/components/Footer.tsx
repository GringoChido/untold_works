import { EMAIL, MAILTO } from '../site';

export const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-ink pb-10 pt-7">
    <span className="lbl">Untold.works · This site built with Claude</span>
    <span className="voice text-[20px]">I call the shot before I take it.</span>
    <a href={MAILTO} className="lbl house-underline">
      {`${EMAIL || '[Email address]'} ↗`}
    </a>
  </footer>
);
