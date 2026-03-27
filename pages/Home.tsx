import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/projects';
import * as i18n from '../i18n';
import { WavyBackground } from '../components/ui/wavy-background';
import ProofStrip from '../components/ProofStrip';


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

  const paths = [
    {
      id: 'professional-services',
      number: '01',
      title: { en: 'Professional Services', es: 'Servicios Profesionales' },
      who: { en: 'Consultants, attorneys, architects, therapists, photographers', es: 'Consultores, abogados, arquitectos, terapeutas, fotógrafos' },
      line: { en: 'Your expertise deserves a system that works as hard as you do.', es: 'Tu experiencia merece un sistema que trabaje tan duro como tú.' },
    },
    {
      id: 'small-business',
      number: '02',
      title: { en: 'Small Business', es: 'Pequeña Empresa' },
      who: { en: 'Restaurants, retail, hotels, clinics, agencies', es: 'Restaurantes, retail, hoteles, clínicas, agencias' },
      line: { en: 'One platform your whole team actually uses. No more twenty logins.', es: 'Una plataforma que todo tu equipo usa. No más veinte contraseñas.' },
    },
    {
      id: 'enterprise',
      number: '03',
      title: { en: 'Enterprise', es: 'Empresarial' },
      who: { en: 'Manufacturing, franchises, multi-location brands, logistics', es: 'Manufactura, franquicias, marcas multi-ubicación, logística' },
      line: { en: 'Built for complexity. Designed for clarity. Owned by you.', es: 'Construido para la complejidad. Diseñado para la claridad. Propiedad tuya.' },
    },
  ];

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* Dark wrapper — hero + proof strip */}
      <div className="bg-untold-black">

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <WavyBackground
        containerClassName="w-full !bg-untold-black"
        className="w-full px-5 sm:px-10 pt-24 sm:pt-40 lg:pt-52 pb-12 sm:pb-16"
        backgroundFill="#0A0A0A"
        colors={['#FF4D17', '#FF6B3D', '#1A1A1A', '#FF4D17', '#333333']}
        waveWidth={60}
        blur={12}
        speed="slow"
        waveOpacity={0.4}
      >
        <div className="max-w-[1440px] mx-auto w-full">
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
                to="/network-systems"
                className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-black/30 backdrop-blur-sm px-8 sm:px-16 py-6 sm:py-10 hover:border-untold-orange hover:bg-untold-orange/10 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.15)]"
              >
                <span className="font-sans font-black text-lg sm:text-2xl uppercase tracking-tighter text-white">
                  {t({ en: 'See How It Works', es: 'Cómo Funciona' })}
                </span>
                <span className="text-3xl sm:text-5xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
              </Link>
              <Link
                to="/contact"
                className="font-mono text-[12px] uppercase tracking-[0.3em] text-white/50 hover:text-untold-orange transition-colors py-6 sm:py-10"
              >
                {t(i18n.hero.secondaryCta)} →
              </Link>
            </div>
          </div>
        </div>
      </WavyBackground>

      {/* ═══════════════════════════════════════════════════════════
          PROOF STRIP — Client Results
      ═══════════════════════════════════════════════════════════ */}
      <ProofStrip />

      </div>{/* end dark wrapper */}

      {/* ═══════════════════════════════════════════════════════════
          FOUNDER CREDENTIAL STRIP
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-beige/60 border-b border-untold-border px-5 sm:px-10 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-4 shrink-0">
            <img src="/images/about-photo.webp" alt="Joshua Semolik" className="w-14 h-14 rounded-full object-cover border-2 border-untold-orange" loading="lazy" />
            <div>
              <p className="font-sans font-black text-sm uppercase tracking-tighter">{t({ en: 'Joshua Semolik', es: 'Joshua Semolik' })}</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-gray">{t({ en: 'Founder & AI Systems Architect', es: 'Fundador y Arquitecto de Sistemas de IA' })}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-untold-black/50 border border-untold-border px-3 py-1.5">{t({ en: '2x Emmy Nominated', es: '2x Nominado al Emmy' })}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-untold-black/50 border border-untold-border px-3 py-1.5">{t({ en: 'MIT Sloan AI Strategy', es: 'MIT Sloan Estrategia de IA' })}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-untold-black/50 border border-untold-border px-3 py-1.5">{t({ en: '20 Years in Production', es: '20 Años en Producción' })}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-untold-black/50 border border-untold-border px-3 py-1.5">{t({ en: 'NBA / Kings • Videndum PLC', es: 'NBA / Kings • Videndum PLC' })}</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE SYSTEM — One cohesive story block
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10">

          {/* ── Chapter 1: The Promise ── */}
          <div className="pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                {t({ en: 'NETWORK SYSTEMS', es: 'NETWORK SYSTEMS' })}
              </span>
            </div>

            <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-8 leading-[0.85] max-w-5xl">
              {t({ en: 'Everything Your Business Needs. One Build.', es: 'Todo Lo Que Tu Negocio Necesita. Una Construcción.' })}
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-untold-gray leading-relaxed max-w-4xl mb-12">
              {t({
                en: 'According to Gartner, traditional search traffic will drop 25% by 2026 as consumers shift to AI assistants. Meanwhile, most businesses run on 10+ disconnected tools that AI can\'t read or recommend. We replace all of it with one connected AI-powered system — optimized for search engines AND AI engines. Built for you. Owned by you.',
                es: 'Según Gartner, el tráfico de búsqueda tradicional caerá 25% para 2026 a medida que los consumidores cambien a asistentes de IA. Mientras tanto, la mayoría de los negocios operan con 10+ herramientas desconectadas que la IA no puede leer ni recomendar. Reemplazamos todo con un sistema conectado impulsado por IA — optimizado para buscadores Y motores de IA. Construido para ti. Propiedad tuya.',
              })}
            </p>

            {/* Save / Time / Make — the value trifecta */}
            <div className="grid sm:grid-cols-3 gap-px bg-untold-border border border-untold-border">
              <div className="bg-white p-6 sm:p-8">
                <span className="font-sans font-black text-3xl sm:text-4xl text-emerald-500 tracking-tighter block mb-2">$9K+</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-bold block mb-3">{t({ en: 'Saved Per Year', es: 'Ahorrados Al Año' })}</span>
                <p className="font-serif text-sm text-untold-gray leading-relaxed">
                  {t({ en: 'Replace SaaS subscriptions with systems you own outright. No monthly fees for your own tools.', es: 'Reemplaza suscripciones SaaS con sistemas tuyos. Sin cuotas mensuales por tus herramientas.' })}
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8">
                <span className="font-sans font-black text-3xl sm:text-4xl text-untold-orange tracking-tighter block mb-2">10+</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-untold-orange font-bold block mb-3">{t({ en: 'Hours Saved Weekly', es: 'Horas Ahorradas/Semana' })}</span>
                <p className="font-serif text-sm text-untold-gray leading-relaxed">
                  {t({ en: 'AI workflows handle content, follow-ups, scheduling, and reporting. You focus on your business.', es: 'Flujos de IA manejan contenido, seguimientos, agendas y reportes. Tú te enfocas en tu negocio.' })}
                </p>
              </div>
              <div className="bg-white p-6 sm:p-8">
                <span className="font-sans font-black text-3xl sm:text-4xl text-untold-black tracking-tighter block mb-2">24/7</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-untold-black/60 font-bold block mb-3">{t({ en: 'Revenue Engine', es: 'Motor de Ingresos' })}</span>
                <p className="font-serif text-sm text-untold-gray leading-relaxed">
                  {t({ en: 'AI-powered marketing, automated lead routing, and systems that generate revenue while you sleep.', es: 'Marketing con IA, enrutamiento de leads y sistemas que generan ingresos mientras duermes.' })}
                </p>
              </div>
            </div>
          </div>

          {/* ── Chapter 2: How We Build It ── */}
          <div className="border-t border-untold-border pt-16 sm:pt-24 pb-16 sm:pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-black/30 font-bold mb-12">
              {t({ en: 'HOW WE BUILD YOUR SYSTEM', es: 'CÓMO CONSTRUIMOS TU SISTEMA' })}
            </p>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-3 block">01</span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-3">
                  {t({ en: 'We Analyze', es: 'Analizamos' })}
                </h3>
                <p className="font-serif text-untold-gray text-base leading-relaxed">
                  {t({ en: 'We map your current tools, workflows, and bottlenecks. We find where AI saves you time, where automation replaces manual work, and what your system needs to look like.', es: 'Mapeamos tus herramientas, flujos y cuellos de botella actuales. Encontramos dónde la IA te ahorra tiempo, dónde la automatización reemplaza trabajo manual, y cómo debe verse tu sistema.' })}
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-3 block">02</span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-3">
                  {t({ en: 'We Build', es: 'Construimos' })}
                </h3>
                <p className="font-serif text-untold-gray text-base leading-relaxed">
                  {t({ en: 'Brand identity, mobile-first website, AI workflows, CRM, automations, dashboards, and integrations — all connected, all documented, all yours.', es: 'Identidad de marca, sitio web mobile-first, flujos de IA, CRM, automatizaciones, dashboards e integraciones — todo conectado, documentado y tuyo.' })}
                </p>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-3 block">03</span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-3">
                  {t({ en: 'You Own It', es: 'Tú Lo Operas' })}
                </h3>
                <p className="font-serif text-untold-gray text-base leading-relaxed">
                  {t({ en: 'We train you on every system we built. Video walkthroughs, live sessions, full documentation. Then we hand over the keys — your platform, your data, your business.', es: 'Te capacitamos en cada sistema que construimos. Videos, sesiones en vivo, documentación completa. Luego te entregamos las llaves — tu plataforma, tus datos, tu negocio.' })}
                </p>
              </div>
            </div>
          </div>

          {/* ── Chapter 3: What's Inside ── */}
          <div className="border-t border-untold-border pt-16 sm:pt-24 pb-16 sm:pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-black/30 font-bold mb-12">
              {t({ en: 'WHAT WE BUILD INTO EVERY SYSTEM', es: 'LO QUE CONSTRUIMOS EN CADA SISTEMA' })}
            </p>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <div className="border-l-2 border-untold-orange pl-5 mb-6">
                  <h4 className="font-sans font-black text-lg uppercase tracking-tighter">
                    {t({ en: 'Digital Presence', es: 'Presencia Digital' })}
                  </h4>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30">
                    {t({ en: 'Get Found', es: 'Que Te Encuentren' })}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    { en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' },
                    { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' },
                    { en: 'Copywriting & Brand Messaging', es: 'Copywriting y Mensajes de Marca' },
                    { en: 'AI Content Engine', es: 'Motor de Contenido con IA' },
                    { en: 'Social Media', es: 'Redes Sociales' },
                    { en: 'Paid Advertising', es: 'Publicidad Pagada' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-untold-orange mt-0.5 text-xs">+</span>
                      <span className="font-serif text-sm text-untold-gray">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="border-l-2 border-untold-orange pl-5 mb-6">
                  <h4 className="font-sans font-black text-lg uppercase tracking-tighter">
                    {t({ en: 'Business Operations', es: 'Operaciones de Negocio' })}
                  </h4>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30">
                    {t({ en: 'Run the Business', es: 'Opera el Negocio' })}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' },
                    { en: 'CRM & Client Management', es: 'CRM y Gestión de Clientes' },
                    { en: 'AI Workflow Automation', es: 'Automatización de Flujos con IA' },
                    { en: 'Sales Enablement', es: 'Habilitación de Ventas' },
                    { en: 'Mobile Applications', es: 'Aplicaciones Móviles' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-untold-orange mt-0.5 text-xs">+</span>
                      <span className="font-serif text-sm text-untold-gray">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="border-l-2 border-untold-orange pl-5 mb-6">
                  <h4 className="font-sans font-black text-lg uppercase tracking-tighter">
                    {t({ en: 'Infrastructure', es: 'Infraestructura' })}
                  </h4>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30">
                    {t({ en: 'Keep It Running', es: 'Mantenlo Funcionando' })}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    { en: 'Hosting & System Operations', es: 'Hosting y Operación del Sistema' },
                    { en: 'Review & Reputation Management', es: 'Gestión de Reseñas y Reputación' },
                    { en: 'Training & Ownership Transfer', es: 'Capacitación y Transferencia de Propiedad' },
                    { en: 'Documentation & Support', es: 'Documentación y Soporte' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-untold-orange mt-0.5 text-xs">+</span>
                      <span className="font-serif text-sm text-untold-gray">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Chapter 4: Who It's For ── */}
          <div className="border-t border-untold-border pt-16 sm:pt-24 pb-20 sm:pb-32 lg:pb-40">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-black/30 font-bold mb-6">
              {t({ en: 'WHO WE BUILD FOR', es: 'PARA QUIÉN CONSTRUIMOS' })}
            </p>
            <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-12 sm:mb-16 leading-[0.85]">
              {t({ en: 'What Type of Business Are You?', es: '¿Qué Tipo de Negocio Eres?' })}
            </h3>

            <div className="grid lg:grid-cols-3 gap-px bg-untold-border border border-untold-border mb-12">
              {paths.map((path) => (
                <Link
                  key={path.id}
                  to={`/solutions/${path.id}`}
                  className="group bg-white p-8 sm:p-10 lg:p-12 flex flex-col hover:bg-untold-beige/50 transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                    {path.number}
                  </span>
                  <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-2 group-hover:text-untold-orange transition-colors">
                    {t(path.title)}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-black/30 mb-4">
                    {t(path.who)}
                  </p>
                  <p className="font-serif italic text-untold-gray text-base leading-relaxed mb-8 flex-grow">
                    {t(path.line)}
                  </p>
                  <span className="inline-flex items-center space-x-3 font-sans font-black text-sm uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                    <span>{t({ en: 'Explore', es: 'Explorar' })}</span>
                    <span className="text-xl">→</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                to="/network-systems"
                className="group inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange hover:text-untold-black transition-colors"
              >
                <span>{t({ en: 'Explore the Full System', es: 'Explorar el Sistema Completo' })}</span>
                <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SELECTED WORK
      ═══════════════════════════════════════════════════════════ */}
      <section id="selected-work" className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-black text-white border-b border-white/5">
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
            {['noxguard-brand-rebrand', 'billiard-factory-retail-architecture', 'derrick-hodge', 'casa-schuck']
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
          FAQ
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
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 lg:py-72 text-center bg-untold-beige/40">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(3rem,14vw,180px)] leading-[0.8] mb-10 sm:mb-16 tracking-tighter uppercase text-center whitespace-pre-line">
            {t(i18n.finalCta.headline)}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/savings"
              className="group relative bg-untold-black text-white px-10 sm:px-24 py-6 sm:py-10 text-lg sm:text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <span className="relative z-10">{t(i18n.finalCta.cta)} →</span>
              <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            </Link>
            <Link
              to="/contact"
              className="font-mono text-[12px] uppercase tracking-[0.3em] text-untold-black/40 hover:text-untold-orange transition-colors py-6 sm:py-10"
            >
              {t({ en: 'Start a conversation', es: 'Iniciar conversación' })} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
