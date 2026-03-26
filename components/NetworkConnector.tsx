import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

interface NetworkConnectorProps {
  /** The name of this capability as it appears in Network Systems */
  capability: { en: string; es: string };
  /** How this capability works at the network level */
  networkDescription: { en: string; es: string };
  /** Optional: related capabilities to cross-link */
  relatedCapabilities?: Array<{
    name: { en: string; es: string };
    path: string;
  }>;
  /** Visual variant */
  variant?: 'light' | 'dark';
}

const NetworkConnector: React.FC<NetworkConnectorProps> = ({
  capability,
  networkDescription,
  relatedCapabilities,
  variant = 'dark',
}) => {
  const { t } = useLanguage();

  const isDark = variant === 'dark';

  return (
    <section
      className={`px-5 sm:px-10 py-16 sm:py-24 border-b ${
        isDark
          ? 'bg-untold-black text-white border-white/10'
          : 'bg-untold-beige text-untold-black border-untold-border'
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Network Systems connection */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-untold-orange animate-pulse"></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                {t({ en: 'PART OF NETWORK SYSTEMS', es: 'PARTE DE NETWORK SYSTEMS' })}
              </span>
            </div>

            <h3
              className={`font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter mb-4 leading-[0.9]`}
            >
              {t({
                en: `${t(capability)} at Network Scale.`,
                es: `${t(capability)} a Escala de Red.`,
              })}
            </h3>

            <p
              className={`text-lg font-serif italic leading-relaxed mb-6 ${
                isDark ? 'text-white/60' : 'text-untold-gray'
              }`}
            >
              {t(networkDescription)}
            </p>

            <Link
              to="/network-systems"
              className="inline-flex items-center space-x-4 group"
            >
              <span className="font-sans font-black text-base uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                {t({ en: 'Explore Network Systems', es: 'Explorar Network Systems' })}
              </span>
              <span className="text-xl text-untold-orange">→</span>
            </Link>
          </div>

          {/* Right: Related capabilities */}
          {relatedCapabilities && relatedCapabilities.length > 0 && (
            <div className="lg:col-span-5">
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${
                  isDark ? 'text-white/30' : 'text-untold-gray/50'
                }`}
              >
                {t({ en: 'RELATED CAPABILITIES', es: 'CAPACIDADES RELACIONADAS' })}
              </p>
              <div className="space-y-0">
                {relatedCapabilities.map((cap, idx) => (
                  <Link
                    key={idx}
                    to={cap.path}
                    className={`group flex items-center justify-between py-4 border-b ${
                      isDark ? 'border-white/10' : 'border-untold-border'
                    }`}
                  >
                    <span
                      className={`font-sans font-black text-base uppercase tracking-tighter group-hover:text-untold-orange transition-colors ${
                        isDark ? 'text-white' : 'text-untold-black'
                      }`}
                    >
                      {t(cap.name)}
                    </span>
                    <span className="text-untold-orange text-sm group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NetworkConnector;
