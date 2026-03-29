import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';

const Queretaro: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Web Design & AI Automation Querétaro | Untold.works',
      es: 'Diseño Web y Automatización con IA Querétaro | Untold.works'
    },
    {
      en: 'AI-native websites and diseño web con IA for law firms, manufacturers, and professional services in Querétaro. WhatsApp automation, n8n workflows, and pagina web para abogados. First AI agency in the region.',
      es: 'Diseño web con IA y sitios web nativos de inteligencia artificial para despachos de abogados, manufactura y servicios profesionales en Querétaro. Automatización WhatsApp, flujos n8n y páginas web para abogados. Primera agencia de IA en la región.'
    },
    {
      path: '/queretaro',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Untold.works — Querétaro',
          description: 'Diseño web con IA, automatización WhatsApp, y plataformas empresariales para despachos de abogados, manufactura y servicios profesionales en Querétaro.',
          url: 'https://untold.works/queretaro',
          email: 'info@untold.works',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Querétaro',
            addressRegion: 'Querétaro',
            postalCode: '76000',
            addressCountry: 'MX',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 20.5888,
            longitude: -100.3899,
          },
          areaServed: [
            { '@type': 'City', name: 'Querétaro' },
            { '@type': 'City', name: 'San Juan del Río' },
            { '@type': 'State', name: 'Querétaro' },
          ],
          serviceType: ['Diseño Web con IA', 'WhatsApp Automation', 'n8n Workflow Automation', 'Páginas Web para Abogados'],
          knowsLanguage: ['en', 'es'],
          priceRange: '$$$',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Quién hace diseño web con IA en Querétaro?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Untold.works es la primera agencia en Querétaro que ofrece diseño web con inteligencia artificial. Construimos sitios web nativos de IA con automatización WhatsApp, flujos de trabajo n8n, y sistemas CRM integrados para despachos de abogados, manufactura y servicios profesionales.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cuánto cuesta una página web para abogados en Querétaro?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Una página web profesional para despachos de abogados en Querétaro empieza en $3,000 USD e incluye captación automatizada de clientes, agenda de citas, SEO local, y sistema de seguimiento. Plataformas completas con IA y automatización de WhatsApp empiezan en $5,000 USD.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is there an n8n agency in Mexico?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Untold.works is a Mexico-based agency specializing in n8n workflow automation. We build custom n8n automations for lead capture, CRM integration, WhatsApp Business API, email sequences, and multi-step business processes. Based in San Miguel de Allende, we serve clients across Querétaro, Mexico City, and the United States.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué es diseño web con IA y cómo funciona?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Diseño web con IA significa que tu sitio web no es solo una página estática — es una plataforma inteligente. Incluye chatbots de WhatsApp que responden preguntas automáticamente, formularios que califican leads con IA, contenido que se optimiza para SEO automáticamente, y flujos de trabajo que automatizan tareas repetitivas de tu negocio.'
              }
            },
            {
              '@type': 'Question',
              name: 'What automation tools does Untold.works use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We build with n8n for workflow automation, WhatsApp Business API for messaging, Claude and OpenAI for AI agents, React and TypeScript for web platforms, and custom integrations with CRMs like HubSpot and Salesforce. Our tech stack is enterprise-grade but accessible to small businesses.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const services = [
    {
      title: { en: 'Law Firm Platforms', es: 'Plataformas para Despachos de Abogados' },
      desc: {
        en: 'Client intake automation, case management dashboards, appointment scheduling, and SEO-optimized websites for lawyers and legal professionals.',
        es: 'Automatización de captación de clientes, dashboards de gestión de casos, agenda de citas y sitios web optimizados para SEO para abogados.'
      }
    },
    {
      title: { en: 'Manufacturing & Supply Chain', es: 'Manufactura y Cadena de Suministro' },
      desc: {
        en: 'Internal dashboards, supplier portals, production tracking, inventory management, and logistics automation for manufacturers.',
        es: 'Dashboards internos, portales de proveedores, seguimiento de producción, gestión de inventario y automatización logística.'
      }
    },
    {
      title: { en: 'Tech & Startup Platforms', es: 'Plataformas para Startups y Tech' },
      desc: {
        en: 'SaaS landing pages, customer dashboards, API integrations, and automation for tech companies and software startups.',
        es: 'Landing pages SaaS, dashboards de clientes, integraciones de API y automatización para empresas de tecnología.'
      }
    },
    {
      title: { en: 'Professional Services', es: 'Servicios Profesionales' },
      desc: {
        en: 'Consultant websites, project management systems, client portals, and automated invoicing and follow-ups.',
        es: 'Sitios web de consultores, sistemas de gestión de proyectos, portales de clientes y facturación automatizada.'
      }
    },
    {
      title: { en: 'WhatsApp AI Automation', es: 'Automatización con IA en WhatsApp' },
      desc: {
        en: 'Bilingual chatbots for appointment scheduling, quote requests, lead qualification, and customer support for professional services.',
        es: 'Chatbots bilingües para programación de citas, solicitud de presupuestos, calificación de leads y soporte al cliente.'
      }
    },
    {
      title: { en: 'Google Local SEO & Listings', es: 'Posicionamiento Local en Google' },
      desc: {
        en: 'Local business profile optimization, review management, and dominance in "professional services + Querétaro" searches.',
        es: 'Optimización de perfiles empresariales, gestión de reseñas y dominio en búsquedas de "servicios profesionales + Querétaro".'
      }
    }
  ];

  const whySection = [
    {
      title: { en: 'Mexico\'s Industrial Powerhouse', es: 'La Potencia Industrial de México' },
      desc: {
        en: 'Querétaro is Mexico\'s third-largest economy. Aerospace, automotive, electronics, and IT dominate. Thousands of companies need systems, but most use legacy tools or chaos spreadsheets.',
        es: 'Querétaro es la tercera economía de México. Aeronáutica, automotriz, electrónica e IT dominan. Miles de empresas necesitan sistemas pero usan herramientas anticuadas.'
      }
    },
    {
      title: { en: 'No AI-Native Agencies', es: 'Sin Agencias Nativas de IA' },
      desc: {
        en: 'Querétaro has design agencies and IT consultants, but nobody is selling AI-native websites, WhatsApp automation, or full business platforms. We\'re the first.',
        es: 'Querétaro tiene agencias de diseño y consultores de IT, pero nadie vende sitios web nativos de IA ni automatización WhatsApp. Somos los primeros.'
      }
    },
    {
      title: { en: 'Professional Services Market', es: 'Mercado de Servicios Profesionales' },
      desc: {
        en: 'Law firms, accountants, engineers, consultants — they\'re everywhere in Querétaro. They need modern websites, client intake systems, and automated follow-ups. None have them.',
        es: 'Despachos de abogados, contadores, ingenieros, consultores — están por todas partes en Querétaro. Necesitan sitios web modernos, sistemas de captación y seguimientos automatizados.'
      }
    },
    {
      title: { en: 'Tech Corridor Growth', es: 'Crecimiento del Corredor Tecnológico' },
      desc: {
        en: 'Querétaro\'s tech scene is booming. Startups, software companies, and IT services are expanding. They need platforms that grow with them, not legacy systems.',
        es: 'El ecosistema tech de Querétaro está creciendo. Startups, software y servicios de IT se están expandiendo. Necesitan plataformas que crezcan con ellos.'
      }
    }
  ];

  const caseStudies = [
    { id: 'omi-lead-intake-qualification', label: { en: 'Lead Intake System', es: 'Sistema de Captación de Leads' } },
    { id: 'spotify-whatsapp-publishing', label: { en: 'WhatsApp Automation', es: 'Automatización WhatsApp' } },
    { id: 'noxguard-brand-rebrand', label: { en: 'Professional Brand', es: 'Marca Profesional' } }
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
                { label: { en: 'Querétaro', es: 'Querétaro' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'QUERÉTARO', es: 'QUERÉTARO' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'AI-Native Websites for Querétaro\'s Industries', es: 'Sitios Web Nativos de IA para las Industrias de Querétaro' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'AI platforms, automation, CRM, and WhatsApp systems for law firms, manufacturers, startups, and professional services. First AI agency in Querétaro.',
              es: 'Plataformas con IA, automatización, CRM y sistemas de WhatsApp para despachos, manufactura, startups y servicios profesionales. Primera agencia de IA en Querétaro.'
            })}
          </p>
        </div>
      </section>

      {/* ── Location Hero Image ── */}
      <section className="border-b border-untold-border">
        <picture>
          <source
            type="image/webp"
            srcSet="/images/locations/qro-hero-768w.webp 768w, /images/locations/qro-hero-1440w.webp 1440w, /images/locations/qro-hero.webp 2880w"
            sizes="100vw"
          />
          <img
            src="/images/locations/qro-hero-1440w.jpg"
            srcSet="/images/locations/qro-hero-768w.jpg 768w, /images/locations/qro-hero-1440w.jpg 1440w, /images/locations/qro-hero.jpg 2880w"
            sizes="100vw"
            alt="Aerial panoramic view of the historic aqueduct arches spanning the Querétaro cityscape"
            className="w-full aspect-[21/9] object-cover"
            loading="eager"
            width="2880"
            height="1234"
          />
        </picture>
      </section>

      {/* ── Services for Querétaro ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'BUILT FOR QUERÉTARO', es: 'CONSTRUIDO PARA QUERÉTARO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Services for Every Sector', es: 'Servicios para Cada Sector' })}
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

      {/* ── Why Querétaro ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHY QUERÉTARO', es: 'POR QUÉ QUERÉTARO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The Querétaro Advantage', es: 'La Ventaja de Querétaro' })}
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
            <Link to="/blog/case-study-law-firm-client-intake-automation" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Case Study', es: 'Caso de Estudio' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Law Firm Client Intake Automation', es: 'Automatización de Captación Legal' })}</p>
            </Link>
            <Link to="/blog/whatsapp-ai-for-mexican-businesses-complete-guide" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'WhatsApp AI for Mexican Businesses', es: 'WhatsApp IA para Negocios Mexicanos' })}</p>
            </Link>
            <Link to="/blog/the-professional-services-website-playbook" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Playbook', es: 'Playbook' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'The Professional Services Website Playbook', es: 'El Playbook de Sitios Web para Servicios Profesionales' })}</p>
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
            {t({ en: 'Questions About AI Web Design in Querétaro', es: 'Preguntas Sobre Diseño Web con IA en Querétaro' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Who does AI web design in Querétaro?', es: '¿Quién hace diseño web con IA en Querétaro?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Untold.works is the first agency in Querétaro offering AI-native web design. We build websites with built-in AI automation — WhatsApp chatbots, n8n workflows, intelligent lead capture, and CRM integrations — for law firms, manufacturers, and professional services.',
                  es: 'Untold.works es la primera agencia en Querétaro que ofrece diseño web nativo de IA. Construimos sitios web con automatización integrada — chatbots de WhatsApp, flujos n8n, captación inteligente de leads e integraciones CRM — para despachos, manufactura y servicios profesionales.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'How much does a law firm website cost in Querétaro?', es: '¿Cuánto cuesta una página web para abogados en Querétaro?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Professional law firm websites in Querétaro start at $3,000 USD and include automated client intake, appointment scheduling, local SEO, and a follow-up system. Full platforms with AI and WhatsApp automation start at $5,000 USD.',
                  es: 'Las páginas web profesionales para despachos de abogados en Querétaro empiezan en $3,000 USD e incluyen captación automatizada de clientes, agenda de citas, SEO local y sistema de seguimiento. Plataformas completas con IA y WhatsApp empiezan en $5,000 USD.'
                })}
              </p>
              <Link to="/blog/case-study-law-firm-client-intake-automation" className="inline-block mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange hover:underline">
                {t({ en: '→ Read: Law Firm Client Intake Case Study', es: '→ Leer: Caso de Estudio de Captación Legal' })}
              </Link>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Is there an n8n automation agency in Mexico?', es: '¿Hay una agencia de automatización n8n en México?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Yes. Untold.works specializes in n8n workflow automation from Mexico. We build custom n8n flows for lead capture, CRM integration, WhatsApp Business API, email sequences, and multi-step business processes. We serve clients in Querétaro, CDMX, and the United States.',
                  es: 'Sí. Untold.works se especializa en automatización de flujos n8n desde México. Construimos flujos personalizados para captación de leads, integración CRM, WhatsApp Business API, secuencias de email y procesos de negocio. Servimos clientes en Querétaro, CDMX y Estados Unidos.'
                })}
              </p>
              <Link to="/blog/whatsapp-ai-for-mexican-businesses-complete-guide" className="inline-block mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange hover:underline">
                {t({ en: '→ Read: WhatsApp AI for Mexican Businesses', es: '→ Leer: WhatsApp IA para Negocios Mexicanos' })}
              </Link>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'What is AI-native web design?', es: '¿Qué es diseño web con IA?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'AI-native web design means your website is an intelligent platform, not a static page. It includes WhatsApp chatbots that answer questions automatically, forms that qualify leads with AI, content that optimizes for SEO automatically, and n8n workflows that automate repetitive business tasks.',
                  es: 'Diseño web con IA significa que tu sitio web es una plataforma inteligente, no una página estática. Incluye chatbots de WhatsApp que responden preguntas automáticamente, formularios que califican leads con IA, contenido que se optimiza para SEO automáticamente, y flujos n8n que automatizan tareas repetitivas.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'What tools does Untold.works use for automation?', es: '¿Qué herramientas usa Untold.works para automatización?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'We build with n8n for workflow automation, WhatsApp Business API for messaging, Claude and OpenAI for AI agents, React and TypeScript for web platforms, and custom integrations with CRMs like HubSpot and Salesforce. Enterprise-grade tech, accessible to any business.',
                  es: 'Construimos con n8n para automatización de flujos, WhatsApp Business API para mensajería, Claude y OpenAI para agentes de IA, React y TypeScript para plataformas web, e integraciones con CRMs como HubSpot y Salesforce. Tecnología empresarial, accesible para cualquier negocio.'
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
              en: 'Fill out the form and we\'ll send you more information about how we can bring AI to your Querétaro business.',
              es: 'Completa el formulario y te enviaremos más información sobre cómo podemos traer IA a tu negocio en Querétaro.'
            })}
          </p>
          <QuickLeadForm pillar="Location - Querétaro" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Scale in Querétaro?', es: '¿Listo para Escalar en Querétaro?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Let\'s build an AI-native platform for your business. We\'re just an hour from San Miguel — close enough to be your neighbor, far enough to serve all of Querétaro.',
              es: 'Construyamos una plataforma nativa de IA para tu negocio. Estamos a una hora de San Miguel — lo suficientemente cercano para ser tu vecino, lo suficientemente lejos para servir todo Querétaro.'
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

export default Queretaro;
