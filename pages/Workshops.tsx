import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';

const WorkshopsPage: React.FC = () => {
  const { t } = useLanguage();
  const syllabus = i18n.workshopSyllabus;

  usePageMeta(
    'AI Workshops — Joshua Semolik',
    'AI workshops for everyday life. No jargon, real tools, practical applications. Led by Joshua Semolik in Mexico City.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Outcome-First Hero Section */}
      <section className="px-10 pt-32 pb-24 lg:pt-56 lg:pb-40 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t(syllabus.eyebrow)}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-12 tracking-tighter uppercase text-white">
                {t(syllabus.headline)}
              </h1>
              <p className="text-2xl lg:text-4xl font-serif italic text-white/60 leading-[1.2] max-w-4xl border-l-4 border-untold-orange pl-10 mb-16">
                {t(syllabus.transformation)}
              </p>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-12 border-t border-white/5 font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-white/40">
                <span className="text-white">{t(syllabus.location)}</span>
                <span className="text-untold-orange">{t(syllabus.time)}</span>
                <span className="text-white">{t(syllabus.lead)}</span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-8">
              <div className="bg-white/[0.02] border border-white/10 p-10 lg:p-14 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/20 uppercase tracking-[0.4em] font-bold">READY_TO_USE</div>
                <h2 className="font-sans font-black text-3xl uppercase tracking-tighter text-untold-orange">
                  {t(syllabus.cardTitle)}
                </h2>
                <p className="text-xl italic text-white/70 leading-relaxed">
                  {t(syllabus.rule)}
                </p>
                <Link 
                  to="/contact"
                  className="block w-full bg-untold-orange text-white py-6 text-center font-sans font-black uppercase tracking-tighter text-lg hover:bg-white hover:text-untold-black transition-all"
                >
                  {t(syllabus.cta)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Pathway Grid */}
      <section className="px-10 py-24 lg:py-40 bg-white/[0.01] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-24">
             <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
             <h2 className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 uppercase">LEARNING_LOG // EVERYDAY_PHASES</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {syllabus.phases.map((phase) => (
              <div key={phase.id} className="bg-untold-black p-12 lg:p-16 flex flex-col group hover:bg-white/[0.03] transition-colors min-h-[450px]">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">PHASE_{phase.id}</span>
                  <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-untold-orange transition-all"></div>
                </div>
                
                <h3 className="font-sans font-black text-4xl lg:text-5xl uppercase tracking-tighter text-white leading-none mb-10">
                  {t(phase.title)}
                </h3>
                
                <p className="text-xl lg:text-2xl font-serif italic text-white/50 leading-relaxed max-w-lg">
                  {t(phase.focus)}
                </p>

                <div className="mt-auto pt-10 border-t border-white/5 flex items-center space-x-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-untold-orange"></div>
                   <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">NO_JARGON // 100%_PRACTICAL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="px-10 py-24 lg:py-40 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center space-x-4">
               <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
               <h2 className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 uppercase">{t(syllabus.kit.title)}</h2>
            </div>
            <h3 className="font-sans font-black text-6xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.85]">
              {t({ en: 'Tools For\nReal Life\nImpact.', es: 'Herramientas\nPara Impacto\nReal.' })}
            </h3>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-white/[0.02] border border-white/10 p-12 lg:p-20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-white/10 uppercase tracking-[0.4em] font-bold">STATUS // VERIFIED_ASSETS</div>
               <ul className="space-y-8">
                  {syllabus.kit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-8 border-b border-white/5 pb-6 last:border-0 group/item">
                       <span className="font-mono text-untold-orange font-bold text-xl group-hover/item:translate-x-2 transition-transform">{String(idx + 1).padStart(2, '0')}</span>
                       <span className="font-sans font-black text-3xl lg:text-4xl uppercase tracking-tighter text-white group-hover/item:text-untold-orange transition-colors">
                         {t(item)}
                       </span>
                    </li>
                  ))}
               </ul>
               <div className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 italic">
                 {t({ en: '> Practical kit ready for immediate life integration.', es: '> Kit práctico listo para integración inmediata en tu vida.' })}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="px-10 py-48 lg:py-72 text-center bg-white/[0.02]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(4.5rem,14vw,180px)] leading-[0.8] mb-16 tracking-tighter uppercase text-white">
            {t({ en: 'Save\nYour\nTime.', es: 'Ahorra\nTu\nTiempo.' })}
          </h2>
          <p className="text-2xl lg:text-[2.5rem] text-white/50 mb-24 max-w-3xl mx-auto font-serif italic leading-tight tracking-tight">
            {t(syllabus.rule)}
          </p>
          <Link 
            to="/contact"
            className="bg-untold-orange text-white px-24 py-10 font-sans font-black uppercase tracking-tighter text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)]"
          >
            {t(syllabus.cta)}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;