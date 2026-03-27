import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import ImagePlaceholder from '../../components/ImagePlaceholder';

const MexicoCity: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'AI Agency CDMX | Web Design & Automation for Startups & Enterprise — Untold.works',
      es: 'Agencia de IA CDMX | Diseño Web y Automatización para Startups y Empresas — Untold.works'
    },
    {
      en: 'AI-native websites, automation platforms, and bilingual business systems for startups, enterprises, and professional services in Mexico City. Remote-first agency serving CDMX with Silicon Valley quality.',
      es: 'Sitios web nativos de IA, plataformas de automatización y sistemas empresariales bilingües para startups, empresas y servicios profesionales en CDMX. Agencia remote-first con calidad de Silicon Valley.'
    },
    {
      path: '/mexico-city',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Untold.works — Mexico City',
          description: 'AI-powered websites, automation platforms, and bilingual business systems for startups, enterprises, and professional services in Mexico City.',
          url: 'https://untold.works/mexico-city',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mexico City',
            addressRegion: 'CDMX',
            postalCode: '06500',
            addressCountry: 'MX',
          },
          areaServed: { '@type': 'City', name: 'Mexico City' },
          serviceType: ['AI Web Design', 'Automation Platforms', 'n8n Agency'],
          knowsLanguage: ['en', 'es'],
          priceRange: '$$$',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Hay agencia de IA en Ciudad de México?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Untold.works es una agencia de IA que sirve a empresas en Ciudad de México. Construimos sitios web nativos de IA, automatización con n8n y WhatsApp, y plataformas empresariales para startups, multinacionales y servicios profesionales en CDMX.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the best AI web agency for CDMX startups?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Untold.works specializes in AI-native platforms for CDMX startups and enterprises. We build faster than traditional agencies (2-4 weeks vs 3+ months), at 30-40% lower cost, with built-in AI automation, WhatsApp integration, and bilingual capabilities.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Cuánto cuesta un sitio web con IA para empresa en CDMX?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sitios web profesionales con IA para empresas en CDMX empiezan desde $5,000 USD. Incluyen automatización de procesos, integraciones CRM, chatbots de WhatsApp, y dashboards personalizados. Plataformas enterprise empiezan desde $10,000 USD.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const services = [
    {
      title: { en: 'Startup Landing Pages & Dashboards', es: 'Landing Pages y Dashboards para Startups' },
      desc: {
        en: 'SEO-optimized customer-facing sites, investor pitch materials, internal dashboards, and AI-powered growth systems for early-stage companies.',
        es: 'Sitios web optimizados para SEO, materiales para inversores, dashboards internos y sistemas de crecimiento con IA para empresas emergentes.'
      }
    },
    {
      title: { en: 'Enterprise Automation Platforms', es: 'Plataformas de Automatización Empresarial' },
      desc: {
        en: 'Multi-department dashboards, revenue operations systems, CRM integrations, and AI workflows for large organizations and multinational companies.',
        es: 'Dashboards multi-departamento, sistemas de RevOps, integraciones CRM y flujos de IA para grandes empresas y multinacionales.'
      }
    },
    {
      title: { en: 'Bilingual Enterprise Websites', es: 'Sitios Web Bilingües Empresariales' },
      desc: {
        en: 'Professional platforms for international companies and enterprises serving English and Spanish markets. Multilingual SEO, brand systems, and lead generation.',
        es: 'Plataformas profesionales para empresas internacionales que sirven mercados de habla inglesa y española. SEO multilingüe, sistemas de marca y generación de leads.'
      }
    },
    {
      title: { en: 'Professional Services Platforms', es: 'Plataformas para Servicios Profesionales' },
      desc: {
        en: 'Client intake systems, appointment scheduling, project dashboards, and automated follow-ups for law firms, consulting groups, and agencies.',
        es: 'Sistemas de captación de clientes, agenda de citas, dashboards de proyectos y seguimientos automatizados para despachos y consultorías.'
      }
    },
    {
      title: { en: 'WhatsApp & Email Automation', es: 'Automatización de WhatsApp y Email' },
      desc: {
        en: 'Bilingual chatbots for customer service, lead qualification, nurture sequences, and sales support. AI agents that scale your team\'s reach.',
        es: 'Chatbots bilingües para atención al cliente, calificación de leads, secuencias de nutrición y soporte de ventas. Agentes de IA que escalan el alcance de tu equipo.'
      }
    },
    {
      title: { en: 'Growth & Revenue Automation', es: 'Automatización de Crecimiento e Ingresos' },
      desc: {
        en: 'Lead capture and nurturing, deal tracking, revenue dashboards, forecasting, and AI-powered sales insights for growing teams.',
        es: 'Captura y nutrición de leads, seguimiento de ventas, dashboards de ingresos, pronósticos e insights de ventas con IA.'
      }
    }
  ];

  const whySection = [
    {
      title: { en: 'Business Capital of Latin America', es: 'Capital Empresarial de América Latina' },
      desc: {
        en: 'CDMX has 21 million people, the largest concentration of multinational companies in Latin America, and more startup funding than all other Mexican cities combined. This is where deals happen.',
        es: 'CDMX tiene 21 millones de personas, la mayor concentración de multinacionales en América Latina y más capital de riesgo que todas las otras ciudades mexicanas juntas.'
      }
    },
    {
      title: { en: 'Traditional Agencies Are Losing Ground', es: 'Las Agencias Tradicionales Están Perdiendo Terreno' },
      desc: {
        en: 'CDMX is flooded with design and digital marketing agencies — most are traditional, offer custom quotes, and take 3+ months. AI-native platforms change the game. We deliver in weeks, not months.',
        es: 'CDMX está llena de agencias de diseño y marketing — la mayoría son tradicionales, ofrecen presupuestos personalizados y tardan 3+ meses. Las plataformas nativas de IA cambian el juego.'
      }
    },
    {
      title: { en: 'Global Companies Need Bilingual Systems', es: 'Las Empresas Globales Necesitan Sistemas Bilingües' },
      desc: {
        en: 'Multinational companies in CDMX serve US and Mexican markets. They need platforms that work in both languages, both markets, and both time zones. We specialize in this.',
        es: 'Las multinacionales en CDMX sirven mercados de EE.UU. y México. Necesitan plataformas que funcionen en ambos idiomas, mercados y zonas horarias. Nos especializamos en esto.'
      }
    },
    {
      title: { en: 'Remote-First Quality', es: 'Calidad Remote-First' },
      desc: {
        en: 'We\'re based in San Miguel but operate globally. We serve CDMX businesses remotely with the same quality as any in-person agency — but 30% faster and 40% cheaper.',
        es: 'Estamos basados en San Miguel pero operamos globalmente. Servimos negocios de CDMX de forma remota con la misma calidad de cualquier agencia presencial — pero 30% más rápido y 40% más barato.'
      }
    }
  ];

  const caseStudies = [
    { id: 'spotify-whatsapp-publishing', label: { en: 'Music + Automation', es: 'Música + Automatización' } },
    { id: 'omi-lead-intake-qualification', label: { en: 'Lead System', es: 'Sistema de Leads' } },
    { id: 'noxguard-brand-rebrand', label: { en: 'Enterprise Branding', es: 'Marca Empresarial' } }
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
                { label: { en: 'Mexico City', es: 'Ciudad de México' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'MEXICO CITY', es: 'CIUDAD DE MÉXICO' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'AI Platforms for CDMX\'s Startups & Enterprises', es: 'Plataformas de IA para Startups y Empresas de CDMX' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Bilingual websites, automation platforms, and AI systems for multinationals, startups, and professional services. Remote-first quality from San Miguel to your CDMX office.',
              es: 'Sitios web bilingües, plataformas de automatización y sistemas de IA para multinacionales, startups y servicios profesionales. Calidad remote-first de San Miguel a tu oficina en CDMX.'
            })}
          </p>
        </div>
      </section>

      {/* ── Location Hero Image ── */}
      <section className="border-b border-untold-border">
        <ImagePlaceholder
          label="Mexico City — Reforma skyline or Condesa/Roma street"
          aspect="aspect-[21/9]"
          dimensions="1440 × 617px"
        />
      </section>

      {/* ── Services for CDMX ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'BUILT FOR CDMX', es: 'CONSTRUIDO PARA CDMX' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Enterprise & Startup Solutions', es: 'Soluciones Empresariales y para Startups' })}
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

      {/* ── Why Mexico City ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHY MEXICO CITY', es: 'POR QUÉ CIUDAD DE MÉXICO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The CDMX Opportunity', es: 'La Oportunidad de CDMX' })}
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

      {/* ── FAQ — AEO Optimized ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'AI Agency Questions for CDMX', es: 'Preguntas sobre Agencia de IA para CDMX' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Is there an AI web agency in Mexico City?', es: '¿Hay agencia de IA en Ciudad de México?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Untold.works serves Mexico City businesses with AI-native platforms, n8n workflow automation, and WhatsApp integration. We deliver in weeks, not months — at 30-40% lower cost than traditional CDMX agencies.',
                  es: 'Untold.works sirve a empresas de Ciudad de México con plataformas nativas de IA, automatización de flujos n8n e integración de WhatsApp. Entregamos en semanas, no meses — a 30-40% menos costo que agencias tradicionales de CDMX.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'What does an AI-native platform cost for CDMX?', es: '¿Cuánto cuesta una plataforma con IA para CDMX?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'AI-powered business websites start at $5,000 USD. Enterprise platforms with multi-department dashboards, CRM integration, and n8n automation start at $10,000 USD. Startup packages are available.',
                  es: 'Sitios web empresariales con IA empiezan en $5,000 USD. Plataformas enterprise con dashboards multi-departamento, integración CRM y automatización n8n empiezan en $10,000 USD. Hay paquetes para startups.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Why choose a remote agency over CDMX-based?', es: '¿Por qué elegir una agencia remota sobre una de CDMX?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'CDMX is flooded with traditional agencies that take 3+ months and charge premium rates. We deliver AI-native platforms in 2-4 weeks at 30-40% lower cost. Same timezone, same quality, with AI expertise most CDMX agencies lack.',
                  es: 'CDMX está llena de agencias tradicionales que tardan 3+ meses y cobran precios premium. Nosotros entregamos plataformas nativas de IA en 2-4 semanas a 30-40% menos costo. Misma zona horaria, misma calidad, con expertise en IA que la mayoría no tiene.'
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
              en: 'Fill out the form and we\'ll send you more information about how we can help your CDMX business grow with AI automation.',
              es: 'Completa el formulario y te enviaremos más información sobre cómo podemos ayudar a tu negocio en CDMX a crecer con automatización de IA.'
            })}
          </p>
          <QuickLeadForm pillar="Location - Mexico City" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Scale in CDMX?', es: '¿Listo para Escalar en CDMX?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Let\'s build an AI-native platform for your startup or enterprise. Same quality as any CDMX agency, delivered faster and smarter.',
              es: 'Construyamos una plataforma nativa de IA para tu startup o empresa. La misma calidad que cualquier agencia de CDMX, entregada más rápido e inteligente.'
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

export default MexicoCity;
