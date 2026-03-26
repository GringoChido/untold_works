import React from 'react';
import { useLanguage } from '../App';

interface AuthorBylineProps {
  name: string;
  date: string;
  variant?: 'light' | 'dark';
}

const AuthorByline: React.FC<AuthorBylineProps> = ({ name, date, variant = 'dark' }) => {
  const { t } = useLanguage();
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-5 py-6 border-t ${isDark ? 'border-white/10' : 'border-untold-border'}`}>
      <img
        src="/images/about-photo.webp"
        alt={name}
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <a
          href="https://www.linkedin.com/in/semolik/"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-sans font-black text-base uppercase tracking-tighter hover:text-untold-orange transition-colors ${isDark ? 'text-white' : 'text-untold-black'}`}
        >
          {name}
        </a>
        <p className={`font-mono text-[10px] uppercase tracking-[0.3em] ${isDark ? 'text-white/40' : 'text-untold-gray'}`}>
          {t({ en: 'Founder & Creative Director, Untold.works', es: 'Fundador y Director Creativo, Untold.works' })}
        </p>
        <p className={`font-mono text-[9px] uppercase tracking-[0.2em] mt-0.5 ${isDark ? 'text-white/25' : 'text-untold-gray/50'}`}>
          {t({ en: 'MIT Sloan AI Strategy · 20 Years in Production AI Systems', es: 'MIT Sloan Estrategia de IA · 20 Años en Sistemas de IA en Producción' })}
        </p>
        <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mt-1 ${isDark ? 'text-white/30' : 'text-untold-gray/60'}`}>
          {date}
        </p>
      </div>
    </div>
  );
};

export default AuthorByline;
