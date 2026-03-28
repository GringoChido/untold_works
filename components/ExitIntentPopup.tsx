import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const STORAGE_KEY = 'untold-exit-popup-dismissed';
const DISMISS_DAYS = 14;

const ExitIntentPopup: React.FC = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const daysSince = (Date.now() - parseInt(stored, 10)) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }

    let shown = false;

    // Desktop: mouse leaves viewport toward top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        shown = true;
        setShow(true);
      }
    };

    // Mobile fallback: 60 seconds of idle time
    const mobileTimer = setTimeout(() => {
      if (!shown && window.innerWidth < 768) {
        shown = true;
        setShow(true);
      }
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative bg-untold-black text-white max-w-lg w-full p-8 sm:p-12 border border-white/10 shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-white/30 hover:text-white transition-colors text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <div className="flex items-center space-x-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-untold-orange animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
            {t({ en: 'BEFORE YOU GO', es: 'ANTES DE IRTE' })}
          </span>
        </div>

        <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-6 leading-[0.9]">
          {t({
            en: 'How much are you spending on tools you\'ll never own?',
            es: '¿Cuánto gastas en herramientas que nunca serán tuyas?',
          })}
        </h2>

        <p className="font-serif text-base text-white/50 leading-relaxed mb-8">
          {t({
            en: 'The average business spends $12,000/year on SaaS subscriptions. We build systems you own for a one-time investment.',
            es: 'El negocio promedio gasta $12,000/año en suscripciones SaaS. Construimos sistemas que son tuyos por una inversión única.',
          })}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/savings"
            onClick={dismiss}
            className="bg-untold-orange text-white px-8 py-4 font-sans font-black uppercase tracking-tighter text-center hover:scale-[1.02] active:scale-95 transition-all"
          >
            {t({ en: 'Get your savings number', es: 'Obtén tu número de ahorro' })} →
          </Link>
          <button
            onClick={dismiss}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white/40 transition-colors py-2"
          >
            {t({
              en: 'Not right now',
              es: 'Ahora no',
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
