import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import * as i18n from '../i18n';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-untold-black text-white py-20 sm:py-32 px-5 sm:px-10 border-t border-white/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1440px] mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* Main Campaign Area */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-4 mb-10">
              <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
              <h2 className="font-mono text-[11px] lg:text-[14px] font-black uppercase tracking-[0.5em] text-white">
                {t(i18n.footer.campaign)}
              </h2>
            </div>

            <h3 className="font-sans font-black tracking-tighter mb-12 uppercase leading-[0.85] hover:text-untold-orange transition-colors duration-500 cursor-default" style={{ fontSize: 'clamp(2rem, 8vw, 8rem)' }}>
              untold.works
            </h3>

            <p className="text-lg sm:text-2xl lg:text-[40px] font-serif italic text-white/50 max-w-4xl leading-[1.15] mb-10 sm:mb-16 tracking-tight">
              {t(i18n.footer.narrative)}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center space-x-4 sm:space-x-8 group border border-white/10 px-6 sm:px-12 py-5 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/5 transition-all shadow-2xl"
            >
              <span className="font-sans font-black text-base sm:text-xl uppercase tracking-tighter">
                {t(i18n.navigation.cta)}
              </span>
              <span className="text-4xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">→</span>
            </Link>
          </div>

          {/* Right Column: Nav + Newsletter */}
          <div className="lg:col-span-5 flex flex-col space-y-12 pt-0 lg:pt-0">
            {/* Navigation */}
            <div className="flex flex-col space-y-5 lg:text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold mb-4">NAV_DIRECTORY</span>
              {[
                { key: 'portfolio', path: '/portfolio' },
                { key: 'solutions', path: '/solutions' },
                { key: 'blog', path: '/blog' },
                { key: 'about', path: '/about' },
                { key: 'contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tighter text-white/40 hover:text-untold-orange transition-all duration-300 leading-none"
                >
                  {t((i18n.navigation as any)[item.key])}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 lg:text-right pt-2">
                {[
                  { label: { en: 'Professional Services', es: 'Servicios Profesionales' }, path: '/solutions/professional-services' },
                  { label: { en: 'Small Business', es: 'Pequeños Negocios' }, path: '/solutions/small-business' },
                  { label: { en: 'Enterprise', es: 'Empresa' }, path: '/solutions/enterprise' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm font-mono uppercase tracking-[0.3em] text-white/20 hover:text-untold-orange transition-all duration-300"
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 lg:text-right pt-2">
                {[
                  { label: { en: 'Website Design', es: 'Diseño Web' }, path: '/websites' },
                  { label: { en: 'SEO & AEO', es: 'SEO y AEO' }, path: '/seo-aeo' },
                  { label: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
                  { label: { en: 'Ads', es: 'Publicidad' }, path: '/ads' },
                  { label: { en: 'Dashboard', es: 'Dashboard' }, path: '/dashboard' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm font-mono uppercase tracking-[0.3em] text-white/20 hover:text-untold-orange transition-all duration-300"
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </div>
              <Link
                to="/workshops"
                className="text-sm font-mono uppercase tracking-[0.3em] text-white/20 hover:text-untold-orange transition-all duration-300"
              >
                {t(i18n.navigation.workshops)}
              </Link>
            </div>

            {/* Newsletter */}
            <div className="lg:text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold block mb-4">
                {t({ en: 'NEWSLETTER', es: 'BOLETÍN' })}
              </span>
              <p className="text-sm font-serif italic text-white/40 mb-4">
                {t({ en: 'AI tools, case studies, and guides for your business.', es: 'Herramientas de IA, casos de estudio y guías para tu negocio.' })}
              </p>
              <NewsletterForm />
            </div>

            {/* Location */}
            <div className="lg:text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold block mb-4">
                {t({ en: 'LOCATION', es: 'UBICACIÓN' })}
              </span>
              <address className="not-italic text-sm font-serif text-white/40 leading-relaxed">
                San Miguel de Allende, Guanajuato, Mexico<br />
                <a href="mailto:info@untold.works" className="hover:text-untold-orange transition-colors">info@untold.works</a>
              </address>
            </div>

            {/* Social */}
            <div className="lg:text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold block mb-4">SOCIAL</span>
              <div className="flex space-x-5 lg:justify-end items-center">
                <a
                  href="https://www.linkedin.com/company/untoldworksai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-untold-orange transition-colors duration-300"
                  aria-label="Untold.works LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/semolik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-untold-orange transition-colors duration-300 flex items-center gap-1.5"
                  aria-label="Joshua Semolik LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em]">JS</span>
                </a>
                <a
                  href="https://www.instagram.com/untold.works_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-untold-orange transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Bar */}
        <div className="mt-16 sm:mt-24 lg:mt-40 pt-10 sm:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            {t(i18n.footer.location)}
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold text-center flex flex-col sm:flex-row items-center gap-2">
            <span>&copy; {new Date().getFullYear()} <span style={{ whiteSpace: 'nowrap' }}>untold.works</span> / ALL RIGHTS RESERVED</span>
            <Link to="/privacy" className="text-white/20 hover:text-untold-orange transition-colors">
              / {t({ en: 'PRIVACY POLICY', es: 'PRIVACIDAD' })}
            </Link>
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
