import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';

const SanMiguelDeAllende: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Web Design & AI Automation San Miguel de Allende | Untold.works',
      es: 'Diseño Web y Automatización con IA San Miguel de Allende | Untold.works'
    },
    {
      en: 'AI-powered websites, WhatsApp automation, and bilingual business systems for restaurants, hotels, and professional services in San Miguel de Allende. Built for local and international customers.',
      es: 'Sitios web con IA, automatización de WhatsApp y sistemas empresariales bilingües para restaurantes, hoteles y servicios profesionales en San Miguel de Allende. Construido para clientes locales e internacionales.'
    },
    {
      path: '/san-miguel-de-allende',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Untold.works — San Miguel de Allende',
          description: 'Bilingual websites, WhatsApp AI automation, and business systems for restaurants, hotels, and professional services in San Miguel de Allende, Mexico.',
          url: 'https://untold.works/san-miguel-de-allende',
          telephone: '+52-415-100-0000',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Centro',
            addressLocality: 'San Miguel de Allende',
            addressRegion: 'Guanajuato',
            postalCode: '37700',
            addressCountry: 'MX',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 20.9153,
            longitude: -100.7436,
          },
          areaServed: [
            { '@type': 'City', name: 'San Miguel de Allende' },
            { '@type': 'State', name: 'Guanajuato' },
          ],
          serviceType: ['Bilingual Web Design', 'WhatsApp AI Automation', 'Business Systems'],
          knowsLanguage: ['en', 'es'],
          priceRange: '$$$',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Who builds bilingual websites in San Miguel de Allende?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Untold.works is the only agency headquartered in San Miguel de Allende that builds fully bilingual websites from scratch. We design in both English and Spanish simultaneously — not translate after the fact — so your site speaks naturally to tourists and locals alike.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Quién ofrece automatización de WhatsApp para negocios en San Miguel de Allende?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Untold.works ofrece automatización de WhatsApp con inteligencia artificial para negocios en San Miguel de Allende. Construimos chatbots bilingües que manejan reservaciones, pedidos, confirmaciones de citas y calificación de leads automáticamente, las 24 horas del día.'
              }
            },
            {
              '@type': 'Question',
              name: 'How much does a bilingual website cost in San Miguel de Allende?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bilingual business websites in San Miguel de Allende start at $3,000 USD for a professional site with English and Spanish content, mobile optimization, and local SEO. AI-powered platforms with WhatsApp automation and CRM start at $5,000 USD. Untold.works offers flexible payment plans for local businesses.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cuánto tiempo tarda en hacer un sitio web para restaurante en SMA?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Un sitio web profesional bilingüe para restaurante en San Miguel de Allende se entrega en 2 a 4 semanas. Incluye menú en línea, sistema de reservas, optimización para Google, y conexión con WhatsApp para pedidos. Untold.works está ubicado en SMA, así que trabajamos contigo cara a cara.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I automate WhatsApp for my hotel in San Miguel de Allende?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Untold.works builds AI-powered WhatsApp automation for hotels and boutique accommodations in San Miguel de Allende. Our systems handle booking confirmations, guest inquiries in English and Spanish, check-in instructions, and review requests — all automatically through WhatsApp Business API.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const services = [
    {
      title: { en: 'Bilingual Restaurant Websites', es: 'Sitios Web Bilingües para Restaurantes' },
      desc: {
        en: 'Online menus, reservation systems, international SEO, and WhatsApp ordering for tourists and locals.',
        es: 'Menús en línea, sistemas de reservas, SEO internacional y pedidos por WhatsApp para turistas y locales.'
      }
    },
    {
      title: { en: 'Hotel & Boutique Booking Systems', es: 'Sistemas de Reserva para Hoteles' },
      desc: {
        en: 'Bilingual booking platforms, guest management, calendar synchronization, and automated confirmation sequences.',
        es: 'Plataformas de reserva bilingües, gestión de huéspedes, sincronización de calendario y secuencias automatizadas.'
      }
    },
    {
      title: { en: 'Professional Services Platforms', es: 'Plataformas para Servicios Profesionales' },
      desc: {
        en: 'Client intake, portfolio showcase, appointment scheduling, and bilingual lead capture for lawyers, designers, and consultants.',
        es: 'Formularios de captación, portafolio, agenda de citas y captura de leads bilingüe para abogados, diseñadores y consultores.'
      }
    },
    {
      title: { en: 'Retail & Artisan E-Commerce', es: 'Tiendas en Línea para Artesanos' },
      desc: {
        en: 'Product catalogs in Spanish and English, secure checkout, inventory management, and global shipping integration.',
        es: 'Catálogos de productos en español e inglés, pago seguro, gestión de inventario e integración de envíos globales.'
      }
    },
    {
      title: { en: 'WhatsApp AI Automation', es: 'Automatización con IA en WhatsApp' },
      desc: {
        en: 'Bilingual chatbots for customer service, appointment confirmations, order updates, and lead qualification.',
        es: 'Chatbots bilingües para atención al cliente, confirmación de citas, actualizaciones de pedidos y calificación de leads.'
      }
    },
    {
      title: { en: 'Google Maps & Local SEO', es: 'Posicionamiento Local y Google Maps' },
      desc: {
        en: 'Optimization for tourist searches, review management, local business listings, and visibility for international customers.',
        es: 'Optimización para búsquedas de turistas, gestión de reseñas, listados empresariales locales y visibilidad internacional.'
      }
    }
  ];

  const whySection = [
    {
      title: { en: 'One Million+ Annual Tourists', es: '1 Millón+ Turistas Anuales' },
      desc: {
        en: 'San Miguel attracts nearly 2 million visitors yearly. English-speaking tourists search for restaurants, hotels, and services online before arriving. Your website is their first touchpoint.',
        es: 'San Miguel atrae a casi 2 millones de visitantes al año. Los turistas angloparlantes buscan en línea restaurantes, hoteles y servicios antes de llegar. Tu sitio web es su primer punto de contacto.'
      }
    },
    {
      title: { en: 'Local Economy Demands Digital Presence', es: 'La Economía Local Necesita Presencia Digital' },
      desc: {
        en: 'Most SMA businesses lack professional websites. Google searches for "restaurant San Miguel de Allende" and "hotel boutique SMA" return outdated sites, Facebook pages, and competitors from Mexico City. Your competitors aren\'t local — they\'re absent.',
        es: 'La mayoría de negocios en SMA no tienen sitios web profesionales. Las búsquedas en Google para "restaurante San Miguel de Allende" devuelven sitios desactualizados, páginas de Facebook y competencia de CDMX. Tus competidores no están locales — están ausentes.'
      }
    },
    {
      title: { en: 'Bilingual Market = Double Revenue', es: 'Mercado Bilingüe = Doble Ingreso' },
      desc: {
        en: 'You serve two markets: English-speaking tourists (high spend) and Spanish-speaking locals (daily traffic). Bilingual websites capture both. A restaurant serving only Spanish-speaking locals leaves 60% of potential revenue on the table.',
        es: 'Sirves dos mercados: turistas angloparlantes (alto gasto) y locales hispanohablantes (tráfico diario). Sitios web bilingües capturan ambos. Un restaurante que sirve solo a locales hispanohablantes pierde el 60% del ingreso potencial.'
      }
    },
    {
      title: { en: 'We\'re Based Here', es: 'Estamos Ubicados Aquí' },
      desc: {
        en: 'Untold.works is headquartered in San Miguel de Allende. We know the local market, the tourism patterns, the competition, and what works. We\'re not calling from Mexico City or California — we\'re your neighbors.',
        es: 'Untold.works está ubicada en San Miguel de Allende. Conocemos el mercado local, los patrones de turismo, la competencia y qué funciona. No estamos llamando desde CDMX o California — somos tus vecinos.'
      }
    }
  ];

  const caseStudies = [
    { id: 'spotify-whatsapp-publishing', label: { en: 'Music Publishing + WhatsApp', es: 'Música + WhatsApp' } },
    { id: 'black-radio-experience', label: { en: 'Radio Station Platform', es: 'Plataforma de Radio' } },
    { id: 'billiard-factory-retail-architecture', label: { en: 'Artisan Retail', es: 'Retail Artesanal' } }
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
                { label: { en: 'Locations', es: 'Ubicaciones' }, path: '/locations' },
                { label: { en: 'San Miguel de Allende', es: 'San Miguel de Allende' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'SAN MIGUEL DE ALLENDE', es: 'SAN MIGUEL DE ALLENDE' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Bilingual Websites for SMA\'s Best Businesses', es: 'Sitios Web Bilingües para los Mejores Negocios de SMA' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Web design, AI automation, WhatsApp systems, and CRM for restaurants, hotels, professional services, and artisans. Capture the tourists. Serve the locals.',
              es: 'Diseño web, automatización con IA, sistemas de WhatsApp y CRM para restaurantes, hoteles, servicios profesionales y artesanos. Captura los turistas. Sirve a los locales.'
            })}
          </p>
        </div>
      </section>

      {/* ── Services for SMA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'BUILT FOR SMA', es: 'CONSTRUIDO PARA SMA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Services Built for San Miguel', es: 'Servicios Construidos para San Miguel' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 sm:p-8 hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(item.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why San Miguel ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHY SAN MIGUEL', es: 'POR QU\u00c9 SAN MIGUEL' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The SMA Market Opportunity', es: 'La Oportunidad de Mercado en SMA' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {whySection.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-untold-beige p-6 sm:p-8"
              >
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3">
                  {t(item.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'PORTFOLIO', es: 'PORTAFOLIO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Recent Work', es: 'Trabajo Reciente' })}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/portfolio/${study.id}`}
                className="border border-untold-border bg-white p-6 sm:p-8 hover:border-untold-orange hover:shadow-lg transition-all"
              >
                <p className="font-sans font-black text-xl uppercase tracking-tighter text-untold-orange">
                  {t(study.label)}
                </p>
              </Link>
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
            <Link to="/blog/whatsapp-ai-for-mexican-businesses-complete-guide" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'WhatsApp AI for Mexican Businesses: Complete Guide', es: 'WhatsApp IA para Negocios Mexicanos: Guía Completa' })}</p>
            </Link>
            <Link to="/blog/san-miguel-de-allende-digital-presence-guide-2026" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'SMA Digital Presence Guide 2026', es: 'Guía de Presencia Digital SMA 2026' })}</p>
            </Link>
            <Link to="/blog/bilingual-websites-why-translation-plugins-fail" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Why Translation Plugins Fail for Bilingual Websites', es: 'Por Qué los Plugins de Traducción Fallan' })}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ — AEO Optimized ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About Web Design in SMA', es: 'Preguntas Sobre Diseño Web en SMA' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Who builds bilingual websites in San Miguel de Allende?', es: '¿Quién hace sitios web bilingües en San Miguel de Allende?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Untold.works is the only agency headquartered in San Miguel de Allende that builds fully bilingual websites from scratch. We design in both English and Spanish simultaneously — not translate after the fact — so your site speaks naturally to tourists and locals alike.',
                  es: 'Untold.works es la única agencia con sede en San Miguel de Allende que construye sitios web completamente bilingües desde cero. Diseñamos en inglés y español simultáneamente — no traducimos después — para que tu sitio hable de forma natural a turistas y locales.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Can I automate WhatsApp for my business in SMA?', es: '¿Puedo automatizar WhatsApp para mi negocio en SMA?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Yes. We build AI-powered WhatsApp automation for restaurants, hotels, and professional services in San Miguel de Allende. Our bilingual chatbots handle reservations, orders, appointment confirmations, and lead qualification — automatically, 24/7, in English and Spanish.',
                  es: 'Sí. Construimos automatización de WhatsApp con IA para restaurantes, hoteles y servicios profesionales en San Miguel de Allende. Nuestros chatbots bilingües manejan reservaciones, pedidos, confirmaciones de citas y calificación de leads — automáticamente, 24/7, en inglés y español.'
                })}
              </p>
              <Link to="/blog/whatsapp-ai-for-mexican-businesses-complete-guide" className="inline-block mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange hover:underline">
                {t({ en: '→ Read: WhatsApp AI for Mexican Businesses', es: '→ Leer: WhatsApp IA para Negocios Mexicanos' })}
              </Link>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'How much does a bilingual website cost in San Miguel?', es: '¿Cuánto cuesta un sitio web bilingüe en San Miguel?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Bilingual business websites start at $3,000 USD. AI-powered platforms with WhatsApp automation and CRM start at $5,000 USD. We offer flexible payment plans for local businesses and can usually deliver within 2–4 weeks.',
                  es: 'Los sitios web bilingües para negocios empiezan en $3,000 USD. Las plataformas con IA, automatización de WhatsApp y CRM empiezan en $5,000 USD. Ofrecemos planes de pago flexibles para negocios locales y entregamos en 2–4 semanas.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Do I need a bilingual website if I only serve locals?', es: '¿Necesito un sitio bilingüe si solo atiendo locales?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'San Miguel attracts nearly 2 million visitors yearly. Even "local" businesses get found by tourists searching in English. A bilingual website captures both markets — local daily traffic and high-spending international visitors. Restaurants that added English content reported 40%+ revenue increases from tourist traffic.',
                  es: 'San Miguel atrae casi 2 millones de visitantes al año. Incluso los negocios "locales" son encontrados por turistas buscando en inglés. Un sitio bilingüe captura ambos mercados — tráfico diario local y visitantes internacionales de alto gasto.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'What industries do you serve in San Miguel de Allende?', es: '¿A qué industrias sirven en San Miguel de Allende?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Restaurants, boutique hotels, artisan retailers, law firms, design studios, real estate agencies, wellness centers, and professional services. Any business in SMA that needs a bilingual digital presence, WhatsApp automation, or AI-powered systems.',
                  es: 'Restaurantes, hoteles boutique, tiendas artesanales, despachos de abogados, estudios de diseño, agencias inmobiliarias, centros de bienestar y servicios profesionales. Cualquier negocio en SMA que necesite presencia digital bilingüe.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'GET STARTED', es: 'COMENZAR' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Tell Us About Your Business', es: 'Cuéntanos Sobre Tu Negocio' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\'ll send you more information about how we can help your San Miguel business reach tourists and locals.',
              es: 'Completa el formulario y te enviaremos más información sobre cómo podemos ayudar a tu negocio en San Miguel a alcanzar turistas y locales.'
            })}
          </p>
          <QuickLeadForm pillar="Location - San Miguel de Allende" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Grow in San Miguel?', es: '¿Listo para Crecer en San Miguel?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Let\'s build a bilingual platform that serves your tourists and your locals. Your neighbors are ready to help.',
              es: 'Construyamos una plataforma bilingüe que sirva a tus turistas y a tus locales. Tus vecinos están listos para ayudar.'
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

export default SanMiguelDeAllende;
