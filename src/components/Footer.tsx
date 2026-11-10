import { useProjectEmail } from './ProjectInquiries';
import { Link } from 'react-router-dom';
import { EMAIL, LINKEDIN_URL, RESUME_HREF } from '../site';

export const Footer = () => {
  const projectEmail = useProjectEmail();
  return (
    <footer className="site-footer flex flex-wrap items-end justify-between gap-6 border-t border-current pb-9 pt-6">
      <div className="flex flex-col gap-1">
        <span className="text-[15px] font-semibold">untold.works</span>
        <Link to="/about" className="text-[13px] underline underline-offset-4">Joshua Semolik</Link>
        <span className="site-meta text-[12px]">Creative leadership · Brand storytelling · AI-enabled experiences</span>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-7 gap-y-3 text-[14px] font-medium">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer me" className="underline underline-offset-4">LinkedIn <span aria-hidden="true">↗</span></a>
        <Link to="/work-together" className="underline underline-offset-4">Work together <span aria-hidden="true">↗</span></Link>
        <a href={RESUME_HREF} download className="underline underline-offset-4">Resume (PDF) ↓</a>
        <a href={projectEmail} className="underline underline-offset-4">
          {EMAIL} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
};
