import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Testimonials from '../components/Testimonials';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Custom Business Dashboard — Your Entire Business, One Screen | Untold.works',
      es: 'Dashboard Empresarial Personalizado — Todo Tu Negocio, Una Pantalla | Untold.works'
    },
    {
      en: 'Custom-built business dashboards you own. Website analytics, social media, ads, CRM, leads, and SEO — all in one screen. No monthly SaaS fees. Built for businesses in Mexico and the US.',
      es: 'Dashboards empresariales personalizados que son tuyos. Analítica web, redes sociales, publicidad, CRM, leads y SEO — todo en una pantalla. Sin cuotas mensuales de SaaS. Construido para negocios en México y EE.UU.'
    },
    {
      path: '/dashboard',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Custom Business Dashboard — Untold.works',
          description: 'Custom-built business dashboards that clients own outright. Consolidates website analytics, social media metrics, ad performance, CRM data, and SEO rankings into a single proprietary interface.',
          url: 'https://untold.works/dashboard',
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
          serviceType: ['Business Intelligence Dashboard', 'Analytics Dashboard', 'Marketing Dashboard', 'Custom Software'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Do I own the dashboard or is it a SaaS subscription?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You own it completely. Unlike SaaS tools like Databox or Klipfolio that charge monthly fees and lock your data behind their platform, we build a custom dashboard that belongs to you. No recurring platform fees, no vendor lock-in. You own the code, the design, and the data connections.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Soy dueño del dashboard o es una suscripción SaaS?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Es completamente tuyo. A diferencia de herramientas SaaS como Databox o Klipfolio que cobran cuotas mensuales y bloquean tus datos detrás de su plataforma, nosotros construimos un dashboard personalizado que te pertenece. Sin cuotas recurrentes de plataforma, sin dependencia de proveedores. Eres dueño del código, el diseño y las conexiones de datos.'
              }
            },
            {
              '@type': 'Question',
              name: 'What data sources can the dashboard connect to?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Google Analytics, Google Search Console, Google Ads, Meta Ads, LinkedIn Ads, Instagram Insights, Facebook Page metrics, CRM systems (HubSpot, Salesforce, custom), email marketing platforms, booking systems, e-commerce platforms, and custom databases. If it has an API, we can connect it.'
              }
            },
            {
              '@type': 'Question',
              name: 'How long does it take to build a custom dashboard?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Analytics dashboards take 2-3 weeks. Marketing command centers take 4-6 weeks. Full business operations dashboards take 6-10 weeks depending on the number of data sources and custom features required. We deliver in phases so you start seeing value immediately.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Necesito un desarrollador para mantener el dashboard?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Diseñamos dashboards que son auto-mantenidos — los datos se actualizan automáticamente a través de conexiones API. Si necesitas cambios o nuevas funciones, ofrecemos soporte continuo opcional desde $500 USD al mes. Pero el dashboard funciona de forma independiente sin intervención técnica.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const packages = [
    {
      title: { en: 'Analytics Dashboard', es: 'Dashboard de Analítica' },
      price: 'From $3,000 USD',
      items: [
        { en: 'Website traffic & performance metrics', es: 'Métricas de tráfico y rendimiento del sitio' },
        { en: 'Traffic source breakdown', es: 'Desglose de fuentes de tráfico' },
        { en: 'Page-level analytics', es: 'Analítica a nivel de página' },
        { en: 'Conversion tracking overview', es: 'Resumen de seguimiento de conversiones' },
        { en: 'Google Search Console integration', es: 'Integración con Google Search Console' },
        { en: 'Mobile vs desktop performance', es: 'Rendimiento móvil vs escritorio' },
      ],
      footer: { en: 'One-time. Delivered in 2-3 weeks.', es: 'Único pago. Entregado en 2-3 semanas.' },
      highlight: false,
    },
    {
      title: { en: 'Marketing Command Center', es: 'Centro de Mando de Marketing' },
      price: 'From $6,000 USD',
      items: [
        { en: 'Everything in Analytics Dashboard', es: 'Todo lo del Dashboard de Analítica' },
        { en: 'Social media metrics (all platforms)', es: 'Métricas de redes sociales (todas las plataformas)' },
        { en: 'Ad campaign performance (Google + Meta)', es: 'Rendimiento de campañas publicitarias (Google + Meta)' },
        { en: 'Email marketing stats', es: 'Estadísticas de email marketing' },
        { en: 'Lead pipeline visualization', es: 'Visualización del pipeline de leads' },
        { en: 'Competitor benchmarking', es: 'Benchmarking de competidores' },
      ],
      footer: { en: 'One-time. Delivered in 4-6 weeks.', es: 'Único pago. Entregado en 4-6 semanas.' },
      highlight: true,
    },
    {
      title: { en: 'Full Business Operations Dashboard', es: 'Dashboard de Operaciones Completo' },
      price: 'From $10,000 USD',
      items: [
        { en: 'Everything in Marketing Command Center', es: 'Todo lo del Centro de Mando de Marketing' },
        { en: 'CRM overview & sales pipeline', es: 'Resumen de CRM y pipeline de ventas' },
        { en: 'Revenue tracking & forecasting', es: 'Seguimiento de ingresos y pronósticos' },
        { en: 'Team performance metrics', es: 'Métricas de rendimiento del equipo' },
        { en: 'Inventory or booking status', es: 'Estado de inventario o reservaciones' },
        { en: 'Custom KPIs & alerts', es: 'KPIs personalizados y alertas' },
      ],
      footer: { en: 'One-time. Delivered in 6-10 weeks.', es: 'Único pago. Entregado en 6-10 semanas.' },
      highlight: false,
    },
    {
      title: { en: 'Ongoing Dashboard Support', es: 'Soporte Continuo de Dashboard' },
      price: 'From $500/mo USD',
      items: [
        { en: 'New data source integrations', es: 'Integraciones de nuevas fuentes de datos' },
        { en: 'Feature additions & customization', es: 'Adición de funciones y personalización' },
        { en: 'Performance monitoring', es: 'Monitoreo de rendimiento' },
        { en: 'Bug fixes & maintenance', es: 'Corrección de errores y mantenimiento' },
        { en: 'Quarterly strategy review', es: 'Revisión estratégica trimestral' },
        { en: 'Priority support', es: 'Soporte prioritario' },
      ],
      footer: { en: 'Monthly retainer. Cancel anytime.', es: 'Retainer mensual. Cancela cuando quieras.' },
      highlight: false,
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Discover', es: 'Descubrir' },
      desc: {
        en: 'We map every tool you use, every data source that matters, and every question you need your dashboard to answer.',
        es: 'Mapeamos cada herramienta que usas, cada fuente de datos que importa y cada pregunta que necesitas que tu dashboard responda.'
      }
    },
    {
      num: '02',
      title: { en: 'Architect', es: 'Arquitectura' },
      desc: {
        en: 'We design the dashboard layout, data connections, and update frequency. You approve the blueprint before we build.',
        es: 'Diseñamos el layout del dashboard, las conexiones de datos y la frecuencia de actualización. Tú apruebas el plano antes de que construyamos.'
      }
    },
    {
      num: '03',
      title: { en: 'Build', es: 'Construir' },
      desc: {
        en: 'We build your dashboard, connect your data sources, and test everything with real data.',
        es: 'Construimos tu dashboard, conectamos tus fuentes de datos y probamos todo con datos reales.'
      }
    },
    {
      num: '04',
      title: { en: 'Deliver & Train', es: 'Entregar y Capacitar' },
      desc: {
        en: 'We deploy your dashboard, train your team, and hand over complete ownership. It\'s yours.',
        es: 'Desplegamos tu dashboard, capacitamos a tu equipo y te entregamos la propiedad completa. Es tuyo.'
      }
    },
  ];

  const differentiators = [
    {
      title: { en: 'You Own It', es: 'Es Tuyo' },
      desc: {
        en: 'No monthly platform fees. No vendor lock-in. The dashboard is yours — code, design, and data.',
        es: 'Sin cuotas mensuales. Sin dependencia de proveedores. El dashboard es tuyo — código, diseño y datos.'
      }
    },
    {
      title: { en: 'No SaaS Fees', es: 'Sin Cuotas SaaS' },
      desc: {
        en: 'Databox charges $800+/mo for enterprise dashboards. We build yours once and you keep it forever.',
        es: 'Databox cobra $800+/mes por dashboards empresariales. Nosotros construimos el tuyo una vez y es tuyo para siempre.'
      }
    },
    {
      title: { en: 'Custom-Built', es: 'Hecho a Medida' },
      desc: {
        en: 'Not a template. Not a drag-and-drop builder. A dashboard designed around YOUR business, YOUR metrics, YOUR workflows.',
        es: 'No es una plantilla. No es un constructor drag-and-drop. Un dashboard diseñado alrededor de TU negocio, TUS métricas, TUS flujos de trabajo.'
      }
    },
    {
      title: { en: 'Real-Time Data', es: 'Datos en Tiempo Real' },
      desc: {
        en: 'Live connections to all your tools. Not day-old reports or manual CSV uploads. Your data, as it happens.',
        es: 'Conexiones en vivo a todas tus herramientas. No reportes de ayer ni cargas manuales de CSV. Tus datos, en tiempo real.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'Do I need a developer to maintain the dashboard?', es: '¿Necesito un desarrollador para mantener el dashboard?' },
      a: {
        en: 'No. We design dashboards that are self-maintaining — data updates automatically via API connections. If you need changes or new features, we offer optional ongoing support from $500 USD per month. But the dashboard runs independently without technical intervention.',
        es: 'No. Diseñamos dashboards que son auto-mantenidos — los datos se actualizan automáticamente a través de conexiones API. Si necesitas cambios o nuevas funciones, ofrecemos soporte continuo opcional desde $500 USD al mes. Pero el dashboard funciona de forma independiente sin intervención técnica.'
      }
    },
    {
      q: { en: 'What data sources can you connect?', es: '¿A qué fuentes de datos se pueden conectar?' },
      a: {
        en: 'Google Analytics, Google Search Console, Google Ads, Meta Ads, LinkedIn Ads, Instagram Insights, Facebook Page metrics, CRM systems (HubSpot, Salesforce, custom), email marketing platforms, booking systems, e-commerce platforms, and custom databases. If it has an API, we can connect it.',
        es: 'Google Analytics, Google Search Console, Google Ads, Meta Ads, LinkedIn Ads, Instagram Insights, métricas de Facebook Page, sistemas CRM (HubSpot, Salesforce, personalizados), plataformas de email marketing, sistemas de reservaciones, plataformas de e-commerce y bases de datos personalizadas. Si tiene una API, lo conectamos.'
      }
    },
    {
      q: { en: 'Is this a SaaS product?', es: '¿Es un producto SaaS?' },
      a: {
        en: 'No. It\'s a one-time build and you own it. No recurring platform fees. No vendor lock-in. Optional support retainer if you want ongoing improvements, but the dashboard is yours to keep regardless.',
        es: 'No. Es una construcción única y es tuyo. Sin cuotas recurrentes de plataforma. Sin dependencia de proveedores. Retainer de soporte opcional si quieres mejoras continuas, pero el dashboard es tuyo sin importar qué.'
      }
    },
    {
      q: { en: 'How long does it take to build?', es: '¿Cuánto tiempo toma construirlo?' },
      a: {
        en: 'Analytics Dashboard: 2-3 weeks. Marketing Command Center: 4-6 weeks. Full Business Operations: 6-10 weeks. We deliver in phases so you start seeing value immediately.',
        es: 'Dashboard de Analítica: 2-3 semanas. Centro de Mando de Marketing: 4-6 semanas. Operaciones Completas: 6-10 semanas. Entregamos en fases para que empieces a ver valor de inmediato.'
      }
    },
    {
      q: { en: 'Can the dashboard be expanded later?', es: '¿Se puede expandir el dashboard después?' },
      a: {
        en: 'Yes. We design for expansion. New data sources, new views, new KPIs can be added anytime through our support retainer or as a standalone project.',
        es: 'Sí. Diseñamos para la expansión. Nuevas fuentes de datos, nuevas vistas, nuevos KPIs se pueden agregar en cualquier momento a través de nuestro retainer de soporte o como un proyecto independiente.'
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
                { label: { en: 'Dashboard', es: 'Dashboard' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'YOUR COMMAND CENTER', es: 'TU CENTRO DE MANDO' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Your Entire Business. One Screen.', es: 'Todo Tu Negocio. Una Pantalla.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Website analytics, social media, ads, CRM, leads, SEO rankings — not in ten tabs. In one dashboard you own.',
              es: 'Analítica web, redes sociales, publicidad, CRM, leads, rankings SEO — no en diez pestañas. En un dashboard que es tuyo.'
            })}
          </p>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE FRAGMENTATION', es: 'LA FRAGMENTACIÓN' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: "You're Running Your Business in 12 Tabs", es: 'Estás Manejando Tu Negocio en 12 Pestañas' })}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed mb-6">
                {t({
                  en: 'Every morning you log into Google Analytics. Then Facebook. Then your CRM. Then your email platform. Then your ad accounts. Then a spreadsheet to try to make sense of it all. Twelve tools, twelve logins, twelve different versions of "how is my business doing?"',
                  es: 'Cada mañana entras a Google Analytics. Luego a Facebook. Luego a tu CRM. Luego a tu plataforma de email. Luego a tus cuentas de publicidad. Luego a una hoja de cálculo para intentar darle sentido a todo. Doce herramientas, doce inicios de sesión, doce versiones diferentes de "¿cómo va mi negocio?"'
                })}
              </p>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed">
                {t({
                  en: 'Fragmented data means slow decisions, missed patterns, and no single source of truth. You deserve one screen that tells you everything.',
                  es: 'Datos fragmentados significan decisiones lentas, patrones perdidos y ninguna fuente única de verdad. Mereces una pantalla que te diga todo.'
                })}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">12</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'average tools a small business logs into daily', es: 'herramientas promedio en las que un pequeño negocio entra diario' })}
                </p>
              </div>
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">3hrs</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'per week spent manually compiling reports', es: 'a la semana compilando reportes manualmente' })}
                </p>
              </div>
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">$0</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: "value of a dashboard you don't own", es: 'valor de un dashboard que no es tuyo' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'TIERS', es: 'NIVELES' })}
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
            {t({ en: 'Four Steps to Clarity', es: 'Cuatro Pasos Hacia la Claridad' })}
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

      {/* ── What Makes This Different ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE DIFFERENCE', es: 'LA DIFERENCIA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Not Another SaaS', es: 'No Es Otro SaaS' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 sm:p-8 border-l-4 border-l-untold-orange"
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

      {/* ── FAQ ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About Dashboards', es: 'Preguntas Sobre Dashboards' })}
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
        capability={{ en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }}
        networkDescription={{
          en: 'For business networks, we build two-tier dashboards. Each location sees their own performance — traffic, leads, sales. HQ sees the entire network: dealer rankings, market demand, product trends, and network-wide ROI. Full integration with Salesforce, HubSpot, GA4, POS, and every tool in your stack. Plus a custom AI assistant trained on your organization\'s data.',
          es: 'Para redes de negocios, construimos dashboards de dos niveles. Cada ubicación ve su propio rendimiento — tráfico, leads, ventas. La oficina central ve toda la red: rankings de distribuidores, demanda de mercado, tendencias de productos y ROI de toda la red. Integración completa con Salesforce, HubSpot, GA4, POS y cada herramienta de tu stack. Más un asistente de IA personalizado entrenado con los datos de tu organización.',
        }}
        relatedCapabilities={[
          { name: { en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' }, path: '/websites' },
          { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, path: '/seo-aeo' },
          { name: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
          { name: { en: 'Paid Advertising', es: 'Publicidad Pagada' }, path: '/ads' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'SEE IT CLEARLY', es: 'VELO CON CLARIDAD' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Get a Dashboard Blueprint', es: 'Obtén un Plano de Tu Dashboard' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Tell us about your business and we\'ll design a free dashboard concept showing what your command center could look like.',
              es: 'Cuéntanos sobre tu negocio y diseñaremos un concepto gratuito de dashboard mostrando cómo podría verse tu centro de mando.'
            })}
          </p>
          <QuickLeadForm pillar="Dashboard" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to See Your Business Clearly?', es: '¿Listo para Ver Tu Negocio con Claridad?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'One screen. Every metric. Complete ownership. Let\'s build your command center.',
              es: 'Una pantalla. Cada métrica. Propiedad completa. Construyamos tu centro de mando.'
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

export default Dashboard;
