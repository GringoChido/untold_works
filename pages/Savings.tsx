import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import ProofStrip from '../components/ProofStrip';
import Breadcrumbs from '../components/Breadcrumbs';

interface Tool {
  name: string;
  monthlyLow: number;
  monthlyHigh: number;
  checked: boolean;
}

interface Tier {
  id: string;
  name: { en: string; es: string };
  investment: number;
  tools: Tool[];
}

const tiers: Tier[] = [
  {
    id: 'professional',
    name: { en: 'Professional Services', es: 'Servicios Profesionales' },
    investment: 5000,
    tools: [
      { name: 'Squarespace / Wix', monthlyLow: 25, monthlyHigh: 45, checked: true },
      { name: 'Calendly (Pro)', monthlyLow: 12, monthlyHigh: 20, checked: true },
      { name: 'Mailchimp (Standard)', monthlyLow: 20, monthlyHigh: 60, checked: true },
      { name: 'HoneyBook / Dubsado', monthlyLow: 40, monthlyHigh: 80, checked: true },
      { name: 'Google Workspace', monthlyLow: 14, monthlyHigh: 14, checked: true },
      { name: 'Zapier (Starter)', monthlyLow: 20, monthlyHigh: 30, checked: true },
    ],
  },
  {
    id: 'small-business',
    name: { en: 'Small Business', es: 'Pequeña Empresa' },
    investment: 10000,
    tools: [
      { name: 'Shopify / Square Online', monthlyLow: 79, monthlyHigh: 299, checked: true },
      { name: 'HubSpot (Starter)', monthlyLow: 50, monthlyHigh: 200, checked: true },
      { name: 'Mailchimp / Klaviyo', monthlyLow: 50, monthlyHigh: 150, checked: true },
      { name: 'Hootsuite / Buffer', monthlyLow: 50, monthlyHigh: 100, checked: true },
      { name: 'Analytics / Dashboarding', monthlyLow: 0, monthlyHigh: 150, checked: true },
      { name: 'Zapier (Team)', monthlyLow: 70, monthlyHigh: 100, checked: true },
      { name: 'Booking system', monthlyLow: 50, monthlyHigh: 250, checked: true },
    ],
  },
  {
    id: 'enterprise',
    name: { en: 'Enterprise', es: 'Empresarial' },
    investment: 150000,
    tools: [
      { name: 'HubSpot / Salesforce (Enterprise)', monthlyLow: 5000, monthlyHigh: 15000, checked: true },
      { name: 'Marketing team (3-5 people)', monthlyLow: 15000, monthlyHigh: 33000, checked: true },
      { name: 'Agency retainers', monthlyLow: 5000, monthlyHigh: 15000, checked: true },
      { name: 'Dev team / maintenance', monthlyLow: 6600, monthlyHigh: 16600, checked: true },
      { name: 'Dashboarding / BI tools', monthlyLow: 1000, monthlyHigh: 5000, checked: true },
      { name: 'Integration middleware', monthlyLow: 830, monthlyHigh: 4100, checked: true },
    ],
  },
];

