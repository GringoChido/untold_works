import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/projects';
import * as i18n from '../i18n';
import { WavyBackground } from '../components/ui/wavy-background';


const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Untold.works Builds AI-Powered Business Ecosystems',
  description: 'Four-stage process from operations audit to full ownership transfer. We analyze, plan, build, and train — then hand over the keys.',
  totalTime: 'P8W',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Analyze', text: 'We map your current operations, tech stack, and workflow bottlenecks. We identify where AI can cut time, where automation replaces manual work, and what your platform needs to look like.' },
    { '@type': 'HowToStep', position: 2, name: 'Plan', text: 'We design your complete platform — brand, website, AI workflows, integrations, and SEO structure. Mobile-first, multilingual, and optimized for search engines and LLMs.' },
    { '@type': 'HowToStep', position: 3, name: 'Build', text: 'We build everything in Claude — brand identity, mobile-ready website, AI workflows, bilingual content, CRM, automations, and integrations. All tested, all documented.' },
    { '@type': 'HowToStep', position: 4, name: 'Train & Deliver', text: 'We train you on every system we built. Video walkthroughs, written documentation, and live sessions. Then we hand over the keys — your platform, your data, your workflows. Full ownership.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Untold.works build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build AI-powered business ecosystems: brand identity, mobile-first websites, AI workflow automation, CRM integrations, custom dashboards, and bilingual content systems for businesses in Mexico and the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build bilingual websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every client-facing site we build supports English and Spanish with natively written content — not machine translation. Proper hreflang tags, separate URL structures, and SEO optimization for both languages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve professional services (law firms, therapists, consultants), small businesses (restaurants, hotels, retail), musicians and record labels, and enterprise organizations across Mexico and the US.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Untold.works located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in San Miguel de Allende, Guanajuato, Mexico, serving clients across Mexico and the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the website and systems you build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Full ownership transfer is part of every project. You get the code, the data, the documentation, and video training. No lock-in, no recurring fees for access to your own systems.',
      },
    },
  ],
};

