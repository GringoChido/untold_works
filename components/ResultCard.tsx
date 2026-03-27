import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

interface ResultCardProps {
  headline: { en: string; es: string };
  stat: string;
  statLabel: { en: string; es: string };
  supporting?: { en: string; es: string };
  math?: { en: string; es: string };
  proofLink: string;
  proofLabel: { en: string; es: string };
}

const ResultCard: React.FC<ResultCardProps> = ({
  headline,
  stat,
  statLabel,
  supporting,
  math,
  proofLink,
  proofLabel,
}) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 border-b border-white/10">
      <div className="max-w-[1440px] mx-auto" ref={ref}>
        <div className="flex items-center space-x-4 mb-16">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
            {t({ en: 'HOW WE MAKE YOU MONEY', es: 'CÓMO TE HACEMOS GANAR DINERO' })}
          </h2>
        </div>

        <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 max-w-4xl leading-[0.85]">
          {t(headline)}
        </h3>

        <div className="border border-white/10 p-8 sm:p-12 lg:p-16 bg-white/[0.02]">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="font-sans font-black text-6xl sm:text-8xl lg:text-[120px] tracking-tighter text-untold-orange leading-none block mb-4">
              {stat}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50 block mb-8">
              {t(statLabel)}
            </span>
          </div>

          {math && (
            <p className="text-lg sm:text-xl font-serif italic text-white/60 leading-relaxed mb-6 max-w-2xl">
              {t(math)}
            </p>
          )}

          {supporting && (
            <p className="text-base font-serif text-white/40 leading-relaxed mb-8 max-w-2xl">
              {t(supporting)}
            </p>
          )}

          <Link
            to={proofLink}
            className="group inline-flex items-center space-x-3 font-sans font-black text-sm uppercase tracking-tighter text-untold-orange hover:text-white transition-colors"
          >
            <span>{t(proofLabel)}</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultCard;
