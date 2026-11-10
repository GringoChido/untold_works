import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import metadata from '../data/seo.json';
import { EMAIL, PROJECT_CONTACT_HREF } from '../site';

const pages: Record<string, { title: string }> = metadata;
const ProjectEmail = createContext(PROJECT_CONTACT_HREF);
export const useProjectEmail = () => useContext(ProjectEmail);

export function ProjectInquiries({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [previousCase, setPreviousCase] = useState('');
  const currentCase = pathname.startsWith('/work/') && Object.hasOwn(pages, pathname) ? pathname : '';
  const project = pathname === '/work-together' ? previousCase : currentCase;
  useEffect(() => {
    if (pathname !== '/work-together') setPreviousCase(currentCase);
  }, [pathname, currentCase]);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    function record(click: MouseEvent) {
      const anchor = click.target instanceof Element ? click.target.closest('a') : null;
      if (!anchor || (click.button !== 0 && click.button !== 1)) return;
      const target = new URL(anchor.href);
      const openedProject = pathname === '/' && target.origin === location.origin && target.pathname.startsWith('/work/') && Object.hasOwn(pages, target.pathname);
      const emailed = target.protocol === 'mailto:' && target.pathname === EMAIL;
      if (!openedProject && !emailed) return;
      const query = new URLSearchParams({ event: openedProject ? 'project_open' : 'email_click', page: pathname, project: openedProject ? target.pathname : project });
      void fetch('/.netlify/functions/portfolio-event?' + query, { method: 'POST', keepalive: true, credentials: 'omit', referrerPolicy: 'no-referrer' }).catch(() => {});
    }
    document.addEventListener('click', record, true);
    document.addEventListener('auxclick', record, true);
    return () => {
      document.removeEventListener('click', record, true);
      document.removeEventListener('auxclick', record, true);
    };
  }, [pathname, project]);

  const title = project && pages[project].title.split('|')[0].trim();
  const href = title ? `mailto:${EMAIL}?subject=${encodeURIComponent('Project inquiry — ' + title)}` : PROJECT_CONTACT_HREF;
  return <ProjectEmail.Provider value={href}>{children}</ProjectEmail.Provider>;
}