const Home: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.home.title,
    i18n.seo.home.description,
    { path: '/', schema: [faqSchema, howToSchema] }
  );

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO — Wavy Background
      ═══════════════════════════════════════════════════════════ */}
      <WavyBackground
        containerClassName="min-h-screen w-full border-b border-white/10"
        className="w-full px-5 sm:px-10 py-20 sm:py-32 lg:py-40"
        backgroundFill="#0A0A0A"
        colors={['#FF4D17', '#FF6B3D', '#1A1A1A', '#FF4D17', '#333333']}
        waveWidth={60}
        blur={12}
        speed="slow"
        waveOpacity={0.4}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[900px]">
            <div className="flex items-center space-x-4 mb-8 sm:mb-14">
              <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
              <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/50">
                {t(i18n.hero.eyebrow)}
              </p>
            </div>

            <h1 className="font-sans font-black text-[clamp(2.8rem,9vw,120px)] leading-[0.82] mb-12 tracking-tighter uppercase text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              {t(i18n.hero.headline)}
            </h1>

            <div className="mb-16 max-w-5xl border-l-4 border-untold-orange pl-6 sm:pl-10 space-y-4">
              <p className="text-xl sm:text-2xl lg:text-[32px] font-serif italic text-white leading-[1.15] tracking-tight drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
                {t(i18n.hero.tagline)}
              </p>
              <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.3em] text-white/50 font-bold">
                {t(i18n.hero.subheadline)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link
                to="/portfolio"
                className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-black/30 backdrop-blur-sm px-8 sm:px-16 py-6 sm:py-10 hover:border-untold-orange hover:bg-untold-orange/10 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.15)]"
              >
                <span className="font-sans font-black text-lg sm:text-2xl uppercase tracking-tighter text-white">
                  {t(i18n.hero.primaryCta)}
                </span>
                <span className="text-3xl sm:text-5xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
              </Link>
              <a
                href="#what-we-build"
                className="font-mono text-[12px] uppercase tracking-[0.3em] text-white/50 hover:text-untold-orange transition-colors py-6 sm:py-10"
              >
                {t(i18n.hero.secondaryCta)} ↓
              </a>
            </div>
          </div>
        </div>
      </WavyBackground>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: LOCATION BADGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border px-5 sm:px-10 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-4">
          <span className="w-2 h-2 rounded-full bg-untold-orange shrink-0"></span>
          <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.4em] text-untold-gray font-bold text-center">
            {t(i18n.locationBadge.text)}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: DEFINE YOUR OPERATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85]">
              {t({ en: 'Which AI Ecosystem\nFits Your Business?', es: '¿Cuál Ecosistema de IA\nSe Adapta a Tu Negocio?' })}
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mx-auto">
              {t({ en: 'We build the AI-powered platform that fits your current scale. Select the ecosystem that matches your business today.', es: 'Construimos la plataforma impulsada por IA que se adapta a tu escala actual. Selecciona el ecosistema que corresponde a tu negocio hoy.' })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                id: 'professional-services',
                number: '01',
                title: { en: 'Professional Services', es: 'Servicios Profesionales' },
                subtitle: { en: 'Your entire business on one AI-powered platform.', es: 'Todo tu negocio en una plataforma impulsada por IA.' },
                who: { en: 'Consultants, coaches, photographers, attorneys, architects, therapists — anyone selling expertise.', es: 'Consultores, coaches, fotógrafos, abogados, arquitectos, terapeutas — cualquiera que venda su experiencia.' },
                features: [
                  { en: 'Brand identity & AI-powered website', es: 'Identidad de marca y sitio web con IA' },
                  { en: 'Automated client acquisition funnel', es: 'Embudo automatizado de adquisición de clientes' },
                  { en: 'CRM with AI follow-up sequences', es: 'CRM con secuencias de seguimiento con IA' },
                  { en: 'Booking, scheduling & intake forms', es: 'Reservas, agenda y formularios de admisión' },
                  { en: 'Revenue dashboard & analytics', es: 'Panel de ingresos y analítica' }
                ],
                footer: { en: 'You focus on your clients. The system handles everything else.', es: 'Tú te enfocas en tus clientes. El sistema se encarga de todo lo demás.' }
              },
              {
                id: 'small-business',
                number: '02',
                title: { en: 'Small Business Platforms', es: 'Plataformas para Pequeñas Empresas' },
                subtitle: { en: 'Connected systems that scale with your team.', es: 'Sistemas conectados que escalan con tu equipo.' },
                who: { en: 'Restaurants, retail shops, agencies, clinics, property managers — teams of 2–50 that need systems, not spreadsheets.', es: 'Restaurantes, tiendas, agencias, clínicas, administradores de propiedades — equipos de 2–50 que necesitan sistemas, no hojas de cálculo.' },
                features: [
                  { en: 'Full brand ecosystem & website', es: 'Ecosistema de marca completo y sitio web' },
                  { en: 'Team CRM & AI workflow automation', es: 'CRM de equipo y automatización con IA' },
                  { en: 'Marketing engine (email, social, content)', es: 'Motor de marketing (email, redes, contenido)' },
                  { en: 'Operations management & inventory', es: 'Gestión de operaciones e inventario' },
                  { en: 'Multi-user analytics & team reporting', es: 'Analítica multiusuario y reportes de equipo' }
                ],
                footer: { en: 'One platform your whole team actually uses. No more twenty logins.', es: 'Una plataforma que todo tu equipo realmente usa. No más veinte contraseñas.' }
              },
              {
                id: 'enterprise',
                number: '03',
                title: { en: 'Enterprise & Operations', es: 'Empresarial y Operaciones' },
                subtitle: { en: 'AI infrastructure for complex business operations.', es: 'Infraestructura de IA para operaciones empresariales complejas.' },
                who: { en: 'Logistics companies, manufacturing, multi-location brands, franchises — operations that need intelligent systems at scale.', es: 'Empresas de logística, manufactura, marcas multi-ubicación, franquicias — operaciones que necesitan sistemas inteligentes a escala.' },
                features: [
                  { en: 'Enterprise brand system & digital platform', es: 'Sistema de marca empresarial y plataforma digital' },
                  { en: 'Multi-team CRM & revenue pipeline', es: 'CRM multi-equipo y pipeline de ingresos' },
                  { en: 'AI operations & process automation', es: 'Operaciones con IA y automatización de procesos' },
                  { en: 'Custom integrations & data architecture', es: 'Integraciones personalizadas y arquitectura de datos' },
                  { en: 'Revenue operations, forecasting & reporting', es: 'Operaciones de ingresos, pronósticos y reportes' }
                ],
                footer: { en: 'Built for complexity. Designed for clarity. Owned by you.', es: 'Construido para la complejidad. Diseñado para la claridad. Propiedad tuya.' }
              }
            ].map((pillar) => (
              <Link
                key={pillar.id}
                to={`/solutions/${pillar.id}`}
                className="group border border-untold-border bg-white p-8 sm:p-10 lg:p-12 flex flex-col hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-6">{pillar.number}</span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors">
                  {t(pillar.title)}
                </h3>
                <p className="text-lg font-serif italic text-untold-gray mb-4">
                  {t(pillar.subtitle)}
                </p>

                <p className="text-sm font-mono text-untold-orange/70 mb-8 pb-4 border-b border-untold-border">
                  {t(pillar.who)}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base">{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-serif italic text-untold-gray/60 mb-6 border-t border-untold-border pt-6">
                  {t(pillar.footer)}
                </p>

                <span className="inline-flex items-center space-x-3 font-sans font-black text-base uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                  <span>{t({ en: 'Explore This Ecosystem', es: 'Explorar Este Ecosistema' })}</span>
                  <span className="text-xl">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3b: WEBSITE DESIGN & REBUILD CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <Link to="/websites" className="group grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-untold-orange animate-pulse"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                  {t({ en: 'THE FOUNDATION', es: 'LA BASE' })}
                </span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-3 text-white group-hover:text-untold-orange transition-colors">
                {t({ en: 'Your Website Should Be the Hardest-Working Part of Your Business.', es: 'Tu Sitio Web Debería Ser la Parte Más Trabajadora de Tu Negocio.' })}
              </h2>
              <p className="text-lg font-serif italic text-white/60 max-w-2xl">
                {t({
                  en: 'Brand-first. AI-native. Mobile-ready. Bilingual. Built with AI, guided by 25 years of creative direction.',
                  es: 'Marca primero. AI-nativo. Mobile-ready. Bilingüe. Construido con IA, guiado por 25 años de dirección creativa.'
                })}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <span className="inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                <span>{t({ en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' })}</span>
                <span className="text-2xl">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3c: SEO & AEO CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-10 py-12 sm:py-16 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <Link to="/seo-aeo" className="group grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                  {t({ en: 'FIRST AEO AGENCY IN MEXICO', es: 'PRIMERA AGENCIA DE AEO EN MÉXICO' })}
                </span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors">
                {t({ en: 'SEO Got You Ranked. AEO Gets You Recommended.', es: 'SEO Te Posiciona. AEO Te Recomienda.' })}
              </h2>
              <p className="text-lg font-serif italic text-untold-gray max-w-2xl">
                {t({
                  en: 'Already have a website? Make it findable — on Google AND in AI answers. We optimize for both.',
                  es: '¿Ya tienes sitio web? Haz que te encuentren — en Google Y en respuestas de IA. Optimizamos para ambos.'
                })}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <span className="inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                <span>{t({ en: 'Explore SEO & AEO', es: 'Explorar SEO y AEO' })}</span>
                <span className="text-2xl">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3d: SOCIAL MEDIA & ADS CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-10 py-12 sm:py-16 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                  {t({ en: 'NEW SERVICES', es: 'NUEVOS SERVICIOS' })}
                </span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-3">
                {t({ en: 'Social Media Strategy & Paid Advertising', es: 'Estrategia de Redes Sociales y Publicidad Pagada' })}
              </h2>
              <p className="text-lg font-serif italic text-untold-gray max-w-2xl">
                {t({
                  en: 'From organic content to paid campaigns — we manage your presence across every platform. Bilingual, data-driven, results-focused.',
                  es: 'De contenido orgánico a campañas pagadas — gestionamos tu presencia en cada plataforma. Bilingüe, basado en datos, enfocado en resultados.'
                })}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="flex flex-col space-y-3">
                <Link to="/social-media" className="group inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange hover:translate-x-2 transition-transform">
                  <span>{t({ en: 'Social Media', es: 'Redes Sociales' })}</span>
                  <span className="text-2xl">→</span>
                </Link>
                <Link to="/ads" className="group inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange hover:translate-x-2 transition-transform">
                  <span>{t({ en: 'Paid Ads', es: 'Publicidad Pagada' })}</span>
                  <span className="text-2xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3e: DASHBOARD CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <Link to="/dashboard" className="group grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-untold-orange animate-pulse"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                  {t({ en: 'YOUR COMMAND CENTER', es: 'TU CENTRO DE MANDO' })}
                </span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-3 text-white group-hover:text-untold-orange transition-colors">
                {t({ en: 'Your Entire Business. One Dashboard. You Own It.', es: 'Todo Tu Negocio. Un Dashboard. Propiedad Tuya.' })}
              </h2>
              <p className="text-lg font-serif italic text-white/60 max-w-2xl">
                {t({
                  en: 'Website, social, ads, CRM, leads — stop logging into 12 tools. We build a custom dashboard you own outright. No SaaS fees.',
                  es: 'Web, redes sociales, publicidad, CRM, leads — deja de entrar a 12 herramientas. Construimos un dashboard personalizado que es tuyo. Sin cuotas SaaS.'
                })}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <span className="inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                <span>{t({ en: 'Explore Dashboard', es: 'Explorar Dashboard' })}</span>
                <span className="text-2xl">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: SELECTED WORK
      ═══════════════════════════════════════════════════════════ */}
      <section id="what-we-build" className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-black text-white border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-16 gap-4 flex-wrap">
            <div className="flex items-center space-x-4">
              <span className="w-2.5 h-2.5 rounded-full bg-untold-orange shrink-0"></span>
              <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
                {t({ en: 'SELECTED WORK', es: 'TRABAJO SELECCIONADO' })}
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden sm:inline-flex items-center space-x-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-untold-orange transition-colors font-bold"
            >
              <span>{t({ en: 'View All', es: 'Ver Todo' })}</span>
              <span className="text-untold-orange">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {['spotify-whatsapp-publishing', 'billiard-factory-retail-architecture', 'derrick-hodge', 'casa-schuck']
              .map(id => projects.find(p => p.id === id)!)
              .map((project, idx) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative bg-untold-black overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.heroImage || project.images[0]}
                    alt={t(project.name)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3 block">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter leading-[0.9] mb-3 group-hover:text-untold-orange transition-colors">
                    {t(project.name)}
                  </h3>
                  {project.metrics && (
                    <div className="flex gap-6">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-sans font-black text-untold-orange">{metric.value}</span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{t(metric.label)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange"
            >
              <span>{t({ en: 'View All Projects', es: 'Ver Todos los Proyectos' })}</span>
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: WHY UNTOLD
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 bg-untold-black text-white border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-20">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t(i18n.whyUntold.eyebrow)}
            </p>
          </div>

          <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-12 leading-[0.85]">
            {t(i18n.whyUntold.headline)}
          </h2>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl font-serif text-white/70 leading-relaxed mb-12">
                {t(i18n.whyUntold.opening)}
              </p>
              <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-6 text-untold-orange">
                {t(i18n.whyUntold.dontMissHeadline)}
              </h3>
              <p className="text-lg sm:text-xl font-serif text-white/60 leading-relaxed">
                {t(i18n.whyUntold.dontMissContent)}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {i18n.whyUntold.differentiators.map((diff, idx) => (
                  <div key={idx} className="border-l-2 border-untold-orange/30 pl-6 hover:border-untold-orange transition-colors">
                    <h4 className="font-sans font-black text-lg uppercase tracking-tighter mb-2">
                      {t(diff.title)}
                    </h4>
                    <p className="font-serif italic text-white/50 text-base leading-relaxed">
                      {t(diff.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16">
            <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tighter mb-6">
              {t(i18n.whyUntold.closingHeadline)}
            </h3>
            <p className="text-lg sm:text-xl font-serif italic text-white/50 max-w-3xl leading-relaxed">
              {t(i18n.whyUntold.closingContent)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5b: HOW WE WORK
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-beige border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'OUR PROCESS', es: 'NUESTRO PROCESO' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t(i18n.howWeWork.headline)}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-16">
            {t(i18n.howWeWork.subheadline)}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {i18n.howWeWork.stages.map((stage) => (
              <div key={stage.number} className="border border-untold-border bg-white p-8 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">{stage.number}</span>
                <h3 className="font-sans font-black text-2xl uppercase tracking-tighter mb-2">
                  {t(stage.title)}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-untold-orange/70 mb-4">
                  {t(stage.subtitle)}
                </p>
                <p className="font-serif text-base text-untold-gray leading-relaxed mb-6 flex-grow">
                  {t(stage.description)}
                </p>
                <ul className="space-y-2 border-t border-untold-border pt-4">
                  {stage.deliverables.map((d, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-untold-orange text-sm mt-0.5">+</span>
                      <span className="font-mono text-[11px] text-untold-black/60">{t(d)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'FREQUENTLY ASKED QUESTIONS', es: 'PREGUNTAS FRECUENTES' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'What Do People\nAsk Us?', es: '¿Qué Nos\nPreguntan?' })}
          </h2>

          <div className="space-y-0 border-t border-untold-border">
            {[
              {
                q: { en: 'What does Untold.works build?', es: '¿Qué construye Untold.works?' },
                a: { en: 'We build AI-powered business ecosystems: customer-facing websites, internal dashboards, n8n workflow automation, CRM integrations, and bilingual content systems for businesses in Mexico and the United States.', es: 'Construimos ecosistemas empresariales impulsados por IA: sitios web para clientes, dashboards internos, automatización de flujos con n8n, integraciones CRM y sistemas de contenido bilingüe para negocios en México y Estados Unidos.' },
              },
              {
                q: { en: 'Do you build bilingual websites?', es: '¿Construyen sitios web bilingües?' },
                a: { en: 'Yes. Every client-facing site we build supports English and Spanish with natively written content — not machine translation. Proper hreflang tags, separate URL structures, and SEO optimization for both languages.', es: 'Sí. Cada sitio que construimos soporta inglés y español con contenido escrito nativamente — no traducción automática. Etiquetas hreflang, estructuras de URL separadas y optimización SEO para ambos idiomas.' },
              },
              {
                q: { en: 'What industries do you serve?', es: '¿Qué industrias atienden?' },
                a: { en: 'We serve professional services (law firms, therapists, consultants), small businesses (restaurants, hotels, retail), musicians and record labels, and enterprise organizations across Mexico and the US.', es: 'Atendemos servicios profesionales (despachos, terapeutas, consultores), pequeños negocios (restaurantes, hoteles, retail), músicos y sellos discográficos, y organizaciones empresariales en México y EE.UU.' },
              },
              {
                q: { en: 'Where is Untold.works located?', es: '¿Dónde se ubica Untold.works?' },
                a: { en: 'We are based in San Miguel de Allende, Guanajuato, Mexico, serving clients across Mexico and the United States.', es: 'Estamos ubicados en San Miguel de Allende, Guanajuato, México, atendiendo clientes en México y Estados Unidos.' },
              },
              {
                q: { en: 'Do I own the website and systems you build?', es: '¿Soy dueño del sitio web y los sistemas que construyen?' },
                a: { en: 'Yes. Full ownership transfer is part of every project. You get the code, the data, the documentation, and video training. No lock-in, no recurring fees for access to your own systems.', es: 'Sí. La transferencia completa de propiedad es parte de cada proyecto. Recibes el código, los datos, la documentación y capacitación en video. Sin ataduras, sin cuotas recurrentes.' },
              },
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 lg:py-72 text-center bg-untold-beige/40">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(3rem,14vw,180px)] leading-[0.8] mb-10 sm:mb-16 tracking-tighter uppercase text-center">
            {t(i18n.finalCta.headline)}
          </h2>
          <Link
            to="/contact"
            className="group relative bg-untold-black text-white px-10 sm:px-24 py-6 sm:py-10 rounded-none text-lg sm:text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <span className="relative z-10">{t(i18n.finalCta.cta)}</span>
            <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
