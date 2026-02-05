import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import TechStack from '../components/TechStack';
import * as i18n from '../i18n';

const Home: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-untold-beige font-serif text-untold-black overflow-x-hidden max-w-full">
      {/* High-Authority Technical Hero Section */}
      <section className="w-full bg-untold-black text-white px-4 sm:px-6 md:px-10 py-24 sm:py-32 lg:py-56 border-b border-white/10 relative overflow-hidden">
        {/* Schematic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        
        <div className="max-w-full lg:max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-10 sm:mb-14">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[10px] sm:text-[11px] lg:text-[13px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-bold text-white/40">
              {t(i18n.hero.eyebrow)}
            </p>
          </div>
          
          <h1 className="font-sans font-black text-[clamp(3.5rem,12vw,180px)] leading-[0.82] mb-8 tracking-tighter uppercase max-w-[1400px]">
            {t(i18n.hero.headline)}
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-[42px] font-serif italic text-untold-orange leading-[1.1] tracking-tight mb-12 sm:mb-16 max-w-5xl">
            {t(i18n.hero.subheadline)}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-32 items-end">
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              <p className="text-lg sm:text-xl lg:text-3xl font-serif text-white/80 leading-[1.25] tracking-tight max-w-4xl border-l-4 border-untold-orange pl-6 sm:pl-10">
                {t(i18n.hero.paragraph)}
              </p>
              
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/10 px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 hover:border-untold-orange hover:bg-untold-orange/5 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.15)]"
              >
                <span className="font-sans font-black text-lg sm:text-xl md:text-2xl uppercase tracking-tighter">
                  {t(i18n.hero.cta)}
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
              </Link>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-6 sm:p-8 md:p-10 border border-white/5 bg-white/[0.02] space-y-3 sm:space-y-4">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/20 font-bold block">OPERATIONAL_FOCUS</span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/50 italic leading-tight">
                  {t(i18n.hero.support)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-24 sm:py-32 bg-white border-b border-untold-border overflow-hidden">
        <div className="max-w-full lg:max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-20 sm:mb-32">
             <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-untold-black"></span>
             <h2 className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-bold text-untold-black/40">{t(i18n.model.title)}</h2>
          </div>
          
          <div className="border-t border-untold-border">
            {[i18n.model.design, i18n.model.build, i18n.model.operate].map((step, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-untold-border group hover:bg-untold-beige transition-all duration-700">
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-20 lg:border-r border-untold-border">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-untold-orange mb-6 sm:mb-8 block tracking-[0.3em] sm:tracking-[0.4em] uppercase">{t({en: step.title.en.split(': ')[0], es: step.title.es.split(': ')[0]})}</span>
                  <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-6xl uppercase tracking-tighter leading-tight group-hover:text-untold-orange transition-colors">
                    {t({ en: step.title.en.split(': ')[1], es: step.title.es.split(': ')[1] })}
                  </h3>
                </div>
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-20 flex flex-col justify-between">
                  <p className="text-xl sm:text-2xl lg:text-4xl font-medium leading-[1.3] text-untold-black mb-16 sm:mb-20 max-w-3xl">
                    {t(step.copy)}
                  </p>
                  <div className="pt-8 sm:pt-12 border-t border-untold-border group-hover:border-untold-orange/20 transition-colors">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-untold-gray tracking-[0.25em] sm:tracking-[0.3em] block mb-3 sm:mb-4 italic uppercase">{t({en: 'FINAL_DELIVERABLE', es: 'ENTREGABLE_FINAL'})}</span>
                    <p className="text-xl sm:text-2xl lg:text-4xl font-black uppercase tracking-tighter group-hover:text-untold-orange transition-colors">
                      {t(step.deliverable)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-24 sm:py-32 bg-untold-black text-white border-b border-white/5">
        <div className="max-w-full lg:max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-16 sm:mb-20">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-bold text-white/40">{t(i18n.servicePillars.title)}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {/* Content Systems */}
            <div className="bg-untold-black p-8 sm:p-12 lg:p-16 group hover:bg-white/5 transition-all">
              <div className="mb-8 sm:mb-10">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-untold-orange font-bold block mb-3 sm:mb-4">01</span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter mb-2 sm:mb-3 group-hover:text-untold-orange transition-colors">
                  {t(i18n.servicePillars.content.title)}
                </h3>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold">
                  {t(i18n.servicePillars.content.subtitle)}
                </p>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-serif text-white/70 leading-relaxed mb-8 sm:mb-10">
                {t(i18n.servicePillars.content.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {i18n.servicePillars.content.tags.map(tag => (
                  <span key={tag} className="border border-white/10 px-4 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Intelligent Automation */}
            <div className="bg-untold-black p-8 sm:p-12 lg:p-16 group hover:bg-white/5 transition-all">
              <div className="mb-8 sm:mb-10">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-untold-orange font-bold block mb-3 sm:mb-4">02</span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter mb-2 sm:mb-3 group-hover:text-untold-orange transition-colors">
                  {t(i18n.servicePillars.automation.title)}
                </h3>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold">
                  {t(i18n.servicePillars.automation.subtitle)}
                </p>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-serif text-white/70 leading-relaxed mb-8 sm:mb-10">
                {t(i18n.servicePillars.automation.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {i18n.servicePillars.automation.tags.map(tag => (
                  <span key={tag} className="border border-white/10 px-4 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Infrastructure & Delivery */}
            <div className="bg-untold-black p-8 sm:p-12 lg:p-16 group hover:bg-white/5 transition-all">
              <div className="mb-8 sm:mb-10">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-untold-orange font-bold block mb-3 sm:mb-4">03</span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter mb-2 sm:mb-3 group-hover:text-untold-orange transition-colors">
                  {t(i18n.servicePillars.infrastructure.title)}
                </h3>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/40 font-bold">
                  {t(i18n.servicePillars.infrastructure.subtitle)}
                </p>
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-serif text-white/70 leading-relaxed mb-8 sm:mb-10">
                {t(i18n.servicePillars.infrastructure.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {i18n.servicePillars.infrastructure.tags.map(tag => (
                  <span key={tag} className="border border-white/10 px-4 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologist Stack Section */}
      <TechStack />

      {/* Selected Artifacts Section */}
      <section className="w-full bg-untold-black text-white py-24 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="max-w-full lg:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
           <div className="mb-16 sm:mb-20 md:mb-24">
             <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold text-untold-gray mb-4 sm:mb-6 block uppercase">{t(i18n.artifacts.eyebrow)}</span>
             <h2 className="font-sans font-black text-5xl sm:text-6xl lg:text-[100px] leading-[0.85] uppercase tracking-tighter mb-8 sm:mb-10">{t(i18n.artifacts.headline)}</h2>
             <p className="text-lg sm:text-xl lg:text-3xl font-medium text-untold-beige/80 max-w-4xl leading-relaxed">
               {t(i18n.artifacts.intro)}
             </p>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 sm:py-6 border-t border-b border-white/10 mb-16 sm:mb-20">
             <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 md:mb-0">
               <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-untold-orange"></span>
               <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold text-untold-beige">{t(i18n.artifacts.headerLeft)}</span>
             </div>
             <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-white/40">
               {t(i18n.artifacts.headerRight)}
             </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-20 sm:mb-24">
              {i18n.proofs.slice(0, 2).map((artifact, idx) => {
                const nameEn = artifact.name.en.toLowerCase();
                let projectId = 'omi-lead-intake-qualification';
                
                if (nameEn.includes('spotify')) {
                  projectId = 'spotify-whatsapp-publishing';
                }
                
                return (
                  <Link to={`/portfolio/${projectId}`} key={idx} className="bg-untold-black p-8 sm:p-12 lg:p-20 flex flex-col justify-between group min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] hover:bg-white/5 transition-all">
                    <div className="mb-16 sm:mb-20">
                      <h3 className={`font-sans font-black text-[clamp(2rem,5vw,72px)] leading-[0.9] uppercase tracking-tighter mb-12 sm:mb-16 transition-colors duration-500 ${idx === 0 ? 'text-untold-orange' : 'text-white group-hover:text-untold-orange'}`}>
                        {t(artifact.name)}
                      </h3>
                      
                      <div className="space-y-10 sm:space-y-12">
                        <div className="border-b border-white/5 pb-8 sm:pb-10">
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/30 block mb-5 sm:mb-6">{t(i18n.artifacts.labels.description)}</span>
                          <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-[1.4] text-untold-beige/90">
                            {t(artifact.description)}
                          </p>
                        </div>
                        <div className="border-b border-white/5 pb-8 sm:pb-10">
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/30 block mb-5 sm:mb-6">{t(i18n.artifacts.labels.builtWith)}</span>
                          <p className="text-base sm:text-lg lg:text-xl font-serif italic text-white/50 leading-relaxed">
                            {t(artifact.builtWith)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-10 sm:pt-12">
                      {artifact.tags.map(tag => (
                        <div key={tag} className="border border-white/10 px-4 sm:px-6 py-1.5 sm:py-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/30 group-hover:text-white group-hover:border-white/50 transition-all">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </Link>
                );
              })}
           </div>

           <div className="text-center pt-8 sm:pt-10">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center space-x-4 sm:space-x-6 group"
              >
                <span className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter border-b-4 border-untold-orange pb-1.5 sm:pb-2 group-hover:text-untold-orange transition-colors">
                  {t(i18n.artifacts.viewPortfolio)}
                </span>
                <span className="text-3xl sm:text-4xl group-hover:translate-x-4 transition-transform duration-500 text-untold-orange">→</span>
              </Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-32 sm:py-48 lg:py-72 text-center bg-untold-beige/40">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(3.5rem,12vw,180px)] leading-[0.8] mb-12 sm:mb-16 tracking-tighter uppercase group cursor-default whitespace-pre-line text-center">
            {t({ 
              en: 'This\nWorkflow\nIs My\nMarketing.', 
              es: 'Este\nFlujo es\nMi\nMarketing.' 
            })}
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[2.5rem] text-untold-black mb-20 sm:mb-24 max-w-3xl mx-auto font-serif italic leading-tight tracking-tight">
            {t({ 
              en: 'I build systems that integrate AI into creative workflows.', 
              es: 'Construyo sistemas que integran la IA en flujos de trabajo creativos.' 
            })}
          </p>
          <Link 
            to="/contact"
            className="group relative bg-untold-black text-white px-12 sm:px-16 md:px-24 py-6 sm:py-8 md:py-10 rounded-none text-lg sm:text-xl md:text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <span className="relative z-10">{t(i18n.navigation.cta)}</span>
            <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;