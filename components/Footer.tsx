import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-untold-black text-white py-32 px-10 border-t border-white/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1440px] mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Main Campaign Area */}
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-4 mb-10">
              <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
              <h2 className="font-mono text-[11px] lg:text-[14px] font-black uppercase tracking-[0.5em] text-white">
                {t(i18n.footer.campaign)}
              </h2>
            </div>
            
            <h3 className="font-sans font-black text-6xl lg:text-9xl tracking-tighter mb-12 uppercase leading-[0.85] hover:text-untold-orange transition-colors duration-500 cursor-default">
              untold.works
            </h3>
            
            <p className="text-2xl lg:text-[40px] font-serif italic text-white/50 max-w-4xl leading-[1.15] mb-16 tracking-tight">
              {t(i18n.footer.narrative)}
            </p>

            <Link 
              to="/contact"
              className="inline-flex items-center space-x-8 group border border-white/10 px-12 py-8 hover:border-untold-orange hover:bg-untold-orange/5 transition-all shadow-2xl"
            >
              <span className="font-sans font-black text-xl uppercase tracking-tighter">
                {t(i18n.navigation.cta)}
              </span>
              <span className="text-4xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">→</span>
            </Link>
          </div>

          {/* Quick Navigation - Reordered to Home, Portfolio, About, Workshop, Contact */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:text-right pt-24 lg:pt-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold mb-6">NAV_DIRECTORY</span>
            {['portfolio', 'about', 'workshops', 'contact'].map((key) => (
              <Link 
                key={key}
                to={`/${key}`}
                className="text-4xl lg:text-6xl font-sans font-black uppercase tracking-tighter text-white/40 hover:text-white hover:text-untold-orange transition-all duration-300 leading-none"
              >
                {t((i18n.navigation as any)[key])}
              </Link>
            ))}
          </div>
        </div>

        {/* Technical Footer Bar */}
        <div className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            {t(i18n.footer.location)}
          </div>
          
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            &copy; {new Date().getFullYear()} untold.works / SYSTEM_OPERATIONS / ALL RIGHTS RESERVED
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-untold-orange font-bold">
            {t(i18n.footer.version)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;