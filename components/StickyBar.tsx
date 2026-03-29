import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const STORAGE_KEY = 'untold-sticky-bar-dismissed';
const DISMISS_DAYS = 7;

const StickyBar: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const dismissedAt = parseInt(stored, 10);
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }
    setDismissed(false);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  if (dismissed) return null;

  return (
    <div
      className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-untold-black/95 backdrop-blur-sm border-b border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <p className="font-serif text-sm sm:text-base text-white/80 flex-1 min-w-0">
            {t(i18n.stickyBar.message)}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/savings"
              className="font-sans font-black text-xs sm:text-sm uppercase tracking-tighter text-untold-orange hover:text-white transition-colors whitespace-nowrap"
            >
              {t(i18n.stickyBar.cta)} →
            </Link>
            <button
              onClick={handleDismiss}
              className="w-11 h-11 flex items-center justify-center text-white/30 hover:text-white transition-colors text-lg leading-none shrink-0"
              aria-label={t({ en: 'Dismiss', es: 'Cerrar' })}
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
