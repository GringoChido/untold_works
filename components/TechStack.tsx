import React from 'react';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const s = i18n.stack;

  return (
    <section className="px-10 py-32 bg-untold-beige border-b border-untold-border overflow-hidden text-untold-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center space-x-4 mb-24">
          <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
          <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
            {t(s.title)}
          </h2>
        </div>
        <div className="space-y-16 lg:space-y-24">
          {/* Core Systems */}
          <div className="grid lg:grid-cols-12 gap-8 border-b border-untold-border pb-16 items-start">
            <div className="lg:col-span-3">
              <span className="font-mono text-[12px] uppercase font-bold text-untold-gray tracking-[0.5em] block pt-2">
                {t(s.coreLabel)}
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-wrap gap-x-12 gap-y-10">
              {s.core.map((tool) => (
                <span
                  key={tool}
                  className="text-3xl lg:text-5xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* GTM Orchestration */}
          <div className="grid lg:grid-cols-12 gap-8 border-b border-untold-border pb-16 items-start">
            <div className="lg:col-span-3">
              <span className="font-mono text-[12px] uppercase font-bold text-untold-gray tracking-[0.5em] block pt-2">
                {t(s.gtmLabel)}
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-wrap gap-x-12 gap-y-10">
              {s.gtm.map((tool) => (
                <span
                  key={tool}
                  className="text-3xl lg:text-5xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Design */}
          <div className="grid lg:grid-cols-12 gap-8 border-b border-untold-border pb-16 items-start">
            <div className="lg:col-span-3">
              <span className="font-mono text-[12px] uppercase font-bold text-untold-gray tracking-[0.5em] block pt-2">
                {t(s.designLabel)}
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-wrap gap-x-12 gap-y-10">
              {s.design.map((tool) => (
                <span
                  key={tool}
                  className="text-3xl lg:text-5xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
