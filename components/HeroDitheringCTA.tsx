import React, { useState, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
);

const HeroDitheringCTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Suspense fallback={<div className="absolute inset-0 bg-untold-black" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#FF4D17"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.6 : 0.15}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <div className="relative z-10 px-5 sm:px-10 max-w-[1440px] mx-auto text-center flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-untold-orange animate-pulse" />
          <span className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.5em] text-white/40 font-bold">
            {t({ en: 'SAN MIGUEL DE ALLENDE, MX', es: 'SAN MIGUEL DE ALLENDE, MX' })}
          </span>
        </div>

        <h2 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.82] tracking-tighter uppercase text-white mb-10">
          {t({
            en: "Let's Build\nSomething\nTogether.",
            es: 'Construyamos\nAlgo\nJuntos.',
          })}
        </h2>

        <p className="text-lg sm:text-xl font-serif italic text-white/50 max-w-2xl mb-12 leading-relaxed">
          {t({
            en: 'Brand identity, AI-powered websites, workflow automation, and bilingual systems — built from San Miguel de Allende for businesses across Mexico and the United States.',
            es: 'Identidad de marca, sitios web con IA, automatización de flujos y sistemas bilingües — construidos desde San Miguel de Allende para negocios en México y Estados Unidos.',
          })}
        </p>

        <Link
          to="/contact"
          className="group inline-flex items-center space-x-6 sm:space-x-10 border border-white/20 bg-black/30 backdrop-blur-sm px-8 sm:px-16 py-6 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/10 transition-all duration-500"
        >
          <span className="font-sans font-black text-lg sm:text-2xl uppercase tracking-tighter text-white">
            {t({ en: 'Start a Conversation', es: 'Iniciar una Conversación' })}
          </span>
          <span className="text-3xl sm:text-4xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeroDitheringCTA;
