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
            {t({ en: 'Which Solution Fits Your Business?', es: '¿Cuál Solución Se Adapta a Tu Negocio?' })}
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

      {/* Comparison Table */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'COMPARE SOLUTIONS', es: 'COMPARAR SOLUCIONES' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'How Do the Three Ecosystems Compare?', es: '¿Cómo Se Comparan los Tres Ecosistemas?' })}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-untold-black">
                  <th className="py-4 pr-6 font-mono text-[11px] uppercase tracking-[0.3em] text-untold-black/40 font-bold w-1/4"></th>
                  <th className="py-4 px-4 font-sans font-black text-lg uppercase tracking-tighter">{t({ en: 'Professional Services', es: 'Servicios Profesionales' })}</th>
                  <th className="py-4 px-4 font-sans font-black text-lg uppercase tracking-tighter">{t({ en: 'Small Business', es: 'Pequeños Negocios' })}</th>
                  <th className="py-4 px-4 font-sans font-black text-lg uppercase tracking-tighter">{t({ en: 'Enterprise', es: 'Empresa' })}</th>
                </tr>
              </thead>
              <tbody className="font-serif text-base">
                {[
                  { label: { en: 'Best for', es: 'Ideal para' }, values: [{ en: 'Solo practitioners, 1-5 person firms', es: 'Profesionales independientes, firmas de 1-5 personas' }, { en: 'Teams of 2-50, growing businesses', es: 'Equipos de 2-50, negocios en crecimiento' }, { en: 'Organizations with 20+ employees', es: 'Organizaciones con 20+ empleados' }] },
                  { label: { en: 'Brand identity', es: 'Identidad de marca' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ Enterprise system', es: '✓ Sistema empresarial' }] },
                  { label: { en: 'AI-powered website', es: 'Sitio web con IA' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ Multi-site capable', es: '✓ Multi-sitio' }] },
                  { label: { en: 'CRM', es: 'CRM' }, values: [{ en: 'Client management', es: 'Gestión de clientes' }, { en: 'Team CRM', es: 'CRM de equipo' }, { en: 'Multi-team + pipeline', es: 'Multi-equipo + pipeline' }] },
                  { label: { en: 'Automation', es: 'Automatización' }, values: [{ en: 'Intake & follow-up', es: 'Admisión y seguimiento' }, { en: 'Marketing + operations', es: 'Marketing + operaciones' }, { en: 'Full process automation', es: 'Automatización completa' }] },
                  { label: { en: 'Booking & scheduling', es: 'Reservas y agenda' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ Multi-location', es: '✓ Multi-ubicación' }] },
                  { label: { en: 'Analytics', es: 'Analítica' }, values: [{ en: 'Revenue dashboard', es: 'Panel de ingresos' }, { en: 'Multi-user reporting', es: 'Reportes multiusuario' }, { en: 'Revenue ops + forecasting', es: 'RevOps + pronósticos' }] },
                  { label: { en: 'Training & handoff', es: 'Capacitación y entrega' }, values: [{ en: '✓ Full ownership', es: '✓ Propiedad total' }, { en: '✓ Full ownership', es: '✓ Propiedad total' }, { en: '✓ Full ownership', es: '✓ Propiedad total' }] },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-untold-border hover:bg-untold-beige/50 transition-colors">
                    <td className="py-4 pr-6 font-sans font-bold text-sm uppercase tracking-tight">{t(row.label)}</td>
                    {row.values.map((val, vIdx) => (
                      <td key={vIdx} className="py-4 px-4 text-untold-gray">{t(val)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'FREQUENTLY ASKED QUESTIONS', es: 'PREGUNTAS FRECUENTES' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'What Should I Know\nBefore Starting?', es: '¿Qué Debo Saber\nAntes de Empezar?' })}
          </h3>

          <div className="space-y-0 border-t border-untold-border">
            {[
              { q: { en: 'How much does a project cost?', es: '¿Cuánto cuesta un proyecto?' }, a: { en: 'Every project is scoped to your needs. Professional Services ecosystems typically start at $5,000-$15,000. Small Business platforms range from $10,000-$30,000. Enterprise systems are custom-quoted based on complexity. We provide a detailed proposal after our initial conversation.', es: 'Cada proyecto se define según tus necesidades. Los ecosistemas de Servicios Profesionales generalmente comienzan en $5,000-$15,000 USD. Plataformas para Pequeños Negocios van de $10,000-$30,000 USD. Los sistemas Empresariales se cotizan según complejidad. Proporcionamos una propuesta detallada después de nuestra conversación inicial.' } },
              { q: { en: 'How long does a project take?', es: '¿Cuánto tiempo toma un proyecto?' }, a: { en: 'Most Professional Services builds take 4-6 weeks. Small Business platforms take 6-10 weeks. Enterprise systems vary from 8-16 weeks depending on scope. We work in phases so you can see progress throughout.', es: 'La mayoría de los proyectos de Servicios Profesionales toman 4-6 semanas. Plataformas para Pequeños Negocios toman 6-10 semanas. Sistemas Empresariales varían de 8-16 semanas según el alcance. Trabajamos en fases para que veas el progreso.' } },
              { q: { en: 'Do I own everything you build?', es: '¿Soy dueño de todo lo que construyen?' }, a: { en: 'Yes. Full ownership transfer is part of every project. You get the code, the data, the documentation, and video training. No lock-in, no recurring fees for access to your own systems.', es: 'Sí. La transferencia completa de propiedad es parte de cada proyecto. Recibes el código, los datos, la documentación y capacitación en video. Sin ataduras, sin cuotas recurrentes.' } },
              { q: { en: 'Do I need to be technical?', es: '¿Necesito ser técnico?' }, a: { en: 'Not at all. We build systems designed for non-technical business owners. We train you with video walkthroughs and written guides, and provide a 30-day support window after launch.', es: 'Para nada. Construimos sistemas diseñados para dueños de negocio no técnicos. Te capacitamos con videos paso a paso y guías escritas, y proporcionamos soporte de 30 días después del lanzamiento.' } },
              { q: { en: 'Can you work with businesses outside Mexico?', es: '¿Pueden trabajar con negocios fuera de México?' }, a: { en: 'Absolutely. We serve clients across Mexico and the United States. Our bilingual team works remotely with businesses anywhere in both countries.', es: 'Por supuesto. Atendemos clientes en México y Estados Unidos. Nuestro equipo bilingüe trabaja de forma remota con negocios en cualquier lugar de ambos países.' } },
              { q: { en: 'What if I already have a website?', es: '¿Qué pasa si ya tengo un sitio web?' }, a: { en: 'We can either rebuild it as part of a complete ecosystem, or integrate new AI systems and automation into your existing setup. We will assess what you have and recommend the best path forward.', es: 'Podemos reconstruirlo como parte de un ecosistema completo, o integrar nuevos sistemas de IA y automatización en tu configuración existente. Evaluamos lo que tienes y recomendamos el mejor camino.' } },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-untold-border group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h4>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-lg font-serif text-untold-gray leading-relaxed pr-12">
                  {t(faq.a)}
                </p>
              </details>
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
