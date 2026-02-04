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
      <nav className="sticky top-0 z-50 bg-untold-beige/95 backdrop-blur-md border-b border-untold-border px-10 lg:px-14 py-8 lg:py-10">
        <div className="max-w-[1540px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-[32px] font-sans font-black tracking-tighter leading-none group flex items-center shrink-0">
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
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-10 h-0.5 bg-black mb-2.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
            <div className={`w-10 h-0.5 bg-black mb-2.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-10 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[96px] h-screen bg-untold-beige z-40 flex flex-col p-12 space-y-10 animate-in slide-in-from-top duration-300 overflow-y-auto">
            {navItems.map((item) => (
              <Link 
                key={item.key} 
                to={item.path} 
                className="text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t((navigation as any)[item.key])}
              </Link>
            ))}
            <div className="pt-10 flex flex-col space-y-8 border-t border-untold-border">
              <button 
                onClick={() => {
                  setLang(lang === 'en' ? 'es' : 'en');
                  setIsMenuOpen(false);
                }}
                className="text-left font-mono text-sm font-bold uppercase tracking-widest text-untold-gray hover:text-untold-orange"
              >
                → {lang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
              </button>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-untold-black text-white px-10 py-8 rounded-none font-sans font-black uppercase tracking-widest text-2xl hover:bg-untold-orange transition-colors text-center"
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