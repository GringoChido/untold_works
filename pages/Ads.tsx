import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Testimonials from '../components/Testimonials';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const Ads: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Paid Advertising — Google Ads, Meta Ads & LinkedIn Ads | Untold.works',
      es: 'Publicidad Pagada — Google Ads, Meta Ads y LinkedIn Ads | Untold.works'
    },
    {
      en: 'Paid advertising management for businesses in Mexico and the US. Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads. Bilingual campaigns, conversion tracking, and ROI-focused management.',
      es: 'Gestión de publicidad pagada para negocios en México y EE.UU. Google Ads, Facebook Ads, Instagram Ads y LinkedIn Ads. Campañas bilingües, seguimiento de conversiones y gestión enfocada en ROI.'
    },
    {
      path: '/ads',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Paid Advertising Management — Untold.works',
          description: 'Google Ads, Meta Ads, and LinkedIn Ads management for businesses in Mexico and the United States. Bilingual campaign management, conversion tracking, and ROI optimization.',
          url: 'https://untold.works/ads',
          provider: {
            '@type': 'Organization',
            '@id': 'https://untold.works/#organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'PPC Management', 'Paid Social'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What ad platforms does Untold.works manage?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We manage Google Ads (Search, Display, YouTube), Meta Ads (Facebook and Instagram), and LinkedIn Ads. We build bilingual campaigns in English and Spanish, with proper conversion tracking and attribution across all platforms.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué plataformas de publicidad maneja Untold.works?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Manejamos Google Ads (Búsqueda, Display, YouTube), Meta Ads (Facebook e Instagram) y LinkedIn Ads. Construimos campañas bilingües en inglés y español, con seguimiento de conversiones y atribución adecuada en todas las plataformas.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the minimum ad budget to get started?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We recommend a minimum ad spend of $500 USD per month per platform to see meaningful results. Our management fees are separate from your ad spend. For businesses in competitive markets or targeting both English and Spanish audiences, we typically recommend $1,000-$2,000 per month in ad spend to start.'
              }
            },
            {
              '@type': 'Question',
              name: 'How long does it take to see results from paid ads?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most campaigns start generating leads or sales within the first 2 weeks. Google Search ads can produce results within days. Meta and LinkedIn campaigns typically need 2-4 weeks to optimize through the learning phase. We provide weekly reporting so you can track progress from day one.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Manejan campañas publicitarias bilingües?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Creamos campañas publicitarias en inglés y español con segmentación de audiencia específica por idioma. Esto es esencial para negocios en México que sirven tanto a clientes locales como turistas internacionales. Cada idioma recibe sus propios anuncios, landing pages y seguimiento de conversiones.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const packages = [
    {
      title: { en: 'Ad Account Audit', es: 'Auditoría de Cuentas Publicitarias' },
      price: 'From $500 USD',
      items: [
        { en: 'Account structure review', es: 'Revisión de estructura de cuenta' },
        { en: 'Wasted spend analysis', es: 'Análisis de gasto desperdiciado' },
        { en: 'Audience targeting assessment', es: 'Evaluación de segmentación de audiencia' },
        { en: 'Conversion tracking audit', es: 'Auditoría de seguimiento de conversiones' },
        { en: 'Competitor ad intelligence', es: 'Inteligencia publicitaria de competidores' },
        { en: 'Actionable optimization roadmap', es: 'Hoja de ruta de optimización accionable' },
      ],
      footer: { en: 'One-time. Delivered in 1 week.', es: 'Único pago. Entregado en 1 semana.' },
      highlight: false,
    },
    {
      title: { en: 'Campaign Setup & Launch', es: 'Configuración y Lanzamiento de Campañas' },
      price: 'From $2,000 USD',
      items: [
        { en: 'Campaign architecture & ad groups', es: 'Arquitectura de campañas y grupos de anuncios' },
        { en: 'Audience research & targeting', es: 'Investigación y segmentación de audiencia' },
        { en: 'Ad creative (copy + visual direction)', es: 'Creativos publicitarios (copy + dirección visual)' },
        { en: 'Conversion tracking setup (pixels, events)', es: 'Configuración de seguimiento de conversiones (píxeles, eventos)' },
        { en: 'Landing page recommendations', es: 'Recomendaciones de landing pages' },
        { en: 'A/B test framework', es: 'Framework de pruebas A/B' },
      ],
      footer: { en: 'One-time. Delivered in 2 weeks.', es: 'Único pago. Entregado en 2 semanas.' },
      highlight: false,
    },
    {
      title: { en: 'Ongoing Campaign Management', es: 'Gestión Continua de Campañas' },
      price: 'From $1,500/mo USD',
      items: [
        { en: 'Daily bid & budget optimization', es: 'Optimización diaria de pujas y presupuesto' },
        { en: 'A/B testing (ads, audiences, placements)', es: 'Pruebas A/B (anuncios, audiencias, ubicaciones)' },
        { en: 'Conversion rate optimization', es: 'Optimización de tasa de conversión' },
        { en: 'Weekly performance reports', es: 'Reportes semanales de rendimiento' },
        { en: 'Budget pacing & scaling recommendations', es: 'Recomendaciones de ritmo de presupuesto y escalamiento' },
        { en: 'Bilingual ad management (EN + ES)', es: 'Gestión de anuncios bilingüe (EN + ES)' },
      ],
      footer: { en: 'Monthly retainer. Cancel anytime.', es: 'Retainer mensual. Cancela cuando quieras.' },
      highlight: true,
    },
    {
      title: { en: 'Full-Stack: Ads + Landing Pages', es: 'Full-Stack: Publicidad + Landing Pages' },
      price: 'From $5,000 USD',
      items: [
        { en: 'Complete campaign setup (all platforms)', es: 'Configuración completa de campañas (todas las plataformas)' },
        { en: 'Custom landing pages (EN + ES)', es: 'Landing pages personalizadas (EN + ES)' },
        { en: 'Conversion tracking & CRM integration', es: 'Seguimiento de conversiones e integración con CRM' },
        { en: 'Retargeting pixel configuration', es: 'Configuración de píxeles de retargeting' },
        { en: 'Full-funnel attribution', es: 'Atribución de embudo completo' },
        { en: '30-day optimization included', es: '30 días de optimización incluidos' },
      ],
      footer: { en: 'One-time. Delivered in 3-4 weeks.', es: 'Único pago. Entregado en 3-4 semanas.' },
      highlight: false,
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Audit', es: 'Auditoría' },
      desc: {
        en: 'We analyze your current ad accounts, identify wasted spend, and map your competitive landscape.',
        es: 'Analizamos tus cuentas publicitarias actuales, identificamos gasto desperdiciado y mapeamos tu panorama competitivo.'
      }
    },
    {
      num: '02',
      title: { en: 'Build', es: 'Construir' },
      desc: {
        en: 'We architect campaigns, create ad copy, set up tracking, and build landing pages if needed.',
        es: 'Diseñamos la arquitectura de campañas, creamos copy publicitario, configuramos el seguimiento y construimos landing pages si es necesario.'
      }
    },
    {
      num: '03',
      title: { en: 'Launch', es: 'Lanzar' },
      desc: {
        en: 'We launch campaigns with controlled budgets, monitor performance in real-time, and begin A/B testing.',
        es: 'Lanzamos campañas con presupuestos controlados, monitoreamos el rendimiento en tiempo real y comenzamos pruebas A/B.'
      }
    },
    {
      num: '04',
      title: { en: 'Scale', es: 'Escalar' },
      desc: {
        en: 'We optimize based on data, scale winning campaigns, cut underperformers, and expand into new audiences.',
        es: 'Optimizamos basándonos en datos, escalamos campañas ganadoras, eliminamos las que no rinden y expandimos hacia nuevas audiencias.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'What ad platforms do you manage?', es: '¿Qué plataformas publicitarias manejan?' },
      a: {
        en: 'Google Ads (Search, Display, YouTube), Meta (Facebook + Instagram), and LinkedIn. Each platform gets its own strategy tailored to your goals and audience. Bilingual campaigns in English and Spanish are standard for all our clients.',
        es: 'Google Ads (Búsqueda, Display, YouTube), Meta (Facebook + Instagram) y LinkedIn. Cada plataforma recibe su propia estrategia adaptada a tus objetivos y audiencia. Las campañas bilingües en inglés y español son estándar para todos nuestros clientes.'
      }
    },
    {
      q: { en: 'What\'s the minimum ad budget?', es: '¿Cuál es el presupuesto mínimo?' },
      a: {
        en: 'We recommend a minimum of $500 USD per month per platform to see meaningful results. Management fees are separate from your ad spend. For businesses in bilingual markets or targeting both English and Spanish audiences, we typically recommend $1,000-$2,000 per month in ad spend to start.',
        es: 'Recomendamos un mínimo de $500 USD por mes por plataforma para ver resultados significativos. Las tarifas de gestión son independientes de tu gasto publicitario. Para negocios en mercados bilingües o que se dirigen a audiencias en inglés y español, típicamente recomendamos $1,000-$2,000 por mes en gasto publicitario para empezar.'
      }
    },
    {
      q: { en: 'How quickly will I see results?', es: '¿Qué tan rápido veré resultados?' },
      a: {
        en: 'Google Search ads can produce leads within days of launch. Meta and LinkedIn campaigns typically need 2-4 weeks to optimize through the learning phase. We provide weekly reporting so you can track progress from day one.',
        es: 'Los anuncios de Google Search pueden producir leads dentro de días del lanzamiento. Las campañas de Meta y LinkedIn típicamente necesitan 2-4 semanas para optimizarse durante la fase de aprendizaje. Proporcionamos reportes semanales para que puedas seguir el progreso desde el primer día.'
      }
    },
    {
      q: { en: 'Do you manage bilingual ad campaigns?', es: '¿Manejan campañas publicitarias bilingües?' },
      a: {
        en: 'Yes. We create separate ads, audience targeting, and landing pages for each language. This is essential for businesses in Mexico serving both local clients and international tourists. Each language gets its own conversion tracking and optimization.',
        es: 'Sí. Creamos anuncios, segmentación de audiencia y landing pages separados para cada idioma. Esto es esencial para negocios en México que sirven tanto a clientes locales como a turistas internacionales. Cada idioma recibe su propio seguimiento de conversiones y optimización.'
      }
    },
    {
      q: { en: 'How transparent is your reporting?', es: '¿Qué tan transparente es su reporte?' },
      a: {
        en: 'Completely transparent. You get weekly performance reports, real-time dashboard access, and monthly strategy calls. You always know exactly where your money is going, what\'s working, and what we\'re optimizing next.',
        es: 'Completamente transparente. Recibes reportes de rendimiento semanales, acceso en tiempo real al dashboard y llamadas mensuales de estrategia. Siempre sabes exactamente a dónde va tu dinero, qué está funcionando y qué estamos optimizando a continuación.'
      }
    },
  ];

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* ── Hero ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Ads', es: 'Publicidad' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'PAID ADVERTISING', es: 'PUBLICIDAD PAGADA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Stop Guessing. Start Converting.', es: 'Deja de Adivinar. Empieza a Convertir.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Google Ads, Meta Ads, LinkedIn Ads — managed by people who understand your market and speak your customers\' language.',
              es: 'Google Ads, Meta Ads, LinkedIn Ads — gestionados por personas que entienden tu mercado y hablan el idioma de tus clientes.'
            })}
          </p>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE WASTE', es: 'EL DESPERDICIO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Most Ad Spend Is Wasted', es: 'La Mayoría del Gasto en Publicidad Se Desperdicia' })}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed mb-6">
                {t({
                  en: 'Most businesses run ads without a real strategy. Wrong targeting, no conversion tracking, generic creative, and budgets that bleed money every day. They boost a post on Facebook, set up a Google campaign with default settings, and wonder why nothing converts.',
                  es: 'La mayoría de los negocios ejecutan anuncios sin una estrategia real. Segmentación incorrecta, sin seguimiento de conversiones, creativos genéricos y presupuestos que pierden dinero cada día. Impulsan una publicación en Facebook, configuran una campaña de Google con ajustes predeterminados y se preguntan por qué nada convierte.'
                })}
              </p>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed">
                {t({
                  en: 'Paid advertising works — when it\'s managed by people who know what they\'re doing. The difference between DIY and professional management isn\'t incremental. It\'s the difference between burning money and printing it.',
                  es: 'La publicidad pagada funciona — cuando es gestionada por personas que saben lo que hacen. La diferencia entre hacerlo tú mismo y la gestión profesional no es incremental. Es la diferencia entre quemar dinero e imprimirlo.'
                })}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">72%</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'of small business ad budgets are wasted on poor targeting', es: 'de presupuestos publicitarios de pymes se desperdician en mala segmentación' })}
                </p>
              </div>
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">3x</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'ROI difference between DIY and professionally managed campaigns', es: 'diferencia en ROI entre campañas autodirigidas y gestionadas profesionalmente' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'PACKAGES', es: 'PAQUETES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'What We Offer', es: 'Lo Que Ofrecemos' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`border bg-white p-6 sm:p-8 flex flex-col ${
                  pkg.highlight
                    ? 'border-l-4 border-l-untold-orange border-t border-r border-b border-untold-border'
                    : 'border-untold-border'
                }`}
              >
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-2">
                  {t(pkg.title)}
                </h3>
                <p className="font-mono text-[13px] text-untold-orange font-bold mb-6">{pkg.price}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base">{t(item)}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-serif italic text-untold-gray/60 border-t border-untold-border pt-4">
                  {t(pkg.footer)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Four Steps to Results', es: 'Cuatro Pasos Hacia Resultados' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-untold-border bg-untold-beige p-6 sm:p-8"
              >
                <span className="font-mono text-[11px] text-untold-orange font-bold">{step.num}</span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3 mt-2">
                  {t(step.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Reading ── */}
      <section className="bg-white px-5 sm:px-10 py-12 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
            {t({ en: 'RELATED READING', es: 'LECTURA RELACIONADA' })}
          </span>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link to="/blog/your-website-is-not-a-brochure" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Your Website Is Not a Brochure', es: 'Tu Sitio Web No Es un Folleto' })}</p>
            </Link>
            <Link to="/blog/san-miguel-de-allende-digital-presence-guide-2026" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'SMA Digital Presence Guide 2026', es: 'Guía de Presencia Digital SMA 2026' })}</p>
            </Link>
            <Link to="/blog/retail-and-hospitality-digital-survival-guide" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Retail & Hospitality Digital Survival Guide', es: 'Guía de Supervivencia Digital para Retail y Hospitalidad' })}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About Paid Ads', es: 'Preguntas Sobre Publicidad Pagada' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(faq.q)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(faq.a)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Systems Connector ── */}
      <NetworkConnector
        capability={{ en: 'Paid Advertising', es: 'Publicidad Pagada' }}
        networkDescription={{
          en: 'For business networks, we run coordinated paid media across every market. One strategy, local execution, network-wide budget optimization. Instead of each location running disconnected campaigns, the network acts as one media operation with local relevance.',
          es: 'Para redes de negocios, ejecutamos medios pagados coordinados en cada mercado. Una estrategia, ejecución local, optimización de presupuesto a nivel de red. En lugar de que cada ubicación ejecute campañas desconectadas, la red actúa como una operación de medios con relevancia local.',
        }}
        relatedCapabilities={[
          { name: { en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' }, path: '/websites' },
          { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, path: '/seo-aeo' },
          { name: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREE AUDIT', es: 'AUDITORÍA GRATIS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Get a Free Ad Account Audit', es: 'Obtén una Auditoría Publicitaria Gratis' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\'ll send you a wasted spend analysis showing exactly where your ad budget is leaking and how to fix it.',
              es: 'Completa el formulario y te enviaremos un análisis de gasto desperdiciado mostrando exactamente dónde se fuga tu presupuesto publicitario y cómo corregirlo.'
            })}
          </p>
          <QuickLeadForm pillar="Ads" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Stop Wasting Ad Spend?', es: '¿Listo para Dejar de Desperdiciar en Publicidad?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Get campaigns that convert, tracking that works, and reports you can actually understand.',
              es: 'Obtén campañas que convierten, seguimiento que funciona y reportes que realmente puedes entender.'
            })}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ads;
