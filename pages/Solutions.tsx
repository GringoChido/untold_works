import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import Breadcrumbs from '../components/Breadcrumbs';
import Testimonials from '../components/Testimonials';
import NetworkConnector from '../components/NetworkConnector';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Solutions | AI-Powered Business Systems — Untold.works',
      es: 'Soluciones | Sistemas de Negocio con IA — Untold.works',
    },
    {
      en: 'Three solution tiers for businesses at every stage — from solo professionals to enterprise teams. AI-native platforms with full ownership transfer.',
      es: 'Tres niveles de solución para negocios en cada etapa — desde profesionales independientes hasta equipos empresariales. Plataformas nativas de IA con transferencia total de propiedad.',
    },
    {
      path: '/solutions',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does an Untold.works project cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Professional Services ecosystems start at $5,000 USD. Small Business platforms range from $10,000–$30,000 USD. Enterprise systems are custom-quoted based on scope and complexity.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does it take to build a business platform?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Professional Services builds take 4–6 weeks. Small Business platforms take 6–10 weeks. Enterprise systems vary from 8–16 weeks depending on scope.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I own everything Untold.works builds?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Full ownership transfer is part of every project — code, data, documentation, and credentials. No lock-in, no recurring fees for access.',
            },
          },
        ],
      },
    }
  );

  const solutions = [
    {
      id: 'professional-services',
      eyebrow: { en: 'SOLO & SMALL TEAMS', es: 'INDIVIDUALES Y EQUIPOS PEQUEÑOS' },
      title: { en: 'Professional Services', es: 'Servicios Profesionales' },
      headline: {
        en: 'One system to run your entire practice.',
        es: 'Un sistema para manejar toda tu práctica.',
      },
      description: {
        en: 'For professionals who serve clients one-on-one — doctors, lawyers, consultants, architects, therapists, coaches. We replace your patchwork of tools with a single AI-powered platform: brand, website, CRM, booking, marketing, and analytics.',
        es: 'Para profesionales que atienden clientes uno a uno — médicos, abogados, consultores, arquitectos, terapeutas, coaches. Reemplazamos tu mezcla de herramientas con una sola plataforma impulsada por IA: marca, sitio web, CRM, reservas, marketing y analítica.',
      },
      highlights: [
        { en: 'Brand identity & mobile-first website', es: 'Identidad de marca y sitio web mobile-first' },
        { en: 'Client CRM & online booking', es: 'CRM de clientes y reservas en línea' },
        { en: 'Automated follow-ups & reminders', es: 'Seguimientos y recordatorios automáticos' },
        { en: 'Email marketing & review management', es: 'Email marketing y gestión de reseñas' },
      ],
      pricing: { en: 'From $5,000 USD', es: 'Desde $5,000 USD' },
      timeline: { en: '4–6 weeks', es: '4–6 semanas' },
      bestFor: { en: '1–5 person firms', es: 'Firmas de 1–5 personas' },
    },
    {
      id: 'small-business',
      eyebrow: { en: 'GROWING TEAMS', es: 'EQUIPOS EN CRECIMIENTO' },
      title: { en: 'Small Business', es: 'Pequeña Empresa' },
      headline: {
        en: 'The platform your team needs to stop duct-taping tools together.',
        es: 'La plataforma que tu equipo necesita para dejar de parchar herramientas.',
      },
      description: {
        en: 'For businesses with teams of 2–50 — restaurants, hotels, retail, service companies, event venues. We build an AI-powered operations platform that replaces twenty logins with one ecosystem: brand, website, team CRM, AI workflows, inventory or booking management, and analytics.',
        es: 'Para negocios con equipos de 2–50 — restaurantes, hoteles, retail, empresas de servicios, espacios para eventos. Construimos una plataforma de operaciones impulsada por IA que reemplaza veinte contraseñas con un ecosistema: marca, sitio web, CRM de equipo, flujos de IA, gestión de inventario o reservas, y analítica.',
      },
      highlights: [
        { en: 'Full brand system & responsive website', es: 'Sistema de marca completo y sitio web responsivo' },
        { en: 'Team CRM & AI workflow automation', es: 'CRM de equipo y automatización de flujos con IA' },
        { en: 'Inventory, booking, or scheduling systems', es: 'Sistemas de inventario, reservas o agenda' },
        { en: 'Multi-user analytics & revenue dashboard', es: 'Analítica multiusuario y panel de ingresos' },
      ],
      pricing: { en: 'From $10,000 USD', es: 'Desde $10,000 USD' },
      timeline: { en: '6–10 weeks', es: '6–10 semanas' },
      bestFor: { en: 'Teams of 2–50', es: 'Equipos de 2–50' },
    },
    {
      id: 'enterprise',
      eyebrow: { en: 'COMPLEX OPERATIONS', es: 'OPERACIONES COMPLEJAS' },
      title: { en: 'Enterprise', es: 'Empresarial' },
      headline: {
        en: 'AI infrastructure for organizations that have outgrown off-the-shelf solutions.',
        es: 'Infraestructura de IA para organizaciones que superaron las soluciones genéricas.',
      },
      description: {
        en: 'For organizations with 20+ employees, multiple departments, or multi-location operations. We architect AI-powered systems that connect sales, marketing, operations, and leadership — with full visibility, phased rollout, and 60 days of post-launch support.',
        es: 'Para organizaciones con 20+ empleados, múltiples departamentos u operaciones multi-ubicación. Arquitectamos sistemas impulsados por IA que conectan ventas, marketing, operaciones y liderazgo — con visibilidad total, implementación por fases y 60 días de soporte post-lanzamiento.',
      },
      highlights: [
        { en: 'Enterprise brand system & corporate website', es: 'Sistema de marca empresarial y sitio corporativo' },
        { en: 'Multi-team CRM & AI pipeline management', es: 'CRM multi-equipo y gestión de pipeline con IA' },
        { en: 'Cross-department workflow automation', es: 'Automatización de flujos entre departamentos' },
        { en: 'Revenue ops, forecasting & executive dashboards', es: 'RevOps, pronósticos y dashboards ejecutivos' },
      ],
      pricing: { en: 'Custom Pricing', es: 'Precio Personalizado' },
      timeline: { en: '8–16 weeks', es: '8–16 semanas' },
      bestFor: { en: 'Organizations with 20+ employees', es: 'Organizaciones con 20+ empleados' },
    },
  ];

  return (
    <div className="bg-untold-beige min-h-screen font-serif text-untold-black">
      {/* ── 1. Hero ── */}
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
            {t({
              en: 'Choose the Right System for Your Business',
              es: 'Elige el Sistema Correcto Para Tu Negocio',
            })}
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-white/60 max-w-3xl leading-relaxed">
            {t({
              en: 'We build the AI-powered operating system your business runs on — brand, website, marketing, automation, dashboards, and sales tools — all connected, all yours.',
              es: 'Construimos el sistema operativo impulsado por IA sobre el que funciona tu negocio — marca, sitio web, marketing, automatización, dashboards y herramientas de venta — todo conectado, todo tuyo.',
            })}
          </p>
        </div>
      </section>

      {/* ── 2. What Every Project Includes ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
              {t({ en: 'WHAT EVERY PROJECT INCLUDES', es: 'LO QUE INCLUYE CADA PROYECTO' })}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6 leading-[0.85]">
              {t({
                en: 'An AI-Powered Ecosystem. Not a Website.',
                es: 'Un Ecosistema Impulsado por IA. No un Sitio Web.',
              })}
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-untold-gray leading-relaxed">
              {t({
                en: 'Every solution includes brand identity, a mobile-first website, AI workflow automation, bilingual content, SEO optimization, and full ownership transfer. The difference between tiers is scale — how many people use it, how many systems connect, and how deep the automation goes.',
                es: 'Cada solución incluye identidad de marca, un sitio web mobile-first, automatización de flujos con IA, contenido bilingüe, optimización SEO y transferencia total de propiedad. La diferencia entre niveles es escala — cuántas personas lo usan, cuántos sistemas se conectan y qué tan profunda es la automatización.',
              })}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '01', label: { en: 'Brand & Website', es: 'Marca y Sitio Web' }, detail: { en: 'Identity, design, mobile-first build', es: 'Identidad, diseño, construcción mobile-first' } },
              { icon: '02', label: { en: 'AI Workflows', es: 'Flujos de IA' }, detail: { en: 'Automation that replaces manual work', es: 'Automatización que reemplaza trabajo manual' } },
              { icon: '03', label: { en: 'SEO & AEO', es: 'SEO y AEO' }, detail: { en: 'Found by search engines and AI systems', es: 'Encontrado por buscadores y sistemas de IA' } },
              { icon: '04', label: { en: 'Full Ownership', es: 'Propiedad Total' }, detail: { en: 'Your code, your data, your keys', es: 'Tu código, tus datos, tus llaves' } },
            ].map((item) => (
              <div key={item.icon} className="border border-untold-border p-5 sm:p-6">
                <span className="font-mono text-[10px] text-untold-orange font-bold block mb-3">{item.icon}</span>
                <h3 className="font-sans font-black text-base uppercase tracking-tighter mb-1">
                  {t(item.label)}
                </h3>
                <p className="font-serif italic text-untold-gray text-sm">{t(item.detail)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2b. Mobile-First Communication Context ── */}
      <section className="bg-untold-beige/40 px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
                {t(i18n.mobileFirstContext.eyebrow)}
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6 leading-[0.85]">
                {t(i18n.mobileFirstContext.headline)}
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-untold-gray leading-relaxed">
                {t(i18n.mobileFirstContext.body)}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {i18n.mobileFirstContext.signals.map((signal, idx) => (
                <div key={idx} className="border border-untold-border bg-white p-5 sm:p-6">
                  <span className="font-mono text-[10px] text-untold-orange font-bold block mb-3">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans font-black text-sm uppercase tracking-tighter leading-tight">
                    {t(signal)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Choose Your Path ── */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'CHOOSE YOUR PATH', es: 'ELIGE TU CAMINO' })}
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className="group block border border-untold-border bg-white hover:border-untold-orange/40 hover:shadow-lg transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-14 lg:border-r border-untold-border flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
                        {t(solution.eyebrow)}
                      </span>
                      <h3 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-4 group-hover:text-untold-orange transition-colors">
                        {t(solution.title)}
                      </h3>
                      <p className="text-lg sm:text-xl font-serif italic text-untold-gray leading-relaxed mb-8">
                        {t(solution.headline)}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-untold-border/50">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block">{t({ en: 'Starting at', es: 'Desde' })}</span>
                        <span className="font-sans font-black text-lg tracking-tight">{t(solution.pricing)}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block">{t({ en: 'Timeline', es: 'Plazo' })}</span>
                        <span className="font-sans font-black text-lg tracking-tight">{t(solution.timeline)}</span>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block">{t({ en: 'Best for', es: 'Ideal para' })}</span>
                        <span className="font-sans font-black text-lg tracking-tight">{t(solution.bestFor)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      <p className="text-base sm:text-lg font-serif text-untold-gray leading-relaxed mb-8">
                        {t(solution.description)}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {solution.highlights.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <span className="text-untold-orange mt-1 text-sm">+</span>
                            <span className="text-sm sm:text-base font-serif">{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 pt-6 border-t border-untold-border/50 flex justify-end">
                      <span className="inline-flex items-center space-x-2 font-sans font-black text-sm uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                        <span>{t({ en: 'See Full Details', es: 'Ver Detalles Completos' })}</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Side by Side ── */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'COMPARE', es: 'COMPARAR' })}
            </p>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'Side by Side', es: 'Lado a Lado' })}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-untold-black">
                  <th className="py-4 pr-6 font-mono text-[11px] uppercase tracking-[0.3em] text-untold-black/40 font-bold w-1/4"></th>
                  <th className="py-4 px-4 font-sans font-black text-lg uppercase tracking-tighter">{t({ en: 'Professional', es: 'Profesional' })}</th>
                  <th className="py-4 px-4 font-sans font-black text-lg uppercase tracking-tighter">{t({ en: 'Small Business', es: 'Pequeña Empresa' })}</th>
                  <th className="py-4 px-4 font-sans font-black text-lg uppercase tracking-tighter">{t({ en: 'Enterprise', es: 'Empresarial' })}</th>
                </tr>
              </thead>
              <tbody className="font-serif text-base">
                {[
                  { label: { en: 'Best for', es: 'Ideal para' }, values: [{ en: '1–5 person practices', es: 'Prácticas de 1–5 personas' }, { en: 'Teams of 2–50', es: 'Equipos de 2–50' }, { en: '20+ employee organizations', es: 'Organizaciones de 20+ empleados' }] },
                  { label: { en: 'Brand identity', es: 'Identidad de marca' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ Enterprise system', es: '✓ Sistema empresarial' }] },
                  { label: { en: 'Mobile-first website', es: 'Sitio web mobile-first' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ Multi-site capable', es: '✓ Multi-sitio' }] },
                  { label: { en: 'AI workflows', es: 'Flujos de IA' }, values: [{ en: 'Intake & follow-up', es: 'Admisión y seguimiento' }, { en: 'Operations & marketing', es: 'Operaciones y marketing' }, { en: 'Cross-department', es: 'Entre departamentos' }] },
                  { label: { en: 'CRM', es: 'CRM' }, values: [{ en: 'Client management', es: 'Gestión de clientes' }, { en: 'Team CRM', es: 'CRM de equipo' }, { en: 'Multi-team + pipeline', es: 'Multi-equipo + pipeline' }] },
                  { label: { en: 'Analytics', es: 'Analítica' }, values: [{ en: 'Revenue dashboard', es: 'Panel de ingresos' }, { en: 'Multi-user reporting', es: 'Reportes multiusuario' }, { en: 'RevOps + forecasting', es: 'RevOps + pronósticos' }] },
                  { label: { en: 'Bilingual (EN/ES)', es: 'Bilingüe (EN/ES)' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ + additional languages', es: '✓ + idiomas adicionales' }] },
                  { label: { en: 'SEO & AEO', es: 'SEO y AEO' }, values: [{ en: '✓', es: '✓' }, { en: '✓', es: '✓' }, { en: '✓ Advanced', es: '✓ Avanzado' }] },
                  { label: { en: 'Post-launch support', es: 'Soporte post-lanzamiento' }, values: [{ en: '30 days', es: '30 días' }, { en: '30 days', es: '30 días' }, { en: '60 days', es: '60 días' }] },
                  { label: { en: 'Ownership transfer', es: 'Transferencia de propiedad' }, values: [{ en: '✓ Full', es: '✓ Total' }, { en: '✓ Full', es: '✓ Total' }, { en: '✓ Full', es: '✓ Total' }] },
                  { label: { en: 'Timeline', es: 'Plazo' }, values: [{ en: '4–6 weeks', es: '4–6 semanas' }, { en: '6–10 weeks', es: '6–10 semanas' }, { en: '8–16 weeks', es: '8–16 semanas' }] },
                  { label: { en: 'Starting price', es: 'Precio inicial' }, values: [{ en: '$5,000 USD', es: '$5,000 USD' }, { en: '$10,000 USD', es: '$10,000 USD' }, { en: 'Custom', es: 'Personalizado' }] },
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

      {/* ── 5. Testimonials ── */}
      <Testimonials />

      {/* ── 6. FAQ ── */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
            </p>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'Before You Decide', es: 'Antes de Decidir' })}
          </h3>

          <div className="space-y-0 border-t border-untold-border">
            {[
              {
                q: { en: 'How do I know which tier is right for me?', es: '¿Cómo sé cuál nivel es el correcto para mí?' },
                a: { en: 'It comes down to team size and complexity. If you work solo or with a small team and serve clients directly, Professional Services is built for you. If you have a growing team (2–50 people) with operations to manage, Small Business fits. If you have 20+ employees, multiple departments, or need cross-team systems, Enterprise is the right choice. Not sure? Tell us what you do and we\'ll recommend the right path.', es: 'Se reduce al tamaño del equipo y la complejidad. Si trabajas solo o con un equipo pequeño y atiendes clientes directamente, Servicios Profesionales es para ti. Si tienes un equipo en crecimiento (2–50 personas) con operaciones que manejar, Pequeña Empresa se adapta. Si tienes 20+ empleados, múltiples departamentos o necesitas sistemas entre equipos, Empresarial es la elección correcta. ¿No estás seguro? Cuéntanos qué haces y te recomendaremos el camino correcto.' },
              },
              {
                q: { en: 'How much does a project cost?', es: '¿Cuánto cuesta un proyecto?' },
                a: { en: 'Professional Services starts at $5,000 USD. Small Business platforms range from $10,000–$30,000 USD. Enterprise systems are custom-quoted based on scope. Every project gets a detailed proposal after our first conversation — no surprises.', es: 'Servicios Profesionales comienza en $5,000 USD. Plataformas de Pequeña Empresa van de $10,000–$30,000 USD. Los sistemas Empresariales se cotizan según el alcance. Cada proyecto recibe una propuesta detallada después de nuestra primera conversación — sin sorpresas.' },
              },
              {
                q: { en: 'Do I own everything you build?', es: '¿Soy dueño de todo lo que construyen?' },
                a: { en: 'Yes. Full ownership transfer is part of every project at every tier. You get the code, the data, the documentation, all credentials, and video training. No lock-in. No recurring fees for access to your own systems.', es: 'Sí. La transferencia total de propiedad es parte de cada proyecto en cada nivel. Recibes el código, los datos, la documentación, todas las credenciales y capacitación en video. Sin ataduras. Sin cuotas recurrentes por acceso a tus propios sistemas.' },
              },
              {
                q: { en: 'Do I need to be technical?', es: '¿Necesito ser técnico?' },
                a: { en: 'Not at all. We build systems designed for non-technical business owners. We train you and your team with video walkthroughs, written guides, and live sessions. You\'ll know how to use everything before we hand it over.', es: 'Para nada. Construimos sistemas diseñados para dueños de negocio no técnicos. Te capacitamos a ti y a tu equipo con videos, guías escritas y sesiones en vivo. Sabrás usar todo antes de que lo entreguemos.' },
              },
              {
                q: { en: 'What if I already have a website?', es: '¿Qué pasa si ya tengo un sitio web?' },
                a: { en: 'We can rebuild it as part of a complete ecosystem, or integrate new AI systems into your existing setup. We\'ll assess what you have and recommend the best path forward.', es: 'Podemos reconstruirlo como parte de un ecosistema completo, o integrar nuevos sistemas de IA en tu configuración existente. Evaluaremos lo que tienes y recomendaremos el mejor camino.' },
              },
              {
                q: { en: 'Can you work with businesses outside Mexico?', es: '¿Pueden trabajar con negocios fuera de México?' },
                a: { en: 'Absolutely. We\'re based in San Miguel de Allende and serve clients across Mexico and the United States. Our bilingual team works remotely with businesses anywhere in both countries.', es: 'Por supuesto. Estamos en San Miguel de Allende y atendemos clientes en México y Estados Unidos. Nuestro equipo bilingüe trabaja de forma remota con negocios en cualquier lugar de ambos países.' },
              },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-untold-border group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h4>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-lg font-serif text-untold-gray leading-relaxed pr-0 sm:pr-12">
                  {t(faq.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Network Systems Connector ── */}
      <NetworkConnector
        capability={{ en: 'Business Networks & Multi-Location', es: 'Redes de Negocios y Multi-Ubicación' }}
        networkDescription={{
          en: 'These solutions are designed for individual businesses. If you operate a manufacturer-dealer network, franchise system, restaurant group, or any multi-location brand, our Network Systems offering deploys all of these capabilities across your entire network as one unified system.',
          es: 'Estas soluciones están diseñadas para negocios individuales. Si operas una red de fabricante-distribuidores, franquicias, grupo restaurantero o cualquier marca multi-ubicación, nuestra oferta de Network Systems despliega todas estas capacidades en toda tu red como un sistema unificado.',
        }}
        relatedCapabilities={[
          { name: { en: 'Network Systems', es: 'Network Systems' }, path: '/network-systems' },
          { name: { en: 'Website Design', es: 'Diseño Web' }, path: '/websites' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
        ]}
      />

      {/* ── 8. CTA ── */}
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
