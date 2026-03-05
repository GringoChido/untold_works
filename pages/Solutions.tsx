import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import Breadcrumbs from '../components/Breadcrumbs';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Solutions | AI Websites, Automation & Business Systems — Untold.works',
      es: 'Soluciones | Sitios Web con IA, Automatización y Sistemas de Negocio — Untold.works',
    },
    {
      en: 'AI-native business platforms — brand identity, mobile-first websites, automated workflows, CRM, and bilingual content systems for businesses in Mexico and the US.',
      es: 'Plataformas de negocio nativas de IA — identidad de marca, sitios web mobile-first, flujos automatizados, CRM y sistemas de contenido bilingüe para negocios en México y EE.UU.',
    },
    { path: '/solutions' }
  );

  const pillars = [
    {
      id: 'professional-services',
      title: { en: 'Professional Services', es: 'Servicios Profesionales' },
      description: {
        en: 'Doctors, lawyers, consultants, architects — complete business systems for anyone who serves clients one-on-one.',
        es: 'Médicos, abogados, consultores, arquitectos — sistemas completos de negocio para quienes atienden clientes uno a uno.',
      },
    },
    {
      id: 'small-business',
      title: { en: 'Small Business', es: 'Pequeños Negocios' },
      description: {
        en: 'Restaurants, retail, studios, local services — mobile-first platforms that bring customers through the door.',
        es: 'Restaurantes, retail, estudios, servicios locales — plataformas mobile-first que atraen clientes a tu puerta.',
      },
    },
    {
      id: 'enterprise',
      title: { en: 'Enterprise', es: 'Empresa' },
      description: {
        en: 'Hotels, multi-location brands, agencies — scalable systems with dashboards, automation, and team workflows.',
        es: 'Hoteles, marcas multi-ubicación, agencias — sistemas escalables con dashboards, automatización y flujos de equipo.',
      },
    },
  ];

  const phases = i18n.whatWeBuild.phases;

  return (
    <div className="bg-untold-beige min-h-screen font-serif text-untold-black">
      {/* Hero */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Solutions', es: 'Soluciones' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'SOLUTIONS', es: 'SOLUCIONES' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t(i18n.whatWeBuild.headline)}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight">
            {t(i18n.whatWeBuild.subheadline)}
          </p>
        </div>
      </section>

      {/* What We Build — 3 Phases */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'OUR APPROACH', es: 'NUESTRO ENFOQUE' })}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-untold-border border border-untold-border">
            {phases.map((phase, idx) => {
              const items: { en: string; es: string }[] =
                'deliverables' in phase && phase.deliverables
                  ? phase.deliverables
                  : 'features' in phase && phase.features
                    ? phase.features
                    : 'options' in phase && phase.options
                      ? phase.options
                      : [];

              return (
                <div key={idx} className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-6">
                    {t({ en: `PHASE ${String(idx + 1).padStart(2, '0')}`, es: `FASE ${String(idx + 1).padStart(2, '0')}` })}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-4">
                    {t(phase.title)}
                  </h3>
                  <p className="text-base sm:text-lg font-serif italic text-untold-gray mb-8 leading-relaxed">
                    {t(phase.description)}
                  </p>
                  <ul className="space-y-3 flex-grow">
                    {items.map((item: { en: string; es: string }, i: number) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-untold-orange mt-1.5 text-sm">+</span>
                        <span className="text-sm sm:text-base font-serif text-untold-gray">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                  {'reassurance' in phase && phase.reassurance && (
                    <p className="mt-8 pt-6 border-t border-untold-border text-sm font-mono text-untold-orange/70">
                      {t(phase.reassurance as { en: string; es: string })}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'OUR PROCESS', es: 'NUESTRO PROCESO' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t(i18n.howWeWork.headline)}
          </h3>
          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray mb-20 max-w-3xl">
            {t(i18n.howWeWork.subheadline)}
          </p>

          <div className="border-t border-untold-border">
            {i18n.howWeWork.stages.map((stage) => (
              <div
                key={stage.number}
                className="grid lg:grid-cols-12 gap-0 border-b border-untold-border group hover:bg-untold-beige transition-all duration-500"
              >
                <div className="lg:col-span-4 p-6 sm:p-10 lg:p-14 lg:border-r border-untold-border">
                  <span className="font-mono text-[11px] font-bold text-untold-orange mb-6 block tracking-[0.4em] uppercase">
                    {t({ en: `STAGE ${stage.number}`, es: `ETAPA ${stage.number}` })}
                  </span>
                  <h4 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight group-hover:text-untold-orange transition-colors">
                    {t(stage.title)}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-black/30 mt-4">
                    {t(stage.subtitle)}
                  </p>
                </div>
                <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-untold-gray leading-relaxed mb-8">
                    {t(stage.description)}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-untold-border/50">
                    {stage.deliverables.map((d, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase tracking-[0.2em] text-untold-black/40 border border-untold-border px-3 py-1">
                        {t(d)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'CHOOSE YOUR PATH', es: 'ELIGE TU CAMINO' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 max-w-4xl">
            {t({ en: 'Solutions Built for How You Work', es: 'Soluciones Hechas Para Cómo Trabajas' })}
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <Link
                key={pillar.id}
                to={`/solutions/${pillar.id}`}
                className="group border border-untold-border bg-untold-beige p-8 sm:p-10 lg:p-12 flex flex-col hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-4 group-hover:text-untold-orange transition-colors">
                  {t(pillar.title)}
                </h4>
                <p className="text-base sm:text-lg font-serif italic text-untold-gray leading-relaxed mb-8 flex-grow">
                  {t(pillar.description)}
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                  {t({ en: 'Learn More', es: 'Saber Más' })} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-24 sm:py-40 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(2.5rem,10vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase">
            {t({ en: 'Not Sure Which\nFits You?', es: '¿No Sabes Cuál\nEs Para Ti?' })}
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-white/50 mb-12 max-w-2xl">
            {t({
              en: 'Tell us what you do and we\'ll show you the blueprint.',
              es: 'Cuéntanos lo que haces y te mostramos el plan.',
            })}
          </p>
          <Link
            to="/contact"
            className="group relative bg-untold-orange text-white px-10 sm:px-20 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:scale-105 active:scale-95 transition-all duration-500"
          >
            {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
