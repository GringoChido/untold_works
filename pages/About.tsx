
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.aboutPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Principal Identity Hero Section - Two Column Layout */}
      <section className="px-10 pt-32 pb-40 lg:pt-56 lg:pb-64 border-b border-white/10 relative overflow-hidden">
        {/* Schematic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        
        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'PRINCIPAL_ARCHITECT | 20_YEARS_GTM | MIT_SLOAN_2025', es: 'ARQUITECTO_PRINCIPAL | 20_AÑOS_GTM | MIT_SLOAN_2025' })}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
            {/* Left Column: Narrative (60% width target) */}
            <div className="lg:col-span-7 space-y-12">
              <h1 className="font-sans font-black text-[clamp(2.5rem,7vw,100px)] leading-[0.85] mb-6 tracking-tighter uppercase text-white">
                {t(content.hero.headline)}
              </h1>
              <p className="text-2xl lg:text-[36px] font-serif italic leading-[1.2] text-white/80 tracking-tight max-w-4xl border-l-4 border-untold-orange pl-10">
                {t(content.hero.hook)}
              </p>
              
              {/* Highlighted Credentials for Hero Impact */}
              <div className="flex flex-wrap gap-4 pl-11 pt-4">
                {content.stack.credentials.map((cred, idx) => (
                  <span key={idx} className="font-mono text-[10px] uppercase tracking-[0.2em] border border-white/10 px-4 py-2 bg-white/5 text-white/40 font-bold">
                    {t(cred).split(' - ')[0]}
                  </span>
                ))}
              </div>

              <p className="text-xl lg:text-2xl font-sans font-bold text-white/40 tracking-tight max-w-3xl pl-11 italic">
                {t(content.hero.regional)}
              </p>
            </div>

            {/* Right Column: Visual Asset (40% width target) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-untold-beige/5 border border-white/20 relative group overflow-hidden">
                {/* Monospaced Label Overlay */}
                <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold z-10 bg-untold-black/60">
                  PRINCIPAL_IMAGE // JS_2026
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                  alt={t(content.hero.portraitAlt)} 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 scale-105"
                />
                {/* High-contrast sharp border frame effect */}
                <div className="absolute inset-0 border-[1px] border-untold-orange/40 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator-Strategist Executive Profile Block */}
      <section className="px-10 py-32 lg:py-48 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-24 items-start">
           <div className="lg:col-span-4">
             <div className="sticky top-48">
               <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 block mb-10">THE_ADVANTAGE // LOG_01</span>
               <h2 className="font-sans font-black text-5xl lg:text-6xl uppercase tracking-tighter text-untold-orange leading-none">
                 {t({ en: 'Creator Mindset. System Heart.', es: 'Mente de Creador. Corazón de Sistema.' })}
               </h2>
             </div>
           </div>
           <div className="lg:col-span-8 space-y-24 lg:pl-16">
              <div className="group">
                <p className="text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight hover:text-white transition-colors">
                  {t(content.narrative.creatorStrategist)}
                </p>
              </div>

              <div className="pt-24 border-t border-white/5 group">
                <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 block mb-10">THE_ORIGIN // LOG_02</span>
                <p className="text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight">
                  {t(content.narrative.origin)}
                </p>
              </div>

              <div className="pt-24 border-t border-white/5 group">
                <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-untold-orange block mb-10">THE_MANIFESTO // LOG_03</span>
                <p className="text-3xl lg:text-5xl font-serif italic text-white/90 leading-[1.15] tracking-tight">
                  "{t(content.narrative.manifesto)}"
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Strategic Capability Pillars Grid */}
      <section className="px-10 py-32 lg:py-56 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-24">
             <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
             <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40 tracking-widest uppercase">
               {t({ en: 'STRATEGIC_CAPABILITIES // PRODUCTION_LOG', es: 'CAPACIDADES_ESTRATÉGICAS // LOG_DE_PRODUCCIÓN' })}
             </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {content.pillars.map((pillar) => (
              <div key={pillar.id} className="bg-untold-black p-12 lg:p-20 flex flex-col justify-between group hover:bg-white/[0.03] transition-all duration-700 min-h-[450px]">
                <div>
                  <div className="flex justify-between items-center mb-16">
                    <span className="font-mono text-[12px] uppercase tracking-[0.5em] text-white/20 font-bold group-hover:text-untold-orange transition-colors">LOG_{pillar.title.en}</span>
                    <div className="w-2 h-2 rounded-full bg-untold-orange"></div>
                  </div>
                  <h3 className="font-sans font-black text-3xl lg:text-5xl uppercase tracking-tighter mb-10 leading-none">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-xl lg:text-2xl font-serif leading-relaxed text-white/50 group-hover:text-white transition-colors">
                    {t(pillar.content)}
                  </p>
                </div>
                <div className="mt-16 pt-10 border-t border-white/5">
                   <div className="flex items-center space-x-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 italic">VERIFIED_FOR_PRODUCTION</span>
                      <div className="h-px flex-grow bg-white/5"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Spine & Education */}
      <section className="px-10 py-32 lg:py-56 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-24">
             <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
             <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40 tracking-widest uppercase">
               {t(content.stack.title)}
             </h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Tools Grid */}
            <div className="lg:col-span-7 space-y-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/30 font-bold block">{t({ en: 'ENGINEERING_ECOSYSTEM', es: 'ECOSISTEMA_DE_INGENIERÍA' })}</span>
              <div className="flex flex-wrap gap-x-12 gap-y-10">
                {content.stack.tools.map((tool, idx) => (
                  <span key={idx} className="text-3xl lg:text-6xl font-sans font-black uppercase tracking-tighter text-white hover:text-untold-orange transition-colors cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials - Authority Slot */}
            <div className="lg:col-span-5 space-y-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/30 font-bold block">{t({ en: 'AUTHORITY_&_VALIDATION', es: 'AUTORIDAD_Y_VALIDACIÓN' })}</span>
              <div className="space-y-10">
                {content.stack.credentials.map((cred, idx) => (
                  <div key={idx} className="bg-white/[0.02] p-10 border border-white/10 group hover:border-untold-orange transition-all relative">
                    <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-untold-orange/40 uppercase tracking-[0.4em] font-bold">VERIFIED_LOG</div>
                    <p className="text-xl lg:text-3xl font-sans font-black uppercase tracking-tighter leading-tight text-white group-hover:text-untold-orange transition-colors">
                      {t(cred)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Marketing Campaign Hub */}
      <section className="px-10 py-48 text-center bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="w-px h-32 bg-gradient-to-b from-untold-orange to-transparent mx-auto mb-16"></div>
          <h2 className="font-sans font-black text-6xl lg:text-[110px] mb-12 uppercase tracking-tighter leading-none text-white">
            {t(content.closing.headline)}
          </h2>
          <p className="text-2xl lg:text-[2.5rem] font-serif italic mb-24 max-w-4xl mx-auto text-white/50 leading-relaxed">
            {t(content.closing.subtext)}
          </p>
          <Link 
            to="/contact"
            className="bg-untold-orange text-white px-24 py-12 font-sans font-black uppercase tracking-tighter text-2xl hover:scale-105 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)] inline-block active:scale-95"
          >
            {t(i18n.navigation.cta)}
          </Link>
          <div className="mt-20 font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 font-bold">
            untold.works // THIS_WORKFLOW_IS_MY_MARKETING
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
