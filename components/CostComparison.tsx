import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../App';

interface ToolItem {
  name: { en: string; es: string };
  cost: { en: string; es: string };
}

interface CostComparisonProps {
  tier: { en: string; es: string };
  tools: ToolItem[];
  monthlyTotal: { en: string; es: string };
  annualTotal: { en: string; es: string };
  investment: { en: string; es: string };
  bottomLine: { en: string; es: string };
}

const CostComparison: React.FC<CostComparisonProps> = ({
  tier,
  tools,
  monthlyTotal,
  annualTotal,
  investment,
  bottomLine,
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
      <div className="max-w-[1440px] mx-auto" ref={ref}>
        <div className="flex items-center space-x-4 mb-16">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
            {t({ en: 'WHAT YOU\'RE SPENDING NOW', es: 'LO QUE ESTÁS GASTANDO AHORA' })}
          </h2>
        </div>

        <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 max-w-4xl leading-[0.85]">
          {t({ en: 'Your Tools Cost More Than You Think', es: 'Tus Herramientas Cuestan Más de lo que Crees' })}
        </h3>

        <div className="grid lg:grid-cols-2 gap-0 border border-untold-border">
          {/* Column A — Current Stack */}
          <div className="bg-untold-beige/30 p-8 sm:p-10 lg:p-12 lg:border-r border-untold-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-red-500/70 font-bold block mb-6">
              {t({ en: 'Your Current Stack', es: 'Tu Stack Actual' })}
            </span>

            <div className="space-y-0 border-t border-untold-border">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between py-4 border-b border-untold-border transition-all duration-500 ${
                    visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span className="font-serif text-base text-untold-gray">{t(tool.name)}</span>
                  <span className="font-mono text-sm text-red-600/60 font-bold">{t(tool.cost)}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t-2 border-red-400/30">
              <div className="flex justify-between mb-2">
                <span className="font-sans font-black text-base uppercase tracking-tighter">{t({ en: 'Monthly', es: 'Mensual' })}</span>
                <span className="font-sans font-black text-lg text-red-600">{t(monthlyTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-sans font-black text-base uppercase tracking-tighter">{t({ en: 'Annual', es: 'Anual' })}</span>
                <span className="font-sans font-black text-2xl text-red-600">{t(annualTotal)}</span>
              </div>
            </div>
          </div>

          {/* Column B — Untold Works */}
          <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-emerald-600 font-bold block mb-8">
              {t({ en: 'Your Untold Works System', es: 'Tu Sistema Untold Works' })}
            </span>

            <div className="space-y-6 mb-10">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block mb-1">
                  {t({ en: 'One-time investment', es: 'Inversión única' })}
                </span>
                <span className="font-sans font-black text-4xl sm:text-5xl tracking-tighter text-emerald-700">
                  {t(investment)}
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block mb-1">
                  {t({ en: 'Monthly cost', es: 'Costo mensual' })}
                </span>
                <span className="font-sans font-black text-4xl sm:text-5xl tracking-tighter text-emerald-700">
                  $0
                </span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-emerald-600 font-bold">
                {t({ en: 'You own everything. Forever.', es: 'Eres dueño de todo. Para siempre.' })}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-untold-black text-white p-8 sm:p-12 border border-untold-border border-t-0">
          <p className="font-sans font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-tighter leading-snug">
            {t(bottomLine)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
