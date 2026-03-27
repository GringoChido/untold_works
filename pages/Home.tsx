import React from 'react';
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

      {/* ═══════════════════════════════════════════════════════════
          HERO
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
                href="#selected-work"
                className="font-mono text-[12px] uppercase tracking-[0.3em] text-white/50 hover:text-untold-orange transition-colors py-6 sm:py-10"
              >
                {t(i18n.hero.secondaryCta)} ↓
              </a>
            </div>
          </div>
        </div>
      </WavyBackground>

      {/* ═══════════════════════════════════════════════════════════
          NETWORK SYSTEMS — One System. Three Paths.
          The key metaphor: Network Systems is the platform.
          Each business type is the door it opens.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-20 sm:py-32 lg:py-40 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">

          {/* The Key — Network Systems intro */}
          <div className="mb-20 sm:mb-28">
            <div className="flex items-center space-x-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                {t({ en: 'FLAGSHIP OFFERING', es: 'OFERTA PRINCIPAL' })}
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
              <div className="lg:col-span-7">
                <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 text-white leading-[0.85]">
                  {t({ en: 'Network Systems', es: 'Network Systems' })}
                </h2>
                <p className="text-xl sm:text-2xl font-serif italic text-white/60 leading-relaxed">
                  {t({
                    en: 'One AI-powered platform that runs your entire digital operation. Websites, marketing, dashboards, sales tools, content — deployed everywhere, managed from one place.',
                    es: 'Una plataforma impulsada por IA que gestiona toda tu operación digital. Sitios web, marketing, dashboards, herramientas de venta, contenido — desplegado en todas partes, gestionado desde un solo lugar.',
                  })}
                </p>
              </div>
              <div className="lg:col-span-5 flex lg:justify-end">
                <Link
                  to="/network-systems"
                  className="group inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange hover:text-white transition-colors"
                >
                  <span>{t({ en: 'Explore the Full System', es: 'Explorar el Sistema Completo' })}</span>
                  <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* The Rooms — Three business paths */}
          <div className="border-t border-white/10 pt-16 sm:pt-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold mb-12">
              {t({ en: 'ONE SYSTEM. THREE PATHS.', es: 'UN SISTEMA. TRES CAMINOS.' })}
            </p>

            <div className="grid lg:grid-cols-3 gap-px bg-white/10">
              {paths.map((path) => (
                <Link
                  key={path.id}
                  to={`/solutions/${path.id}`}
                  className="group bg-untold-black p-8 sm:p-10 lg:p-12 flex flex-col hover:bg-white/[0.03] transition-all"
                >
                  <span className="font-mono text-[48px] sm:text-[64px] font-black text-white/[0.06] leading-none mb-6">
                    {path.number}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-3 text-white group-hover:text-untold-orange transition-colors">
                    {t(path.title)}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange/60 mb-6">
                    {t(path.who)}
                  </p>
                  <p className="font-serif italic text-white/40 text-base leading-relaxed mb-8 flex-grow">
                    {t(path.line)}
                  </p>
                  <span className="inline-flex items-center space-x-3 font-sans font-black text-sm uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                    <span>{t({ en: 'Explore', es: 'Explorar' })}</span>
                    <span className="text-xl">→</span>
                  </span>
                </Link>
              ))}
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
          WHY UNTOLD
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
          <h2 className="font-sans font-black text-[clamp(3rem,14vw,180px)] leading-[0.8] mb-10 sm:mb-16 tracking-tighter uppercase text-center">
            {t(i18n.finalCta.headline)}
          </h2>
          <Link
            to="/contact"
            className="group relative bg-untold-black text-white px-10 sm:px-24 py-6 sm:py-10 text-lg sm:text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
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
