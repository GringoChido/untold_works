import { CONTACT_HREF, CONTACT_LABEL, EMAIL } from '../site';

export const Footer = () => (
  <footer className="site-footer flex flex-wrap items-end justify-between gap-6 border-t border-current pb-9 pt-6">
    <div className="flex flex-col gap-1">
      <span className="text-[15px] font-semibold">untold.works</span>
      <span className="site-meta text-[12px]">AI transformation · Creative direction · Systems &amp; experiences</span>
    </div>
    <a href={CONTACT_HREF} target={EMAIL ? undefined : '_blank'} rel={EMAIL ? undefined : 'noopener noreferrer'} className="text-[14px] font-medium underline underline-offset-4">
      {`${EMAIL || CONTACT_LABEL} ↗`}
    </a>
  </footer>
);
