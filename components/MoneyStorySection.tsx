import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const MoneyStorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center space-x-4 mb-16">
          <span className="w-2.5 h-2.5 rounded-full bg-untold-orange" />
          <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
            {t({ en: 'THE MONEY STORY', es: 'LA HISTORIA DEL DINERO' })}
          </p>
        </div>

        <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85] whitespace-pre-line">
          {t(i18n.moneyStory.headline)}
        </h2>
        <p className="text-xl sm:text-2xl font-serif italic text-untold-gray leading-relaxed mb-16 max-w-3xl">
          {t(i18n.moneyStory.subheadline)}
        </p>

        <div className="grid lg:grid-cols-3 gap-px bg-untold-border border border-untold-border">
          {i18n.moneyStory.cards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="group bg-white p-8 sm:p-10 lg:p-12 flex flex-col hover:bg-untold-beige/50 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-6">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-6 group-hover:text-untold-orange transition-colors">
                {t(card.tier)}
              </h3>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="border-l-2 border-red-400/40 pl-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block mb-1">
                    {t({ en: 'You\'re spending', es: 'Estás gastando' })}
                  </span>
                  <span className="font-sans font-black text-lg text-red-600/70">
                    {t(card.spend)}
                  </span>
                </div>
                <div className="border-l-2 border-emerald-500/40 pl-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block mb-1">
                    {t({ en: 'We replace it for', es: 'Lo reemplazamos por' })}
                  </span>
                  <span className="font-sans font-black text-lg text-emerald-700/70">
                    {t(card.replace)}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center space-x-3 font-sans font-black text-sm uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                <span>{t(card.cta)}</span>
                <span className="text-xl">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyStorySection;
