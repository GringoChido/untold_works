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
    <div className="bg-untold-beige font-serif text-untold-black">
      {/* High-Authority Technical Hero Section */}
      <section className="bg-untold-black text-white px-10 py-32 lg:py-56 border-b border-white/10 relative overflow-hidden">
        {/* Schematic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        
        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t(i18n.hero.eyebrow)}
            </p>
          </div>
          
          <h1 className="font-sans font-black text-[clamp(2.5rem,11vw,150px)] leading-[0.82] mb-20 tracking-tighter uppercase max-w-[1400px]">
            {t(i18n.hero.headline)}
          </h1>
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-end">
            <div className="lg:col-span-8 space-y-16">
              <p className="text-2xl lg:text-[38px] font-serif italic text-white/70 leading-[1.2] tracking-tight max-w-5xl border-l-4 border-untold-orange pl-10">
                {t(i18n.hero.paragraph)}
              </p>

              <p className="text-xl lg:text-2xl font-sans font-bold text-white/40 tracking-tight max-w-3xl pl-11">
                {t(i18n.hero.regional)}
              </p>
              
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-10 group border border-white/10 px-16 py-10 hover:border-untold-orange hover:bg-untold-orange/5 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.15)]"
              >
                <span className="font-sans font-black text-2xl uppercase tracking-tighter">
                  {t(i18n.hero.cta)}
                </span>
                <span className="text-5xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
              </Link>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-10 border border-white/5 bg-white/[0.02] space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold block">OPERATIONAL_MANIFESTO</span>
                <p className="text-2xl lg:text-3xl font-medium text-white/50 italic leading-tight">
                  {t(i18n.hero.support)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model Section */}
      <section className="px-10 py-32 bg-white border-b border-untold-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-32">
             <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
             <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">{t(i18n.model.title)}</h2>
          </div>
          
          <div className="border-t border-untold-border">
            {[i18n.model.design, i18n.model.build, i18n.model.operate].map((step, idx) => (
              <div key={idx} className="grid lg:grid-cols-12 gap-0 border-b border-untold-border group hover:bg-untold-beige transition-all duration-700">
                <div className="lg:col-span-5 p-12 lg:p-20 border-r border-untold-border">
                  <span className="font-mono text-[11px] font-bold text-untold-orange mb-8 block tracking-[0.4em] uppercase">{t({en: step.title.en.split(': ')[0], es: step.title.es.split(': ')[0]})}</span>
                  <h3 className="font-sans font-black text-4xl lg:text-6xl uppercase tracking-tighter leading-tight group-hover:text-untold-orange transition-colors">
                    {t({ en: step.title.en.split(': ')[1], es: step.title.es.split(': ')[1] })}
                  </h3>
                </div>
                <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-between">
                  <p className="text-2xl lg:text-4xl font-medium leading-[1.3] text-untold-black mb-20 max-w-3xl">
                    {t(step.copy)}
                  </p>
                  <div className="pt-12 border-t border-untold-border group-hover:border-untold-orange/20 transition-colors">
                    <span className="font-mono text-[10px] uppercase font-bold text-untold-gray tracking-[0.3em] block mb-4 italic uppercase">{t({en: 'FINAL_DELIVERABLE', es: 'ENTREGABLE_FINAL'})}</span>
                    <p className="text-2xl lg:text-4xl font-black uppercase tracking-tighter group-hover:text-untold-orange transition-colors">
                      {t(step.deliverable)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologist Stack Section */}
      <TechStack />

      {/* Selected Artifacts Section */}
      <section className="bg-untold-black text-white py-32 overflow-hidden border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-10">
           <div className="mb-24">
             <span className="font-mono text-[11px] uppercase tracking-[0.5em] font-bold text-untold-gray mb-6 block uppercase">{t(i18n.artifacts.eyebrow)}</span>
             <h2 className="font-sans font-black text-6xl lg:text-[100px] leading-[0.85] uppercase tracking-tighter mb-10">{t(i18n.artifacts.headline)}</h2>
             <p className="text-xl lg:text-3xl font-medium text-untold-beige/80 max-w-4xl leading-relaxed">
               {t(i18n.artifacts.intro)}
             </p>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-t border-b border-white/10 mb-20">
             <div className="flex items-center space-x-3 mb-4 md:mb-0">
               <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
               <span className="font-mono text-[11px] uppercase tracking-[0.5em] font-bold text-untold-beige">{t(i18n.artifacts.headerLeft)}</span>
             </div>
             <div className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">
               {t(i18n.artifacts.headerRight)}
             </div>
           </div>

           <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-24">
              {i18n.proofs.slice(0, 2).map((artifact, idx) => {
                const nameEn = artifact.name.en.toLowerCase();
                let projectId = 'omi-lead-intake-qualification';
                
                if (nameEn.includes('spotify')) {
                  projectId = 'spotify-whatsapp-publishing';
                } else if (nameEn.includes('black radio')) {
                  projectId = 'black-radio-experience';
                } else if (nameEn.includes('billiard factory')) {
                  projectId = 'billiard-factory-retail-architecture';
                }
                
                return (
                  <Link to={`/portfolio/${projectId}`} key={idx} className="bg-untold-black p-12 lg:p-20 flex flex-col justify-between group min-h-[700px] hover:bg-white/5 transition-all">
                    <div className="mb-20">
                      <h3 className={`font-sans font-black text-[clamp(2.5rem,5vw,72px)] leading-[0.9] uppercase tracking-tighter mb-16 transition-colors duration-500 ${idx === 0 ? 'text-untold-orange' : 'text-white group-hover:text-untold-orange'}`}>
                        {t(artifact.name)}
                      </h3>
                      
                      <div className="space-y-12">
                        <div className="border-b border-white/5 pb-10">
                          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-6">{t(i18n.artifacts.labels.description)}</span>
                          <p className="text-xl lg:text-2xl font-medium leading-[1.4] text-untold-beige/90">
                            {t(artifact.description)}
                          </p>
                        </div>
                        <div className="border-b border-white/5 pb-10">
                          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-6">{t(i18n.artifacts.labels.builtWith)}</span>
                          <p className="text-lg lg:text-xl font-serif italic text-white/50 leading-relaxed">
                            {t(artifact.builtWith)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-12">
                      {artifact.tags.map(tag => (
                        <div key={tag} className="border border-white/10 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white group-hover:border-white/30 transition-all">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </Link>
                );
              })}
           </div>

           <div className="text-center pt-10">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center space-x-6 group"
              >
                <span className="font-sans font-black text-3xl uppercase tracking-tighter border-b-4 border-untold-orange pb-2 group-hover:text-untold-orange transition-colors">
                  {t(i18n.artifacts.viewPortfolio)}
                </span>
                <span className="text-4xl group-hover:translate-x-4 transition-transform duration-500 text-untold-orange">→</span>
              </Link>
           </div>
        </div>
      </section>

      {/* About Section - Narrative Style */}
      <section className="px-10 py-32 lg:py-56 bg-white border-b border-untold-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-untold-beige grayscale overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000&auto=format&fit=crop" 
                  alt="Untold Works Story" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div className="space-y-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="w-3 h-3 rounded-full bg-untold-orange"></span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.5em] font-bold text-untold-gray">
                    {t(i18n.about.eyebrow)}
                  </p>
                </div>
                
                <h2 className="font-serif text-[clamp(2rem,5vw,72px)] leading-[1.1] text-untold-orange tracking-tight font-medium">
                  {t(i18n.about.narrative)}
                </h2>
                
                <div className="max-w-xl space-y-10">
                   <p className="text-xl lg:text-2xl font-serif text-untold-black leading-relaxed">
                     {t(i18n.about.context)}
                   </p>
                   
                   <div className="pt-8 border-t border-untold-border">
                      <span className="font-mono text-[10px] uppercase font-bold text-untold-gray tracking-[0.4em] block mb-4 italic uppercase">
                        {t(i18n.about.stackLabel)}
                      </span>
                      <p className="text-xl lg:text-2xl font-sans font-black uppercase tracking-tighter">
                        {t(i18n.about.stackItems)}
                      </p>
                   </div>
                </div>
              </div>

              <div className="mt-20 lg:mt-32">
                 <Link 
                    to="/about"
                    className="bg-untold-black text-white px-12 py-6 font-sans font-black uppercase tracking-[0.3em] text-xs hover:bg-untold-orange transition-all duration-500 shadow-xl inline-block"
                 >
                    {t(i18n.about.cta)}
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-10 py-48 lg:py-72 text-center bg-untold-beige/40">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(4.5rem,14vw,180px)] leading-[0.8] mb-16 tracking-tighter uppercase group cursor-default whitespace-pre-line text-center">
            {t({ 
              en: 'These\nWorkflows\nAre My\nMarketing.', 
              es: 'Estos\nFlujos son\nMi\nMarketing.' 
            })}
          </h2>
          <p className="text-2xl lg:text-[2.5rem] text-untold-black mb-24 max-w-3xl mx-auto font-serif italic leading-tight tracking-tight">
            {t({ 
              en: 'I map your high-load manual tasks to AI workflows that actually work.', 
              es: 'Mapeo sus tareas manuales de alta carga a flujos de IA que realmente funcionan.' 
            })}
          </p>
          <Link 
            to="/contact"
            className="group relative bg-untold-black text-white px-24 py-10 rounded-none text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
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