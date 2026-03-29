import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { navigation } from '../i18n';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (isMenuOpen && navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const pillarLinks = [
    { path: '/mexico', label: { en: 'Mexico — Mobile-First Operations', es: 'México — Operaciones Mobile-First' } },
    { path: '/solutions/professional-services', label: { en: 'Professional Services', es: 'Servicios Profesionales' } },
    { path: '/solutions/small-business', label: { en: 'Small Business', es: 'Pequeña Empresa' } },
    { path: '/solutions/enterprise', label: { en: 'Enterprise', es: 'Empresarial' } },
  ];


  return (
    <>
      <nav ref={navRef} aria-label="Main navigation" className="sticky top-0 z-50 bg-untold-beige/95 backdrop-blur-md border-b border-untold-border px-5 sm:px-10 lg:px-14 py-6 sm:py-8 lg:py-10">
        <div className="max-w-[1540px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-[32px] font-sans font-black tracking-tighter leading-none group flex items-center shrink-0 whitespace-nowrap">
            untold<span className="text-untold-orange group-hover:text-black transition-colors duration-300">.works</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-16">
            <div className="flex items-center space-x-6 xl:space-x-10">
              {/* Network Systems — Flagship */}
              <Link
                to="/network-systems"
                className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-orange hover:text-untold-black transition-colors duration-300 whitespace-nowrap"
              >
                {t({ en: 'Network Systems', es: 'Network Systems' })}
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <Link
                  to="/solutions"
                  className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-black hover:text-untold-orange transition-colors duration-300"
                >
                  {t(navigation.solutions)}
                </Link>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 pt-4 z-50">
                    <div className="bg-white border border-untold-border shadow-xl min-w-[260px]">
                      {pillarLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-6 py-4 text-[12px] font-mono font-bold uppercase tracking-[0.2em] text-untold-black hover:text-untold-orange hover:bg-untold-beige/50 transition-all border-b border-untold-border"
                        >
                          {t(item.label)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-black hover:text-untold-orange transition-colors duration-300"
              >
                {t(navigation.portfolio)}
              </Link>
              <Link
                to="/blog"
                className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-black hover:text-untold-orange transition-colors duration-300"
              >
                {t(navigation.blog)}
              </Link>
              <Link
                to="/about"
                className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-black hover:text-untold-orange transition-colors duration-300"
              >
                {t(navigation.about)}
              </Link>
              <Link
                to="/contact"
                className="text-[12px] font-mono font-bold uppercase tracking-[0.3em] text-untold-black hover:text-untold-orange transition-colors duration-300"
              >
                {t(navigation.contact)}
              </Link>
            </div>

            <div className="flex items-center space-x-6 xl:space-x-10">
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

          {/* Mobile Language Toggle + Hamburger */}
          <div className="lg:hidden flex items-center">
            <div className="flex items-center space-x-1 mr-3">
              <button
                onClick={() => setLang('en')}
                aria-label="Switch to English"
                className={`px-2 py-3 min-h-[44px] font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${lang === 'en' ? 'text-untold-orange' : 'text-untold-black/40'}`}
              >
                EN
              </button>
              <span className="font-mono text-[11px] text-untold-black/20">|</span>
              <button
                onClick={() => setLang('es')}
                aria-label="Cambiar a Español"
                className={`px-2 py-3 min-h-[44px] font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${lang === 'es' ? 'text-untold-orange' : 'text-untold-black/40'}`}
              >
                ES
              </button>
            </div>
            <button
              className="p-3 min-w-[44px] min-h-[44px] flex flex-col justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className={`w-10 h-0.5 bg-black mb-2.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></div>
              <div className={`w-10 h-0.5 bg-black mb-2.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-10 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></div>
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Menu — outside nav to avoid backdrop-filter stacking context breaking fixed positioning */}
      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-0 bg-untold-beige z-[45] flex flex-col p-6 sm:p-12 space-y-6 sm:space-y-8 overflow-y-auto pb-40" style={{ top: navHeight }}>
          {/* Network Systems — Flagship */}
          <Link
            to="/network-systems"
            className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter text-untold-orange hover:text-untold-black transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t({ en: 'Network Systems', es: 'Network Systems' })}
          </Link>

          {/* Solutions expandable */}
          <div>
            <div className="flex items-center justify-between w-full">
              <Link
                to="/solutions"
                className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(navigation.solutions)}
              </Link>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-11 h-11 flex items-center justify-center"
              >
                <span className={`text-untold-orange text-2xl transition-transform inline-block ${isSolutionsOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
            </div>
            {isSolutionsOpen && (
              <div className="mt-4 ml-4 border-l-2 border-untold-orange/20 pl-6">
                <div className="space-y-3">
                  {pillarLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block text-xl sm:text-2xl font-sans font-black uppercase tracking-tighter text-untold-gray hover:text-untold-orange transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(item.label)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/portfolio"
            className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t(navigation.portfolio)}
          </Link>
          <Link
            to="/blog"
            className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t(navigation.blog)}
          </Link>
          <Link
            to="/about"
            className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t(navigation.about)}
          </Link>
          <Link
            to="/contact"
            className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t(navigation.contact)}
          </Link>

          <div className="pt-8 sm:pt-10 flex flex-col space-y-6 sm:space-y-8 border-t border-untold-border">
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
              className="bg-untold-black text-white px-8 sm:px-10 py-5 sm:py-8 rounded-none font-sans font-black uppercase tracking-widest text-lg sm:text-2xl hover:bg-untold-orange transition-colors text-center"
            >
              {t(navigation.cta)}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-untold-black/95 backdrop-blur-md border-t border-white/10 px-5 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link
          to="/contact"
          className="block w-full bg-untold-orange text-white py-4 font-sans font-black uppercase tracking-tighter text-center text-sm active:scale-[0.98] transition-transform"
        >
          {t(navigation.cta)}
        </Link>
      </div>
    </>
  );
};

export default Navbar;
