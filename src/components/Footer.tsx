import { Link } from 'react-router-dom';
import { CONTACT_HREF, CONTACT_LABEL, EMAIL } from '../site';

export const Footer = () => (
  <footer className="site-footer flex flex-wrap items-end justify-between gap-6 border-t border-current pb-9 pt-6">
    <div className="flex flex-col gap-1">
      <span className="text-[15px] font-semibold">untold.works</span>
      <span className="site-meta text-[12px]">AI transformation · Creative direction · Systems &amp; experiences</span>
    </div>
    <div className="flex flex-wrap items-baseline gap-x-7 gap-y-3 text-[14px] font-medium">
      <Link to="/work-together" className="underline underline-offset-4">Work Together <span aria-hidden="true">↗</span></Link>
      <a href={CONTACT_HREF} target={EMAIL ? undefined : '_blank'} rel={EMAIL ? undefined : 'noopener noreferrer'} className="underline underline-offset-4">
        {EMAIL || CONTACT_LABEL} <span aria-hidden="true">↗</span>
      </a>
    </div>
  </footer>
);