const Savings: React.FC = () => {
  const { t } = useLanguage();
  const [activeTier, setActiveTier] = useState(0);
  const [tools, setTools] = useState<Tool[]>(tiers[0].tools.map(tool => ({ ...tool })));

  usePageMeta(
    { en: 'SaaS Cost Calculator — What You\'d Save Owning Your Systems | Untold.works', es: 'Calculadora de Costos SaaS — Lo Que Ahorrarías con Sistemas Propios | Untold.works' },
    { en: 'Calculate how much you spend on SaaS tools vs. owning your systems outright. See the ROI of switching to a one-time custom build. No recurring fees.', es: 'Calcula cuánto gastas en herramientas SaaS versus ser dueño de tus sistemas. Ve el ROI de cambiar a un proyecto personalizado. Sin cuotas recurrentes.' },
    {
      path: '/savings',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'SaaS Cost Calculator — Untold.works',
        description: 'Interactive calculator comparing SaaS subscription costs vs. one-time custom-built systems. Estimate monthly spend and see ROI of switching to owned infrastructure.',
        url: 'https://untold.works/savings',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        provider: { '@type': 'Organization', '@id': 'https://untold.works/#organization', name: 'Untold.works' },
      },
    }
  );

  const handleTierChange = (idx: number) => {
    setActiveTier(idx);
    setTools(tiers[idx].tools.map(tool => ({ ...tool })));
  };

  const toggleTool = (idx: number) => {
    setTools(prev => prev.map((tool, i) => i === idx ? { ...tool, checked: !tool.checked } : tool));
  };

  const checkedTools = tools.filter(tool => tool.checked);
  const monthlyLow = checkedTools.reduce((sum, tool) => sum + tool.monthlyLow, 0);
  const monthlyHigh = checkedTools.reduce((sum, tool) => sum + tool.monthlyHigh, 0);
  const monthlyAvg = Math.round((monthlyLow + monthlyHigh) / 2);
  const annualAvg = monthlyAvg * 12;
  const investment = tiers[activeTier].investment;
  const breakeven = annualAvg > 0 ? Math.ceil(investment / monthlyAvg) : 0;
  const savings3yr = annualAvg * 3 - investment;
  const savings5yr = annualAvg * 5 - investment;

  const formatCurrency = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K` : `$${n.toLocaleString()}`;

  return (
    <div className="bg-untold-beige font-serif text-untold-black">
      {/* Hero */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Savings Calculator', es: 'Calculadora de Ahorro' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse" />
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'THE MATH NOBODY TALKS ABOUT', es: 'LAS MATEMÁTICAS QUE NADIE MENCIONA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'What Would You Save?', es: '¿Cuánto Ahorrarías?' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Select the tools you currently pay for. See what you\'d save by owning one system instead.',
              es: 'Selecciona las herramientas que pagas actualmente. Mira lo que ahorrarías siendo dueño de un solo sistema.',
            })}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          {/* Tier Selector */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tiers.map((tier, idx) => (
              <button
                key={tier.id}
                onClick={() => handleTierChange(idx)}
                className={`px-6 py-3 font-sans font-black text-sm uppercase tracking-tighter transition-all ${
                  activeTier === idx
                    ? 'bg-untold-black text-white'
                    : 'bg-white border border-untold-border text-untold-gray hover:border-untold-orange/50'
                }`}
              >
                {t(tier.name)}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tool Checklist */}
            <div className="border border-untold-border bg-white p-8 sm:p-10">
              <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-2">
                {t({ en: 'Your Current Stack', es: 'Tu Stack Actual' })}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-black/30 mb-8">
                {t({ en: 'Uncheck tools you don\'t use', es: 'Desmarca herramientas que no usas' })}
              </p>

              <div className="space-y-0 border-t border-untold-border">
                {tools.map((tool, idx) => (
                  <label
                    key={idx}
                    className="flex items-center justify-between gap-3 py-4 border-b border-untold-border cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        type="checkbox"
                        checked={tool.checked}
                        onChange={() => toggleTool(idx)}
                        className="w-4 h-4 accent-untold-orange shrink-0"
                      />
                      <span className={`font-serif text-base truncate ${tool.checked ? 'text-untold-black' : 'text-untold-black/30 line-through'}`}>
                        {tool.name}
                      </span>
                    </div>
                    <span className={`font-mono text-sm shrink-0 ${tool.checked ? 'text-red-600/60' : 'text-untold-black/20'}`}>
                      ${tool.monthlyLow}–${tool.monthlyHigh}/mo
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-red-400/30">
                <div className="flex justify-between mb-1">
                  <span className="font-sans font-black text-sm uppercase tracking-tighter">
                    {t({ en: 'Est. monthly spend', es: 'Gasto mensual est.' })}
                  </span>
                  <span className="font-sans font-black text-lg text-red-600">
                    ~${monthlyAvg.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans font-black text-sm uppercase tracking-tighter">
                    {t({ en: 'Annual spend', es: 'Gasto anual' })}
                  </span>
                  <span className="font-sans font-black text-2xl text-red-600">
                    ~${annualAvg.toLocaleString()}/yr
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="border border-untold-border bg-untold-black text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-2">
                  {t({ en: 'Your Untold Works System', es: 'Tu Sistema Untold Works' })}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-10">
                  {t({ en: 'One-time investment. $0/month forever.', es: 'Inversión única. $0/mes para siempre.' })}
                </p>

                <div className="space-y-8 mb-10">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block mb-1">
                      {t({ en: 'One-time investment', es: 'Inversión única' })}
                    </span>
                    <span className="font-sans font-black text-4xl tracking-tighter text-emerald-400">
                      {activeTier === 2
                        ? t({ en: 'Custom Quote', es: 'Cotización Personalizada' })
                        : `$${investment.toLocaleString()}`}
                    </span>
                  </div>

                  {annualAvg > 0 && (
                    <>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block mb-1">
                            {t({ en: 'Breakeven', es: 'Punto de equilibrio' })}
                          </span>
                          <span className="font-sans font-black text-2xl text-untold-orange">
                            ~{breakeven} {t({ en: 'mo', es: 'meses' })}
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block mb-1">
                            {t({ en: '3-yr savings', es: 'Ahorro 3 años' })}
                          </span>
                          <span className="font-sans font-black text-2xl text-emerald-400">
                            {formatCurrency(Math.max(0, savings3yr))}
                          </span>
                        </div>
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block mb-1">
                            {t({ en: '5-yr savings', es: 'Ahorro 5 años' })}
                          </span>
                          <span className="font-sans font-black text-2xl text-emerald-400">
                            {formatCurrency(Math.max(0, savings5yr))}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white/[0.05] border border-white/10 p-6">
                        <p className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter leading-snug">
                          {t({
                            en: `You're spending ~$${annualAvg.toLocaleString()}/year on tools you'll never own. We replace them for a one-time investment — then it's $0/month, forever.`,
                            es: `Estás gastando ~$${annualAvg.toLocaleString()}/año en herramientas que nunca serán tuyas. Las reemplazamos por una inversión única — después es $0/mes, para siempre.`,
                          })}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <Link
                to="/contact"
                className="group relative bg-untold-orange text-white px-8 py-5 font-sans font-black uppercase tracking-tighter text-lg text-center hover:scale-[1.02] active:scale-95 transition-all"
              >
                {t({ en: 'Get Your Personalized Savings Breakdown', es: 'Obtén Tu Desglose Personalizado de Ahorro' })} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <ProofStrip variant="light" />

      {/* Final CTA */}
      <section className="px-5 sm:px-10 py-24 sm:py-40 text-center bg-untold-beige/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-[clamp(2.5rem,10vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase whitespace-pre-line">
            {t({ en: 'Own the System.\nKeep the Money.', es: 'Sé Dueño del Sistema.\nQuédate con el Dinero.' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'No lock-in. No monthly platform fees. Full ownership of everything we build.',
              es: 'Sin ataduras. Sin cuotas mensuales. Propiedad total de todo lo que construimos.',
            })}
          </p>
          <Link
            to="/contact"
            className="group relative inline-block bg-untold-black text-white px-10 sm:px-16 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">{t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })} →</span>
            <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Savings;
