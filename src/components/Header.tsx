import { Link, useLocation } from 'react-router-dom';
import { SITE_URL } from '../site';

type Crumb = { label: string; to?: string };

export const Header = ({ crumbs }: { crumbs?: Crumb[] }) => {
  const { pathname } = useLocation();
  const isConsulting = pathname === '/for-your-business';
  const trail = [{ label: 'Home', to: '/' }, ...(crumbs ?? []).filter((crumb) => crumb.to !== '/')];
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${SITE_URL}${pathname}#breadcrumbs`,
    itemListElement: trail.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.label, item: SITE_URL + (crumb.to ?? pathname) })) };
  return (
  <header className="site-header flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-current py-5 md:py-6">
    {crumbs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />}
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
      <Link to="/" className="brand-mark text-[25px] font-semibold leading-none tracking-[-0.055em] no-underline md:text-[29px]">
        untold<span className="font-normal">.works</span>
      </Link>
      {crumbs ? (
        <nav aria-label="Breadcrumb" className="site-meta flex flex-wrap items-baseline gap-x-3 text-[12px] md:text-[13px]">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-baseline gap-x-3">
              {i > 0 && <span aria-hidden="true">/</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="no-underline">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : (
        <span className="site-meta hidden text-[12px] md:inline">Creative &amp; AI consulting</span>
      )}
    </div>
    <nav aria-label="Primary" className="site-nav flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium md:gap-x-8 md:text-[14px]">
      <Link to="/#work" className="no-underline">
        Work
      </Link>
      <Link to="/#ai" className="no-underline">
        Applied AI
      </Link>
      <Link to="/about" className="no-underline">
        About
      </Link>
      <Link to={isConsulting ? "/for-your-business#business-contact" : "/work-together"} className="no-underline">
        {isConsulting ? "Let’s talk" : "Work together"}
      </Link>
    </nav>
  </header>
  );
};
