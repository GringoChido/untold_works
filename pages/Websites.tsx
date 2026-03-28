import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Testimonials from '../components/Testimonials';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const Websites: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'AI-Native Website Design & Rebuild | Untold.works',
      es: 'Diseño y Reconstrucción Web AI-Nativo | Untold.works'
    },
    {
      en: 'Custom website design for businesses in Mexico and the US. Brand-first, mobile-ready, bilingual, SEO and AEO optimized. Built with AI, guided by 25 years of creative direction.',
      es: 'Diseño web personalizado para negocios en México y EE.UU. Marca primero, mobile-ready, bilingüe, SEO y AEO optimizado. Construido con IA, guiado por 25 años de dirección creativa.'
    },
    {
      path: '/websites',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Website Design & Rebuild — Untold.works',
          description: 'Custom website design and rebuild for businesses in Mexico and the United States. Brand-first, mobile-ready, bilingual, SEO and AEO optimized. Built with AI, guided by 25 years of creative direction.',
          url: 'https://untold.works/websites',
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
          serviceType: ['Website Design', 'Website Rebuild', 'Web Development', 'AI-Native Website', 'Bilingual Website'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How long does a website rebuild take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Design & Build projects typically take 4-6 weeks. AI-Native Rebuilds take 6-8 weeks. Timelines depend on content volume, integrations, and bilingual requirements. We give you a clear timeline before we start.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you work with existing brands or only new ones?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Both. If you have an established brand, we work within your guidelines. If you need a brand refresh or are starting from scratch, we build your visual identity as part of the project.'
              }
            },
            {
              '@type': 'Question',
              name: 'What platform do you build on?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We build custom — React, Next.js, or Vite depending on your needs. No WordPress templates, no Wix, no Squarespace. Custom code means better performance, full ownership, and no platform fees.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can you rebuild while keeping my current site live?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We build your new site in a staging environment. When it\'s ready and approved, we switch over with zero downtime. Your current site stays live until the new one is deployed.'
              }
            },
            {
              '@type': 'Question',
              name: 'What makes an AI-native website different?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'An AI-native website is built from the ground up for both humans and machines. It includes structured data (schema markup), llms.txt for AI crawlers, FAQ-structured content, answer-format copy, and technical optimizations that help ChatGPT, Perplexity, and Google AI Overviews find and cite your business.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do I own the website when it\'s done?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Full ownership. You get the code, the hosting credentials, the documentation, and video training. No lock-in, no monthly fees for access to your own site. It\'s yours.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const packages = [
    {
      title: { en: 'Website Audit & Strategy', es: 'Auditoría Web y Estrategia' },
      price: 'From $1,500 USD',
      items: [
        { en: 'Full site performance & speed audit', es: 'Auditoría completa de rendimiento y velocidad' },
        { en: 'SEO health check & keyword analysis', es: 'Revisión de salud SEO y análisis de keywords' },
        { en: 'AEO readiness assessment', es: 'Evaluación de preparación para AEO' },
        { en: 'Mobile & accessibility review', es: 'Revisión de móvil y accesibilidad' },
        { en: 'Competitor landscape analysis', es: 'Análisis del panorama competitivo' },
        { en: 'Prioritized rebuild roadmap', es: 'Hoja de ruta priorizada para reconstrucción' },
      ],
      footer: { en: 'One-time. Delivered in 1 week.', es: 'Único pago. Entregado en 1 semana.' },
      highlight: false,
    },
    {
      title: { en: 'Website Design & Build', es: 'Diseño y Construcción Web' },
      price: 'From $5,000 USD',
      items: [
        { en: 'Brand identity & visual system', es: 'Identidad de marca y sistema visual' },
        { en: 'Custom mobile-first website', es: 'Sitio web personalizado mobile-first' },
        { en: 'Bilingual content (EN + ES)', es: 'Contenido bilingüe (EN + ES)' },
        { en: 'SEO foundation & schema markup', es: 'Fundación SEO y schema markup' },
        { en: 'Contact forms & lead capture', es: 'Formularios de contacto y captura de leads' },
        { en: 'Training & ownership transfer', es: 'Capacitación y transferencia de propiedad' },
      ],
      footer: { en: 'One-time. Delivered in 4-6 weeks.', es: 'Único pago. Entregado en 4-6 semanas.' },
      highlight: false,
    },
    {
      title: { en: 'AI-Native Website Rebuild', es: 'Reconstrucción Web AI-Nativa' },
      price: 'From $8,000 USD',
      items: [
        { en: 'Everything in Design & Build', es: 'Todo lo incluido en Diseño y Construcción' },
        { en: 'AEO optimization & llms.txt', es: 'Optimización AEO y llms.txt' },
        { en: 'Full structured data & AI discoverability', es: 'Datos estructurados completos y descubrimiento por IA' },
        { en: 'CRM integration & lead workflows', es: 'Integración CRM y flujos de leads' },
        { en: 'Conversion tracking & analytics', es: 'Seguimiento de conversiones y analíticas' },
        { en: 'Google Business Profile setup', es: 'Configuración de Google Business Profile' },
      ],
      footer: { en: 'One-time. Delivered in 6-8 weeks.', es: 'Único pago. Entregado en 6-8 semanas.' },
      highlight: true,
    },
    {
      title: { en: 'Ongoing Website Management', es: 'Gestión Web Continua' },
      price: 'From $800/mo USD',
      items: [
        { en: 'Content updates & blog publishing', es: 'Actualizaciones de contenido y publicación de blog' },
        { en: 'Performance monitoring & optimization', es: 'Monitoreo y optimización de rendimiento' },
        { en: 'SEO & AEO maintenance', es: 'Mantenimiento de SEO y AEO' },
        { en: 'Security updates & backups', es: 'Actualizaciones de seguridad y respaldos' },
        { en: 'Monthly analytics reporting', es: 'Reportes mensuales de analíticas' },
        { en: 'Priority support', es: 'Soporte prioritario' },
      ],
      footer: { en: 'Monthly retainer. Cancel anytime.', es: 'Retainer mensual. Cancela cuando quieras.' },
      highlight: false,
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Audit', es: 'Auditoría' },
      desc: {
        en: 'We analyze your current site, brand, operations, and competitive landscape. We identify what\'s working, what\'s broken, and where AI can make the biggest impact.',
        es: 'Analizamos tu sitio actual, marca, operaciones y panorama competitivo. Identificamos qué funciona, qué está roto y dónde la IA puede tener el mayor impacto.'
      }
    },
    {
      num: '02',
      title: { en: 'Design', es: 'Diseño' },
      desc: {
        en: 'We create your brand identity, wireframes, content strategy, and bilingual architecture. You approve everything before we write a line of code.',
        es: 'Creamos tu identidad de marca, wireframes, estrategia de contenido y arquitectura bilingüe. Tú apruebas todo antes de que escribamos una línea de código.'
      }
    },
    {
      num: '03',
      title: { en: 'Build', es: 'Construcción' },
      desc: {
        en: 'AI-native development with SEO and AEO baked in from day one. Mobile-first, bilingual, CRM-integrated, and optimized for every screen, search engine, and AI crawler.',
        es: 'Desarrollo AI-nativo con SEO y AEO integrados desde el día uno. Mobile-first, bilingüe, integrado con CRM y optimizado para cada pantalla, motor de búsqueda y crawler de IA.'
      }
    },
    {
      num: '04',
      title: { en: 'Launch & Train', es: 'Lanzamiento y Capacitación' },
      desc: {
        en: 'We deploy your site, train your team, and transfer complete ownership. Video walkthroughs, written docs, live session, and 30 days of support. Your site, your code, your keys.',
        es: 'Desplegamos tu sitio, capacitamos a tu equipo y transferimos la propiedad completa. Videos paso a paso, documentación escrita, sesión en vivo y 30 días de soporte. Tu sitio, tu código, tus llaves.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'How long does a website rebuild take?', es: '¿Cuánto tarda una reconstrucción web?' },
      a: {
        en: 'Design & Build projects typically take 4-6 weeks. AI-Native Rebuilds take 6-8 weeks. Timelines depend on content volume, integrations, and bilingual requirements. We give you a clear timeline before we start.',
        es: 'Los proyectos de Diseño y Construcción típicamente toman 4-6 semanas. Las Reconstrucciones AI-Nativas toman 6-8 semanas. Los tiempos dependen del volumen de contenido, integraciones y requisitos bilingües. Te damos un cronograma claro antes de empezar.'
      }
    },
    {
      q: { en: 'Do you work with existing brands or only new ones?', es: '¿Trabajan con marcas existentes o solo nuevas?' },
      a: {
        en: 'Both. If you have an established brand, we work within your guidelines. If you need a brand refresh or are starting from scratch, we build your visual identity as part of the project.',
        es: 'Ambas. Si tienes una marca establecida, trabajamos dentro de tus lineamientos. Si necesitas un refresh de marca o empezar desde cero, construimos tu identidad visual como parte del proyecto.'
      }
    },
    {
      q: { en: 'What platform do you build on?', es: '¿En qué plataforma construyen?' },
      a: {
        en: 'We build custom — React, Next.js, or Vite depending on your needs. No WordPress templates, no Wix, no Squarespace. Custom code means better performance, full ownership, and no platform fees.',
        es: 'Construimos a la medida — React, Next.js o Vite según tus necesidades. Sin plantillas de WordPress, sin Wix, sin Squarespace. Código personalizado significa mejor rendimiento, propiedad total y sin cuotas de plataforma.'
      }
    },
    {
      q: { en: 'Can you rebuild while keeping my current site live?', es: '¿Pueden reconstruir mientras mi sitio actual sigue activo?' },
      a: {
        en: 'Yes. We build your new site in a staging environment. When it\'s ready and approved, we switch over with zero downtime. Your current site stays live until the new one is deployed.',
        es: 'Sí. Construimos tu nuevo sitio en un entorno de staging. Cuando está listo y aprobado, hacemos el cambio sin tiempo de inactividad. Tu sitio actual sigue activo hasta que el nuevo se despliega.'
      }
    },
    {
      q: { en: 'What makes an AI-native website different?', es: '¿Qué hace diferente a un sitio web AI-nativo?' },
      a: {
        en: 'An AI-native website is built from the ground up for both humans and machines. It includes structured data (schema markup), llms.txt for AI crawlers, FAQ-structured content, answer-format copy, and technical optimizations that help ChatGPT, Perplexity, and Google AI Overviews find and cite your business.',
        es: 'Un sitio web AI-nativo está construido desde cero para humanos y máquinas. Incluye datos estructurados (schema markup), llms.txt para crawlers de IA, contenido estructurado en FAQ, copy en formato de respuesta y optimizaciones técnicas que ayudan a ChatGPT, Perplexity y Google AI Overviews a encontrar y citar tu negocio.'
      }
    },
    {
      q: { en: 'Do I own the website when it\'s done?', es: '¿Soy dueño del sitio web cuando termina?' },
      a: {
        en: 'Yes. Full ownership. You get the code, the hosting credentials, the documentation, and video training. No lock-in, no monthly fees for access to your own site. It\'s yours.',
        es: 'Sí. Propiedad total. Recibes el código, las credenciales de hosting, la documentación y capacitación en video. Sin candados, sin cuotas mensuales para acceder a tu propio sitio. Es tuyo.'
      }
    },
  ];

  const connections = [
    {
      label: { en: 'SEO & AEO', es: 'SEO y AEO' },
      desc: { en: 'Makes your website findable by Google and AI', es: 'Hace que tu sitio web sea encontrado por Google e IA' },
      link: '/seo-aeo',
    },
    {
      label: { en: 'Social Media', es: 'Redes Sociales' },
      desc: { en: 'Drives traffic to your website', es: 'Dirige tráfico a tu sitio web' },
      link: '/social-media',
    },
    {
      label: { en: 'Paid Ads', es: 'Publicidad Pagada' },
      desc: { en: 'Converts visitors through your website', es: 'Convierte visitantes a través de tu sitio web' },
      link: '/ads',
    },
    {
      label: { en: 'Dashboard', es: 'Dashboard' },
      desc: { en: 'Reports on everything your website generates', es: 'Reporta todo lo que tu sitio web genera' },
      link: '/dashboard',
    },
    {
      label: { en: 'CRM & Automation', es: 'CRM y Automatización' },
      desc: { en: 'Captures and nurtures leads from your website', es: 'Captura y nutre leads desde tu sitio web' },
      link: null,
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
                { label: { en: 'Website Design', es: 'Diseño Web' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'WEBSITE DESIGN & REBUILD', es: 'DISEÑO Y RECONSTRUCCIÓN WEB' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Your Website Should Be the Hardest-Working Part of Your Business.', es: 'Tu Sitio Web Debería Ser la Parte Más Trabajadora de Tu Negocio.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10 mb-6">
            {t({
              en: 'Built with AI. Guided by 25 years of creative direction. Designed to be found by humans and machines alike.',
              es: 'Construido con IA. Guiado por 25 años de dirección creativa. Diseñado para ser encontrado por humanos y máquinas.'
            })}
          </p>

          <p className="text-base sm:text-lg font-serif italic text-white/30 max-w-3xl pl-6 sm:pl-10">
            {t({
              en: 'This isn\'t a redesign. It\'s a rebuild for the AI era.',
              es: 'Esto no es un rediseño. Es una reconstrucción para la era de la IA.'
            })}
          </p>
        </div>
      </section>

      {/* ── AI-Native Website Definition Block (AEO-optimized) ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'What Is an AI-Native Website?', es: '¿Qué Es un Sitio Web AI-Nativo?' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed mb-6">
            {t({
              en: 'An AI-native website is built from the ground up for both humans and machines. It includes structured data (JSON-LD schema markup), llms.txt for AI crawlers, FAQ-structured content, answer-format copy, and technical optimizations that help ChatGPT, Perplexity, Google AI Overviews, and other AI systems find and cite your business.',
              es: 'Un sitio web AI-nativo está construido desde cero para humanos y máquinas. Incluye datos estructurados (schema markup JSON-LD), llms.txt para crawlers de IA, contenido estructurado en FAQ, copy en formato de respuesta y optimizaciones técnicas que ayudan a ChatGPT, Perplexity, Google AI Overviews y otros sistemas de IA a encontrar y citar tu negocio.'
            })}
          </p>
          <p className="text-base font-serif text-untold-black/50 leading-relaxed">
            {t({
              en: 'Unlike traditional websites that only serve human visitors, AI-native websites are optimized for SEO (search engine rankings) and AEO (AI engine citations) simultaneously. This means your business gets found on Google AND recommended when someone asks an AI assistant for help.',
              es: 'A diferencia de los sitios web tradicionales que solo atienden a visitantes humanos, los sitios AI-nativos están optimizados para SEO (posicionamiento en buscadores) y AEO (citaciones por motores de IA) simultáneamente. Esto significa que tu negocio aparece en Google Y es recomendado cuando alguien le pide ayuda a un asistente de IA.'
            })}
          </p>
        </div>
      </section>

      {/* ── Why Rebuild in 2026 ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE SHIFT', es: 'EL CAMBIO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The Rules Changed. Your Website Didn\'t.', es: 'Las Reglas Cambiaron. Tu Sitio Web No.' })}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed mb-6">
                {t({
                  en: 'AI changed the rules. Google AI Overviews, ChatGPT, Perplexity — your website now needs to speak to humans AND machines. Mobile-first isn\'t a feature, it\'s the only option. And in Mexico, where 3G connections are still common, speed isn\'t a luxury — it\'s survival.',
                  es: 'La IA cambió las reglas. Google AI Overviews, ChatGPT, Perplexity — tu sitio web ahora necesita hablarle a humanos Y máquinas. Mobile-first no es una característica, es la única opción. Y en México, donde las conexiones 3G siguen siendo comunes, la velocidad no es un lujo — es supervivencia.'
                })}
              </p>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed">
                {t({
                  en: 'Your competitors who rebuild now get the compounding advantage. Every month you wait, the gap widens.',
                  es: 'Tus competidores que reconstruyen ahora obtienen la ventaja compuesta. Cada mes que esperas, la brecha se agranda.'
                })}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">40%</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'of product searches now start in AI chat', es: 'de búsquedas de productos empiezan en chat de IA' })}
                </p>
              </div>
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">73%</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'of users judge a business by its website on mobile', es: 'de usuarios juzgan un negocio por su sitio web en móvil' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Hub of Everything ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE ECOSYSTEM', es: 'EL ECOSISTEMA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'Your Website Connects Everything.', es: 'Tu Sitio Web Conecta Todo.' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-12 max-w-2xl">
            {t({
              en: 'Every service we offer plugs into your website. It\'s the foundation.',
              es: 'Cada servicio que ofrecemos se conecta a tu sitio web. Es la base.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {connections.map((conn, idx) => {
              const inner = (
                <>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 font-bold mb-2">
                    {t(conn.label)}
                  </p>
                  <p className="font-sans font-black text-base uppercase tracking-tighter text-white mb-1">
                    {t(conn.label)}
                  </p>
                  <p className="font-serif italic text-white/40 text-sm">
                    {t(conn.desc)}
                  </p>
                </>
              );

              if (conn.link) {
                return (
                  <Link
                    key={idx}
                    to={conn.link}
                    className={`border border-white/10 hover:border-untold-orange transition-all p-6 ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <div
                  key={idx}
                  className={`border border-white/10 hover:border-untold-orange transition-all p-6 ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  {inner}
                </div>
              );
            })}
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
            {t({ en: 'Choose Your Starting Point.', es: 'Elige Tu Punto de Partida.' })}
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

      {/* ── Built with AI. Guided by Experience. ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE APPROACH', es: 'EL ENFOQUE' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Built with AI. Guided by 25 Years of Experience.', es: 'Construido con IA. Guiado por 25 Años de Experiencia.' })}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white/60 leading-relaxed">
                {t({
                  en: 'AI builds fast. Experience builds right. We generate photo and video assets with Artlist, but the prompts behind them draw on 25 years of real cinematography — lenses, lighting, angles, frame rates. The result: websites that don\'t just look beautiful — they perform.',
                  es: 'La IA construye rápido. La experiencia construye bien. Generamos assets de foto y video con Artlist, pero los prompts detrás de ellos se basan en 25 años de cinematografía real — lentes, iluminación, ángulos, frame rates. El resultado: sitios web que no solo se ven hermosos — funcionan.'
                })}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {t({ en: 'AI HANDLES', es: 'LA IA SE ENCARGA DE' })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { en: 'Speed & scale', es: 'Velocidad y escala' },
                    { en: 'Code & integrations (Claude)', es: 'Código e integraciones (Claude)' },
                    { en: 'Data architecture & SEO', es: 'Arquitectura de datos y SEO' },
                  ].map((item, idx) => (
                    <div key={idx} className="border border-white/10 p-4">
                      <p className="font-mono text-[11px] text-white/60 font-bold">{t(item)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {t({ en: 'THE CREATIVE EYE', es: 'EL OJO CREATIVO' })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { en: 'Brand strategy & voice', es: 'Estrategia de marca y voz' },
                    { en: 'Photography & video direction', es: 'Dirección de fotografía y video' },
                    { en: 'Emotional resonance', es: 'Resonancia emocional' },
                  ].map((item, idx) => (
                    <div key={idx} className="border border-white/10 p-4">
                      <p className="font-mono text-[11px] text-white/60 font-bold">{t(item)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof It Works ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'SELECTED WORK', es: 'TRABAJO SELECCIONADO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Every Project Started with a Website.', es: 'Cada Proyecto Empezó con un Sitio Web.' })}
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <Link to="/portfolio/noxguard-brand-rebrand" className="group border border-untold-border bg-white overflow-hidden hover:border-untold-orange transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/project5-noxguard/truck.webp"
                  srcSet="/images/project5-noxguard/truck-640w.webp 640w, /images/project5-noxguard/truck-1024w.webp 1024w, /images/project5-noxguard/truck-1920w.webp 1920w, /images/project5-noxguard/truck.webp 2738w"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Noxguard brand rebuild — website and identity system"
                  width={2738}
                  height={1338}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="font-sans font-black text-xl uppercase tracking-tighter mb-2">Noxguard</p>
                <p className="font-serif italic text-untold-gray mb-4">
                  {t({ en: 'Complete brand rebuild + 6 AI systems', es: 'Reconstrucción completa de marca + 6 sistemas de IA' })}
                </p>
                <p className="font-mono text-[11px] text-untold-orange font-bold mb-4">
                  {t({ en: '3 Strategic Pillars, 6 AI Systems', es: '3 Pilares Estratégicos, 6 Sistemas de IA' })}
                </p>
                <p className="font-sans font-black text-sm uppercase tracking-tighter text-untold-orange">
                  {t({ en: 'View Case Study', es: 'Ver Caso de Estudio' })} &rarr;
                </p>
              </div>
            </Link>

            <Link to="/portfolio/billiard-factory-retail-architecture" className="group border border-untold-border bg-white overflow-hidden hover:border-untold-orange transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/project4-billiard/image3.webp"
                  srcSet="/images/project4-billiard/image3-640w.webp 640w, /images/project4-billiard/image3-1024w.webp 1024w, /images/project4-billiard/image3-1920w.webp 1920w, /images/project4-billiard/image3.webp 2258w"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Billiard Factory retail digital architecture"
                  width={2258}
                  height={1222}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="font-sans font-black text-xl uppercase tracking-tighter mb-2">Billiard Factory</p>
                <p className="font-serif italic text-untold-gray mb-4">
                  {t({ en: 'Unified digital + physical revenue operations', es: 'Operaciones de ingresos digitales + físicas unificadas' })}
                </p>
                <p className="font-mono text-[11px] text-untold-orange font-bold mb-4">
                  {t({ en: '20% Sales Lift, +35% Efficiency', es: '20% Aumento en Ventas, +35% Eficiencia' })}
                </p>
                <p className="font-sans font-black text-sm uppercase tracking-tighter text-untold-orange">
                  {t({ en: 'View Case Study', es: 'Ver Caso de Estudio' })} &rarr;
                </p>
              </div>
            </Link>

            <Link to="/portfolio/omi-lead-intake-qualification" className="group border border-untold-border bg-white overflow-hidden hover:border-untold-orange transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/images/project3-omi/image1.webp"
                  srcSet="/images/project3-omi/image1-640w.webp 640w, /images/project3-omi/image1-1024w.webp 1024w, /images/project3-omi/image1.webp 1920w"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="OMI lead intake and qualification system"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="font-sans font-black text-xl uppercase tracking-tighter mb-2">OMI Growth</p>
                <p className="font-serif italic text-untold-gray mb-4">
                  {t({ en: 'AI-powered lead routing & qualification', es: 'Enrutamiento y calificación de leads con IA' })}
                </p>
                <p className="font-mono text-[11px] text-untold-orange font-bold mb-4">
                  {t({ en: '98% MQL Accuracy, 4.2x Sales ROI', es: '98% Precisión MQL, 4.2x ROI en Ventas' })}
                </p>
                <p className="font-sans font-black text-sm uppercase tracking-tighter text-untold-orange">
                  {t({ en: 'View Case Study', es: 'Ver Caso de Estudio' })} &rarr;
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE PROCESS', es: 'EL PROCESO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'From Audit to Ownership in Four Steps.', es: 'De Auditoría a Propiedad en Cuatro Pasos.' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-white/10 bg-white/5 p-6 sm:p-8"
              >
                <span className="font-mono text-[11px] text-untold-orange font-bold">{step.num}</span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3 mt-2">
                  {t(step.title)}
                </h3>
                <p className="font-serif italic text-white/60 text-base leading-relaxed">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/blog/your-website-is-not-a-brochure-its-a-business-system" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Your Website Is Not a Brochure — It\'s a Business System', es: 'Tu Sitio Web No Es un Folleto — Es un Sistema de Negocio' })}</p>
            </Link>
            <Link to="/blog/bilingual-websites-why-translation-plugins-fail" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Bilingual Websites: Why Translation Plugins Fail', es: 'Sitios Web Bilingües: Por Qué Fallan los Plugins de Traducción' })}</p>
            </Link>
            <Link to="/blog/why-your-website-must-be-fast-on-3g" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Why Your Website Must Be Fast on 3G', es: 'Por Qué Tu Sitio Web Debe Ser Rápido en 3G' })}</p>
            </Link>
            <Link to="/blog/aeo-the-shift-nobodys-talking-about" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'AEO: The Shift Nobody\'s Talking About', es: 'AEO: El Cambio del que Nadie Habla' })}</p>
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
            {t({ en: 'Questions About Website Design', es: 'Preguntas Sobre Diseño Web' })}
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
        capability={{ en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' }}
        networkDescription={{
          en: 'This capability powers our Network Systems offering. We deploy AI-built, brand-first websites across entire business networks — manufacturers, franchise systems, restaurant groups. One system, every location, continuously maintained. Your brand stays consistent at every touchpoint.',
          es: 'Esta capacidad impulsa nuestra oferta de Network Systems. Desplegamos sitios web construidos con IA en toda la red de negocios — fabricantes, franquicias, grupos restauranteros. Un sistema, cada ubicación, mantenido continuamente. Tu marca permanece consistente en cada punto de contacto.',
        }}
        relatedCapabilities={[
          { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, path: '/seo-aeo' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
          { name: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
          { name: { en: 'Paid Advertising', es: 'Publicidad Pagada' }, path: '/ads' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'GET STARTED', es: 'COMIENZA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Let\'s Talk About Your Website.', es: 'Hablemos de Tu Sitio Web.' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Tell us about your business and we\'ll show you what your website could look like. No obligation.',
              es: 'Cuéntanos sobre tu negocio y te mostraremos cómo podría lucir tu sitio web. Sin compromiso.'
            })}
          </p>
          <QuickLeadForm pillar="Website Design" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Rebuild?', es: '¿Listo para Reconstruir?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Brand-first. AI-native. Mobile-ready. Bilingual. Fully yours.',
              es: 'Marca primero. AI-nativo. Mobile-ready. Bilingüe. Completamente tuyo.'
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

export default Websites;
