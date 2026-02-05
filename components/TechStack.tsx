import React from 'react';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const TechStack: React.FC = () => {
  const { t } = useLanguage();
  const s = i18n.stack;

  const pillars = [
    { label: s.engineLabel, tools: s.engine },
    { label: s.opsLabel, tools: s.ops },
    { label: s.workspaceLabel, tools: s.workspace }
  ];

  return (
    <section className="px-4 sm:px-6 md:px-10 py-24 sm:py-32 lg:py-56 bg-untold-beige border-b border-untold-border overflow-hidden text-untold-black relative">
      {/* Background Schematic Detail */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex items-center space-x-4 mb-24">
          <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
          <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
            {t(s.title as any)}
          </h2>
        </div>

        {/* Orchestration Headline */}
        <div className="mb-32 lg:mb-48 border-l-4 border-untold-orange pl-10 max-w-5xl">
          <p className="text-3xl lg:text-5xl font-serif italic text-untold-black leading-[1.1] tracking-tight">
            {t(s.quote as any)}
          </p>
        </div>

        <div className="space-y-24">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="grid lg:grid-cols-12 gap-10 border border-untold-black/10 bg-white/40 backdrop-blur-sm p-12 lg:p-20 relative group hover:border-untold-orange/30 transition-all duration-700"
            >
              {/* Pillar Index Mono Label */}
              <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-untold-black/20 uppercase tracking-[0.4em] font-bold">
                SYSTEM_PILLAR // 0{idx + 1}
              </div>

              <div className="lg:col-span-4">
                <span className="font-mono text-[12px] lg:text-[14px] uppercase font-bold text-untold-orange tracking-[0.5em] block mb-6">
                  {t(pillar.label as any)}
                </span>
                <div className="w-12 h-px bg-untold-black/20 group-hover:w-24 group-hover:bg-untold-orange transition-all duration-700"></div>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-wrap gap-x-14 gap-y-12">
                  {(pillar.tools as string[]).map((tool) => (
                    <div key={tool} className="flex flex-col">
                      <span className="text-3xl lg:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-all duration-300 cursor-default">
                        {tool.replace(/_/g, ' ')}
                      </span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-untold-orange/10 transition-all duration-700 mt-2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Blueprint Footer Label */}
        <div className="mt-32 pt-16 border-t border-untold-black/5 flex justify-between items-center opacity-30">
          <div className="font-mono text-[9px] uppercase tracking-[0.4em] font-bold">
            ARCHITECTURE_STND // J.SEMOLIK_v2026
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.4em] font-bold">
            CORE_ORCHESTRATION // ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;