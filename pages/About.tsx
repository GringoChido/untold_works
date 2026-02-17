import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.aboutPage;

  usePageMeta(
    i18n.seo.about.title,
    i18n.seo.about.description
  );

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Hero */}
      <section className="px-5 sm:px-10 pt-20 sm:pt-32 pb-24 sm:pb-40 lg:pt-56 lg:pb-64 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'ABOUT // UNTOLD.WORKS', es: 'ACERCA DE // UNTOLD.WORKS' })}
            </p>
          </div>

          <div className="max-w-5xl">
            <h1 className="font-sans font-black text-[clamp(2.5rem,7vw,100px)] leading-[0.85] mb-12 tracking-tighter uppercase text-white">
              {t(content.hero.headline)}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-[40px] font-serif italic leading-[1.2] text-white/80 tracking-tight max-w-4xl border-l-4 border-untold-orange pl-6 sm:pl-10 mb-8">
              {t(content.hero.hook)}
            </p>
            <p className="text-base sm:text-xl lg:text-2xl font-sans font-bold text-white/40 tracking-tight max-w-3xl pl-7 sm:pl-11 italic">
              {t(content.hero.regional)}
            </p>
          </div>
        </div>
      </section>

      {/* Why Mexico / Why San Miguel */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 bg-untold-beige text-untold-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-untold-black/40">
              {t(content.whyMexico.eyebrow)}
            </p>
          </div>

          <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-20 max-w-6xl">
            {t(content.whyMexico.headline)}
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Mexico */}
            <div>
              <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed">
                {t(content.whyMexico.mexicoContent)}
              </p>
            </div>

            {/* San Miguel */}
            <div>
              <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed">
                {t(content.whyMexico.smaContent)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 sm:gap-24 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-48">
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 block mb-10">THE_STORY // LOG_01</span>
              <h2 className="font-sans font-black text-4xl lg:text-6xl uppercase tracking-tighter text-untold-orange leading-none">
                {t({ en: 'Creative Foundation.\nTechnical Execution.', es: 'Base Creativa.\nEjecución Técnica.' })}
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-24 lg:pl-16">
            <div className="group">
              <p className="text-xl sm:text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight hover:text-white transition-colors">
                {t(content.narrative.veteran)}
              </p>
            </div>

            <div className="pt-24 border-t border-white/5 group">
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 block mb-10">THE_PHILOSOPHY // LOG_02</span>
              <p className="text-xl sm:text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight">
                {t(content.narrative.theBridge)}
              </p>
            </div>

            <div className="pt-24 border-t border-white/5 group">
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-untold-orange block mb-10">THE_MANIFESTO // LOG_03</span>
              <p className="text-xl sm:text-3xl lg:text-5xl font-serif italic text-white/90 leading-[1.15] tracking-tight">
                "{t(content.narrative.manifesto)}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 text-center bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="w-px h-32 bg-gradient-to-b from-untold-orange to-transparent mx-auto mb-16"></div>
          <h2 className="font-sans font-black text-3xl sm:text-6xl lg:text-[110px] mb-12 uppercase tracking-tighter leading-none text-white">
            {t(content.closing.headline)}
          </h2>
          <p className="text-2xl lg:text-[2.2rem] font-serif italic mb-24 max-w-4xl mx-auto text-white/50 leading-relaxed">
            {t(content.closing.subtext)}
          </p>
          <Link
            to="/contact"
            className="bg-untold-orange text-white px-8 sm:px-16 py-5 sm:py-8 font-sans font-black uppercase tracking-tighter text-base sm:text-xl hover:scale-105 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)] inline-block active:scale-95"
          >
            {t(i18n.navigation.cta)}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
