import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

interface Crumb {
  label: { en: string; es: string };
  path?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  variant?: 'light' | 'dark';
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, variant = 'dark' }) => {
  const { t } = useLanguage();

  const textColor = variant === 'dark' ? 'text-white/40' : 'text-untold-gray/60';
  const hoverColor = variant === 'dark' ? 'hover:text-untold-orange' : 'hover:text-untold-orange';
  const activeColor = variant === 'dark' ? 'text-white/70' : 'text-untold-black';
  const separatorColor = variant === 'dark' ? 'text-white/20' : 'text-untold-gray/30';

  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className={separatorColor}>/</span>}
              {isLast || !crumb.path ? (
                <span className={activeColor}>{t(crumb.label)}</span>
              ) : (
                <Link to={crumb.path} className={`${textColor} ${hoverColor} transition-colors`}>
                  {t(crumb.label)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
