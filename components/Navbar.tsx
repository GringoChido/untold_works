import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { navigation } from '../i18n';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Exact Sequence: 1. Home (Logo), 2. Portfolio, 3. About, 4. Workshop, 5. Contact
  const navItems = [
    { key: 'portfolio', path: '/portfolio' },
    { key: 'about', path: '/about' },
    { key: 'workshops', path: '/workshops' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-untold-beige/95 backdrop-blur-md border-b border-untold-border px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 lg:py-10">
        <div className="max-w-[1540px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl sm:text-[28px] lg:text-[32px] font-sans font-black tracking-tighter leading-none group flex items-center shrink-0">
            untold<span className="text-untold-orange group-hover:text-black transition-colors duration-300">.works</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-16 xl:space-x-20">
            <div className="flex space-x-10 xl:space-x-12">
              {navItems.map((item) => (
                <Link 
                  key={item.key} 
                  to={item.path} 
                  className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-black hover:text-untold-orange transition-colors duration-300"
                >
                  {t((navigation as any)[item.key])}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-12">
              <div className="h-6 w-[2px] bg-untold-border/40"></div>
              
              <button 
                onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                className="font-mono text-[12px] font-bold uppercase tracking-widest hover:text-untold-orange transition-colors duration-300"
              >
                [{lang === 'en' ? 'ES' : 'EN'}]
              </button>

              <Link 
                to="/contact"
                className="bg-untold-black text-white px-10 py-4 rounded-none text-xs font-sans font-black uppercase tracking-[0.2em] hover:bg-untold-orange transition-all duration-300"
              >
                {t(navigation.cta)}
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-8 h-0.5 bg-black mb-2 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div className={`w-8 h-0.5 bg-black mb-2 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-8 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[88px] sm:top-[96px] h-screen bg-untold-beige z-40 flex flex-col p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-10 animate-in slide-in-from-top duration-300 overflow-y-auto">
            {navItems.map((item) => (
              <Link 
                key={item.key} 
                to={item.path} 
                className="text-4xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t((navigation as any)[item.key])}
              </Link>
            ))}
            <div className="pt-8 sm:pt-10 flex flex-col space-y-6 sm:space-y-8 border-t border-untold-border">
              <button 
                onClick={() => {
                  setLang(lang === 'en' ? 'es' : 'en');
                  setIsMenuOpen(false);
                }}
                className="text-left font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-untold-gray hover:text-untold-orange"
              >
                → {lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
              </button>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-untold-black text-white px-8 sm:px-10 py-6 sm:py-8 rounded-none font-sans font-black uppercase tracking-widest text-xl sm:text-2xl hover:bg-untold-orange transition-colors text-center"
              >
                {t(navigation.cta)}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
