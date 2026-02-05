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
      {/* Principal Identity Hero Section */}
      <section className="px-4 sm:px-6 md:px-10 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-56 lg:pb-64 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        
        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-10 sm:mb-14">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'LEGACY_OF_VISION // 20_YEARS_MASTERY', es: 'LEGADO_DE_VISIÓN // 20_AÑOS_DE_MAESTRÍA' })}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-32 items-center">
            <div className="lg:col-span-7 space-y-10 sm:space-y-12">
              <h1 className="font-sans font-black text-[clamp(2.5rem,7vw,100px)] leading-[0.85] mb-6 tracking-tighter uppercase text-white">
                {t(content.hero.headline)}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-[40px] font-serif italic leading-[1.2] text-white/80 tracking-tight max-w-4xl border-l-4 border-untold-orange pl-6 sm:pl-10">
                {t(content.hero.hook)}
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-sans font-bold text-white/40 tracking-tight max-w-3xl pl-7 sm:pl-11 italic">
                {t(content.hero.regional)}
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-untold-beige/5 border border-white/20 relative group overflow-hidden">
                <img 
                  src="/images/about-photo.jpg" 
                  alt="Joshua Semolik" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Evolution Block */}
      <section className="px-4 sm:px-6 md:px-10 py-24 sm:py-32 lg:py-48 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 sm:gap-20 md:gap-24 items-start">
           <div className="lg:col-span-4">
             <div className="sticky top-48">
               <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-bold text-white/30 block mb-8 sm:mb-10">THE_PRACTITIONER // LOG_01</span>
               <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-untold-orange leading-none">
                 {t({ en: 'Veteran Eye. Agentic Logic.', es: 'Ojo Veterano. Lógica Agéntica.' })}
               </h2>
               <div className="mt-12 sm:mt-16">
                 <a
                    href="https://linkedin.com/in/semolik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-untold-black px-8 sm:px-10 py-4 sm:py-5 font-sans font-black uppercase tracking-tighter text-base sm:text-lg hover:bg-untold-orange hover:text-white transition-all shadow-xl"
                 >
                   {t({ en: 'Follow my latest AI insights →', es: 'Sigue mis insights de IA →' })}
                 </a>
               </div>
             </div>
           </div>
           <div className="lg:col-span-8 space-y-20 sm:space-y-24 lg:pl-16">
              <div className="group">
                <p className="text-2xl sm:text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight hover:text-white transition-colors">
                  {t(content.narrative.veteran)}
                </p>
              </div>

              <div className="pt-20 sm:pt-24 border-t border-white/5 group">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-bold text-white/30 block mb-8 sm:mb-10">THE_BRIDGE // LOG_02</span>
                <p className="text-2xl sm:text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight">
                  {t(content.narrative.theBridge)}
                </p>
              </div>

              <div className="pt-20 sm:pt-24 border-t border-white/5 group">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.5em] sm:tracking-[0.6em] font-bold text-untold-orange block mb-8 sm:mb-10">THE_MANIFESTO // LOG_03</span>
                <p className="text-2xl sm:text-3xl lg:text-5xl font-serif italic text-white/90 leading-[1.15] tracking-tight">
                  "{t(content.narrative.manifesto)}"
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Partnerships Closing Section */}
      <section className="px-4 sm:px-6 md:px-10 py-32 sm:py-40 md:py-48 text-center bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="w-px h-24 sm:h-32 bg-gradient-to-b from-untold-orange to-transparent mx-auto mb-12 sm:mb-16"></div>
          <h2 className="font-sans font-black text-5xl sm:text-6xl lg:text-[110px] mb-10 sm:mb-12 uppercase tracking-tighter leading-none text-white">
            {t(content.closing.headline)}
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[2.2rem] font-serif italic mb-20 sm:mb-24 max-w-4xl mx-auto text-white/50 leading-relaxed">
            {t(content.closing.subtext)}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8">
            <Link 
              to="/contact"
              className="w-full md:w-auto bg-untold-orange text-white px-12 sm:px-16 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:scale-105 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)] inline-block active:scale-95"
            >
              {t(i18n.navigation.cta)}
            </Link>
            <a
              href="https://linkedin.com/in/semolik/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white text-untold-black px-12 sm:px-16 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:bg-untold-orange hover:text-white transition-all shadow-xl inline-block"
            >
              {t({ en: 'Follow on LinkedIn →', es: 'Seguir en LinkedIn →' })}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;