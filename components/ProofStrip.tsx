import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

interface ProofItem {
  metric: string;
  label: { en: string; es: string };
  client: { en: string; es: string };
  link: string;
}

const proofData: ProofItem[] = [
  {
    metric: '20%',
    label: { en: 'sales lift', es: 'aumento en ventas' },
    client: { en: 'Billiard Factory', es: 'Billiard Factory' },
    link: '/portfolio/billiard-factory-retail-architecture',
  },
  {
    metric: '4.2x',
    label: { en: 'sales ROI', es: 'ROI de ventas' },
    client: { en: 'OMI', es: 'OMI' },
    link: '/portfolio/omi-lead-intake-qualification',
  },
  {
    metric: '15',
    label: { en: 'hrs/week saved', es: 'hrs/semana ahorradas' },
    client: { en: 'Automation', es: 'Automatización' },
    link: '/solutions/professional-services',
  },
  {
    metric: '300%',
    label: { en: 'reach growth', es: 'crecimiento de alcance' },
    client: { en: 'Black Radio', es: 'Black Radio' },
    link: '/portfolio/black-radio-experience',
  },
];

const parseMetric = (metric: string): { num: number; suffix: string; prefix: string } => {
  const match = metric.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { num: 0, suffix: metric, prefix: '' };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
};

const AnimatedMetric: React.FC<{ metric: string; active: boolean }> = ({ metric, active }) => {
  const [display, setDisplay] = useState('0');
  const { num, suffix, prefix } = parseMetric(metric);
  const hasDecimal = metric.includes('.');

  useEffect(() => {
    if (!active) {
      setDisplay('0');
      return;
    }

    const duration = 1500;
    const fps = 60;
    const totalFrames = Math.round(duration / (1000 / fps));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * num;

      if (hasDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplay(hasDecimal ? num.toFixed(1) : num.toString());
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, [active, num, hasDecimal]);

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
};

interface ProofStripProps {
  variant?: 'dark' | 'light';
  compact?: boolean;
}

const ProofStrip: React.FC<ProofStripProps> = ({ variant = 'dark', compact = false }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isDark = variant === 'dark';

  return (
    <section
      ref={ref}
      className={`px-5 sm:px-10 ${compact ? 'py-10 sm:py-12' : 'py-12 sm:py-20'} border-b ${
        isDark
          ? 'bg-untold-black border-white/10'
          : 'bg-white border-untold-border'
      }`}
      aria-label={t({ en: 'Client results', es: 'Resultados de clientes' })}
    >
      <div className="max-w-[1440px] mx-auto">
        {!compact && (
          <div className="flex items-center space-x-4 mb-10">
            <span className={`w-2.5 h-2.5 rounded-full ${isDark ? 'bg-untold-orange' : 'bg-untold-orange'}`} />
            <p className={`font-mono text-[13px] uppercase tracking-[0.6em] font-bold ${isDark ? 'text-white/40' : 'text-untold-black/40'}`}>
              {t({ en: 'PROVEN RESULTS FROM REAL CLIENTS', es: 'RESULTADOS COMPROBADOS DE CLIENTES REALES' })}
            </p>
          </div>
        )}
        {/* Desktop: grid / Mobile: horizontal scroll */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-4 gap-8 sm:gap-4 lg:gap-8 no-scrollbar">
          {proofData.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className={`group flex-shrink-0 w-[260px] sm:w-auto flex flex-col items-center text-center px-4 py-4 sm:py-0 transition-colors ${
                isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-untold-beige/50'
              } rounded-sm`}
            >
              <span
                className={`font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none mb-2 ${
                  isDark ? 'text-untold-orange' : 'text-untold-orange'
                }`}
              >
                <AnimatedMetric metric={item.metric} active={isVisible} />
              </span>
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] mb-1 ${
                  isDark ? 'text-white/50' : 'text-untold-gray'
                }`}
              >
                {t(item.label)}
              </span>
              <span
                className={`font-mono text-[9px] uppercase tracking-[0.2em] group-hover:text-untold-orange transition-colors ${
                  isDark ? 'text-white/25' : 'text-untold-black/30'
                }`}
              >
                {t(item.client)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;
